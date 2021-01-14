import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import PeopleList from "./PeopleList";
import DetailView from "./DetailView";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.fetchData = this.fetchData.bind(this);
    }
    state = {
        users: [],
    };
    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        /* fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((data) => this.setState({ users : data} ))
            .catch(console.log); */
        let mockData = [
            {
                id: 1,
                name: "Monica",
            },
            {
                id: 2,
                name: "Bill",
            },
            {
                id: 3,
                name: "Hillary",
            },
        ];
        this.setState({ users: mockData });
    }

    render() {
        const { users } = this.state;
        return (
            <View style={styles.container}>
                <View style={styles.content}>
                    <PeopleList users={users} />
                    <DetailView />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    content: {
        flex: 0.9,
        width: "100%",
    },
});
