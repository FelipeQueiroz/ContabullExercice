import { gql } from '@apollo/client'

export const UPDATE_USER = gql`
  mutation updateUser(
    $oldEmail: String!
    $newEmail: String
    $password: String
    $name: String
    $city: String
    $favPet: String
    $favTech: String
    $married: Boolean
    $birthDay: String
  ) {
    updateUser(
      newEmail: $newEmail
      oldEmail: $oldEmail
      password: $password
      name: $name
      city: $city
      favPet: $favPet
      favTech: $favTech
      married: $married
      birthDay: $birthDay
    ) {
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
