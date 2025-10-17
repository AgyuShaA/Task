import { useTranslations } from 'next-intl'
import CustomButton from '../../../shared/ui/button'
import { ArrowRightIcon, GraphIcon, StarIcon } from '../../../shared/icons'
import Image from 'next/image'

const FirstBlockComponent = () => {
  const t = useTranslations('MainComponent')

  return (
    <section className='relative z-0 flex h-full w-full flex-col'>
      <div className='absolute inset-0 -left-1/2 -z-10 w-[200vw] bg-gradient-to-b from-white via-[#EBF4FF] to-white' />

      <div className='flex h-full w-full flex-col-reverse items-center gap-5 lg:flex-row lg:justify-between'>
        <div className='flex w-full max-w-[630px] flex-col gap-3 lg:w-1/2 lg:gap-4'>
          <h1 className='text-[32px] leading-[40px] font-extrabold lg:text-[48px] lg:leading-[62px]'>
            <span className='inline-block bg-gradient-to-r from-[#2C3345] to-[#424D6A] bg-clip-text text-transparent'>
              {t('wantToKnow')}
            </span>
            <br className='max-lg:hidden' />
            <span className='inline-block bg-gradient-to-r from-[#27415F] via-[#007AFF] to-[#007AFF] bg-clip-text pr-2 text-transparent'>
              {t('iqResult')}
            </span>
          </h1>
          <p className='text-base leading-[25px] text-[#2B2D42] lg:max-w-[325px] lg:text-[18px]'>{t('description')}</p>
          <div className='mt-2 flex flex-col gap-3 max-sm:flex-wrap sm:flex-row lg:mt-4 lg:gap-6'>
            <CustomButton className='sm:w- md: !w-full !rounded-lg sm:!w-1/2 md:!w-fit'>
              <span className='flex items-center justify-center gap-5'>
                {t('startTest')} <ArrowRightIcon />
              </span>
            </CustomButton>
            <CustomButton variant='white' className='!w-full !rounded-lg sm:!w-1/2 md:!w-fit'>
              {t('howItWorks')}
            </CustomButton>
          </div>

          <div className='mt-[11px] flex items-center md:mt-4'>
            <div className='relative mr-6 flex md:mr-12'>
              {[
                '/images/rate-today/avatar1.avif',
                '/images/rate-today/avatar2.avif',
                '/images/rate-today/avatar3.avif',
                '/images/rate-today/avatar4.avif',
              ].map((src, idx) => (
                <div
                  key={idx}
                  className={`pointer-events-none relative h-10 w-10 overflow-hidden rounded-full border-3 border-white md:h-[50px] md:w-[50px] md:border-4 ${
                    idx > 0 ? `-ml-5 md:-ml-6` : ''
                  } ${idx === 3 ? 'max-md:hidden' : ''}`}
                  style={{ zIndex: idx }}
                >
                  <Image src={src} alt={`Avatar ${idx + 1}`} fill className='object-cover' />
                </div>
              ))}
            </div>

            <div className='-ml-4 flex flex-col text-sm text-[#2B2D42] md:-ml-8 md:text-base md:leading-6'>
              <div className='flex flex-wrap max-md:flex-col md:items-center md:gap-1'>
                <p>{t('userReviews')}</p>

                <div className='relative flex text-gray-300'>
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className='relative' style={{ width: 17, height: 17 }}>
                      <div
                        className='absolute top-0 overflow-hidden text-[#f7b635]'
                        style={{ width: i === 4 ? '70%' : '100%' }}
                      >
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          fill='currentColor'
                          viewBox='0 0 20 20'
                          width={17}
                          height={17}
                        >
                          <path
                            fillRule='evenodd'
                            d='M10 15.27 16.18 18l-1.64-7.03L19 7.24l-7.19-.61L10 0 8.19 6.63 1 7.24l4.46 3.73L3.82 18z'
                            clipRule='evenodd'
                          />
                        </svg>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <p>
                <span className='font-semibold'>12,024</span> {t('testsTaken')}
              </p>
            </div>
          </div>
        </div>
        <div className='relative mx-auto flex aspect-[517/296] h-full w-full max-w-[517px] items-center justify-center max-lg:mt-[-28px] lg:w-1/2'>
          <GraphIcon />
        </div>
      </div>
    </section>
  )
}

export default FirstBlockComponent
