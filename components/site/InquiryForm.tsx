'use client'

import { useState, useRef, type FormEvent } from 'react'
import Link from 'next/link'
import { track } from '@vercel/analytics'
import type { CommonContent, ProductCategory } from '@/content/types'
import { privacyPath, type Locale } from '@/lib/i18n'
import { analyticsEvents } from '@/lib/site'

type Status = 'idle' | 'sending' | 'success' | 'error'

/** Keep in sync with the server-side limits in app/api/contact/route.ts. */
const MAX_FILES = 5
const MAX_TOTAL_MB = 10
const MAX_TOTAL_BYTES = MAX_TOTAL_MB * 1024 * 1024
const ACCEPTED = 'image/png,image/jpeg,image/webp,application/pdf'

const fieldClass =
  'w-full rounded-lg border border-k-border bg-sand/40 px-4 py-3 text-primary transition placeholder:text-k-muted/60 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/15'

function formatBytes(bytes: number) {
  if (bytes < 1024 * 1024) return `${Math.max(1, Math.round(bytes / 1024))} KB`
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
}

const fileKey = (file: File) => `${file.name}-${file.size}-${file.lastModified}`

export default function InquiryForm({
  locale,
  common,
  categories,
}: {
  locale: Locale
  common: CommonContent
  categories: ProductCategory[]
}) {
  const t = common.form
  const [status, setStatus] = useState<Status>('idle')
  const [errorDetail, setErrorDetail] = useState<string | null>(null)
  const [fileError, setFileError] = useState<string | null>(null)
  const [selectedFiles, setSelectedFiles] = useState<File[]>([])
  const fileRef = useRef<HTMLInputElement>(null)

  const privacyHref = privacyPath(locale)

  async function readFiles(): Promise<{ filename: string; content: string }[]> {
    const files = selectedFiles
    if (files.length === 0) return []

    const total = files.reduce((sum, f) => sum + f.size, 0)
    if (files.length > MAX_FILES || total > MAX_TOTAL_BYTES) {
      throw new Error('file-limit')
    }

    return Promise.all(
      files.map(
        (file) =>
          new Promise<{ filename: string; content: string }>((resolve, reject) => {
            const reader = new FileReader()
            reader.onload = () =>
              resolve({
                filename: file.name,
                content: String(reader.result).split(',')[1] ?? '',
              })
            reader.onerror = () => reject(new Error('file-read'))
            reader.readAsDataURL(file)
          })
      )
    )
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('sending')
    setErrorDetail(null)
    setFileError(null)

    const formEl = event.currentTarget
    const data = new FormData(formEl)

    let attachments: { filename: string; content: string }[] = []
    try {
      attachments = await readFiles()
    } catch {
      setStatus('idle')
      setFileError(
        locale === 'ar'
          ? `الحد الأقصى ${MAX_FILES} ملفات وبحجم إجمالي ${MAX_TOTAL_MB} ميجابايت.`
          : `Maximum ${MAX_FILES} files, ${MAX_TOTAL_MB} MB in total.`
      )
      return
    }

    if (attachments.length > 0) {
      track(analyticsEvents.designUploadIntent, { count: attachments.length })
    }

    const payload = {
      locale,
      name: data.get('name'),
      brand: data.get('brand'),
      email: data.get('email'),
      whatsapp: data.get('whatsapp'),
      country: data.get('country'),
      preferredLanguage: data.get('preferredLanguage'),
      productCategory: data.get('productCategory'),
      quantity: data.get('quantity'),
      hasDesigns: data.get('hasDesigns'),
      message: data.get('message'),
      consent: data.get('consent') === 'on',
      attachments,
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error(`status-${res.status}`)

      track(analyticsEvents.contactFormSubmit, {
        locale,
        category: String(payload.productCategory ?? ''),
      })
      setStatus('success')
      formEl.reset()
      setSelectedFiles([])
    } catch (error) {
      setStatus('error')
      setErrorDetail(error instanceof Error ? error.message : null)
    }
  }

  if (status === 'success') {
    return (
      <div
        role="status"
        aria-live="polite"
        className="rounded-2xl border border-accent/30 bg-sand/60 p-8 text-center"
      >
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent text-white">
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <p className="text-lg font-bold text-primary">{t.success}</p>
        <p className="mt-2 text-sm text-k-muted">{t.successDetail}</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <p className="rounded-lg border border-k-border bg-sand/50 px-4 py-3 text-sm text-k-muted">
        {t.noTechPackNote}
      </p>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-primary">
            {t.name} <span className="text-accent">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder={t.namePlaceholder}
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="brand" className="mb-1.5 block text-sm font-semibold text-primary">
            {t.brand}{' '}
            <span className="font-normal text-k-muted">({t.brandOptional})</span>
          </label>
          <input
            id="brand"
            name="brand"
            type="text"
            autoComplete="organization"
            className={fieldClass}
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-primary">
            {t.email} <span className="text-accent">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            dir="ltr"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="whatsapp" className="mb-1.5 block text-sm font-semibold text-primary">
            {t.whatsapp}
          </label>
          <input
            id="whatsapp"
            name="whatsapp"
            type="tel"
            autoComplete="tel"
            dir="ltr"
            placeholder="+20 ..."
            aria-describedby="whatsapp-hint"
            className={fieldClass}
          />
          <p id="whatsapp-hint" className="mt-1 text-xs text-k-muted">
            {t.whatsappHint}
          </p>
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="country" className="mb-1.5 block text-sm font-semibold text-primary">
            {t.country}
          </label>
          <input
            id="country"
            name="country"
            type="text"
            autoComplete="country-name"
            placeholder={t.countryPlaceholder}
            className={fieldClass}
          />
        </div>
        <div>
          <label
            htmlFor="preferredLanguage"
            className="mb-1.5 block text-sm font-semibold text-primary"
          >
            {t.preferredLanguage}
          </label>
          <select
            id="preferredLanguage"
            name="preferredLanguage"
            defaultValue={locale === 'ar' ? 'arabic' : 'english'}
            className={fieldClass}
          >
            {t.languageOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="productCategory"
            className="mb-1.5 block text-sm font-semibold text-primary"
          >
            {t.productCategory}
          </label>
          <select id="productCategory" name="productCategory" defaultValue="" className={fieldClass}>
            <option value="" disabled>
              {t.productCategoryPlaceholder}
            </option>
            {categories.map((category) => (
              <option key={category.slug} value={category.slug}>
                {category.name}
              </option>
            ))}
            <option value="other">{locale === 'ar' ? 'أخرى' : 'Other'}</option>
          </select>
        </div>
        <div>
          <label htmlFor="quantity" className="mb-1.5 block text-sm font-semibold text-primary">
            {t.quantity}
          </label>
          <input
            id="quantity"
            name="quantity"
            type="text"
            placeholder={t.quantityPlaceholder}
            className={fieldClass}
          />
        </div>
      </div>

      <fieldset>
        <legend className="mb-2 text-sm font-semibold text-primary">{t.hasDesigns}</legend>
        <div className="grid gap-2 sm:grid-cols-2">
          {t.hasDesignsOptions.map((option, i) => (
            <label
              key={option.value}
              className="flex cursor-pointer items-start gap-2.5 rounded-lg border border-k-border bg-sand/30 px-3.5 py-2.5 text-sm text-k-muted transition hover:border-accent/40"
            >
              <input
                type="radio"
                name="hasDesigns"
                value={option.value}
                defaultChecked={i === 0}
                className="mt-0.5 h-4 w-4 shrink-0 accent-[#C4622D]"
              />
              <span>{option.label}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <div>
        <label htmlFor="files" className="mb-1.5 block text-sm font-semibold text-primary">
          {locale === 'ar'
            ? 'إرفاق تصميمات أو صور مرجعية'
            : 'Attach designs or reference images'}{' '}
          <span className="font-normal text-k-muted">({t.optional})</span>
        </label>
        <input
          ref={fileRef}
          id="files"
          name="files"
          type="file"
          multiple
          accept={ACCEPTED}
          aria-describedby="files-hint"
          onChange={(event) => {
            const incomingFiles = Array.from(event.currentTarget.files ?? [])
            setSelectedFiles((currentFiles) => {
              const seen = new Set(currentFiles.map(fileKey))
              const nextFiles = [...currentFiles]

              for (const file of incomingFiles) {
                const key = fileKey(file)
                if (!seen.has(key)) {
                  seen.add(key)
                  nextFiles.push(file)
                }
              }

              const total = nextFiles.reduce((sum, file) => sum + file.size, 0)
              if (nextFiles.length > MAX_FILES || total > MAX_TOTAL_BYTES) {
                setFileError(
                  locale === 'ar'
                    ? `اختر حتى ${MAX_FILES} ملفات وبحجم إجمالي ${MAX_TOTAL_MB} ميجابايت.`
                    : `Choose up to ${MAX_FILES} files, ${MAX_TOTAL_MB} MB in total.`
                )
                return currentFiles
              }

              setFileError(null)
              return nextFiles
            })
            event.currentTarget.value = ''
          }}
          className="w-full rounded-lg border border-dashed border-k-border bg-sand/30 px-4 py-3 text-sm text-k-muted file:me-3 file:rounded-md file:border-0 file:bg-primary file:px-3 file:py-1.5 file:text-xs file:font-semibold file:text-white"
        />
        <p id="files-hint" className="mt-1 text-xs text-k-muted">
          {locale === 'ar'
            ? `يمكنك اختيار أكثر من ملف مرة واحدة. JPG أو PNG أو WEBP أو PDF — حتى ${MAX_FILES} ملفات بحجم إجمالي ${MAX_TOTAL_MB} ميجابايت.`
            : `You can select several files at once. JPG, PNG, WEBP or PDF — up to ${MAX_FILES} files, ${MAX_TOTAL_MB} MB total.`}
        </p>
        {selectedFiles.length > 0 && (
          <div className="mt-3 rounded-lg border border-k-border bg-white p-3">
            <div className="flex items-center justify-between gap-3">
              <p className="text-xs font-semibold text-primary">
                {locale === 'ar'
                  ? `${selectedFiles.length} من ${MAX_FILES} ملفات محددة`
                  : `${selectedFiles.length} of ${MAX_FILES} files selected`}
              </p>
              <button
                type="button"
                onClick={() => {
                  setSelectedFiles([])
                  setFileError(null)
                }}
                className="text-xs font-semibold text-accent hover:underline"
              >
                {locale === 'ar' ? 'مسح الكل' : 'Clear all'}
              </button>
            </div>
            <ul className="mt-2 space-y-1.5">
              {selectedFiles.map((file) => (
                <li
                  key={fileKey(file)}
                  className="flex items-center justify-between gap-3 text-xs text-k-muted"
                >
                  <span className="truncate">{file.name}</span>
                  <span className="flex shrink-0 items-center gap-3">
                    <span>{formatBytes(file.size)}</span>
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedFiles((currentFiles) =>
                          currentFiles.filter((currentFile) => fileKey(currentFile) !== fileKey(file))
                        )
                        setFileError(null)
                      }}
                      className="font-semibold text-accent hover:underline"
                    >
                      {locale === 'ar' ? 'حذف' : 'Remove'}
                    </button>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}
        {fileError && (
          <p role="alert" className="mt-1.5 text-sm text-red-600">
            {fileError}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-primary">
          {t.message} <span className="text-accent">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder={t.messagePlaceholder}
          className={`${fieldClass} resize-y`}
        />
      </div>

      <div className="flex items-start gap-3">
        <input
          id="consent"
          name="consent"
          type="checkbox"
          required
          className="mt-1 h-4 w-4 shrink-0 cursor-pointer accent-[#C4622D]"
        />
        <label htmlFor="consent" className="cursor-pointer text-sm leading-relaxed text-k-muted">
          {t.consent}{' '}
          <Link href={privacyHref} target="_blank" className="font-medium text-accent hover:underline">
            {t.consentLink}
          </Link>
          . <span className="text-accent">*</span>
        </label>
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-8 py-4 font-semibold text-white transition-all duration-200 hover:bg-accent-dark hover:shadow-lg hover:shadow-accent/20 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {status === 'sending' ? (
          <>
            <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              />
            </svg>
            {t.sending}
          </>
        ) : (
          t.submit
        )}
      </button>

      {status === 'error' && (
        <p role="alert" aria-live="assertive" className="text-sm text-red-600">
          {t.error}
          {errorDetail ? <span className="sr-only"> ({errorDetail})</span> : null}
        </p>
      )}
    </form>
  )
}
