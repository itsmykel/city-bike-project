import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';

const img = require('../images/logo.png');


export default class Profile extends React.Component {

    render() {
        return (
            <View>

                <View style={{ marginBottom: 10, marginLeft: 110, }} >
                    <Image source={img} style={{ height: 50, width: 200 }} />
                </View>

                <FlatList
                    style={styles.display}
                    data={this.props.people}
                    extraData={this.props}
                    renderItem={({ item }) =>
                        <View>
                            <Image source={item.image} style={{ marginBottom:20, height: 110, width: 110, borderRadius: 100 / 2 }} />
                            <Text style={{fontWeight: 'bold'}}>{item.firstName} {item.lastName}</Text>
                            <Text>{item.email}</Text>
                            <Text>{item.phoneNumber}</Text>
                            <Text>{item.address}</Text>
                        </View>
                    }
                    keyExtractor={(item, index) => index + ""}
                />

                <TouchableOpacity onPress={this.props.menu}>
                    <View style={styles.button}>
                        <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>Menu</Text>
                    </View>
                </TouchableOpacity>

            </View>

        );
    }
}

const styles = StyleSheet.create({

    button: {
        backgroundColor: 'rgba(200, 1, 1, 1)',
        height: 45,
        width: 300,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        marginLeft: 55
    },
    display: {
        marginTop: 10,
        marginLeft: 140,
    }
});
