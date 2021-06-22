import React from 'react';
import { Text, TextInput } from 'react-native';

import styles from './styles';

interface Props {
    label: string;
    value: string;
    onChange: (text: string) => void;
}

export default function InputTextField(props: Props) {
    return (
        <>
            <Text style={styles.label}>{props.label}</Text>
            <TextInput value={props.value} style={styles.input} onChangeText={props.onChange} />
        </>
    );
}