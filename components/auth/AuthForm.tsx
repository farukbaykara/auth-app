import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity, Pressable } from 'react-native'
import React from 'react'
import { Button, TextInput, useTheme } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import RootStackParamList from '@/app/RootStackParamList';
import GoogleLogin from '@/assets/icons/icons8-google.svg'



interface AuthFormProps {
  // Define any props you need here
  formType: 'login' | 'register'; // Example prop to differentiate between login and register forms
}


export default function AuthForm(props: AuthFormProps) {

  const { formType } = props;

  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [passwordVisible, setPasswordVisible] = React.useState(false); // State to toggle password visibility

  const handleGoogleLogin = () => {
    console.log('Google login button pressed');
  };

  return (
    <>
      <SafeAreaView style={styles.safeArea}>
        <Text style={styles.title}>
          {formType === 'login' ? 'Log in to your account' : 'Create a new account'}
        </Text>
        <Text style={styles.loginText}>
          {formType === 'login'
            ? 'Welcome back! Please enter your details'
            : 'Sign up to get started'}
        </Text>
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.loginImage}
        />
        {formType === 'register' && (
          <TextInput
            label="Name"
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
        )}
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

        {/* Password Reset Link */}
        {formType === 'login' && (
          <TouchableOpacity
            style={styles.forgotPasswordButton}
            onPress={() => console.log('Forgot Password pressed')}>
            <Text style={{ fontWeight: 'bold' }}>Forgot your password?</Text>
          </TouchableOpacity>
        )}
        <View style={styles.separator} />
        {/* Log in/Register Button */}
        <Button
          mode="contained"
          buttonColor="black"
          style={{ width: '80%', marginTop: 40, borderRadius: 5 }}
          onPress={() => console.log(formType === 'login' ? 'Log in pressed' : 'Register pressed')}
        >
          {formType === 'login' ? 'Log In' : 'Sign Up'}
        </Button>
        <Button
          mode="contained"
          buttonColor="white"
          style={{ width: '80%', marginTop: 20, borderRadius: 5, borderColor: '#CCCCCC', borderWidth: 1 }}
          onPress={() => console.log('Button with Google icon pressed')}
          icon={() => <GoogleLogin width={20} height={20} />}
          textColor='black'
        >
          Log in with Google
        </Button>
        <View>

        </View>
        <View style={styles.separator} />
        {formType === 'login' && (
          <>
            <TouchableOpacity onPress={() => navigation.navigate('SignupScreen')}>
              <Text style={styles.accountText}>
                Don't have an account? Sign up
              </Text>
            </TouchableOpacity>
          </>
        )}
        {formType === 'register' && (
          <>
            <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
              <Text style={styles.accountText}>
                Already have an account? Log in
              </Text>
            </TouchableOpacity>
          </>
        )}

      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    alignItems: 'center', // Center horizontally
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 40,
  },
  loginText: {
    fontSize: 16,
    marginTop: 10,
    textAlign: 'left',
    color: '#666',
  },
  accountText: {
    fontSize: 16,
    marginTop: 10,
    textAlign: 'left',
    color: '#666',
  },
  loginImage: {
    width: 150,
    height: 150,
    marginTop: 20,
  },
  textInput: {
    backgroundColor: '#E0E0E0',
    width: '80%',
    marginTop: 20,
  },
  forgotPasswordButton: {
    marginTop: 20,
    color: 'blue',
    textAlign: 'left',
    alignSelf: 'flex-start', // Aligns the text to the left
    marginLeft: '10%', // Adds some padding from the left edge
    fontWeight: 'bold',
  },
  forgotPasswordText: {
    marginTop: 20,
    color: 'blue',
    textAlign: 'left',
    alignSelf: 'flex-start', // Aligns the text to the left
    marginLeft: '10%', // Adds some padding from the left edge
    fontWeight: 'bold',
  },
  actionButton: {
    borderRadius: 5,
    marginTop: 20,
    width: '80%',
    alignItems: 'center',
  },
  actionButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  googleImageButton: {
    width: '80%', // Match the width of other buttons
    height: 48, // Match the height of other buttons
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1, // Add a border to make the button boundaries visible
    borderColor: '#CCCCCC', // Light gray border color
    borderRadius: 5, // Rounded corners for a polished look
    backgroundColor: '#FFFFFF', // Ensure the button background is white
    overflow: 'hidden', // Ensure the image doesn't overflow the button
  },
  googleImage: {
    width: '100%', // Fill the TouchableOpacity
    height: '100%', // Fill the TouchableOpacity
    resizeMode: 'cover', // Maintain aspect ratio while filling the button
  },
  separator: {
    height: 1, // Thin line
    width: '80%', // Match the width of the inputs/buttons
    backgroundColor: '#E0E0E0', // Light gray color
    marginTop: 20, // Space above and below the line
  },
})