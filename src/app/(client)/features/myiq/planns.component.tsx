import { useTranslations } from 'next-intl'
import Accepticon from '../../shared/icons/accept-icon'
import CustomButton from '../../shared/ui/button'
import Link from 'next/link'

export const Planns = () => {
  const t = useTranslations('Plans') // translations namespace

  const plans = [
    {
      title: t('twoWeek.title'),
      price: t('twoWeek.price'),
      period: t('twoWeek.period'),
      features: [t('twoWeek.feature1'), t('twoWeek.feature2'), t('twoWeek.feature3'), t('twoWeek.feature4')],
    },
    {
      title: t('monthly.title'),
      price: t('monthly.price'),
      period: t('monthly.period'),
      features: [t('monthly.feature1'), t('monthly.feature2'), t('monthly.feature3'), t('monthly.feature4')],
    },
  ]

  return (
    <section className='relative py-6 md:py-10'>
      <div className='mx-auto w-full max-w-[740px]'>
        <h3 className='text-2.7xl text-dark-custom order-4 mb-4 text-center font-semibold md:text-4xl'>
          {t('heading')}
        </h3>
      </div>
      <p className='text-md mb-4 text-center md:pt-0.5 md:text-[18px]'>{t('description')}</p>

      <div className='flex items-center justify-center gap-3 pt-5 pb-4 max-lg:flex-col md:gap-6 md:pt-8'>
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className='flex h-auto max-w-[362px] flex-col overflow-hidden border border-gray-100 p-3 shadow-2xl outline-transparent transition-transform duration-300 outline-solid hover:scale-105 hover:shadow-lg'
              tabIndex={-1}
            >
              <div className='color-inherit rounded-t-large z-10 flex w-full shrink-0 flex-col items-start justify-start gap-2 p-3 pb-6 subpixel-antialiased'>
                <h2 className='text-large font-medium'>{plan.title}</h2>
              </div>
              <hr className='bg-divider h-divider w-full shrink-0 border-none' role='separator' />
              <div className='relative flex w-full flex-auto flex-col gap-8 overflow-y-auto p-3'>
                <p className='flex items-baseline gap-1 pt-2'>
                  <span className='text-foreground inline text-4xl leading-7 font-semibold tracking-tight'>
                    {plan.price}
                  </span>
                  <span className='text-default-400 text-small font-medium'>{plan.period}</span>
                </p>
                <ul className='flex flex-col gap-2'>
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className='flex items-center gap-2'>
                      <Accepticon />
                      <p className='text-default-500'>{feature}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className='rounded-b-large flex h-auto w-full items-center overflow-hidden p-3'>
                <CustomButton className='group rounded-small bg-green-custom text-medium relative z-0 inline-flex h-[42px] w-full min-w-20 items-center justify-center gap-3 px-4 text-white'>
                  {t('startButton')}
                </CustomButton>
              </div>
            </div>
          ))}
        </div>
      </div>

      <p className='mt-4 text-center text-[15px] leading-5'>
        {t('footerText')}{' '}
        <Link className='underline' href='/uk-UA/pricing'>
          {t('footerLink')}
        </Link>
      </p>
    </section>
  )
}
