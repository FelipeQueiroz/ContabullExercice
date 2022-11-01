import { useQuery } from '@apollo/client'
import { Button, Center, Flex, Text } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { ME } from '../../gql/auth'
import { StyledLink, Wrapper } from './styles'

export const Dashboard = () => {
  const navigate = useNavigate()
  const { data, error } = useQuery(ME, {
    variables: {
      access_token: localStorage.getItem('auth'),
    },
  })

  const logout = () => {
    localStorage.removeItem('auth')
    navigate('/')
  }

  if (error) navigate('/')
  if (!data) return null
  return (
    <Flex
      width={'100%'}
      height={'80vh'}
      alignContent={'center'}
      justifyContent={'center'}
    >
      <Center>
        <Wrapper>
          <h1>Welcome, {data.me.name || 'User with no name'}</h1>
          <Text mt="2.188rem" mb="2.188rem">
            Checkout your profile
          </Text>
          <Text>User ID: {data.me.id}</Text>
          <Text>Name: {data.me.name || 'No user name defined'}</Text>
          <Text>City: {data.me.city || 'No city defined'}</Text>
          <br />
          <Text>
            Favorite pet: {data.me.favPet || 'No favorite pet defined'}
          </Text>
          <Text>
            Favorite tech stack:{' '}
            {data.me.favTech || 'No favorite tech stack defined'}
          </Text>
          <Text>
            Married:{' '}
            {data.me.married
              ? data.me.married.toString()
              : 'No married information defined'}
          </Text>
          <Text>Birthday: {data.me.birthDay || 'No birthday informed'}</Text>
          <br />
          <StyledLink to="/dashboard/update" id="editProfileLink">edit profile</StyledLink>
          <Button colorScheme="red" onClick={logout} w="100%" mt="2.1rem">
            Logout
          </Button>
        </Wrapper>
      </Center>
    </Flex>
  )
}
