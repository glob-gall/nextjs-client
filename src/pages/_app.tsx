import { ApolloProvider } from '@apollo/client'
import { Provider as AuthProvider } from 'next-auth/client'

import { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import { useApollo } from 'utils/apollo'

import GlobalStyles from '../styles/global'
import theme from '../styles/theme'

function App({ Component, pageProps }: AppProps) {
  const client = useApollo(pageProps.initialApolloState)
  return (
    <AuthProvider session={pageProps.session}>
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <Head>
            <title>Won Games</title>
            <link rel="shortcut icon" href="/img/icon-512.png" />
            <link rel="apple-touch-icon" href="/img/icon-512.png" />
            <link rel="manifest" href="/manifest.json" />
            <meta
              name="description"
              content="A store made by gamers to gamers"
            />
          </Head>
          <GlobalStyles />
          <Component {...pageProps} />
        </ThemeProvider>
      </ApolloProvider>
    </AuthProvider>
  )
}

export default App
