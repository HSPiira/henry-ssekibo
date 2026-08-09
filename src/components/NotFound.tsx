import { Link } from '@tanstack/react-router'
import { ArrowLeft } from 'lucide-react'
import type { ReactNode } from 'react'

export function NotFound({ children }: { children?: ReactNode }) {
  return (
    <div className="shell min-h-[70vh] flex flex-col justify-center py-24">
      <p className="label nums mb-6">Error 404</p>

      <h1 className="heading max-w-[18ch] mb-5">
        This page does not exist.
      </h1>

      <div className="prose-body max-w-[48ch] mb-10">
        {children ?? (
          <p>
            The link may be out of date, or the page may have been renamed.
            Everything else is still reachable from the home page.
          </p>
        )}
      </div>

      <div className="flex flex-wrap gap-3">
        <Link to="/" className="btn btn-solid">
          Home
        </Link>
        <button
          type="button"
          onClick={() => window.history.back()}
          className="btn btn-outline"
        >
          <ArrowLeft className="w-4 h-4" aria-hidden />
          Go back
        </button>
      </div>
    </div>
  )
}
