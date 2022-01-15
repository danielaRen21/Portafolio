import {api} from '../../services/api';
import {gql} from 'graphql-request';


export const userServices = api.injectEndpoints({
  endpoints: (build) => ({
    getUsers: build.query({
      query: () => ({
        document: gql`
          query Query {
            characters(page: 2, filter: {name: "Morty"}) {
              info {
                count
              }
            }
          }
        `,
        transformResponse: (data) => data.data,
      }),
    }),
  }),
});

export const {useGetUsersQuery} = userServices;

