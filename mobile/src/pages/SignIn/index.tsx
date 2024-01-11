import React, {useContext, useState} from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native'
import { AuthContext } from '../../contexts/AuthContext';

export default function SignIn(){
  const {signIn, loadingAuth} = useContext(AuthContext)

  const [email, setEmail] = useState('');
  const [password, SetPassword] = useState('');

  async function handleLogin(){
    if(email === '' || password === ''){
      return;
    }

    await signIn({email, password})
    
  }

  return(
    <View style={styles.container}>
      <Image 
        style={styles.logo}
        source={require('../../assets/logo.png')}
      />

      <View style={styles.inputContainer}>
        <TextInput
          placeholder='Digite seu e-mail'
          style={styles.input}
          placeholderTextColor='#F0F0F0'
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          placeholder='Digite sua senha'
          style={styles.input}
          placeholderTextColor='#F0F0F0'
          secureTextEntry={true}
          value={password}
          onChangeText={SetPassword}
        />

        <TouchableOpacity style={styles.button} onPress={handleLogin} >
          {loadingAuth? (
            <ActivityIndicator size={25} color="#FFF"/>
          ) : (
            <Text style={styles.buttonText} >Acessar</Text>
          )}
          
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor:'#1D1D2E',
  },
  logo:{
    marginBottom:18,
  },
  inputContainer:{
    width: '95%',
    alignItems: 'center',
    justifyContent:'center',
    paddingVertical: 32,
    paddingHorizontal: 14,
  },
  input:{
    width:'95%',
    height:40,
    backgroundColor: '#101026',
    marginBottom: 12,
    borderRadius: 4,
    paddingHorizontal: 8,
    color: '#FFF',

  },
  button:{
    width: '95%',
    height: 40,
    backgroundColor: '#3FFFA3',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText:{
    fontSize: 18,
    fontWeight: 'bold',
    color: '#101026'
  }
})