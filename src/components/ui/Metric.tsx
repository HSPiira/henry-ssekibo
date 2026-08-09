interface MetricProps {
  value: string
  label: string
  /** Where the number comes from. Rendered so no figure stands unattributed. */
  source?: string
  size?: 'md' | 'lg'
}

export function Metric({ value, label, source, size = 'md' }: MetricProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <span
        className={`nums font-semibold tracking-[-0.03em] text-ink ${
          size === 'lg'
            ? 'text-[clamp(2rem,4vw,3rem)]'
            : 'text-[clamp(1.75rem,3vw,2.25rem)]'
        }`}
      >
        {value}
      </span>
      <span className="text-sm text-muted leading-snug">{label}</span>
      {source && <span className="label !text-[0.6875rem]">{source}</span>}
    </div>
  )
}
