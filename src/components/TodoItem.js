import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default class TodoItem extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { item, onPressItem } = this.props;
        return (
            <TouchableOpacity onPress={() => onPressItem(item)}>
                <Text style={styles.textStyle}>{item.title}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 16,
        marginLeft: 12,
        paddingBottom: 10,
        paddingTop: 10
    },
});