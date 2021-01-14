import React, { Component } from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";
import PersonItem from "./PersonItem";

export default class PeopleList extends Component {
    state = {
        selected: -1,
    };
    constructor(props) {
        super(props);
        this.handleSelect = this.handleSelect.bind(this);
    }

    handleSelect(user) {
        this.setState({ selected: user });
    }

    render() {
        const { selected } = this.state;
        const { users } = this.props;

        return (
            <View style={styles.container}>
                <FlatList
                    style={styles.list}
                    data={users}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => {
                        return (
                            <PersonItem
                                user={item}
                                selected={selected}
                                handleSelect={(user) => this.handleSelect(user)}
                            />
                        );
                    }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 0.5,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "pink",
    },
    list: {
        width: "80%",
    },
});
