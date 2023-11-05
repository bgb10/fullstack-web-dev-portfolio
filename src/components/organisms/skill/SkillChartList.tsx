import ResumeListItem from '@components/organisms/ResumeListItem'
import { SkillListType } from 'src/types'
import { Radar, PolarArea } from 'react-chartjs-2'
import { Chart as ChartJS, registerables } from 'chart.js'
import styled from 'styled-components'

const ChartListContainer = styled.ul`
  display: 'flex';
  flex-direction: 'column';
  align-items: 'center';
`

const ChartHeader = styled.h6`
  color: '#4a4a4a';
  text-align: center;
`

ChartJS.register(...registerables)

const SkillChartList: React.FC<SkillListType> = ({ type, skills }) => {
  // Register ChartJS components using ChartJS.register
  console.log(skills)
  console.log(skills.map((skill) => skill.proficiency))

  const data = {
    labels: skills.map((skill) => skill.name),
    datasets: [
      {
        label: type,
        data: skills.map((skill) => skill.proficiency),
        fill: true,
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(75, 192, 192)',
          'rgb(255, 205, 86)',
          'rgb(201, 203, 207)',
          'rgb(54, 162, 235)'
        ]
      }
    ]
  }

  const options = {
    elements: {
      line: {
        borderWidth: 3
      }
    },
    interaction: {
      intersect: false
    }
  }

  return (
    <>
      <ChartListContainer>
        <ChartHeader>{type}</ChartHeader>
        <PolarArea data={data} options={options}></PolarArea>
      </ChartListContainer>
    </>
  )
}

export default SkillChartList
