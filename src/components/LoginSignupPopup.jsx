import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const LoginSignupPopup = () => {
  return (
    <View style={styles.LoginSignupPopup_container}>
      <View style={styles.LoginSignupPopup_content_ui}>
        <Text style={styles.title}>Sign Up!</Text>
        <Text>Signup to SpeakerOre using your Gmail account</Text>
        <TouchableOpacity style={styles.button}>
          <View style={styles.buttonIcon}>
            {/* Replace with appropriate SVG component */}
          </View>
          <Text>Continue with Google</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  LoginSignupPopup_container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  LoginSignupPopup_content_ui: {
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonIcon: {
    width: 31,
    height: 31,
    marginRight: 10,
    // Add styles for SVG component
  },
});

export default LoginSignupPopup;
