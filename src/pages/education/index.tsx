import React from 'react'
import EducationLayout from '@components/templates/EducationLayout'
import { educationList } from 'src/data'
import { gql, useQuery } from '@apollo/client'
import stringToDateConverter from 'src/utils/stringToDateConverter'

const query = gql`
  query Educations {
    educations {
      country
      degree {
        ... on Degree {
          name
          major
          gpa
        }
      }
      details {
        raw
      }
      duration {
        ... on Duration {
          endedAt
          isCompleted
          startedAt
        }
      }
      institution
      isDegreeProgram
    }
  }
`

export default function Education() {
  const { loading, error, data } = useQuery(query)
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error : {error.message}</p>

  const convertedData = stringToDateConverter(data, 'educations')

  return (
    <>
      <EducationLayout items={convertedData['educations']}></EducationLayout>
    </>
  )
}
