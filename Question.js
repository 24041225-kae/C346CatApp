import React from 'react';
import {View, Text, Image} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Entypo from '@expo/vector-icons/Entypo';

const Qn = ({question, selectedValue, onChange, options, poster, icon_colour, icon_name, icon_width}) => {
    return (
        <View style={{ marginVertical: 10 }}>
            <Text style={{fontWeight:'bold', fontSize:25, letterSpacing:-2, color:'black',marginLeft:10, marginBottom:10}}>
                <Entypo name={icon_name} size={24} color={icon_colour} /> {question}</Text>
            <Picker selectedValue={selectedValue} onValueChange={onChange}>
                <Picker.Item label="Pick 1" value="" enabled={false} />
                {options.map((opt) => (
                    <Picker.Item key={opt} label={opt} value={opt} />
                ))}
            </Picker>
            <Image source={{uri: poster}} style={{width:400, height:300, marginLeft:5}} />
        </View>

    );
};

export default Qn;