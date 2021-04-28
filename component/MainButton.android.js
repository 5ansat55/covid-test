import React from 'react';
import { StyleSheet, TouchableOpacity, TouchableWithoutFeedback, View, Text, Platform } from 'react-native';

import Colors from '../constants/Colors';

const MainButton = props => {
    let ButtonComponent = TouchableOpacity;
    if (Platform.Version >= 21) {
        ButtonComponent = TouchableWithoutFeedback;
    }

    return (
        <View style={styles.ButtonContainer}>
            <ButtonComponent onPress={props.onPress}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>
                        {props.children}
                    </Text>
                </View>
            </ButtonComponent>
        </View>
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
    },
    ButtonContainer:{
        borderRadius:25,
        overflow:'hidden',
    }

});

export default MainButton;