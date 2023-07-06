import React, { useRef, useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    StyleSheet,
    Image
} from 'react-native';
import BRAND_LOGO from './../assets/img/BRAND_LOGO.png';
import hamburger_icon from './../assets/img/hamburger_icon.png';
import LoginSignupPopup from './LoginSignupPopup';

const Navbar = () => {
    const [sidebarToggle, setSidebarToggle] = useState(true);
    const NavbarboxRef = useRef(null);

    const handleToggle = () => {
        // const box = NavbarboxRef.current;

        // box.setNativeProps({
        //     style: {
        //         transition: 'transform 0.3s ease-in-out',
        //         transform: sidebarToggle ? 'translateX(70%)' : 'translateX(-0%)',
        //         right: sidebarToggle ? '-21%' : '0%',
        //         display: sidebarToggle ? 'block' : 'none',
        //     },
        // });

        // setTimeout(() => {
        //     box.setNativeProps({
        //         style: {
        //             transition: 'transform 0.3s ease-out',
        //             transform: sidebarToggle ? 'translateX(0%)' : 'translateX(70%)',
        //             right: sidebarToggle ? '0%' : '-21%',
        //         },
        //     });
        // }, 200);

        // const box = NavbarboxRef.current;
        // box.style.transition = 'transform 0.3s ease-in-out';
        // box.style.transform = sidebarToggle ? 'translateX(70%)' : 'translateX(-0%)';
        // box.style.right = sidebarToggle ? '-21%' : '0%';
        // box.style.display = sidebarToggle ? 'block' : 'none';

        // setTimeout(() => {
        //     box.style.transition = 'transform 0.3s ease-out';
        //     box.style.transform = sidebarToggle ? 'translateX(0%)' : 'translateX(70%)';
        //     box.style.right = sidebarToggle ? '0%' : '-21%';
        // }, 200);

        setSidebarToggle(!sidebarToggle);
    };

    return (
        <>
            <View style={styles.Navbar_container}>
                <View style={styles.Navbar_logo}>
                    <Image source={BRAND_LOGO} style={styles.logo} />
                </View>
                <TouchableOpacity onPress={handleToggle} style={styles.Navbar_hamburger_icon}>
                    <Text>HI DIVYA</Text>
                    <Image source={hamburger_icon} style={styles.hamburgerIcon} />
                </TouchableOpacity>
            </View>
            {!sidebarToggle && <View onPress={handleToggle} style={styles.Navbar_sidebar_empty_div}></View>}

            {
                sidebarToggle &&
                <View ref={NavbarboxRef} style={styles.Navbar_sidebar}>
                    <View>
                        <View>
                            {/* <Image source={logo} style={styles.sidebarLogo} /> */}
                        </View>
                        <View style={styles.Navbar_inputfield}>
                            <View>
                                <TextInput style={styles.input} placeholder='Events' />
                                <TextInput style={styles.input} placeholder='Create new event' />
                                <TextInput style={styles.input} placeholder='Upgrade' />
                                <TextInput style={styles.input} placeholder='View Profile' />
                            </View>
                        </View>
                    </View>
                </View>
            }

            {/* <LoginSignupPopup /> */}
        </>
    );
};

const styles = StyleSheet.create({
    Navbar_container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        backgroundColor: '#FFFFFF',
    },
    Navbar_logo: {
        flex: 1,
    },
    logo: {
        width: 100,
        height: 50,
        resizeMode: 'contain',
    },
    Navbar_hamburger_icon: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    hamburgerIcon: {
        width: 30,
        height: 30,
        resizeMode: 'contain',
    },
    Navbar_sidebar_empty_div: {
        flex: 1,
        backgroundColor: 'transparent',
    },
    Navbar_sidebar: {
        // position: 'absolute',
        // top: 0,
        // right: '-21%',
        // width: '70%',
        // display: 'none',
        height: '100%',
        backgroundColor: '#FFFFFF',
        zIndex: 10,
    },
    sidebarLogo: {
        width: 100,
        height: 50,
        resizeMode: 'contain',
    },
    Navbar_inputfield: {
        padding: 10,
    },
    input: {
        marginBottom: 10,
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: '#000000',
    },
});

export default Navbar;
