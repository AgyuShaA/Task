'use client'

import React, { useRef, useState, useEffect } from 'react'
import { useTranslations } from 'next-intl'
import WinnerBlueIcon from '../../shared/icons/winner-blue-icon'

export const RewardsSlider: React.FC = () => {
  const t = useTranslations('Rewards')
  const containerRef = useRef<HTMLDivElement>(null)
  const [scrollState, setScrollState] = useState({ left: false, right: false })

  const rewards = [t('reward1'), t('reward2'), t('reward3'), t('reward4'), t('reward5'), t('reward6')]

  const updateScrollState = () => {
    if (!containerRef.current) return
    const { scrollLeft, scrollWidth, clientWidth } = containerRef.current
    setScrollState({
      left: scrollLeft > 0,
      right: scrollLeft + clientWidth < scrollWidth - 1,
    })
  }

  useEffect(() => {
    updateScrollState()
    const ref = containerRef.current
    if (!ref) return
    ref.addEventListener('scroll', updateScrollState)
    return () => ref.removeEventListener('scroll', updateScrollState)
  }, [])

  return (
    <section className='relative z-0 flex flex-col items-center gap-2 py-6 md:py-10'>
      <h4 className='text-[28px] font-semibold text-[#2C3345] md:text-[39px]'>{t('heading')}</h4>

      <div
        ref={containerRef}
        className='scrollbar-hide relative flex gap-6 overflow-x-auto pt-5 max-lg:w-[calc(100vw-48px)]'
        style={{ maskImage: 'none' }}
      >
        {rewards.map((text, idx) => (
          <div
            key={idx}
            className='text-foreground bg-content1 relative flex h-auto max-w-[236px] shrink-0 flex-row items-start gap-4 overflow-hidden rounded-lg border border-[#D9E7FF] p-4 shadow-none md:py-6'
            tabIndex={-1}
          >
            <div className='p-1'>
              <WinnerBlueIcon />
            </div>
            <p className='max-w-[80%] text-start text-sm text-[#2C3345]'>{text}</p>
          </div>
        ))}
      </div>

      {scrollState.left && (
        <div className='pointer-events-none absolute top-0 left-0 h-full w-6 bg-gradient-to-r from-[#F6FBFF] to-transparent' />
      )}
      {scrollState.right && (
        <div className='pointer-events-none absolute top-0 right-0 h-full w-6 bg-gradient-to-l from-[#F6FBFF] to-transparent' />
      )}

      <div className='absolute top-0 left-1/2 z-[-1] h-full w-[200vw] translate-x-[-50%] bg-[#F6FBFF]' />
    </section>
  )
}
