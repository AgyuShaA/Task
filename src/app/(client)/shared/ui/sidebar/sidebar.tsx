'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Dispatch, SetStateAction } from 'react'
import CustomButton from '../button'

interface SidebarProps {
  open: boolean
  onClose: Dispatch<SetStateAction<boolean>>
}

export const Sidebar = ({ open, onClose }: SidebarProps) => {
  const navItems = [
    { label: 'Як це працює', href: '#' },
    { label: 'Сфери зростання', href: '#' },
    { label: 'Цікаві факти', href: '#' },
    { label: 'Довідка та підтримка', href: '#' },
  ]

  return (
    <>
      {open && (
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: open ? 0 : '100%' }}
          transition={{ type: 'tween', duration: 0.3 }}
          className='fixed z-40 h-screen w-full overflow-y-auto border-l border-[hsl(var(--heroui-divider)/0.1)] bg-white px-6 pt-16 shadow-xl md:right-0 md:w-[384px]'
        >
          <nav className='grid gap-2 pt-3 pb-6'>
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className='block rounded-lg py-2 text-base leading-7 text-gray-500 hover:bg-gray-50'
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <hr className='h-divider w-full border-none bg-[hsl(var(--heroui-divider)/0.1)]' />

          <div className='mt-6 grid gap-4'>
            <CustomButton className='py-7 !text-lg' variant='white'>
              Увійти
            </CustomButton>

            <CustomButton className='!py-7 !text-lg'> Розпочати тест</CustomButton>
          </div>
        </motion.div>
      )}
    </>
  )
}
