import React, {useEffect, useRef, useState} from 'react';
import {Platform, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import {SelectList} from "react-native-dropdown-select-list/index";
import Icon from 'react-native-vector-icons/FontAwesome';
import FontAwesome from "react-native-vector-icons/FontAwesome";

const optionStatus = [
    {key: 1, value: 'Alive'},
    {key: 2, value: 'Dead'},
    {key: 3, value: 'unknown'},
];

const optionGender = [
    {key: 1, value: 'Female'},
    {key: 2, value: 'Male'},
    {key: 3, value: 'Genderless'},
    {key: 4, value: 'unknown'},
];

const initialProfile = {
    name: '',
    status: '',
    species: '',
    type: '',
    gender: '',
};

const WidgetForm = ({setValue, setPageIndex}) => {
    const [profile, setProfile] = useState(initialProfile);
    const [isOpened, setIsOpened] = useState(false);
    const [height, setHeight] = useState(0);
    const refForm = useRef(null);
    let params = '';

    useEffect(() => {
        if (null !== refForm.current) {
            setHeight(isOpened ? refForm.current.scrollHeight : 0);
        }
    }, [isOpened]);

    const onSubmit = (e) => {
        e.preventDefault();
        setPageIndex(1);
        const payload = {...profile};
        for (const key in payload) {
            if (payload[key] && payload[key] !== '') {
                params = `${params}&${key}=${payload[key]}`;
            }
        }
        setIsOpened(!isOpened);
        setValue(params);
    };

    const onReset = () => {
        setProfile(initialProfile);
        setValue('');
    };

    return (
        <SafeAreaView style={styles.form}>
            <ScrollView ref={refForm}>
                <TouchableOpacity onPress={() => setIsOpened(!isOpened)} style={styles.headerWrap}>
                    <Text style={styles.header}>{!isOpened && 'Form search'}</Text>
                    <Icon
                        style={styles.icon}
                        name={`arrow-circle-o-${isOpened ? 'down' : 'up'}`}
                        size={30}
                        color="#fff"/>
                </TouchableOpacity>
                {isOpened ? <View style={{maxHeight: height, margin: 12}}>
                    <Text style={styles.label}>name</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={(name) => setProfile({...profile, name})}
                        value={profile.name}
                        placeholder="name"
                        placeholderTextColor={'#606066'}
                    />
                    <Text style={styles.label}>status</Text>
                    <SelectList
                        inputStyles={{color: '#606066'}}
                        dropdownTextStyles={{color: '#fff'}}
                        dropdownStyles={styles.selectBox}
                        boxStyles={styles.input}
                        setSelected={(status) => setProfile({...profile, status})}
                        data={optionStatus}
                        placeholder={'status'}
                        search={false}
                        closeicon={<FontAwesome name="chevron-up" size={12} color={'#fff'}/>}
                        arrowicon={<FontAwesome name="chevron-down" size={12} color={'#fff'}/>}
                        save={'value'}
                    />
                    <Text style={styles.label}>species</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={(species) => setProfile({...profile, species})}
                        value={profile.species}
                        placeholder="species"
                        placeholderTextColor={'#606066'}
                    />
                    <Text style={styles.label}>type</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={(type) => setProfile({...profile, type})}
                        value={profile.type}
                        placeholder="type"
                        placeholderTextColor={'#606066'}
                    />
                    <Text style={styles.label}>gender</Text>
                    <SelectList
                        inputStyles={{color: '#606066'}}
                        dropdownTextStyles={{color: '#fff'}}
                        boxStyles={styles.input}
                        dropdownStyles={styles.selectBox}
                        setSelected={(gender) => setProfile({...profile, gender})}
                        data={optionGender}
                        search={false}
                        closeicon={<FontAwesome name="chevron-up" size={12} color={'#fff'}/>}
                        arrowicon={<FontAwesome name="chevron-down" size={12} color={'#fff'}/>}
                        placeholder={'gender'}
                        save={'value'}
                    />
                    <View style={{display: 'flex', flexDirection: 'row'}}>
                        <TouchableOpacity style={styles.btn} onPress={onSubmit} color={'red'}>
                            <Text style={styles.textBtn}>Find</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btn} onPress={onReset} color={'red'}>
                            <Text style={styles.textBtn}>Reset</Text>
                        </TouchableOpacity>
                    </View>
                </View> : null}
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    form: {
        margin: 20,
        boxSizing: 'border-box',
        borderRadius: 10,
        backgroundColor: '#3c3e44',
        position: 'relative',
        zIndex: 1,
        ...Platform.select({
            android: {
                borderRadius: 10,
            },
        })
    },
    headerWrap: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20
    },
    icon: {
        marginLeft: 'auto'
    },
    header: {
        color: '#fff',
        fontSize: 21,
        fontWeight: 'bold',
    },
    label: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
        textTransform: 'capitalize',
        marginBottom: 10,
    },
    input: {
        minHeight: 45,
        marginBottom: 12,
        borderWidth: 1,
        backgroundColor: '#212329',
        borderColor: '#606066',
        borderRadius: 5,
        padding: 10,
        color: '#fff',
        placeholder: {
            backgroundColor: 'red',
            color: 'red'
        },
    },
    selectBox: {
        backgroundColor: '#212329',
        borderColor: '#606066',
        marginBottom: 10
    },
    btn: {
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 5,
        border: '1px solid black',
        cursor: 'pointer',
        margin: 20,
        display: 'flex',
        alignItems: 'center',
        flexGrow: 1
    },
    image: {
        width: 21,
        height: 21,
        resizeMode: 'repeat',
        backgroundColor: 'red',
        transform: [{rotate: "90deg"}],
        ...Platform.select({
            android: {
                width: 100,
                resizeMode: 'repeat',
                height: 100,
            },
        })
    },
});

export default WidgetForm;
