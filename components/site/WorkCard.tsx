import Image from 'next/image'
import type { WorkItem, WorkType } from '@/content/types'

/**
 * Portfolio image with a mandatory type label.
 *
 * The label is not optional by design: the previous site presented concept and
 * third-party imagery under a heading that implied delivered production. Every
 * image now states what it is.
 */
const labelStyles: Record<WorkType, string> = {
  project: 'bg-accent text-white',
  sample: 'bg-primary/85 text-white',
  concept: 'bg-white/95 text-primary border border-k-border',
}

export default function WorkCard({
  item,
  label,
  featured,
  priority = false,
  className = '',
}: {
  item: WorkItem
  label: string
  featured?: boolean
  priority?: boolean
  className?: string
}) {
  const isFeatured = featured ?? item.featured ?? false

  return (
    <article
      className={`group h-full overflow-hidden rounded-lg border border-k-border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg hover:shadow-black/10 ${className}`}
    >
      <div className={`relative overflow-hidden ${isFeatured ? 'aspect-[4/3]' : 'aspect-[3/4]'}`}>
        <Image
          src={item.src}
          alt={item.alt}
          fill
          sizes={
            isFeatured
              ? '(min-width: 1024px) 62vw, (min-width: 640px) 90vw, 100vw'
              : '(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw'
          }
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          style={item.objectPosition ? { objectPosition: item.objectPosition } : undefined}
          priority={priority}
          loading={priority ? undefined : 'lazy'}
        />
        <span
          className={`absolute top-3 start-3 rounded-full px-3 py-1 text-[11px] font-semibold leading-tight ${labelStyles[item.workType]}`}
        >
          {label}
        </span>
      </div>
      <div className="p-4">
        <h3 className="text-sm font-bold text-primary sm:text-base">{item.title}</h3>
        <p className="mt-1 text-xs leading-relaxed text-k-muted sm:text-sm">{item.note}</p>
      </div>
    </article>
  )
}
