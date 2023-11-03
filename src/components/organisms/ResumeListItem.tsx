import Item, { ItemProps } from '@components/molecules/Item'
import { DetailType, DurationType } from '@components/types'
import styled from 'styled-components'
import { ReactNode } from 'react'
import { RichText } from '@graphcms/rich-text-react-renderer'

const ItemHeader = styled.div<ItemProps>`
  display: flex;
  align-items: flex-start;
  flex-direction: ${({ horizontal }) => (horizontal ? 'column' : 'row')};
  width: ${({ horizontal }) => (horizontal ? '20%' : '100%')};
  padding-top: 0.375rem;
  margin-bottom: ${({ horizontal }) => (horizontal ? '0' : '0.25rem')};

  @media (max-width: 768px) {
    flex-direction: column;
    margin-bottom: 0.5rem;
    width: 100%;
  }
`

const ItemBody = styled.div<ItemProps>`
  width: ${({ horizontal = false }) => (horizontal ? '80%' : '100%')};
`

const ItemHeaderTitle = styled.h5<ItemProps>`
  font-weight: 500;
  margin-bottom: ${({ horizontal }) => (horizontal ? '10px' : '0px')};

  @media (max-width: 768px) {
    margin-bottom: 0.5rem;
  }
`

const ItemHeaderInfo = styled.div<ItemProps>`
  display: flex;
  flex-direction: ${({ horizontal }) => (horizontal ? 'column' : 'row')};
  align-items: ${({ horizontal }) => (horizontal ? 'flex-start' : 'center')};
  justify-content: center;

  span {
    color: #787878;
    font-weight: 400;
  }

  ${({ horizontal }) =>
    !horizontal &&
    ` span:not(:last-child) {
      padding-right: 0.375rem;
      margin-right: 0.375rem;
      border-right: 1px solid #ccc;
    }`};

  @media (max-width: 768px) {
    flex-direction: row;

    span:not(:last-child) {
      padding-right: 0.375rem;
      margin-right: 0.375rem;
      border-right: 1px solid #ccc;
    }
  }
`

type ResumeListItemProps = {
  title: string
  label?: string
  duration?: Date | DurationType
  description?: string
  details: DetailType
  horizontal?: boolean
  children?: ReactNode
}

const formatDate = (date: Date = new Date()) => {
  const month = date.getMonth() + 1
  const formattedMonth = month >= 10 ? month : '0' + month

  return date.getFullYear() + '.' + formattedMonth
}

const createHeaderInfoDuration = (duration: Date | DurationType) =>
  duration instanceof Date
    ? formatDate(duration)
    : duration.startedAt.getTime() === duration.endedAt?.getTime()
    ? formatDate(duration.startedAt)
    : formatDate(duration.startedAt) +
      ' - ' +
      (duration.isCompleted ? formatDate(duration.endedAt) : 'Present')

const ResumeListItem: React.FC<ResumeListItemProps> = ({
  title,
  label = '',
  duration,
  description,
  details,
  horizontal,
  children
}) => (
  <Item horizontal={horizontal}>
    <ItemHeader
      style={{
        justifyContent: horizontal ? 'start' : 'space-between',
        marginRight: horizontal ? '10px' : '0px'
      }}
      horizontal={horizontal}
    >
      <ItemHeaderTitle horizontal={horizontal}>{title}</ItemHeaderTitle>
      <ItemHeaderInfo horizontal={horizontal}>
        {label && (
          <span
            style={{ color: '#323232', fontWeight: horizontal ? 500 : 400 }}
          >
            {label}
          </span>
        )}
        {duration && <span>{createHeaderInfoDuration(duration)}</span>}
      </ItemHeaderInfo>
    </ItemHeader>
    <ItemBody>
      {description && (
        <div style={{ fontWeight: 500, marginBottom: '0.75rem' }}>
          {description}
        </div>
      )}
      <RichText content={details.raw}></RichText>
    </ItemBody>
    {children}
  </Item>
)

export default ResumeListItem
