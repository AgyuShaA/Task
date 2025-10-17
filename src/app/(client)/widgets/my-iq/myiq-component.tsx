import {
  CommunityBlockComponent,
  FaqBlockComponent,
  FirstBlockComponent,
  LastResultsBlockComponent,
  PlannsBlockComponent,
  SkillsBlockComponent,
  TestsBlockComponent,
  WhatUGetBlockComponent,
} from '../../features/myiq'
import HowWorkBlockComponent from '../../features/myiq/how-works-block/how-works-block.component'

export default function MyIqComponent() {
  return (
    <>
      <FirstBlockComponent />
      <HowWorkBlockComponent />
      <TestsBlockComponent />
      <SkillsBlockComponent />
      <WhatUGetBlockComponent />
      <CommunityBlockComponent />
      <PlannsBlockComponent />
      <FaqBlockComponent />
      <LastResultsBlockComponent />
    </>
  )
}
