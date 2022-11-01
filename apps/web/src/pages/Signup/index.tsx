/* eslint-disable react/no-unescaped-entities */
import { Center, Flex, Image, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import LeadUpLogo from '../../assets/LeadUp.png'
import SignupForm from '../../components/form/SignupForm'
import { StyledButton, Title } from './styles'

export const Signup = () => {
  return (
    <Flex
      align={'center'}
      w="100%"
      height={'80vh'}
      gap={20}
      display={{ md: 'flex', base: 'block' }}
    >
      <Center
        display="block"
        width={{ md: '48%', base: '100%' }}
        maxW={'28.125rem'}
        ml="auto"
        mr="auto"
      >
        <Title>Create account</Title>
        <SignupForm />
        <Text textAlign={'center'} mt="0.9rem" colorScheme="gray">
          Already have an account?
        </Text>
        <Link to="/">
          <StyledButton w="100%">Login</StyledButton>
        </Link>
      </Center>
      <Center width={{ md: '48%', base: '100%' }} mt={{ md: 0, base: '5rem' }}>
        <Image src={LeadUpLogo} alt="LeadUp Logo" alignSelf={'center'} />
      </Center>
    </Flex>
  )
}
