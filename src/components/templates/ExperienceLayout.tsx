import { ExperienceType } from 'src/types'
import ExperienceListItem from '@components/organisms/experience/ExperienceListItem'
import Heading from '@components/molecules/Heading'
import TimeLine, { TimeLineElements } from '@components/molecules/TimeLine'

type ExperienceProps = {
  items: ExperienceType[]
}

const ExperienceLayout = (props: ExperienceProps) => {
  const experiences: TimeLineElements[] = props.items.map((item) => {
    return {
      name: item.company,
      startedAt: item.duration.startedAt,
      endedAt: item.duration.endedAt
    }
  })

  return (
    <>
      <Heading
        title="Experience"
        description="Where, When and How I've worked"
      />
      <TimeLine name="Experience" elements={experiences}></TimeLine>
      {props.items.map((item, index) => (
        <ExperienceListItem key={index} {...item} />
      ))}
    </>
  )
}

export default ExperienceLayout
