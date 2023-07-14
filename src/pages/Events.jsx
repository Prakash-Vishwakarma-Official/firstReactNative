import React from 'react'
import { ScrollView, View, TextInput } from 'react-native';

import Navbar from '../components/Navbar';
import Allowance from '../components/Allowance';
import Eventlist from '../components/Eventlist';
const Events = () => {
    return (
        // <div>
            <ScrollView>
                <Navbar />
                <Allowance />
                <Eventlist />
            </ScrollView>
        // </div>
    )
}

export default Events
