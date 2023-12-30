import * as Yup from 'yup'
export const validateForm = {
    schema :  Yup.object().shape({
    email: Yup.string().email().required('Email is required.'),
    password: Yup.string().required('Password is required.')
  })
,
  initials:{
    email: "",
    password: "",
  }
}