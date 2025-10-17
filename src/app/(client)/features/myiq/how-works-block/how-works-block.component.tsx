import { FileIcon, RocketIcon, TestsIcon } from '../../../shared/icons'
import { getTranslations } from 'next-intl/server'

const HowWorkBlockComponent = async () => {
  const t = await getTranslations('HowItWorks') // namespace for translations

  const steps = [
    {
      title: t('step1.title'),
      description: t('step1.description'),
      icon: <TestsIcon />,
    },
    {
      title: t('step2.title'),
      description: t('step2.description'),
      icon: <FileIcon />,
    },
    {
      title: t('step3.title'),
      description: t('step3.description'),
      icon: <RocketIcon />,
    },
  ]

  return (
    <section id='how-it-works' className='relative w-full pt-[120px] pb-6 md:pt-[140px] md:pb-10 lg:pt-[174px]'>
      <div className='absolute inset-0 z-[-1] h-full w-full bg-gradient-to-b from-white via-[#EBF4FF] to-white' />

      <h3 className='text-dark-custom mb-6 text-center text-3xl font-semibold md:mb-8 md:text-4xl'>{t('heading')}</h3>

      <div className='flex w-full gap-3 max-md:flex-col md:gap-6'>
        {steps.map((step, idx) => (
          <div
            key={idx}
            className='text-foreground bg-content1 rounded-large relative flex h-auto w-full flex-col gap-1 overflow-hidden border border-[#D9E7FF] p-4 md:px-8 md:pt-[42px]'
            tabIndex={-1}
          >
            <div className='mb-3 h-[38px] w-[38px]'>{step.icon}</div>
            <p className='text-[18px] font-semibold text-[#2C3345]'>{step.title}</p>
            <p className='text-sm'>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default HowWorkBlockComponent
