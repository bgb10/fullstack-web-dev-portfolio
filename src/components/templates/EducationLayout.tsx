import { EducationType } from 'src/types'
import Heading from '@components/molecules/Heading'
import EducationListItem from '@components/organisms/education/EducationListItem'

type EducationProps = {
  items: EducationType[]
}

const EducationLayout = (props: EducationProps) => (
  <>
    <Heading title="Education" description="share my education yeah!" />
    {props.items.map((item, index) => (
      <EducationListItem key={index} {...item} />
    ))}
  </>
)

export default EducationLayout
