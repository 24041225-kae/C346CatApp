import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Entypo from '@expo/vector-icons/Entypo';

const styles = StyleSheet.create({
    picker:{
        marginHorizontal: 5,
        marginBottom: 10,
        backgroundColor: 'lightblue'
    },
    details:{
        fontWeight:'bold',
        fontSize:25,
        letterSpacing:-2,
        color:'black',
        marginLeft:10,
        marginBottom:10,
        textTransform: 'uppercase',
        alignSelf: 'center',
        height: 40
    },
    image:{
        width:400,
        height:300,
        marginLeft:5
    }
})
const Qn = ({question, selectedValue, onChange, options, poster, icon_colour, icon_name}) => {
    return (
        <View style={{ marginVertical: 10 }}>
            <Text style={styles.details}>
                <Entypo name={icon_name} size={24} color={icon_colour} /> {question}</Text>
            <Picker selectedValue={selectedValue} onValueChange={onChange} style={styles.picker}>
                <Picker.Item label="Pick 1" value="" enabled={false} />
                {options.map((opt) => (
                    <Picker.Item key={opt} label={opt} value={opt} />
                ))}
            </Picker>
            <Image source={{uri: poster}} style={styles.image} />
            <Text style={{justifyContent: 'center', alignSelf: 'center', fontWeight: 'bold'}}>Selected answer:</Text>
        </View>

    );
};

export default Qn;