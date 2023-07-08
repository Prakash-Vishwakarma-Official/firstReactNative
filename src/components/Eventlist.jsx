
import React, { useRef, useState } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, StyleSheet, } from 'react-native';
import { Picker } from '@react-native-picker/picker';


import filter_icon from './../assets/img/filter_icon.png';
import CheckBox from 'react-native-check-box';
import RadioForm from 'react-native-simple-radio-button';
import DropDownPicker from 'react-native-dropdown-picker';
// import EventlistInfo from '../EventlistInfo/EventlistInfo';

const Eventlist = () => {
    const [filterToggle, setFilterToggle] = useState(!true);
    const [radioValue, setRadioValue] = useState(0);
    const [isChecked, setIsChecked] = useState({ Online: false, InPerson: false, Hybrid: false, });
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);

    const radio_props = [
        { label: 'Online', value: 0 },
        { label: 'In-person', value: 1 },
        { label: 'Hybrid', value: 3 }
    ];

    const [items, setItems] = useState([
        { label: 'Apple', value: 'apple' },
        { label: 'Banana', value: 'banana' }
    ]);
    const NavbarboxRefFilter = useRef(null);

    const handleToggle = () => {
        // const box = NavbarboxRefFilter.current;
        // // Apply initial styles
        // box.setNativeProps({
        //   transition: 'transform 0.3s ease-in-out',
        //   transform: filterToggle && [{ translateX: '70%' }],
        //   right: !filterToggle && '-21%',
        //   display: filterToggle ? 'flex' : 'none'
        // });

        // // Delay style changes to ensure initial styles are applied before transition
        // setTimeout(() => {
        //   box.setNativeProps({
        //     transition: 'transform 0.3s ease-out',
        //     transform: filterToggle ? [{ translateX: '-0%' }] : [{ translateX: '70%' }],
        //     right: filterToggle ? '0%' : '-21%'
        //   });
        // }, 200);
        setFilterToggle(!filterToggle);
    };

    return (
        <>
            <View style={styles.eventListContainer}>
                <View style={styles.eventListContainerLeft}>
                    <Text>Events list</Text>
                </View>

                <TouchableOpacity
                    onPress={handleToggle}
                    style={styles.eventListContainerRight}>
                    <Image source={filter_icon} style={styles.filterIcon} />
                    <Text>Filter</Text>
                </TouchableOpacity>
            </View>

            {
                filterToggle && <View
                    ref={NavbarboxRefFilter}
                    style={styles.filterSidebar}>
                    <View style={styles.filterSidebarFluid}>
                        <Text>Filter</Text>
                        <Text>Models</Text>
                        <View style={styles.checkboxContainer}>
                            {/* <CheckBox
                                onClick={() => { setIsChecked({ ...isChecked, Online: !isChecked.Online }) }}
                                isChecked={isChecked.Online}
                                rightText={"Online"}
                                checkedCheckBoxColor='green'
                            />
                            <CheckBox
                                onClick={() => { setIsChecked({ ...isChecked, InPerson: !isChecked.InPerson }) }}
                                isChecked={isChecked.InPerson}
                                rightText={"In-person"}
                                checkedCheckBoxColor='green'
                            />
                            <CheckBox
                                onClick={() => { setIsChecked({ ...isChecked, Hybrid: !isChecked.Hybrid }) }}
                                isChecked={isChecked.Hybrid}
                                rightText={"Hybrid"}
                                checkedCheckBoxColor='green'
                            /> */}

                            <RadioForm
                                radio_props={radio_props}
                                initial={radioValue}
                                buttonColor='gray'
                                labelColor='gray'
                                // buttonInnerColor='red'
                                // buttonOuterColor='red'
                                selecterButtonColor='green'
                                buttonSize={10}
                                onPress={(value) => { setRadioValue(value) }}
                            />
                        </View>
                        <Text>Cateogary</Text>
                        <DropDownPicker
                            open={open}
                            value={value}
                            items={items}
                            setOpen={setOpen}
                            setValue={setValue}
                            setItems={setItems}
                        />
                        <Text>Select a date</Text>
                        <DropDownPicker
                            open={open}
                            value={value}
                            items={items}
                            setOpen={setOpen}
                            setValue={setValue}
                            setItems={setItems}
                        />
                        <Text>SpeakerOre</Text>
                        <View style={styles.checkboxContainer}>
                            <CheckBox
                                onClick={() => { setIsChecked({ ...isChecked, Online: !isChecked.Online }) }}
                                isChecked={isChecked.Online}
                                rightText={"peakerOre Exclusive"}
                                checkedCheckBoxColor='green'
                            />
                        </View>
                    </View>
                </View>
            }
        </>
    );
};

const styles = StyleSheet.create({
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
        backgroundColor: '#E4E4E4',
    },
    filterSidebarFluid: {
        padding: 10,
    },
    checkboxContainer: {
    },
});

export default Eventlist;
