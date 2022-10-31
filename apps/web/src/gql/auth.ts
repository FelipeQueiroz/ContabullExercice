import { gql } from '@apollo/client'

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      access_token
    }
  }
`

export const CREATE_USER = gql`
  mutation createUser($email: String!, $password: String!) {
    createUser(email: $email, password: $password) {
      email
      password
    }
  }
`

export const ME = gql`
  query me($access_token: String!) {
    me(access_token: $access_token) {
      id
      email
      name
      birthDay
      city
      favPet
      favTech
      married
    }
  }
`
