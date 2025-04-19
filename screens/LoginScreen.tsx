

import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'

import AuthForm from '@/components/auth/AuthForm';


export default function LoginScreen() {

  return (
    <AuthForm
      formType="login"
    />
  );
}

const styles = StyleSheet.create({
  safeArea: {
    alignItems: 'center', // Center horizontally
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  loginImage: {
    width: 150,
    height: 150,
    marginTop: 40,
  },
  textInput: {
    backgroundColor: '#E0E0E0',
    width: '80%',
    marginTop: 20,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
    marginTop: 20,
  },
  eyeIcon: {
    position: 'absolute',
    right: 10,
  },
});