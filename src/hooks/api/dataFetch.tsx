import { useMutation, useQuery,useQueryClient  } from '@tanstack/react-query';
import axios from 'axios';



const getTestData = async () => {
  const data = await axios.get('https://my-json-server.typicode.com/typicode/demo/posts');
  return data;
};
export const useGetTestData = (isInit: boolean) => {
  return useQuery(['getTestData'], () => getTestData(), { enabled: isInit });
};


const registerMember = async (props: any) => {
  const { data } = await  axios.post('https://my-json-server.typicode.com/typicode/demo/posts',props)
  return data;
};

export const useRegisterMember = ({ handleError }: { handleError: (error: any) => void }) => {

  return useMutation(registerMember, {
    onSuccess: (data) => {
    },
    onError: (error) => {
      handleError(error);
    },
  });
};
