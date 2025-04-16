import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import LoginScreen from "react-native-login-screen";



export default function SignupScreen() {

  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [rePassword, setRePassword] = React.useState('');


  return (
    <LoginScreen
      logoImageSource={require('@/assets/images/partial-react-logo.png')}
      onLoginPress={() => { }}
      onSignupPress={() => { }}
      onEmailChange={setUsername}
      loginButtonText={'Create an account'}
      disableSignup
      textInputChildren={
        <View style={styles.passwordTextInputContainer}>
          <TextInput
            placeholder="Re-Password"
            secureTextEntry
            onChangeText={setRePassword}
          />
        </View>
      }
      onPasswordChange={setPassword}
      enablePasswordValidation
    />
  )
}

const styles = StyleSheet.create({
  passwordTextInputContainer: {
    marginTop: 16,
    alignItems: "center",
    justifyContent: "center",
  },
})