import {
  Box,
  Button,
  Center,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  useBoolean,
} from '@chakra-ui/react';

import {getCsrfToken} from 'next-auth/react';

import {useDispatch} from 'react-redux';
import {authLogin} from '../../store/reducers/app/thunks';

import {Formik} from 'formik';

import {SignInSchema} from '../auth/signInSchema';

export default function SignIn({csrfToken}) {
  const [showingPassword, {toggle: togglePasswordVisibility}] = useBoolean();
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    dispatch(
      authLogin({
        email: values.email,
        password: values.password,
        csrfToken,
      })
    );
  };

  return (
    <Center
      bgGradient='linear(to-l, #070707, #FBF9FB)'
      width='100%'
      height='757px'
      minH='100vh'
    >
      <Formik
        validationSchema={SignInSchema}
        initialValues={{email: '', password: ''}}
        onSubmit={handleSubmit}
      >
        {(props) => (
          <form onSubmit={props.handleSubmit}>
            <Box
              bg='white'
              width={400}
              margin='auto'
              p={6}
              d='flex'
              flexDir='column'
            >
              <Heading size='lg' alignSelf='center' mb={4}>
                INTRANET
              </Heading>
              <FormControl isInvalid={props.errors.email}>
                <FormLabel htmlFor='email'>Correo electrónico</FormLabel>
                <Input
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.email}
                  name='email'
                  id='email'
                  type='email'
                  placeholder='Ingresa tu correo'
                  borderRadius='none'
                />
                <FormErrorMessage>{props.errors.email}</FormErrorMessage>
                <FormHelperText>
                  Nunca compartas tu correo electrónico.
                </FormHelperText>
              </FormControl>
              <FormControl isInvalid={props.errors.password}>
                <FormLabel htmlFor='password'>Contraseña</FormLabel>
                <InputGroup>
                  <Input
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.password}
                    name='password'
                    id='password'
                    type={showingPassword ? 'text' : 'password'}
                    placeholder='Ingresa tu contraseña'
                    borderRadius='none'
                  />
                  <InputRightElement>
                    {showingPassword ? (
                      <Text
                        marginRight={10}
                        cursor='pointer'
                        onClick={togglePasswordVisibility}
                      >
                        Ocultar
                      </Text>
                    ) : (
                      <Text
                        marginRight={10}
                        cursor='pointer'
                        onClick={togglePasswordVisibility}
                      >
                        Mostrar
                      </Text>
                    )}
                  </InputRightElement>
                </InputGroup>
                <FormErrorMessage>{props.errors.password}</FormErrorMessage>
                <FormHelperText marginBottom={5}>
                  Nunca compartas tu contraseña.
                </FormHelperText>
              </FormControl>
              <Button
                type='submit'
                borderRadius='none'
                backgroundColor='black'
                _hover='none'
              >
                Iniciar sesion
              </Button>{' '}
            </Box>
          </form>
        )}
      </Formik>
    </Center>
  );
}

// This is the recommended way for Next.js 9.3 or newer
export async function getServerSideProps(context) {
  return {
    props: {
      csrfToken: await getCsrfToken(context),
    },
  };
}
