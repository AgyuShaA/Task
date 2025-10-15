import { MyIqModule } from '../../modules/myiq'
import { setRequestLocale } from 'next-intl/server'

export const revalidate = 30
export const dynamic = 'force-static'

type Props = {
  params: { locale: string }
}

export default async function Home({ params }: Props) {
  const { locale } = await params // already available, no need for `use()`
  setRequestLocale(locale)

  return (
    <div className='pt-16'>
      <MyIqModule />
    </div>
  )
}
