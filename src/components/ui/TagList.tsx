interface TagListProps {
  items: readonly string[]
  className?: string
}

export function TagList({ items, className = '' }: TagListProps) {
  return (
    <ul className={`flex flex-wrap gap-1.5 ${className}`}>
      {items.map((item) => (
        <li key={item} className="tag">
          {item}
        </li>
      ))}
    </ul>
  )
}
