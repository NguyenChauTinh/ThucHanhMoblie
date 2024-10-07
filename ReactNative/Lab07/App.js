import { Text, SafeAreaView, StyleSheet } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';
import FirstPage from './FirstPage.js'
import AppNavigation from './AppNavigation';

export default function App() {
  return (
    <AppNavigation />
  );
}

