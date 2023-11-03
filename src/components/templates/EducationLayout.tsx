import { EducationType } from 'src/types'
import Heading from '@components/molecules/Heading'
import EducationListItem from '@components/organisms/education/EducationListItem'

type EducationProps = {
  items: EducationType[]
}

const EducationLayout = (props: EducationProps) => (
  <>
    <Heading title="Education" description="What I've Explored" />
    {props.items.map((item, index) => (
      <EducationListItem key={index} {...item} />
    ))}
  </>
)

export default EducationLayout
