
import React, { useRef, useState } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, CheckBox   } from 'react-native';
import filter_icon from './../assets/img/filter_icon.png';
// import EventlistInfo from '../EventlistInfo/EventlistInfo';

const Eventlist = () => {
    const [filterToggle, setFilterToggle] = useState(true);
    const NavbarboxRefFilter = useRef(null);

    //   const handleToggle = () => {
    //     const box = NavbarboxRefFilter.current;
    //     // Apply initial styles
    //     box.setNativeProps({
    //       transition: 'transform 0.3s ease-in-out',
    //       transform: filterToggle && [{ translateX: '70%' }],
    //       right: !filterToggle && '-21%',
    //       display: filterToggle ? 'flex' : 'none'
    //     });

    //     // Delay style changes to ensure initial styles are applied before transition
    //     setTimeout(() => {
    //       box.setNativeProps({
    //         transition: 'transform 0.3s ease-out',
    //         transform: filterToggle ? [{ translateX: '-0%' }] : [{ translateX: '70%' }],
    //         right: filterToggle ? '0%' : '-21%'
    //       });
    //     }, 200);
    //     setFilterToggle(!filterToggle);
    //   };

    return (
        <>
            <View style={styles.eventListContainer}>
                <View style={styles.eventListContainerLeft}>
                    <Text>Events list</Text>
                </View>

                <TouchableOpacity
                    // onPress={handleToggle} 
                    style={styles.eventListContainerRight}>
                    <Image source={filter_icon} style={styles.filterIcon} />
                    <Text>Filter</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.hrLine} />

            {!filterToggle && <TouchableOpacity
                //   onPress={handleToggle} 
                style={styles.emptyDiv} />}

            <View 
            // ref={NavbarboxRefFilter} 
            style={styles.filterSidebar}>
                <View style={styles.filterSidebarFluid}>
                    <Text>Filter</Text>
                    <Text>Models</Text>
                    <View style={styles.checkboxContainer}>
                    <CheckBox  type="checkbox" name="" id="" />
                        <Text>online</Text>
                    </View>
                    <View style={styles.checkboxContainer}>
                        <CheckBox  type="checkbox" name="" id="" />
                        <Text>In-person</Text>
                    </View>
                    <View style={styles.checkboxContainer}>
                        <CheckBox  type="checkbox" name="" id="" />
                        <Text>Hybrid</Text>
                    </View>

                    <Text>Cateogary</Text>

                    <select name="cars" id="cars">
                        <option value="volvo">Select a category</option>
                        <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
                    </select>

                    <Text>Select a date</Text>

                    <select name="cars" id="cars">
                        <option value="volvo">Select a date</option>
                        <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
                    </select>

                    <Text>SpeakerOre</Text>
                    <View style={styles.checkboxContainer}>
                        <CheckBox  type="checkbox" name="" id="" />
                        <Text>SpeakerOre Exclusive</Text>
                    </View>
                </View>
            </View>

            {/* Use map function here */}
            {/* <EventlistInfo />
      <EventlistInfo /> */}
        </>
    );
};

const styles = {
    eventListContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    eventListContainerLeft: {
        flex: 1,
    },
    eventListContainerRight: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    filterIcon: {
        width: 20,
        height: 20,
        marginRight: 5,
    },
    hrLine: {
        height: 1,
        backgroundColor: 'gray',
        marginVertical: 10,
    },
    emptyDiv: {
        flex: 1,
    },
    filterSidebar: {
        position: 'absolute',
        top: 0,
        right: 0,
        width: '70%',
        height: '100%',
        backgroundColor: 'white',
        zIndex: 1,
        display: 'none',
    },
    filterSidebarFluid: {
        padding: 10,
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
};

export default Eventlist;
