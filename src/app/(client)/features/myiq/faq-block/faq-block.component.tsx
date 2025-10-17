'use client'

import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { useState } from 'react'

const Chevron = ({ open }: { open: boolean }) => (
  <svg
    aria-hidden='true'
    fill='none'
    focusable='false'
    height='1em'
    role='presentation'
    viewBox='0 0 24 24'
    width='1em'
    className={`transition-transform ${open ? '-rotate-90' : 'rotate-0'} text-[#2B2D42]`}
  >
    <path d='M15.5 19l-7-7 7-7' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} />
  </svg>
)

interface FAQItem {
  question: string
  answer: React.ReactNode
}

const FaqBlockComponent = () => {
  const t = useTranslations('FAQ')

  const faqItems: FAQItem[] = [
    {
      question: t('item1.question'),
      answer: t.rich('item1.answer', {
        a: (children) => (
          <Link className='underline' href='/terms#refund-policy'>
            {children}
          </Link>
        ),
      }),
    },
    {
      question: t('item2.question'),
      answer: t.rich('item2.answer', {
        a: (children) => (
          <Link className='underline' href='/help/how-do-i-cancel-my-subscription'>
            {children}
          </Link>
        ),
      }),
    },
    {
      question: t('item3.question'),
      answer: t('item3.answer'),
    },
    {
      question: t('item4.question'),
      answer: t('item4.answer'),
    },
    {
      question: t('item5.question'),
      answer: t('item5.answer'),
    },
    {
      question: t('item6.question'),
      answer: t.rich('item6.answer', {
        a: (children) => (
          <Link className='underline' href='/privacy'>
            {children}
          </Link>
        ),
      }),
    },
  ]

  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => setOpenIndex(openIndex === index ? null : index)

  return (
    <div className='relative z-0 w-full py-6 md:py-10'>
      <section className='relative mx-auto w-full gap-6 text-left lg:grid lg:grid-cols-[1fr_4fr] lg:gap-14'>
        <h2 className='text-[28px] leading-[33px] font-semibold text-[#2B2D42] max-lg:text-center md:mb-8 md:text-[39px] md:leading-[49px] lg:max-w-[200px]'>
          <span className='inline-block'>{t('heading')}</span>
        </h2>

        <div className='flex w-full flex-col gap-2 px-2 pt-4 max-md:!gap-0'>
          {faqItems.map((item, index) => (
            <div
              key={index}
              className='!rounded-none border-b border-[#E5EBFA] bg-transparent px-4 text-left !shadow-none md:px-5'
            >
              <h2>
                <button
                  type='button'
                  className='flex h-full w-full items-center gap-3 py-[18px] transition-opacity outline-none'
                  onClick={() => toggle(index)}
                  aria-expanded={openIndex === index}
                >
                  <div className='flex flex-1 flex-col text-start'>
                    <span className='text-medium font-medium text-[#2B2D42] md:text-lg'>{item.question}</span>
                  </div>
                  <Chevron open={openIndex === index} />
                </button>
              </h2>
              <section
                style={{
                  maxHeight: openIndex === index ? '500px' : '0px',
                  opacity: openIndex === index ? 1 : 0,
                  overflow: 'hidden',
                  transition: 'all 0.6s ease',
                }}
              >
                <div className='py-2 pt-0 pb-[18px] text-[#444F69] max-md:text-sm'>{item.answer}</div>
              </section>
            </div>
          ))}
        </div>
      </section>
      <span className='pointer-events-none absolute top-0 left-[-50vw] z-[-1] h-full w-[200vw] bg-[#F6FBFF]' />
    </div>
  )
}

export default FaqBlockComponent
