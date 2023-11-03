import React from 'react'
import ExperienceLayout from '@components/templates/ExperienceLayout'
import { gql, useQuery } from '@apollo/client'
import stringToDateConverter from 'src/utils/stringToDateConverter'

const query = gql`
  query Experiences {
    experiences {
      company
      job
      details {
        raw
      }
      duration {
        ... on Duration {
          isCompleted
          startedAt
          endedAt
        }
      }
    }
  }
`

export default function Experience() {
  const { loading, error, data } = useQuery(query)
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error : {error.message}</p>

  const convertedData = stringToDateConverter(data)

  return (
    <>
      <ExperienceLayout items={convertedData['experiences']}></ExperienceLayout>
    </>
  )
}
