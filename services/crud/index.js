import { api } from "../../services/api";
import {gql} from 'graphql-request';


export const crudService = api.injectEndpoints({
    baseQuery: fetchBaseQuery({ baseUrl: '/crud/' }),
    endpoints: (build) => ({
        getStart: build.query({
          query: () => ({
            document: gql`
              query Query {
                characters {
                  results {
                    name
                  }
                }
            } 
            `,
            transformResponse: (response) => response.data,
          }),
        }),
      }),
    })
    
    export const {useGetCrudQuery} = crudService;
