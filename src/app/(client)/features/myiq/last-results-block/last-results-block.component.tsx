'use client'

import { Card, CardBody } from '@heroui/react'
import { useTranslations } from 'next-intl'
import { useEffect, useState } from 'react'
import Flag from 'react-world-flags'

interface ResultCardProps {
  countryCode: string
  name: string
  iq: number
  bgColor?: string
  hideOnMobile?: boolean
}

const ResultCard = ({ countryCode, name, iq, bgColor, hideOnMobile }: ResultCardProps) => (
  <Card
    shadow='none'
    className={`basis-full rounded-[18px] px-6 py-[23px] lg:basis-[48.5%] lg:py-[28px] ${
      bgColor ?? ''
    } ${hideOnMobile ? 'max-lg:hidden' : ''}`}
    style={{ transition: 'all 0.5s ease-in-out' }}
  >
    <CardBody className='flex flex-row items-center gap-4 px-3 py-4 sm:py-0 sm:pl-3'>
      <div className='h-5 w-[30px] lg:h-8 lg:w-[45px]'>
        <Flag code={countryCode} className='h-full w-full rounded object-cover' />
      </div>
      <p className='text-base font-medium md:text-lg'>{name}</p>
      <div className='rounded-small ml-auto px-2 py-1 text-center text-base font-semibold text-[#006FEE] md:text-[20px]'>
        IQ&nbsp;{iq}
      </div>
    </CardBody>
  </Card>
)

const mockResults = [
  { countryCode: 'BY', name: 'Соколова Мария', iq: 106 },
  { countryCode: 'UA', name: 'Мельник Марія', iq: 87 },
  { countryCode: 'BY', name: 'Кузнецов Сергей', iq: 103 },
  { countryCode: 'DE', name: 'Kamiński Julia', iq: 89 },
  { countryCode: 'RU', name: 'Попов Дмитрий', iq: 101 },
  { countryCode: 'UA', name: 'Бондаренко Олександр', iq: 94 },
  { countryCode: 'PL', name: 'Szymańska Maja', iq: 105 },
  { countryCode: 'FR', name: 'Dupont Marie', iq: 98 },
  { countryCode: 'IT', name: 'Rossi Luca', iq: 100 },
  { countryCode: 'ES', name: 'Garcia Ana', iq: 102 },
  { countryCode: 'US', name: 'Smith John', iq: 110 },
  { countryCode: 'CA', name: 'Brown Emma', iq: 95 },
  { countryCode: 'GB', name: 'Taylor James', iq: 108 },
  { countryCode: 'NL', name: 'Jansen Lisa', iq: 97 },
  { countryCode: 'SE', name: 'Andersson Erik', iq: 99 },
  { countryCode: 'CH', name: 'Müller Anna', iq: 104 },
]

export const LastResultsBlockComponent = () => {
  const [results, setResults] = useState(mockResults.slice(0, 16))
  const t = useTranslations('Results')

  useEffect(() => {
    const interval = setInterval(() => {
      setResults((prev) => {
        const newResults = [...prev]
        const firstTwo = newResults.splice(0, 2) // remove top 2
        newResults.push(...firstTwo) // add them to bottom
        return newResults
      })
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className='mx-auto items-center pt-6 max-lg:pb-6 md:pt-[42px]'>
      <h3 className='text-2.7xl text-dark-custom text-center font-semibold md:text-4xl'>{t('heading')}</h3>
      <div className='h-fit w-full overflow-hidden rounded-xl pt-4 md:pt-6 lg:h-fit'>
        <div className='hidden w-full flex-wrap gap-x-6 text-left md:flex'>
          {results.slice(0, 8).map((r, idx) => (
            <ResultCard
              key={idx}
              {...r}
              bgColor={Math.floor(idx / 2) % 2 === 1 ? 'lg:bg-[#F6FBFF]' : undefined}
              hideOnMobile={false} // show all 8 on desktop
            />
          ))}
        </div>

        <div className='flex w-full flex-wrap gap-x-6 text-left md:hidden'>
          {results.slice(0, 4).map((r, idx) => (
            <ResultCard
              key={idx}
              {...r}
              bgColor={Math.floor(idx / 2) % 2 === 1 ? 'lg:bg-[#F6FBFF]' : undefined}
              hideOnMobile={false} // show all 8 on desktop
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default LastResultsBlockComponent
