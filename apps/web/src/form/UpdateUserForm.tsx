/* eslint-disable react-hooks/rules-of-hooks */
import { useMutation, useQuery } from '@apollo/client'
import {
  Button,
  Checkbox,
  FormControl,
  FormErrorMessage,
  useToast,
} from '@chakra-ui/react'
import { yupResolver } from '@hookform/resolvers/yup'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import * as yup from 'yup'
import { ME } from '../gql/auth'
import { UPDATE_USER } from '../gql/user'
import { StyledInput } from './styles'
import { UpdateFormData, UpdateFormInput } from './types'

const schema = yup.object().shape({
  email: yup.string().email().notRequired(),
  name: yup.string().notRequired().nullable(),
  birthDay: yup.string().notRequired().nullable(),
  city: yup.string().notRequired().nullable(),
  favPet: yup.string().notRequired().nullable(),
  favTech: yup.string().notRequired().nullable(),
  married: yup.boolean().notRequired().nullable(),
})

export default function UpdateUserForm() {
  const [user, setUser] = useState<UpdateFormInput>()
  const navigate = useNavigate()
  const toast = useToast()

  const { data, error } = useQuery<UpdateFormData>(ME, {
    variables: {
      access_token: localStorage.getItem('auth'),
    },
  })
  const [updateUser] = useMutation(UPDATE_USER, {
    context: {
      headers: { Authorization: 'Bearer ' + localStorage.getItem('auth') },
    },
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<UpdateFormInput>({
    mode: 'onBlur',
    resolver: yupResolver(schema),
    defaultValues: user,
  })

  useEffect(() => {
    if (data) {
      setUser(data?.me)
      reset(data?.me)
    }
  }, [data, reset])

  const onSubmit = async (values: UpdateFormInput) => {
    await updateUser({
      variables: {
        oldEmail: data?.me.email,
        newEmail: values.email,
        name: values.name,
        birthDay: values.birthDay,
        city: values.city,
        favPet: values.favPet,
        favTech: values.favTech,
        married: values.married,
      },
    })
    navigate('/dashboard')
    toast({
      title: 'Edit profile with success.',
      status: 'success',
      duration: 9000,
      position: 'top',
      isClosable: true,
    })
  }

  if (error) navigate('/')

  return (
    <form>
      <FormControl isInvalid={!!errors?.email?.message} isRequired>
        <StyledInput type="email" placeholder="Email" {...register('email')} />
        <FormErrorMessage ml={1}>{errors?.email?.message}</FormErrorMessage>
      </FormControl>
      <FormControl
        {...register('name')}
        isInvalid={!!errors?.name?.message}
        isRequired
      >
        <StyledInput type="text" placeholder="Name" name="name" />
        <FormErrorMessage ml={1}>{errors?.name?.message}</FormErrorMessage>
      </FormControl>
      <FormControl
        {...register('birthDay')}
        isInvalid={!!errors?.birthDay?.message}
        isRequired
      >
        <StyledInput type="date" placeholder="BirthDay" name="birthDay" />
        <FormErrorMessage ml={1}>{errors?.birthDay?.message}</FormErrorMessage>
      </FormControl>
      <FormControl
        {...register('city')}
        isInvalid={!!errors?.city?.message}
        isRequired
      >
        <StyledInput type="text" placeholder="City" name="city" />
        <FormErrorMessage ml={1}>{errors?.city?.message}</FormErrorMessage>
      </FormControl>
      <FormControl
        {...register('favPet')}
        isInvalid={!!errors?.favPet?.message}
        isRequired
      >
        <StyledInput type="text" placeholder="Favorite Pet" name="favPet" />
        <FormErrorMessage ml={1}>{errors?.favPet?.message}</FormErrorMessage>
      </FormControl>
      <FormControl
        {...register('favTech')}
        isInvalid={!!errors?.favTech?.message}
        isRequired
      >
        <StyledInput
          type="text"
          placeholder="Favorite Tech Stack"
          name="favTech"
        />
        <FormErrorMessage ml={1}>{errors?.favTech?.message}</FormErrorMessage>
      </FormControl>
      <FormControl
        {...register('married')}
        isInvalid={!!errors?.married?.message}
        isRequired
      >
        <Checkbox name="married" mt="2.1rem" mb="2rem">
          Married
        </Checkbox>
        <FormErrorMessage ml={1}>{errors?.married?.message}</FormErrorMessage>
      </FormControl>
      <Button
        onClick={handleSubmit(onSubmit)}
        mt="6"
        w="100%"
        backgroundColor={'#592FC1'}
        colorScheme="purple"
        variant="solid"
        disabled={!!errors.email}
      >
        Update profile
      </Button>
      <Button
        onClick={() => navigate('/dashboard')}
        mt="6"
        w="100%"
        colorScheme="red"
        variant="solid"
        disabled={!!errors.email}
      >
        Cancel
      </Button>
    </form>
  )
}
