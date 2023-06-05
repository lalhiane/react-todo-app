import {

  ApolloClient,

  InMemoryCache,

  ApolloProvider,

  HttpLink,

  from

} from "@apollo/client";

import { onError } from "@apollo/client/link/error";

import Form from "./components/Form";

const errorLink = onError(({ graphQLErrors }) => {
  
  if (graphQLErrors) {

    graphQLErrors.map(({ message }) => {
      
      alert(`Graphql Error => ${message}`);

    });

  }

});

const link = from([

  errorLink,

  new HttpLink({ uri: "http://localhost:8080/graphql" })

]);

const client = new ApolloClient({

  cache: new InMemoryCache(),

  link: link,

});

function App() {

  return (

    <ApolloProvider client={client}>

      <Form />

    </ApolloProvider>

  );

}

export default App
