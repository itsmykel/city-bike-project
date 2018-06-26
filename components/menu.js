import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';



export default class Menu extends React.Component {
    state = {
        buttonText1: 'Profile',
        buttonText2: 'Search Shop',
        buttonText3: 'Recommended',
        buttonText4: 'Logout',
    }

    changeText = () => {
        console.log('Menu')

    }

    render() {
        return (
            <View style={styles.container}>

                <TouchableOpacity onPress={this.props.profile}>
                    <View style={styles.button}>
                        <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>{this.state.buttonText1}</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.props.rentBike}>
                    <View style={styles.button}>
                        <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>{this.state.buttonText2}</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.props.spotsfunc}>
                    <View style={styles.button}>
                        <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>{this.state.buttonText3}</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.props.logout}>
                    <View style={styles.button}>
                        <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>{this.state.buttonText4}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center'
    },
    button: {
        backgroundColor: 'rgba(200, 1, 1, 1)',
        height: 45,
        width: 300,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        marginTop: 10
    }
});
