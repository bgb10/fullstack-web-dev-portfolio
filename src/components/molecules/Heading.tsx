import { ReactNode } from 'react'
import styled from 'styled-components'

const HeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

const Title = styled.h1`
  line-height: 4rem;
  white-space: pre;

  @media (max-width: 480px) {
    font-size: 3.062rem;
    line-height: 3.5rem;
  }
`

export const Description = styled.h5`
  color: #6c6c6c;
  font-weight: 400;

  @media (max-width: 480px) {
    font-size: 1.25rem;
  }
`

export type HeadingProps = {
  title: string
  description?: string
  children?: ReactNode
}

const Heading = ({ title, description, children }: HeadingProps) => (
  <HeadingContainer>
    <Title>{title}</Title>
    {description && <Description>{description}</Description>}
    {children}
  </HeadingContainer>
)

export default Heading
