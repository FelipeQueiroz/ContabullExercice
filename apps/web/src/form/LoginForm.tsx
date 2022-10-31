/* eslint-disable react-hooks/rules-of-hooks */
import {
  Button,
  FormControl,
  FormErrorMessage,
  useToast,
} from '@chakra-ui/react'
import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation } from '@apollo/client'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { StyledInput } from './styles'
import { LOGIN } from '../gql/auth'
import { useNavigate } from 'react-router-dom'

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
})

type LoginFormInputs = {
  email: string
  password: string
}

export default function LoginForm() {
  const navigate = useNavigate()
  const toast = useToast()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    mode: 'onBlur',
    resolver: yupResolver(schema),
  })
  const [login] = useMutation(LOGIN)

  const onSubmit = async (values: LoginFormInputs) => {
    const { data } = await login({
      variables: { email: values.email, password: values.password },
    })
    localStorage.setItem('auth', data.login.access_token)
    navigate('/dashboard')
    toast({
      title: 'Login with success.',
      status: 'success',
      duration: 9000,
      position: 'top',
      isClosable: true,
    })
  }

  return (
    <form>
      <FormControl isInvalid={!!errors?.email?.message} isRequired>
        <StyledInput type="email" placeholder="Email" {...register('email')} />
        <FormErrorMessage ml={1}>{errors?.email?.message}</FormErrorMessage>
      </FormControl>
      <FormControl
        {...register('password')}
        isInvalid={!!errors?.password?.message}
        isRequired
      >
        <StyledInput type="password" placeholder="Password" name="password" />
        <FormErrorMessage ml={1}>{errors?.password?.message}</FormErrorMessage>
      </FormControl>
      <Button
        onClick={handleSubmit(onSubmit)}
        mt="6"
        w="100%"
        variant="solid"
        backgroundColor={'#592FC1'}
        colorScheme="purple"
        disabled={!!errors.email || !!errors.password}
      >
        Login
      </Button>
    </form>
  )
}
