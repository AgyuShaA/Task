import { getTranslations } from 'next-intl/server'
import { FacebookIcon, InstageramIcon, TwitterIcon } from '../../../shared/icons'

const CommunityBlockComponent = async () => {
  const t = await getTranslations('Community')

  return (
    <section className='md relative z-0 flex flex-col items-center justify-between gap-3 py-4 md:flex-row md:py-9'>
      <div className='flex flex-col items-center justify-center gap-1 md:items-start lg:items-start'>
        <div className='flex flex-row items-start gap-1'>
          <h3 className='text-[28px] leading-[45px] font-semibold text-[#2B2D42] md:text-[39px]'>{t('heading')}</h3>
        </div>
        <p className='hidden text-[17px] text-[#454F69] lg:inline-block'>{t('descriptionFull')}</p>
        <p className='text-sm lg:hidden'>{t('descriptionShort')}</p>
      </div>

      <div className='xs-l:w-fit'>
        <div className='flex justify-end gap-3'>
          <a
            role='button'
            target='_blank'
            rel='noopener noreferrer'
            tabIndex={0}
            aria-label='X (Twitter)'
            className='relative z-0 flex h-12 w-full cursor-pointer items-center justify-center gap-4 overflow-hidden rounded-xl border-1 border-[#007AFF] bg-white px-6 py-2 md:w-[76px]'
            href='https://x.com/MyIQapp'
          >
            <TwitterIcon />
          </a>

          <a
            role='button'
            target='_blank'
            rel='noopener noreferrer'
            tabIndex={0}
            aria-label='Instagram'
            className='relative z-0 flex h-12 w-full cursor-pointer items-center justify-center gap-4 overflow-hidden rounded-xl border-1 border-[#007AFF] bg-white px-6 py-2 md:w-[76px]'
            href='https://www.instagram.com/myiq_com'
          >
            <InstageramIcon />
          </a>

          <a
            role='button'
            target='_blank'
            rel='noopener noreferrer'
            tabIndex={0}
            aria-label='Facebook'
            className='relative z-0 flex h-12 w-full cursor-pointer items-center justify-center gap-4 overflow-hidden rounded-xl border-1 border-[#007AFF] bg-white px-6 py-2 md:w-[76px]'
            href='https://www.facebook.com/MyIQapp'
          >
            <FacebookIcon />
          </a>
        </div>
      </div>

      <div className='absolute top-0 -left-1/2 z-[-1] h-full w-[200vw] bg-[#F6FBFF]' />
    </section>
  )
}

export default CommunityBlockComponent
