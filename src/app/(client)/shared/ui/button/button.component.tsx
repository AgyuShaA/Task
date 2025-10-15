'use client'

import { cn, Button } from '@heroui/react'
import Link from 'next/link'

interface CustomButtonProps {
  href?: string
  variant?: 'primary' | 'white'
  children: React.ReactNode
  className?: string
  onClick?: () => void
}

const CustomButton = ({ href, variant = 'primary', children, className, onClick }: CustomButtonProps) => {
  const baseStyles =
    'text-medium font-normal rounded-small relative z-0 inline-flex h-[42px] min-w-20 items-center justify-center px-4 shadow-sm transition-all'

  const variants = {
    primary: 'hover:bg-green-custom/90 button-primary hover:text-white',
    white:
      'border-2 text-[var(--color-green-custom)] bg-white border-[var(--color-green-custom)]   hover:text-white  hover:bg-[var(--color-green-custom)]/70',
  }

  const combinedClass = cn(baseStyles, variants[variant], className)

  if (href) {
    return (
      <Link href={href} className={combinedClass}>
        {children}
      </Link>
    )
  }

  return (
    <Button className={combinedClass} onPress={onClick} disableAnimation radius='sm'>
      {children}
    </Button>
  )
}

export default CustomButton
