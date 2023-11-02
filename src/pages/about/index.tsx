import React from 'react'
import styled from 'styled-components'
import Heading from '@components/molecules/Heading'

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

const about = (props: Props) => {
  return (
    <>
      <MainHeaderWrapper>
        <Heading title="Gwan-Bin Park">
          <MainHeaderContent>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora,
            natus. Tenetur odio aut eos aperiam? Ullam praesentium illo itaque
            velit nulla eius incidunt, perspiciatis minus ipsum ab dolorum iste
            quod necessitatibus, voluptatibus blanditiis animi asperiores. Ad
            similique tempore sequi recusandae sapiente, rem, at dolor culpa
            nihil aspernatur quia magni beatae deserunt? Temporibus esse vero
            totam, molestias fuga laboriosam, perspiciatis voluptas minus hic
            officiis id illo facilis possimus numquam! Ipsam nam at nemo
            repudiandae necessitatibus velit sit alias excepturi asperiores odio
            explicabo, sint fuga, natus facere numquam nesciunt maiores repellat
            ut amet iste! Illum vel commodi at, consectetur ullam eaque aut.
          </MainHeaderContent>
        </Heading>
        <Profile>
          <ProfileImg />
        </Profile>
      </MainHeaderWrapper>
    </>
  )
}

export default about
