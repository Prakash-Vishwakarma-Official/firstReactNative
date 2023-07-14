import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const PinkButton = ({ onPress, title }) => {

    const styles = StyleSheet.create({
        button: {
            backgroundColor: 'rgba(239, 118, 118, 1)',
            borderRadius: 5,
            // paddingLeft:60,
            // paddingVertical: 6,
            // paddingHorizontal: 20,
            height: 30,
            // marginTop: 15,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '38%'
        },
        buttonText: {
            color: 'white',
            fontSize: 10,
            // fontWeight: 800,
        },
    });

    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    )
};


export default PinkButton;
