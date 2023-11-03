import { ProjectType } from 'src/types'
import Heading from '@components/molecules/Heading'
import ProjectListItem from '@components/organisms/project/ProjectListItem'

type ProjectProps = {
  items: ProjectType[]
}

const ProjectLayout = (props: ProjectProps) => (
  <>
    <Heading title="Project" description="share my project. see this yeah!" />
    {props.items.map((item, index) => (
      <ProjectListItem key={index} {...item} />
    ))}
  </>
)

export default ProjectLayout
