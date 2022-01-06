import { ApolloClient, InMemoryCache } from "@apollo/client"; 
import {CONSTANS} from "../CONSTANTS";

const client = new ApolloClient({
  uri: CONSTANS.BASE_URL,
  cache: new InMemoryCache()
});

export default client
