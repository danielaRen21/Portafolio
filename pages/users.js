import { Table, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react';

import {useGetStartQuery} from '../services/home'

import withPrivateRoute from '../components/PrivateRoute';

import Wrapper from '../components/Wrapper';
import Message from '../components/Message';

const User = () => {
  const {data=[], isFetching} = useGetStartQuery()
  console.log(data)
  return (
    <Wrapper>
      <Text textAlign='center'>USUARIOS</Text>
      <Table variant='simple'>
        <Thead>
          <Tr>
            <Th>Nombre</Th>
            <Th>Correo</Th>
            <Th>Telefono</Th>
          </Tr>
        </Thead>
        <Tbody>
          {
            data?.characters?.results.map((user, index)=>(
              <Tr key={index}>
              <Td>{user.name}</Td>
              <Td>{user.name}@gmail.com</Td>
              <Td>6189001122</Td>
            </Tr>
            ))

          }
        </Tbody>
      </Table>
      <Message isFetching={isFetching}/>  
    </Wrapper>
  );
};

export default withPrivateRoute(User);

