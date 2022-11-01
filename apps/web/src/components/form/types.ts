export type UpdateFormInput = {
  email: string
  name: string
  birthDay: string
  city: string
  favPet: string
  favTech: string
  married: string
}

export type UpdateFormData = {
  me: {
    email: string
    name: string
    birthDay: string
    city: string
    favPet: string
    favTech: string
    married: string
  }
}

export type SignUpFormInputs = {
  email: string
  password: string
  confirmPassword: string
}

export type LoginFormInputs = {
  email: string
  password: string
}
