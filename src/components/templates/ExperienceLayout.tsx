import { ExperienceType } from 'src/types'
import ExperienceListItem from '@components/organisms/experience/ExperienceListItem'
import Heading from '@components/molecules/Heading'

type ExperienceProps = {
  items: ExperienceType[]
}

const ExperienceLayout = (props: ExperienceProps) => (
  <>
    <Heading title="Experience" description="Where, When and How I've worked" />
    {props.items.map((item, index) => (
      <ExperienceListItem key={index} {...item} />
    ))}
  </>
)

export default ExperienceLayout
