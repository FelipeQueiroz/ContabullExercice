/* eslint-disable react/no-unescaped-entities */
import { Center, Flex, Image, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import LeadUpLogo from '../../assets/LeadUp.png'
import LoginForm from '../../components/form/LoginForm'
import { StyledButton, Title } from './styles'

export const Login = () => {
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
        <Title>Sign-in</Title>
        <LoginForm />
        <Text textAlign={'center'} colorScheme="cyan" mt="0.9rem">
          don't have account yet?
        </Text>
        <Link to="/signup">
          <StyledButton w="100%">Create an account</StyledButton>
        </Link>
      </Center>
      <Center width={{ md: '48%', base: '100%' }} mt={{ md: 0, base: '5rem' }}>
        <Image src={LeadUpLogo} alt="LeadUp Logo" alignSelf={'center'} />
      </Center>
    </Flex>
  )
}
