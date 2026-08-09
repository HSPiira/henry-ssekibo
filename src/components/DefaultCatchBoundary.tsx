import { Link, rootRouteId, useMatch, useRouter } from '@tanstack/react-router'
import type { ErrorComponentProps } from '@tanstack/react-router'

export function DefaultCatchBoundary({ error }: ErrorComponentProps) {
  const router = useRouter()
  const isRoot = useMatch({
    strict: false,
    select: (state) => state.id === rootRouteId,
  })

  console.error('DefaultCatchBoundary Error:', error)

  return (
    <div className="shell min-h-[70vh] flex flex-col justify-center py-24">
      <p className="label mb-6">Something went wrong</p>

      <h1 className="heading max-w-[18ch] mb-5">
        This page failed to load.
      </h1>

      <p className="prose-body max-w-[48ch] mb-8">
        An unexpected error interrupted rendering. Retrying often clears it.
      </p>

      {error instanceof Error && error.message && (
        <pre className="font-mono text-xs text-muted bg-surface border border-rule p-4 mb-10 overflow-x-auto max-w-full">
          {error.message}
        </pre>
      )}

      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => router.invalidate()}
          className="btn btn-solid"
        >
          Try again
        </button>

        {isRoot ? (
          <Link to="/" className="btn btn-outline">
            Home
          </Link>
        ) : (
          <button
            type="button"
            onClick={() => window.history.back()}
            className="btn btn-outline"
          >
            Go back
          </button>
        )}
      </div>
    </div>
  )
}
