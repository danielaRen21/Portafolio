import { api } from "../../services/api";
import {gql} from 'graphql-request';


export const homeServices = api.injectEndpoints({
    endpoints: (build) => ({
        getStart: build.query({
          query: () => ({
            document: gql`
              query Query {
                characters(page: 2, filter: {name: "Morty"}) {
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
    
    export const {useGetStartQuery} = homeServices;
