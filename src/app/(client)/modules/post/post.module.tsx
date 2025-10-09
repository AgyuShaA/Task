import { type FC } from 'react'
import { ContainerComponent } from '../../shared/ui/container'
import { PostIdComponent } from '../../widgets/post-id'

interface HomeModuleProps {
  id: string
}

const PostModule: FC<HomeModuleProps> = ({ id }) => {
  return (
    <ContainerComponent className='w-full space-y-12 pb-[72px]'>
      <PostIdComponent id={id} />
    </ContainerComponent>
  )
}

export default PostModule
