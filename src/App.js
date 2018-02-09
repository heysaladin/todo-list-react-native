import React, { Component } from 'react';
import { Alert, FlatList, StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import TodoItem from './components/TodoItem';
import TodoForm from './components/TodoForm';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            data: [],
            editMode: false,
            editItem: null,
        }
    }

    _renderItem = ({item}) => (
        <TodoItem
            item={item}
            onPressItem={this._onPressItem}
        />
    );

    _onCancelUpdate = () => {
        this.setState({ editMode: false, inputValue: '', editItem: null });
    };
    
    _onChangeText = (value) => this.setState({ inputValue: value });
    _onDeleteItem = (item) => {
      let todos = this.state.data;
      todos = todos.filter((todo) => {
          return todo.key !== item.key;
      });

      this.setState({ data: todos});
    };

    _onEditItem = (item) => {
      this.setState({ editMode: true, inputValue: item.title, editItem: item });
    };

    _onPressItem = (item) => {
        Alert.alert('Action', 'Choose your action', [
            { text: 'Cancel', onPress: () => console.log('cancel pressed'), style: 'cancel' },
            { text: 'Edit', onPress: () => this._onEditItem(item) },
            { text: 'Delete', onPress: () => this._onDeleteItem(item) },
        ]);
    };
    _onSubmit = () => {
        const { inputValue, data } = this.state;
        if (inputValue === '') {
            return Alert.alert('Error', 'Todo cannot be empty');
        }

        let todos = data;
        todos.push({ key: Math.random(), title: inputValue });
        this.setState({ inputValue: '', data: todos});
    };

    _onUpdate = () => {
        console.log('updating');
        const { inputValue, data, editItem } = this.state;
        if (inputValue === '') {
            return Alert.alert('Error', 'Todo cannot be empty');
        }

        let todos = data;
        todos.forEach((todo, index) => {
            if (todo.key === editItem.key) {
                todo.title = inputValue;
            }
        });

        this.setState({ inputValue: '', data: todos, editItem: null, editMode: false});
    };

    renderSeparator = () => {
        return (
            <View
                style={{
                    height: 1,
                    backgroundColor: "#CED0CE",
                }}
            />
        );
    };

    _renderList = () => {
        if (this.state.data.length > 0) {
            return (
                <FlatList
                    data={this.state.data}
                    renderItem={this._renderItem}
                    ItemSeparatorComponent={this.renderSeparator}
                    extraData={this.state}
                />
            )
        }

        return <Text style={styles.noTodoStyle}>No Todos</Text>
    };

    render() {
        return (
            <View>
                <Header title="Todo App"/>
                <TodoForm
                    onChangeText={this._onChangeText.bind(this)}
                    onCancelUpdate={this._onCancelUpdate.bind(this)}
                    onUpdate={this._onUpdate.bind(this)}
                    onSubmit={this._onSubmit.bind(this)}
                    editMode={this.state.editMode}
                    value={this.state.inputValue}
                />
                { this._renderList() }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    noTodoStyle: {
        fontSize: 16,
        marginLeft: 12,
        paddingBottom: 10,
        paddingTop: 10
    }
});
