import React, { Component } from "react";
import {
    StyleSheet,
    Text,
    TouchableHighlight,
    TouchableOpacity,
    View,
} from "react-native";

export class PersonItem extends Component {
    state = {
        isPressed: false,
    };

    constructor(props) {
        super(props);
        this.onSelect = this.onSelect.bind(this);
    }

    onSelect(user) {
        this.props.handleSelect(user);
    }

    render() {
        const { user, selected } = this.props;
        return (
            <TouchableHighlight
                style={{
                    ...styles.touchable,
                    backgroundColor: user.id == selected.id ? "pink" : null,
                }}
                underlayColor="yellow"
                onPressIn={() =>
                    this.setState({
                        isPressed: true,
                    })
                }
                onPressOut={() => {
                    this.setState({ isPressed: false });
                }}
                onPress={this.onSelect(user)}
            >
                <Text>{user.name}</Text>
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
    touchable: {
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
    },
});
export default PersonItem;
