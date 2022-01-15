import { Text } from '@chakra-ui/react';

import withPrivateRoute from '../components/PrivateRoute';

import Wrapper from '../components/Wrapper';

const Home = () => {
  return (
    <Wrapper>
      <Text textAlign='center'>HOME</Text>
    </Wrapper>
  );
}

export default withPrivateRoute(Home);
