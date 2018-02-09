import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default class TodoForm extends Component {
    constructor(props) {
        super(props);
    }

    _renderButton = () => {
        if (this.props.editMode) {
            return (
                <View>
                    <TouchableOpacity style={styles.buttonContainer} onPress={this.props.onCancelUpdate}>
                        <Text style={styles.buttonText}>Cancel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonContainer} onPress={this.props.onUpdate}>
                        <Text style={styles.buttonText}>UPDATE</Text>
                    </TouchableOpacity>
                </View>
            );
        }

        return (
            <TouchableOpacity style={styles.buttonContainer} onPress={this.props.onSubmit}>
                <Text style={styles.buttonText}>ADD</Text>
            </TouchableOpacity>
        );
    };
    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    onChangeText={this.props.onChangeText}
                    value={this.props.value}
                    style={styles.input}/>
                { this._renderButton() }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 5
    },
    input: {
        height: 40,
        marginBottom: 5,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: '#CED0CE'
    },
    buttonContainer: {
        backgroundColor:'#2980b9',
        paddingVertical: 15,
        marginBottom: 10
    },
    buttonText: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontWeight: '700',
    }
});