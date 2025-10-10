export async function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    console.log('Sentry node Init')
    await import('@/pkg/integrations/sentry/sentry.server.config')
  }
  if (process.env.NEXT_RUNTIME === 'edge') {
    console.log('Sentry Edge Init')
    await import('@/pkg/integrations/sentry/sentry.edge.config')
  }
}
