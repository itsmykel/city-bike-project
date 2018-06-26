import React from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image, KeyboardAvoidingView, ScrollView } from 'react-native';




const img = require('../images/logo.png');

export default class SignUp extends React.Component {

    state = {
        username: "",
        password: "",
        firtName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        address: "",

    }

    register(user) {
        this.props.register(user);
    }


    render() {
        return (
            <ScrollView>
           
                    <View>
                        <View>
                            <TouchableOpacity onPress={this.props.home}>
                                <Image source={img} style={{ marginLeft: 100, height: 50, marginTop: 30, width: 200 }} />
                            </TouchableOpacity >
                        </View>
                        <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
                            <View >

                                <Text style={{ color: 'gray', fontSize: 20, fontWeight: 'bold', marginBottom: 30, textAlign: 'left' }}> Register an Account </Text>

                                <TextInput
                                    placeholder="Username"
                                    style={styles.textInput}
                                    value={this.state.username}
                                    onChangeText={(text) => { this.setState({ username: text }) }}
                                />
                                <TextInput
                                    placeholder="Password"
                                    style={styles.textInput}
                                    secureTextEntry={true}
                                    value={this.state.password}
                                    onChangeText={(text) => { this.setState({ password: text }) }}
                                />
                                <TextInput
                                    placeholder="First Name"
                                    style={styles.textInput}
                                    value={this.state.firstName}
                                    onChangeText={(text) => { this.setState({ firstName: text }) }}
                                />
                                <TextInput
                                    placeholder="Last Name"
                                    style={styles.textInput}
                                    value={this.state.lastName}
                                    onChangeText={(text) => { this.setState({ lastName: text }) }}
                                />
                                <TextInput
                                    placeholder="Email"
                                    style={styles.textInput}
                                    value={this.state.email}
                                    onChangeText={(text) => { this.setState({ email: text }) }}
                                />
                                <TextInput
                                    placeholder="Phone Number"
                                    style={styles.textInput}
                                    value={this.state.phoneNumber}
                                    onChangeText={(text) => { this.setState({ phoneNumber: text }) }}
                                />
                                <TextInput
                                    placeholder="Address"
                                    style={styles.textInput}
                                    value={this.state.address}
                                    onChangeText={(text) => { this.setState({ address: text }) }}
                                />

                                <TouchableOpacity onPress={this.register.bind(this, this.state)}>
                                    <View style={styles.button}>
                                        <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>Register</Text>
                                    </View>
                                </TouchableOpacity>

                            </ View>
                        </KeyboardAvoidingView>
                    </View>
    
            </ScrollView >


        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 35,
        marginBottom: 30
    },
    button: {
        backgroundColor: 'rgba(200, 1, 1, 1)',
        height: 45,
        width: 320,
        borderRadius: 10,
        justifyContent: 'center',
        marginTop: 10,
        alignItems: 'center'
    },
    textInput: {
        width: 300,
        height: 40,
        borderColor: 'gray',
        borderRadius: 10,
        marginBottom: 5,
        paddingHorizontal: 5,
        textAlign: 'left'
    }
});