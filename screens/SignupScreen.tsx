import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import LoginScreen from "react-native-login-screen";
import AuthForm from '@/components/auth/AuthForm';



export default function SignupScreen() {


  return (
    <AuthForm
      formType="register"
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