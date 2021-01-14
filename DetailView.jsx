import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

export class DetailView extends Component {
    render() {
        
        const { user } = this.props;

        return (
            <View style={styles.container}>
                <View style={styles.content}>
                    {user && <Text>{user.name}</Text>}
                    {user && <Text>{user.email}</Text>}
                    {user && <Text>{user.phone}</Text>}
                </View>
                git
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container:{
        flex:0.5,
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
    },
    content:{
        height:'80%',
        width:'80%',
        backgroundColor:'lightgrey'
    }
});

export default DetailView
