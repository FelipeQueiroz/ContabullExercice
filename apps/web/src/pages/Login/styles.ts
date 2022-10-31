import { Button, Text } from '@chakra-ui/react'
import styled, { css } from 'styled-components'

export const Title = styled.h1`
  font-weight: 700;
  font-size: 1.875rem;
  margin-bottom: 2rem;
  text-align: left;
`

export const StyledText = styled(Text)`
  ${({ theme }) => css`
    color: ${theme.colors.gray600};
    margin-top: 0.9rem;
  `}
`

export const StyledButton = styled(Button)`
  margin: 0.9rem 0;
`
