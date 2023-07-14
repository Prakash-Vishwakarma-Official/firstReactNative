import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const NavbarButton = ({ onPress, title, backgroundColor, color }) => {

    const styles = StyleSheet.create({
        button: {
            backgroundColor: !backgroundColor ? 'transparent' : backgroundColor,
            borderRadius: 5,
            // paddingVertical: 6,
            paddingHorizontal: 20,
            height: 30,
            marginTop: 5,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            // width: '38%'
        },
        buttonText: {
            color: !color ? 'rgba(240, 163, 31, 1)' : color,
            fontSize: 10,
            fontWeight: '800',
        },
    });

    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    )
};


export default NavbarButton;
