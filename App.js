import React from 'react';
import { StyleSheet, ScrollView, Modal, Button} from 'react-native';

import Header from './app/components/Header';
import LoginScreen from './screens/LoginScreen';

export default function App() {
  const [isLoginMode, setIsLoginMode] = React.useState(true);
    return (
    <ScrollView style={styles.container}>
      <Header title = "Fast Food"/>
    
       {isLoginMode ? <LoginScreen/> : null}
      
      { isLoginMode ? <Button title = 'Login' color ='#A723AB' onPress ={()=> setIsLoginMode(false)}/> : null}
      { !isLoginMode ? <Button title = 'Logout' color ='#A723AB' onPress ={()=> setIsLoginMode(true)}/> : null}
    </ScrollView>
    );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
  }
  
});
