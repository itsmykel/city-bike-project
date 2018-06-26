import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, Linking, ScrollView } from "react-native";

import axios from "axios";

const img = require('../images/menu.png');

export default class SearchBike extends React.Component {

    state = {
        name: "",
        address: "",
        shops: [],
        shops2: [],
        near: "santa ana california",
        image: "../images/2.gif",
    };

    componentDidMount = () => {
        axios
            .get(
                "https://api.foursquare.com/v2/venues/search?near=" +
                this.state.near +
                "&query=bikerental&client_id=" //import your api key from foursquare
            )
            .then(res => {

                var shops = [];

                console.log(res.data.response.venues)

                for (i = 0; i < 5; i++) {
                    shops.push({
                        name: res.data.response.venues[i].name,
                    });

                    this.setState({
                        shops: shops
                    });
                }
            });
    };



    render() {
        return (
            <View>

                <TouchableOpacity onPress={this.props.menu}>
                    <View >
                        <Image source={img} style={{ height: 50, width: 50, marginRight: 20 }} />
                    </View>
                </TouchableOpacity>


                <Image source={require("../images/location.gif")}
                    style={{ flex: 1, marginLeft: 120, justifyContent: "center", height: 50, width: 80, alignItems: "center" }}
                />

                <Text style={{ fontWeight: "bold", fontSize: 30, color: 'red' }}>Near You!</Text>

                <ScrollView>
                    {this.state.shops.map((shop, index) => (
                        <Text style={{ fontWeight: "bold", fontSize: 20 }} key={index}
                            onPress={() => Linking.openURL("https://www.google.com/maps/search/?api=1&query=" + shop.name)}>

                            <Image
                                source={require("../images/location.gif")}
                                style={{ flex: 1, justifyContent: "center", height: 50, width: 80, alignItems: "center" }}
                            />

                            {shop.name}

                        </Text>

                    ))}

                </ScrollView>

                <View />

                <Text style={{ fontWeight: "bold", fontSize: 30, color: 'red' }}>Searched Bike locations!</Text>

                <ScrollView>
                    {this.props.shops2.map((shop, index) => (
                        <Text style={{ fontWeight: "bold", fontSize: 20 }} key={index}
                            onPress={() => Linking.openURL("https://www.google.com/maps/search/?api=1&query=" + shop.name2)}>

                            <Image
                                source={require("../images/location.gif")}
                                style={{ flex: 1, justifyContent: "center", height: 50, width: 80, alignItems: "center" }}
                            />

                            {shop.name2}

                        </Text>

                    ))}
                </ScrollView>

                <TextInput //search bar 
                    placeholder="Search Bike Locations"
                    style={styles.textInput}
                    value={this.state.address}
                    onChangeText={text => {
                        this.setState({ address: text });
                    }}
                />

                <TouchableOpacity onPress={() => { this.props.searchBike(this.state.address) }}>
                    <View style={styles.button}>
                        <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>
                            Search Bike!
                        </Text>
                    </View>
                </TouchableOpacity>



            </View>
        );
    }
}

const styles = StyleSheet.create({

    textInput: {
        width: 180,
        height: 40,
        borderColor: "red",
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 5,
        marginTop: 10,
        marginLeft: 70,
    },
    button: {
        backgroundColor: "red",
        height: 45,
        width: 180,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 70,
        marginLeft: 70,
        marginTop: 10,


    },
    itemStyle: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    displayText: {
        justifyContent: "flex-start",
        alignItems: "flex-start",
        marginTop: 20
    }
});