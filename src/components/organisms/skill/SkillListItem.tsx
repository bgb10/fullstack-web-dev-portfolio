import ResumeListItem from '@components/organisms/ResumeListItem'
import { SkillListType } from 'src/types'

const SkillListItem: React.FC<SkillListType> = ({ type, skills }) => {
  return (
    <>
      {skills.map((skill) => {
        return (
          <div key={skill.name}>
            <div>
              {skill.name}: {skill.proficiency}
            </div>
          </div>
        )
      })}
      <div>{type}</div>
    </>
  )
}

export default SkillListItem
