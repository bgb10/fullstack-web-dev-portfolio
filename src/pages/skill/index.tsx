import React from 'react'
import { gql, useQuery } from '@apollo/client'
import SkillLayout from '@components/templates/SkillLayout'

const query = gql`
  query MyQuery {
    skillLists {
      skills {
        ... on Skill {
          name
          proficiency
        }
      }
      type
    }
  }
`

export default function Skill() {
  const { loading, error, data } = useQuery(query)
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error : {error.message}</p>

  return (
    <>
      <SkillLayout items={data['skillLists']}></SkillLayout>
    </>
  )
}
