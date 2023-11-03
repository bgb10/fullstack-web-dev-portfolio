import React from 'react'
import styled from 'styled-components'
import Heading from '@components/molecules/Heading'
import { gql, useQuery } from '@apollo/client'

type Props = {}

const MainHeaderWrapper = styled.div`
  display: flex;
  gap: 1.75rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const MainHeaderContent = styled.h6`
  color: #666;
  font-weight: 400;
`

const Profile = styled.div`
  min-width: 500px;
  @media (max-width: 768px) {
    width: 100%;
  }
`

const ProfileImg = styled.div`
  height: 500px;
  background-image: url('https://newsimg-hams.hankookilbo.com/2022/04/20/44a2c4aa-84ea-4a89-b9a6-57ca3cf17bd8.jpg');
  background-size: contain;
  background-repeat: no-repeat;
`

const query = gql`
  query introduction {
    introduction(where: { id: "cloi8ce0c9hxf0a12wu4axih8" }) {
      description
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
        <Heading title="Gwan-Bin Park">
          <MainHeaderContent>
            {data['introduction']['description']}
          </MainHeaderContent>
        </Heading>
        <Profile>
          <ProfileImg />
        </Profile>
      </MainHeaderWrapper>
    </>
  )
}
