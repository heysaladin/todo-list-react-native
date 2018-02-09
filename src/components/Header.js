import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Header extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={styles.ViewStyle}>
                <Text style={styles.textStyle}>{this.props.title}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    ViewStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F8F8F8',
        height: 60,
        paddingTop: 15,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 1},
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 20
    }
});