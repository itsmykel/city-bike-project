import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, Linking, ScrollView } from "react-native";

import axios from "axios";

const img = require('../images/menu.png');

export default class Recommended extends React.Component {

    state = {
        name1: "",
        address1: "",
        spots1: [],
        spots2: [],
        near: "santa ana california",
        image: "../images/b.png",
    };

    componentDidMount = () => { //recommended spots on page load
        axios
            .get(
                'https://api.foursquare.com/v2/venues/explore?near='+this.state.near+'&section=topPicks&client_id='    //import your api key from foursquare
            )
            .then(res => {

                var spots1 = [];

                for (i = 0; i < 5; i++) {

                    spots1.push({
                        name1: res.data.response.groups[0].items[i].venue.name,
                        formattedAddress1: res.data.response.groups[0].items[i].venue.location.formattedAddress[0],
                        formattedAddress2: res.data.response.groups[0].items[i].venue.location.formattedAddress[1],
                        formattedAddress3: res.data.response.groups[0].items[i].venue.location.formattedAddress[2]
                    });

                    this.setState({
                        spots1: spots1
                    });
                }
            });
    };


    render() {
        return (
            <View>

                <TouchableOpacity onPress={this.props.menu}>

                    <View >
                        <Image source={img} style={{ height: 50, width: 50, marginRight: 200  }} />
                    </View>

                </TouchableOpacity>

                <Image source={require("../images/b.png")}
                    style={{ flex: 1, marginLeft: 80, justifyContent: "center", height: 50, width: 130, alignItems: "center" }}
                />

                <Text style={{ fontWeight: "bold", fontSize: 30, color: 'red' }}>Near you!</Text>
                {/* {output for componentDidMount spots} */}
                <ScrollView>
                    {this.state.spots1.map((shop, index) => (

                        <Text style={{ fontWeight: "bold", fontSize: 15 }} key={index}
                            onPress={() => Linking.openURL('https://www.google.com/maps/search/?api=1&query=' + shop.formattedAddress1 + " " + shop.formattedAddress2 + " ," + shop.formattedAddress3)}>

                            <Image
                                source={require("../images/location.gif")}
                                style={{
                                    flex: 1, justifyContent: "center", height: 50, width: 80, alignItems: "center" 
                                }}
                            />

                            {shop.name1}

                        </Text>

                    ))}
                </ScrollView>


                

                <View />

                <Text style={{ fontWeight: "bold", fontSize: 30, color: 'red' }}>Searched Spots!</Text>
                            {/* {output for searched spots} */}    
                <ScrollView>
                    {this.props.spots2.map((shop, index) => (
                        <Text style={{ fontWeight: "bold", fontSize: 15 }} key={index}
                            onPress={() => Linking.openURL("https://www.google.com/maps/search/?api=1&query=" + shop.name2)}>

                            <Image
                                source={require("../images/location.gif")}
                                style={{ flex: 1, justifyContent: "center", height: 50, width: 80, alignItems: "center"
                            }}
                            />

                            {shop.name2}

                        </Text>

                    ))}
                </ScrollView>

                {/* {searchbar for recommended spots} */}

                <TextInput //search bar 

                    placeholder="Search Spots"
                    style={styles.textInput}
                    value={this.state.address1}
                    onChangeText={text => {
                        this.setState({ address1: text });
                    }}
                />

                <TouchableOpacity onPress={() => { this.props.searchSpots(this.state.address1) }}>
                    <View style={styles.button}>
                        <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>
                            Search
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
        marginLeft: 60,
    },
    button: {
        backgroundColor: "red",
        height: 45,
        width: 180,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 70,
        marginLeft: 60,
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
