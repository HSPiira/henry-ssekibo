interface NumberedListProps {
  items: string[]
  className?: string
}

/**
 * The zero-padded ordered list used for achievements and approach steps.
 * Previously hand-written in five places; the padding logic lives here now.
 */
export function NumberedList({ items, className = '' }: NumberedListProps) {
  return (
    <ol className={`flex flex-col ${className}`}>
      {items.map((item, index) => (
        <li
          key={item}
          className="grid grid-cols-[2.5rem_1fr] gap-2 py-3.5 rule-bottom last:border-b-0"
        >
          <span className="label nums pt-1">
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className="prose-body text-[0.9375rem]">{item}</span>
        </li>
      ))}
    </ol>
  )
}
