import * as Sentry from '@sentry/nextjs'
import { startSpan } from '@sentry/core'
import { NextResponse } from 'next/server'

class SentryExampleAPIError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'SentryExampleAPIError'
  }
}

export async function GET() {
  try {
    return await startSpan({ name: 'api_test_route' }, async () => {
      await startSpan({ name: 'simulate_work', op: 'sleep' }, async () => {
        await new Promise((r) => setTimeout(r, 500))
      })

      throw new SentryExampleAPIError('This error is raised on the backend called by the example page.')
    })
  } catch (err) {
    Sentry.captureException(err)
    await Sentry.flush(2000)

    return NextResponse.json({ status: 'error reported to Sentry' }, { status: 500 })
  }
}
