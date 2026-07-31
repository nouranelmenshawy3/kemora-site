import Link from 'next/link'

export interface Crumb {
  name: string
  path: string
}

/**
 * Breadcrumb trail. Direction is inherited from <html dir>, and the separator
 * is flipped for RTL so the trail reads in the correct direction.
 */
export default function Breadcrumbs({ items, onDark = false }: { items: Crumb[]; onDark?: boolean }) {
  if (items.length < 2) return null

  const muted = onDark ? 'text-white/50' : 'text-k-muted'
  const active = onDark ? 'text-white/80' : 'text-primary'

  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className={`flex flex-wrap items-center gap-x-2 gap-y-1 text-xs ${muted}`}>
        {items.map((item, i) => {
          const isLast = i === items.length - 1
          return (
            <li key={item.path} className="flex items-center gap-x-2">
              {isLast ? (
                <span className={`font-medium ${active}`} aria-current="page">
                  {item.name}
                </span>
              ) : (
                <>
                  <Link href={item.path} className="hover:text-accent transition-colors">
                    {item.name}
                  </Link>
                  <span aria-hidden="true" className="rtl:rotate-180 inline-block select-none">
                    ›
                  </span>
                </>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
