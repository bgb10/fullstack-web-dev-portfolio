import React from 'react'
import ProjectLayout from '@components/templates/ProjectLayout'
import { projectList } from 'src/data'
import { gql, useQuery } from '@apollo/client'
import stringToDateConverter from 'src/utils/stringToDateConverter'

const query = gql`
  query Projects {
    projects {
      details {
        raw
      }
      name
      description
      skills {
        ... on Skill {
          skill
        }
      }
    }
  }
`

export default function Project() {
  const { loading, error, data } = useQuery(query)
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error : {error.message}</p>

  return (
    <>
      <ProjectLayout items={data['projects']}></ProjectLayout>
    </>
  )
}
