'use client'

import { useTranslations } from 'next-intl'
import MainWhitePcIcon from '../../icons/footer/main-white-icon'
import TwitterWhiteIcon from '../../icons/footer/twitter-white-icon'
import RedditWhiteIcon from '../../icons/footer/reddit-white-icon'
import InstagramWhiteIcon from '../../icons/footer/instagram-white-icon'
import FacebookWhiteIcon from '../../icons/footer/facebook-white-icon'
import HeadPhonesIcon from '../../icons/footer/headphones-icon'
import MasterCardIcon from '../../icons/footer/mastercard-icon'
import PayPalIcon from '../../icons/footer/paypal-icon'
import ApplePayIcon from '../../icons/footer/apple-pay-icon'
import VisaIcon from '../../icons/footer/visa-icon'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { routing } from '@/i18n/routing'
import { useState, useRef } from 'react'

export const Footer = () => {
  const t = useTranslations('Footer')
  const pathname = usePathname()
  const locales = routing.locales
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const dropdownRef = useRef<HTMLUListElement>(null)

  const handleLocaleChange = (loc: 'en' | 'uk') => {
    // build path with locale
    router.push(`/${loc}${pathname}`)
  }

  return (
    <footer className='z-10 mt-auto w-full'>
      <div className='flex flex-col bg-[#001B36] p-6 max-[1320px]:px-6 max-md:px-4 md:gap-5'>
        <div className='mx-auto flex w-full max-w-7xl flex-col justify-between md:flex-row'>
          {/* Logo and Socials */}
          <div className='flex flex-col justify-start gap-6'>
            <Link className='w-fit flex-shrink-0' aria-label='Logo' href='/'>
              <MainWhitePcIcon />
            </Link>

            <ul className='flex gap-4 text-white'>
              <li>
                <Link
                  aria-label='Reddit'
                  target='_blank'
                  rel='noopener noreferrer'
                  href='https://www.reddit.com/r/MyIQ_Official/'
                >
                  <RedditWhiteIcon />
                </Link>
              </li>
              <li>
                <Link aria-label='X (Twitter)' target='_blank' rel='noopener noreferrer' href='https://x.com/MyIQapp'>
                  <TwitterWhiteIcon />
                </Link>
              </li>
              <li>
                <Link
                  aria-label='Instagram'
                  target='_blank'
                  rel='noopener noreferrer'
                  href='https://www.instagram.com/myiq_com'
                >
                  <InstagramWhiteIcon />
                </Link>
              </li>
              <li>
                <Link
                  aria-label='Facebook'
                  target='_blank'
                  rel='noopener noreferrer'
                  href='https://www.facebook.com/MyIQapp'
                >
                  <FacebookWhiteIcon />
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Support and Links */}
          <div className='flex flex-col md:flex-row md:gap-5'>
            <div className='text-white max-md:mt-6 md:mr-10 lg:mr-20'>
              <p className='mb-4 flex items-center gap-2 text-lg font-semibold'>{t('customerSupport')}</p>
              <Link className='mb-2 block text-base font-medium' href='/help/how-do-i-cancel-my-subscription'>
                {t('howToCancel')}
              </Link>
              <Link
                className='mt-3 flex max-w-max items-center gap-3 rounded-full border-2 px-4 py-3 text-sm font-medium text-white transition hover:bg-white hover:text-[#001B36]'
                href='/help'
              >
                <HeadPhonesIcon />
                <div className='flex flex-col whitespace-nowrap'>
                  <span>{t('customerSupport')}</span>
                  <span>{t('alwaysAvailable')}</span>
                </div>
              </Link>
            </div>

            <ul className='mb-6 flex flex-col gap-4 max-md:mt-4 md:flex-row md:gap-20 lg:mb-12'>
              {/* Legal */}
              <li>
                <p className='mb-4 text-lg font-semibold text-white'>{t('legal')}</p>
                <ul className='flex flex-col gap-2'>
                  <li>
                    <Link className='text-base font-medium text-white' href='/privacy'>
                      {t('privacyPolicy')}
                    </Link>
                  </li>
                  <li>
                    <Link className='text-base font-medium text-white' href='/terms'>
                      {t('termsConditions')}
                    </Link>
                  </li>
                  <li>
                    <Link className='text-base font-medium text-white' href='/cookie'>
                      {t('cookiePolicy')}
                    </Link>
                  </li>
                  <li>
                    <Link className='text-base font-medium text-white' href='/terms#refund-policy'>
                      {t('refundPolicy')}
                    </Link>
                  </li>
                </ul>
              </li>

              {/* About Us */}
              <li>
                <p className='mb-4 text-lg font-semibold text-white'>{t('aboutUs')}</p>
                <ul className='flex flex-col gap-2'>
                  <li>
                    <Link
                      className='text-base font-medium text-white'
                      target='_blank'
                      rel='noopener noreferrer'
                      href='/help'
                    >
                      {t('help')}
                    </Link>
                  </li>
                  <li>
                    <Link className='text-base font-medium text-white' href='/blog'>
                      {t('blog')}
                    </Link>
                  </li>
                  <li>
                    <Link className='text-base font-medium text-white' href='/reviews'>
                      {t('reviews')}
                    </Link>
                  </li>
                  <li>
                    <Link className='text-base font-medium text-white' href='/pricing'>
                      {t('pricing')}
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>

        <div className='mx-auto flex w-full max-w-7xl flex-col justify-between md:flex-row'>
          <div className='flex flex-col gap-4 md:items-end'>
            <div className='relative flex flex-col gap-4 md:items-end'>
              <button
                onClick={() => setOpen(!open)}
                className='group text-small relative inline-flex h-10 cursor-pointer items-center gap-2 rounded-md border-2 bg-transparent px-4 font-normal text-white outline-none'
              >
                <span className='max-w-full truncate'>{t('language')}</span>
                <span className='ml-2 transition-transform duration-200'>{open ? '▲' : '▼'}</span>
              </button>

              <ul
                ref={dropdownRef}
                className={`absolute bottom-full mb-1 w-36 origin-bottom transform rounded-md bg-white shadow-lg transition-all duration-300 ease-out ${
                  open ? 'translate-y-0 opacity-100' : 'pointer-events-none -translate-y-2 opacity-0'
                }`}
              >
                {locales.map((loc) => (
                  <li key={loc}>
                    <button
                      className='block px-4 py-2 text-black hover:bg-gray-200'
                      onClick={() => {
                        handleLocaleChange(loc)
                        setOpen(false)
                      }}
                    >
                      {loc === 'en' ? 'English' : loc === 'uk' ? 'Українська' : loc}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className='flex w-full flex-col justify-between gap-4 lg:flex-row lg:items-center'>
              <div className='text-base text-white [&_a]:cursor-text [&_a]:font-normal [&_a]:text-white [&_a]:no-underline [&_a]:hover:no-underline'>
                <p>
                  {t('copyright')}{' '}
                  <Link
                    href='https://www.reddit.com/r/self/comments/1ijwwei/just_received_myiq_score_and_had_a_reality_check/'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    myIQ
                  </Link>
                  . {t('allRights')}
                </p>
              </div>

              <div className='flex grow gap-1.5'>
                <div className='flex h-8 w-[46px] items-center justify-center rounded-lg bg-white'>
                  <MasterCardIcon />
                </div>
                <div className='flex h-8 w-[46px] items-center justify-center rounded-lg bg-white'>
                  <PayPalIcon />
                </div>
                <div className='flex h-8 w-[46px] items-center justify-center rounded-lg bg-white'>
                  <ApplePayIcon />
                </div>
                <div className='flex h-8 w-[46px] items-center justify-center rounded-lg bg-white'>
                  <VisaIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
