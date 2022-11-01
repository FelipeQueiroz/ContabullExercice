import { useMutation } from '@apollo/client'
import {
  Button,
  FormControl,
  FormErrorMessage,
  useToast,
} from '@chakra-ui/react'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import * as yup from 'yup'
import { CREATE_USER } from '../gql/auth'
import { StyledInput } from './styles'
import { SignUpFormInputs } from './types'

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
})

export default function SignupForm() {
  const [signUp] = useMutation(CREATE_USER)
  const navigate = useNavigate()
  const toast = useToast()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormInputs>({
    mode: 'onBlur',
    resolver: yupResolver(schema),
  })

  const onSubmit = async (values: SignUpFormInputs) => {
    const { errors } = await signUp({
      variables: { email: values.email, password: values.password },
    })
    if (!errors) {
      navigate('/')
      toast({
        title: 'Create an account with success.',
        status: 'success',
        duration: 9000,
        position: 'top',
        isClosable: true,
      })
    }
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
      <FormControl
        {...register('confirmPassword')}
        isInvalid={!!errors?.confirmPassword?.message}
        isRequired
      >
        <StyledInput
          type="password"
          placeholder="Confirm password"
          name="confirmPassword"
        />
        <FormErrorMessage ml={1}>
          {errors?.confirmPassword?.message}
        </FormErrorMessage>
      </FormControl>
      <Button
        onClick={handleSubmit(onSubmit)}
        mt="6"
        w="100%"
        backgroundColor={'#592FC1'}
        colorScheme="purple"
        variant="solid"
        disabled={!!errors.email || !!errors.password}
      >
        Create account
      </Button>
    </form>
  )
}
