import { ContainerComponent } from '../../shared/ui/container'
import { MyIqComponent } from '../../widgets/my-iq'

const MyIqModule = () => {
  return (
    <ContainerComponent className='w-full pb-[72px]'>
      <MyIqComponent />
    </ContainerComponent>
  )
}

export default MyIqModule
