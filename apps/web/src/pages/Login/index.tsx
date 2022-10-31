/* eslint-disable react/no-unescaped-entities */
import { Center, Flex, Image } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import LeadUpLogo from '../../assets/LeadUp.png'
import LoginForm from '../../form/LoginForm'
import { StyledButton, StyledText, Title } from './styles'

export const Login = () => {
  return (
    <Flex align={'center'} w="100%" height={'80vh'} gap={20}>
      <Center
        display="block"
        width="48%"
        maxW={'28.125rem'}
        ml="auto"
        mr="auto"
      >
        <Title>Sign-in</Title>
        <LoginForm />
        <StyledText textAlign={'center'}>don't have account yet?</StyledText>
        <Link to="/signup">
          <StyledButton w="100%">Create an account</StyledButton>
        </Link>
      </Center>
      <Center width="48%">
        <Image src={LeadUpLogo} alt="LeadUp Logo" alignSelf={'center'} />
      </Center>
    </Flex>
  )
}
