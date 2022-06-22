import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import TabNavigation from './src/navigations/TabNavigation';
import { Provider as PaperProvider } from 'react-native-paper'

const App = () => {
  return (
    <PaperProvider>
      <TabNavigation />
    </PaperProvider>
  )
}
export default App



