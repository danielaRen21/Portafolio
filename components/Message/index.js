import {useEffect} from 'react';

import {useToast, Center, CircularProgress} from '@chakra-ui/react';

const Message = ({
  size,
  isError,
  isSucces,
  isLoading,
  isFetching,
  title = 'agrega un mensaje',
  isClosable = false,
}) => {
  const toast = useToast();

  useEffect(() => {
    if (isError) {
      toast({status: 'error', title: title, isClosable: isClosable});
    }
    if (isSucces) {
      return toast({status: 'success', title: title, isClosable: isClosable});
    }
  }, [isError, isSucces, isLoading, isClosable, title, toast]);
  return (
    <>
      {isError}
      {isSucces}
      {isLoading || isFetching ? (
        <Center>
          <CircularProgress isIndeterminate size={size}/>
        </Center>
      ) : null}
    </>
  );
};

export default Message;
