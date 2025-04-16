

import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import RootStackParamList from '@/app/RootStackParamList';
import { SafeAreaView } from 'react-native-safe-area-context';

import GoogleLogin from '@/components/auth/GoogleLogin';
import { TextInput, useTheme } from 'react-native-paper';


export default function LoginScreen() {

  const navigation = useNavigation<StackNavigationProp<RootStackParamList, 'LoginScreen'>>();
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [passwordVisible, setPasswordVisible] = React.useState(false); // State to toggle password visibility
  const { colors, dark } = useTheme();


  return (
    <>
      <SafeAreaView style={styles.safeArea}>
        <Text style={styles.title}>Login</Text>
        <Image source={require('@/assets/images/partial-react-logo.png')} style={styles.loginImage} />
        <TextInput
          label="Email"
          value={username}
          onChangeText={text => setUsername(text)}
          style={styles.textInput}
          mode="outlined"
          outlineColor="blue"
          activeOutlineColor="blue"
          selectionColor="blue"
          underlineColor="blue"
          activeUnderlineColor="blue"
        />
        <TextInput
          label="Password"
          value={password}
          onChangeText={text => setPassword(text)}
          secureTextEntry={!passwordVisible} // Toggle visibility
          style={styles.textInput}
          mode="outlined"
          outlineColor="blue"
          activeOutlineColor="blue"
          selectionColor="blue"
          underlineColor="blue"
          activeUnderlineColor="blue"
          right={
            <TextInput.Icon
              icon={passwordVisible ? 'eye' : 'eye-off'} // Use 'icon' instead of 'name'
              onPress={() => setPasswordVisible(!passwordVisible)} // Toggle password visibility
            />
          }
        />
      </SafeAreaView>
    </>
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