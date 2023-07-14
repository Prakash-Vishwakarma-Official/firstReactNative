import React from 'react'
import { View, Text, Button, Image, StyleSheet } from 'react-native'
import BRAND_LOGO from './../assets/img/BRAND_LOGO.png';
import HeroSection from './../assets/img/HeroSection.png';
import NavbarButton from '../components/NavbarButton';
import PinkButton from '../components/PinkButton';

const Home = (props) => {
    const handleSeehowItworks = () => {
        // console.warn('Button pressed');
        props.navigation.navigate('Events')
    };
    const handlePress = () => {
        console.warn('Button pressed');
        // props.navigation.navigate('Events')
    };
    return (
        <View>
            <View>
                <Image source={HeroSection} style={styles.HeroSection} />
                <View style={styles.navBar}>
                    <View>
                        <Image source={BRAND_LOGO} style={styles.logo} />
                    </View>
                    <View style={styles.navBar}>
                        <NavbarButton onPress={handlePress} title="Upgrade" backgroundColor={'rgba(36, 117, 79, 1)'} />
                        <NavbarButton onPress={handlePress} title="Sign Up" color={'white'} />
                    </View>
                </View>
                <View>
                    <Text style={styles.HeroSection_heading}>Life Changing Opportunity could be Just ONE Event Away</Text>
                    <Text style={styles.HeroSection_p}>The World needs to Know your Message or You need the World To know your Message. Don’t Hold
                        Back! It will change Lives. Get Started!
                    </Text>
                    <View style={styles.HeroSection_button}>
                        <PinkButton onPress={handleSeehowItworks} title="See how It works" />
                    </View>
                </View>
            </View>
            {/* <Button title='Join Now' onPress={() => props.navigation.navigate('Events')}></Button> */}
        </View>
    )
}
const styles = StyleSheet.create({
    navBar: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    logo: {
        width: 70,
        height: 50,
        resizeMode: 'contain',
        marginTop: 1,
        marginLeft: 7
    },
    HeroSection: {
        position: 'absolute',
        width: '100%',
        // height: 300,
        // resizeMode: 'contain',
    },
    signUp: {
        backgroundColor: 'red',
        color: 'black'
    },
    HeroSection_heading: {
        fontSize: 15,
        color: 'gray',
        textAlign: 'center',
        marginTop: 25,
    },
    HeroSection_p: {
        fontSize: 10,
        color: 'gray',
        marginTop: 10,
        textAlign: 'center',
    },
    HeroSection_button: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,

        // border: 1,
        // backgroundColor:'blue'
    }
})

export default Home