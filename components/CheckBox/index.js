import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';
import { TouchableOpacity, Text } from 'react-native';

const CheckBox = ({ selected, onPress, textStyle, size = 30, color = '#211f30', text = '', ...props}) => (
    <TouchableOpacity
    onPress = {onPress} {...props}>
        <Icon
        size = {size}
        color = {color}
        name = {selected ? 'check-box' : 'check-box-outline-blank'}
        />

        <Text style = {textStyle}> {text} </Text>
    </TouchableOpacity>
)

export default CheckBox;