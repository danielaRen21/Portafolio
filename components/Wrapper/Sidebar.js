import {Tabs, TabList, Tab, Spacer, Text, Grid} from '@chakra-ui/react';

import Link from 'next/link';
import {useSession} from 'next-auth/react';
import {signOut, callbackUrl} from 'next-auth/react';

import {routes} from '../../utils/routes';

const Sidebar = () => {
  const {data: session} = useSession();
  console.log(session);
  return (
    <Tabs defaultIndex='none'>
      <TabList>
        <Tab>
          <Link href={routes.home}>
            <a>Inicio</a>
          </Link>
        </Tab>
        <Tab>
          <Link href={routes.users}>
            <a>usuarios</a>
          </Link>
        </Tab>
        <Spacer />
        <Tab>
          <Grid>
            <Text>{session.user.name}</Text>
            <Link href={routes.singOut}>
              <a
                onClick={() => {
                  signOut({callbackUrl: '/'});
                }}
              >
                Cerrar sesion
              </a>
            </Link>
          </Grid>
        </Tab>
      </TabList>
    </Tabs>
  );
};

export default Sidebar;

/*
<Flex width='100px' margin='auto' padding={2}>
        <Box>
          <Link href={routes.home}>
            <a>Inicio</a>
          </Link>
        </Box>
        <Box marginLeft={5}>
          <Link href={routes.users}>
            <a>usuarios</a>
          </Link>
        </Box>
        {session && (
          <Box marginLeft={5}>
          <Link href="/api/auth/signout">
            <a onClick={()=>{
              signOut()
            }}>Sign Out</a>
          </Link>
        </Box>
        )}
      </Flex>
*/
