import styled from 'styled-components'

export type ItemProps = {
  horizontal?: boolean
  children?: React.ReactNode
}

const ItemContainer = styled.div<ItemProps>`
  display: flex;
  flex-direction: ${({ horizontal = false }) =>
    horizontal ? 'rows' : 'column'};
  font-family: 'Inter';
  padding: 0.75rem 0;
  margin: 0.75rem 0;

  &:first-child {
    margin-top: 0;
  }

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const Item: React.FC<ItemProps> = ({ horizontal, children }) => {
  return <ItemContainer horizontal={horizontal}>{children}</ItemContainer>
}

export default Item
