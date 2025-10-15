'use client'

import CustomButton from '../../shared/ui/button'
import {
  ArrowRightIcon,
  BrainIcon,
  HandsHeartIcon,
  HeadIcon,
  LampIcon,
  PassedIcon,
  SmallClockIcon,
} from '../../shared/icons'

import { useMessages, useTranslations } from 'next-intl'

export const AvailableTests: React.FC = () => {
  const t = useTranslations('AvailableTests')

  const messages = useMessages()

  const tests = [
    { id: 1, Icon: <BrainIcon />, key: 'iq' },
    { id: 2, Icon: <HeadIcon />, key: 'personality' },
    { id: 3, Icon: <HandsHeartIcon />, key: 'loveStyle' },
    { id: 4, Icon: <LampIcon />, key: 'career' },
  ]

  return (
    <section className='relative mx-auto flex max-w-7xl flex-col items-center px-4 py-12'>
      <div className='absolute top-0 -left-1/2 -z-0 h-full w-[200vw] bg-[#F6FBFF]'></div>

      <h2 className='z-1 mb-4 text-2xl font-bold text-[#2B2D42] md:text-4xl'>{t('heading')}</h2>
      <h3 className='text-md z-1 pb-4'>{t('description')}</h3>

      <div className='z-2 grid w-full gap-6 pt-8 sm:grid-cols-1 sm:grid-rows-4 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-4 lg:grid-rows-1'>
        {tests.map((test, index) => {
          const testData = messages.AvailableTests.tests[test.key]
          const isLast = index === tests.length - 1
          return (
            <div
              key={test.id}
              className='flex w-full flex-col justify-between rounded-xl border border-[#E2E8F0] bg-white px-4 py-6'
            >
              <div className='mb-4 flex flex-col items-start gap-2'>
                {test.Icon}
                <h3 className='text-xl font-semibold'>{testData.title}</h3>
                <p className='mt-2 flex items-center gap-3 text-sm text-gray-600'>
                  <SmallClockIcon /> {testData.duration} • <PassedIcon /> {testData.questions}
                </p>
              </div>
              <CustomButton
                className={`mt-auto ${
                  isLast ? '!bg-[var(--color-green-custom)]/70' : 'bg-white'
                } flex flex-row items-center gap-3 !rounded-lg !py-6 font-semibold transition`}
              >
                {testData.buttonText}
                {index < 3 && <ArrowRightIcon />}
              </CustomButton>
            </div>
          )
        })}
      </div>
    </section>
  )
}
