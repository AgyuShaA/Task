'use client'

import React from 'react'
import { useTranslations } from 'next-intl'
import Accepticon from '../../shared/icons/accept-icon'

export const SkillsSection: React.FC = () => {
  const t = useTranslations('SkillsSection') // assumes your JSON namespace is 'SkillsSection'
  const skills = [
    {
      title: t('skill1.title'),
      items: [t('skill1.item1'), t('skill1.item2'), t('skill1.item3'), t('skill1.item4')],
    },
    {
      title: t('skill2.title'),
      items: [t('skill2.item1'), t('skill2.item2'), t('skill2.item3')],
    },
    {
      title: t('skill3.title'),
      items: [t('skill3.item1'), t('skill3.item2'), t('skill3.item3')],
    },
  ]

  return (
    <section className='py-6 md:py-10'>
      <h3 className='text-dark-custom order-4 mb-4 text-center text-[2.7rem] font-semibold md:text-4xl'>
        {t('heading')}
      </h3>
      <p className='mb-4 text-center text-base md:pt-0.5 md:text-[18px]'>{t('description')}</p>

      <div className='flex gap-3 pt-5 max-lg:flex-col md:gap-6 md:pt-8'>
        {skills.map((skill, index) => (
          <div
            key={index}
            className='text-foreground bg-content1 rounded-large relative flex h-auto w-full flex-col overflow-hidden border border-[#E2E8F0] p-4 shadow-none md:py-6'
            tabIndex={-1}
          >
            <div className='mb-3 h-[42px] w-[42px] rounded-full bg-gradient-to-r from-[#007AFF] to-[#7CB7F8] p-[3px]'>
              <div className='flex h-full w-full items-center justify-center rounded-full bg-white text-[20px] font-semibold text-[#2B2D42]'>
                {index + 1}
              </div>
            </div>

            <p className='text-start text-[18px] font-semibold text-[#2C3345]'>{skill.title}</p>

            <ul className='mt-2 flex flex-col gap-2 max-md:pt-0.5'>
              {skill.items.map((item, i) => (
                <li key={i} className='flex items-start gap-1.5'>
                  <div className='p-1'>
                    <Accepticon />
                  </div>
                  <p className='text-start text-sm'>{item}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
