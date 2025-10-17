import React from 'react'

import { interFont } from '@/config/fonts'

import { Footer } from '../../shared/ui/footer/footer'
import { hasLocale, NextIntlClientProvider } from 'next-intl'
import { routing } from '@/pkg/libraries/locale/routing'
import { notFound } from 'next/navigation'
import { setRequestLocale } from 'next-intl/server'
import { Header } from '../../shared/ui/header/header'

type Props = {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params
  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }
  setRequestLocale(locale)

  return (
    <>
      <NextIntlClientProvider locale={locale}>
        <div className={`${interFont.className} `}>
          <Header />
          {children}
          <Footer />
        </div>
      </NextIntlClientProvider>
    </>
  )
}
