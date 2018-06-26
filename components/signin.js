import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, KeyboardAvoidingView, Image, FlatList } from 'react-native';


const img = require('../images/logo.png');

export default class SignIn extends React.Component {

  state = {
    username: '',
    password: '',
    howToList: [
      { img1: require('../images/bikesearchshops.jpg') },
      { img1: require('../images/bikepickup.jpg') },
      { img1: require('../images/bikespots.jpg') },
      { img1: require('../images/bikeenjoy.jpg') }
    ]
  }

  logInUser(username,password){
    this.props.logInUser(username,password)
  }


  render() {
    return (
      <View >

        <View style={{ marginBottom: 20 }}>

          <KeyboardAvoidingView behavior="padding" enabled>

            <View style={{ marginLeft: 110, marginTop: 65 }} >
              <Image source={img} style={{ height: 50, width: 200}} />
            </View>

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


          </KeyboardAvoidingView>

        </View>

        <TouchableOpacity onPress= {this.props.logInUser.bind(this, this.state.username, this.state.password)} style={{ marginBottom: 10, marginLeft: 90 }}>

          <View style={styles.button}>
            <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>Sign In</Text>
          </View>

        </TouchableOpacity>

        <TouchableOpacity onPress={this.props.newUser} style={{ marginTop: 10, marginLeft: 90 }}>

          <View style={styles.button}>
            <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>New User</Text>
          </View>

        </TouchableOpacity>

        <View style={{ marginTop: 10 }}>

          <FlatList
            horizontal
            data={this.state.howToList}
            keyExtractor={(item, index) => index + ""}
            renderItem={({ item }) => (
              <Image
                source={item.img1}
                style={{ width: 200, height: 200, margin: 5, marginBottom: 5 }}
              />

          


            )}

          />

        </View>

      </View>

    );
  }
}

const styles = StyleSheet.create({
  textInput: {
    width: 300,
    height: 40,
    borderColor: 'gray',
    borderRadius: 10,
    marginBottom: 5,
    paddingHorizontal: 5,
    textAlign: 'center',
    marginLeft: 50
  },
  button: {
    backgroundColor: 'rgba(200, 1, 1, 1)',
    height: 45,
    width: 120,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 50
  }
});
