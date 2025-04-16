import { TouchableOpacity, Image, Text, StyleSheet } from "react-native";
import React from 'react';



const handleGoogleLogin = () => {
  // Add your Google login logic here
  console.log('Google login button pressed');
};



export default function GoogleLogin() {
  return (
    <TouchableOpacity style={styles.googleButton} onPress={handleGoogleLogin}>
      <Image
        source={require('@/assets/images/partial-react-logo.png')} // Add a Google logo to your assets
        style={styles.googleLogo}
      />
      <Text style={styles.googleButtonText}>Continue with Google</Text>
    </TouchableOpacity>
  )

}

const styles = StyleSheet.create({
  safeArea: {
    alignItems: 'center', // Center horizontally
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3, // For Android shadow
  },
  googleLogo: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  googleButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
});
