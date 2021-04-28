import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';

import Colors from '../constants/Colors';

const MainButton = props => {


    return (
            <TouchableOpacity activeOpacity={0.6} onPress={props.onPress}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>
                        {props.children}
                    </Text>
                </View>
            </TouchableOpacity>
    );
};


const styles = StyleSheet.create({
    button: {
        backgroundColor: Colors.primaryColor,
        paddingVertical: 20,
        paddingHorizontal: 30,

    },
    buttonText: {
        color: 'white',
        fontSize: 18,
    }

});

export default MainButton;