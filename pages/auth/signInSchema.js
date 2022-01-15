import * as Yup from 'yup';

//Validations
export const SignInSchema = Yup.object().shape({
  email: Yup.string().email('Correo invalido').required('Campo requerido'),
  password: Yup.string().required('Campo requerido'),
});