import { AvailableTests } from '../../features/myiq/available-tests-component'
import { Community } from '../../features/myiq/comunity.component'

import { FirstComponent } from '../../features/myiq/first-compoent'
import { LatestResults } from '../../features/myiq/last-results.component'
import { Planns } from '../../features/myiq/planns.component'
import { HowItWorks } from '../../features/myiq/how-works-component'
import { SkillsSection } from '../../features/myiq/skills-component'
import { RewardsSlider } from '../../features/myiq/what-u-get.component'
import { FAQSection } from '../../features/myiq/faq.component'

export default function MyIqComponent() {
  return (
    <div>
      <FirstComponent />
      <HowItWorks />
      <AvailableTests />
      <SkillsSection />
      <RewardsSlider />
      <Community />
      <Planns />
      <LatestResults />
      <FAQSection />
    </div>
  )
}
