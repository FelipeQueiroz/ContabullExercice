import React from 'react'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import App from './App'
import './index.css'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './core/theme'

const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql',
  cache: new InMemoryCache(),
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <ChakraProvider>
        <ThemeProvider theme={defaultTheme}>
          <App />
        </ThemeProvider>
      </ChakraProvider>
    </ApolloProvider>
  </React.StrictMode>,
)
