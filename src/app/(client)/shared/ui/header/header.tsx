'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useTranslations } from 'next-intl'

import { HeaderIcon } from '../../icons'
import CloudIcon from '../../icons/cloud.icon'
import CustomButton from '../button'
import { Sidebar } from '../sidebar/sidebar'

export const Header = () => {
  const t = useTranslations('Header')
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <>
      <header className='bg-background/70 fixed z-50 h-16 w-screen border-gray-200 shadow-md backdrop-blur-lg backdrop-saturate-150 lg:px-0'>
        <div
          id='header'
          style={{ maxWidth: 1280 }}
          className='mx-auto flex h-16 w-full items-center justify-between max-[1320px]:px-6 max-md:px-4'
        >
          <Link href='/' aria-label='Logo' className='pointer-events-none [&_svg]:h-[31px] [&_svg]:w-[108px]'>
            <div>
              <HeaderIcon />
              <CloudIcon />
            </div>
          </Link>

          <div className='hidden items-center justify-end gap-3 lg:flex lg:gap-6'>
            <CustomButton href='/sign-in' variant='white'>
              {t('signIn')}
            </CustomButton>

            <CustomButton href='/start' variant='primary' className='!min-w-[155px] px-1'>
              {t('startTest')}
            </CustomButton>
          </div>
          <div
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className='flex h-[20px] w-6 cursor-pointer items-center justify-end overflow-visible lg:hidden'
          >
            <div
              className={`relative h-[1.5px] w-full bg-black transition-all duration-300 before:absolute before:left-0 before:h-[1.5px] before:w-full before:rounded-full before:bg-black before:transition-transform before:duration-300 before:content-[''] after:absolute after:left-0 after:h-[1.5px] after:w-full after:rounded-full after:bg-black after:transition-transform after:duration-300 after:content-[''] ${
                sidebarOpen
                  ? 'bg-transparent before:top-0 before:left-0 before:rotate-45 after:top-0 after:left-0 after:-rotate-45'
                  : 'before:top-[-6px] after:top-[6px]'
              }`}
            />
          </div>
        </div>
      </header>

      <div className='lg:hidden'>
        <Sidebar onClose={setSidebarOpen} open={sidebarOpen} />
      </div>
    </>
  )
}
