/* eslint-disable react/no-unescaped-entities */
import { Center, Flex, Image } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import LeadUpLogo from '../../assets/LeadUp.png'
import SignupForm from '../../form/SignupForm'
import { StyledButton, StyledText, Title } from './styles'

export const Signup = () => {
  return (
    <Flex align={'center'} w="100%" height={'80vh'} gap={20}>
      <Center
        display="block"
        width="48%"
        maxW={'28.125rem'}
        ml="auto"
        mr="auto"
      >
        <Title>Create account</Title>
        <SignupForm />
        <StyledText textAlign={'center'}>Already have an account?</StyledText>
        <Link to="/">
          <StyledButton w="100%">Login</StyledButton>
        </Link>
      </Center>
      <Center width="48%">
        <Image src={LeadUpLogo} alt="LeadUp Logo" alignSelf={'center'} />
      </Center>
    </Flex>
  )
}
