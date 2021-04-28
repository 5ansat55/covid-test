import React from 'react';
import { Platform, View, StyleSheet } from 'react-native';

import Colors from '../constants/Colors';
import TitleText from '../components/TitleText';


const Header = function (props) {
    const { title } = props;

    return (
        <View style={{
            ...styles.headerBase,
            ...Platform.select({
                ios: styles.headerIOS,
                android: styles.headerAndroid
            })
        }}
        >
            <TitleText style={styles.headerTitle}>{title}</TitleText>
        </View>
    )
}

const styles = StyleSheet.create({
    headerBase: {
        width: '100%',
        height: '10%',
        paddingTop: 12,
        alignItems: 'center',
        justifyContent: 'center',

    },
    headerIOS: {
        backgroundColor: 'white',
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
    },
    headerAndroid: {
        backgroundColor: Colors.primaryColor,
    },
    headerTitle: {
        color: Platform.OS === 'ios' ? Colors.primary : 'white',
    },

});

export default Header;