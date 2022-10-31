import { Center, Flex } from '@chakra-ui/react'
import UpdateUserForm from '../../form/UpdateUserForm'
import { Title, Wrapper } from './styles'

export const UpdateProfile = () => {
  return (
    <Flex
      width={'100%'}
      height={'80vh'}
      alignContent={'center'}
      justifyContent={'center'}
    >
      <Center>
        <Wrapper>
          <Title>Update Profile</Title>
          <UpdateUserForm />
        </Wrapper>
      </Center>
    </Flex>
  )
}
