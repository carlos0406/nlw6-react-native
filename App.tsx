import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Text } from 'react-native'
import { HomeContainer } from './src/styles/pages/home'
import { ThemeProvider } from 'styled-components'
import theme from './src/styles/themes/theme'


export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <HomeContainer>
        <Text>Hello, expo :)</Text>
        <StatusBar style="auto" />
      </HomeContainer>
    </ThemeProvider>
  )
}
