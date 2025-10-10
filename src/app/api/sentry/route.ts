// app/api/sentry-example-api/route.ts
import * as Sentry from '@sentry/nextjs'
import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

class SentryExampleAPIError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'SentryExampleAPIError'
  }
}

export async function GET() {
  try {
    throw new SentryExampleAPIError('This error is raised on the backend called by the example page.')
  } catch (err) {
    // Explicitly report to Sentry
    Sentry.captureException(err)
    // Optional: flush Sentry events (important in serverless environments)
    await Sentry.flush(2000)
    return NextResponse.json({ status: 'error reported to Sentry' }, { status: 500 })
  }
}
