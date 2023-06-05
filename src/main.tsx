import React from 'react'

import ReactDOM from 'react-dom/client'

import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client"

import App from './App.tsx'

import './index.css'

const client = new ApolloClient({

  uri: "http://localhost:8070/graphql",

  cache: new InMemoryCache()

});


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(

  <React.StrictMode>

    <ApolloProvider client={client}>

      <App />
      
    </ApolloProvider>

  </React.StrictMode>,

)
