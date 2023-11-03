import React from 'react'
import styled from 'styled-components'
import Heading from '@components/molecules/Heading'
import { gql, useQuery } from '@apollo/client'

type Props = {}

const MainHeaderWrapper = styled.div`
  display: flex;
  gap: 1.75rem;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`

const MainHeaderWrapperReverse = styled(MainHeaderWrapper)`
  @media (max-width: 960px) {
    flex-direction: column-reverse;
  }
`

const MainHeaderContent = styled.h6`
  color: #666;
  font-weight: 400;
  white-space: pre-line;
`

const Profile = styled.div`
  min-width: 500px;
  @media (max-width: 768px) {
    width: 100%;
  }
  align-items: center;
  justify-content: center;
`

const ProfileImg = styled.div<{ src: string }>`
  height: 500px;
  background-image: url(${({ src }) => src});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`

const Border = styled.hr`
  width: 50%;
`

const query = gql`
  query MyQuery {
    introductions {
      description
      selfie {
        url
      }
    }
  }
`

export default function About(props: Props) {
  const { loading, error, data } = useQuery(query)
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error : {error.message}</p>

  return (
    <>
      <MainHeaderWrapper>
        <Heading title="Gwan-Bin Park" description="Friendly and Passionate">
          <MainHeaderContent>
            {data['introductions'][0]['description']}
          </MainHeaderContent>
        </Heading>
        <Profile>
          <ProfileImg src="https://media.graphassets.com/vwK29XG1QFk6tpmAFKQD" />
        </Profile>
      </MainHeaderWrapper>
      <Border></Border>
      <MainHeaderWrapperReverse>
        <Profile>
          <ProfileImg src="https://media.graphassets.com/ntCLm6TjTIKFYrMWbtUO" />
        </Profile>
        <Heading title="My Character">
          <MainHeaderContent>
            {data['introductions'][1]['description']}
          </MainHeaderContent>
        </Heading>
      </MainHeaderWrapperReverse>
      <Border></Border>
      <MainHeaderWrapper>
        <Heading title="My Hobbies">
          <MainHeaderContent>
            {data['introductions'][2]['description']}
          </MainHeaderContent>
        </Heading>
        <Profile>
          <ProfileImg src="https://media.graphassets.com/ZKXEDQJSaW6nKfXuDBuQ" />
        </Profile>
      </MainHeaderWrapper>
    </>
  )
}
