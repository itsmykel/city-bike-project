import React from 'react';
import { Platform, View, StyleSheet, Image } from 'react-native';

import axios from "axios";

////////////// Components


import SignIn from './components/signin'
import SignUp from './components/signup'
import Profile from './components/profile'
import Menu from './components/menu'
import SearchBike from './components/searchbike'
import Recommended from './components/recommended'
import NewUserProfile from './components/newuserprofile'



//////////////// Images

const load = require('./images/loading.gif')
const img = require('./images/logo.png')
const img2 = require('./images/circle.jpg')
const img3 = require('./images/bikelogo.jpg')


export default class App extends React.Component {
  state = {

    ////////// Load Page


    isVisible: true,
    signInDisplay: false,
    newSign: false,
    showProfile: false,
    showHome: false,
    menu: false,
    bikeSearch: false,
    recommendedSpots: false,
    secondUser:false,


    //////////// Searchbike

    name: "",
    address: "",
    shops: [],
    shops2: [],
    near: "santa ana california",
    image: "../images/2.gif",

    /////////////// recommended spots

    name1: "",
    address1: "",
    spots: [],
    spots1: [],
    spots2: [],

    ////////// User info

    

    people: [
      {
        username: 'Pman',
        password: '1234',
        firstName: 'Philip',
        lastName: 'Manikan',
        email: 'pman@hotmale.com',
        phoneNumber: '867-5309',
        address: '77 Haduken',
        image: img2
      },
    ],

    newLoginUser: [
      {
        firtName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        address: "",
        image: img3
      }
    ]
  }

  ////////////////// Load Screen function 

  HideSplashScreen = () => {
    this.setState({
      isVisible: false,
      signInDisplay: true
    });

  }

  componentDidMount() {

    var that = this;

    setTimeout(function () {

      that.HideSplashScreen();

    }, 5000);

  }

  ////////////////// Signin Functions

  logInUser(username, password) {

    var userin = username;
    var pass = password;
    var signedIn = false;

    for (let key in this.state.people) {
      if (this.state.people[key].username == userin && this.state.people[key].password == pass) {
        signedIn = true;
      }
    }

    if (signedIn) {
      this.setState({
        
        newSign: false,
        signInDisplay: false,
        showProfile: true,
        menu: false,
        bikeSearch: false,
        recommendedSpots: false,
        secondUser:false,
      })
    } else {
      alert('invalid username or password')
    }
  }

  newUser = () => {

    console.log('New User')

    this.setState({
      newSign: true,
      signInDisplay: false,
      showProfile: false,
      menu: false,
      bikeSearch: false,
      recommendedSpots: false,
      secondUser:false,
    })
  }

  ///////////////////// Signup Functions

  register = (user) => {

    console.log('reg button')

    var newArray = [...this.state.newLoginUser];

    newArray.push(user)


    this.setState({
      newLoginUser: newArray,      
      newSign: false,
      signInDisplay: false,
      showProfile: false,
      menu: false,
      bikeSearch: false,
      recommendedSpots: false,
      secondUser: true,
    })
  }

  ////////// menu function


  menu = () => {

    console.log('menu')
    this.setState({
      newSign: false,
      signInDisplay: false,
      showProfile: false,
      menu: true,
      bikeSearch: false,
      recommendedSpots: false,
      secondUser:false,
    })
  }

  profile = () => {

    console.log('Profile')

    this.setState({

      newSign: false,
      signInDisplay: false,
      showProfile: true,
      menu: false,
      bikeSearch: false,
      recommendedSpots: false,
      secondUser:false,
    })

  }

  rentBike = () => {

    console.log('Bike Shop')

    this.setState({

      newSign: false,
      signInDisplay: false,
      showProfile: false,
      menu: false,
      bikeSearch: true,
      recommendedSpots: false,
      secondUser:false,
    })
  }

  rentBike = () => {

    console.log('Bike Shop')

    this.setState({

      newSign: false,
      signInDisplay: false,
      showProfile: false,
      menu: false,
      bikeSearch: true,
      recommendedSpots: false,
      secondUser:false,
    })
  }

  spotsfunc = () => {

    console.log('spots')

    this.setState({

      newSign: false,
      signInDisplay: false,
      showProfile: false,
      menu: false,
      bikeSearch: false,
      recommendedSpots: true,
      secondUser:false,
    })
  }

  /////////////////// SearchBike Function

  searchBike = (address) => {

    console.log('search bike')

    axios

      .get(
        'https://api.foursquare.com/v2/venues/search?near=' +
        address +
        '&query=bikerental&client_id=' //import your api key from foursquare
      )
      .then(res => {

        var shops2 = [];

        console.log(res.data.response.venues)

        for (i = 0; i < 10; i++) {
          shops2.push({
            name2: res.data.response.venues[i].name,
          });

          this.setState({
            shops2: shops2
          });
        }
      });

  }


  ////////////////// Recommended Function

  searchSpots = (address1) => {

    console.log('search spots')
    console.log(this.state.address1)

    axios
      .get(
        'https://api.foursquare.com/v2/venues/explore?near='+address1+'&section=topPicks&client_id=' //import your api key from foursquare
      )
      .then(res => {
        // var oldImg = this.state.url
        console.log('for search', res)
        console.log(res.data.response.groups[0].items[0].venue.name);
        console.log(res.data.response.groups[0])
        console.log(res.data.response.groups[0].items[0].venue.location.formattedAddress[0])
        console.log(res.data.response.groups[0].items[0].venue.location.formattedAddress[1])
        console.log(res.data.response.groups[0].items[0].venue.location.formattedAddress[2])
        var spots2 = [];
        var name2 = this.state.name2;

        for (i = 0; i < 10; i++) {

          spots2.push({
            name2: res.data.response.groups[0].items[i].venue.name,
            searchSpotAdd1: res.data.response.groups[0].items[i].venue.location.formattedAddress[0],
            searchSpotAdd2: res.data.response.groups[0].items[i].venue.location.formattedAddress[1],
            searchSpotAdd3: res.data.response.groups[0].items[i].venue.location.formattedAddress[2]

          });
          this.setState({
            spots2: spots2
          });
        }
      });
  }




  ///////////////// home and logout button function

  home = () => {

    console.log('home')

    this.setState({
      newSign: false,
      signInDisplay: true,
      showProfile: false,
      menu: false,
      bikeSearch: false,
      recommendedSpots: false,
    })
  }

  logout = () => {

    console.log('logout')

    this.setState({
      
      newSign: false,
      signInDisplay: true,
      showProfile: false,
      menu: false,
      bikeSearch: false,
      recommendedSpots: false,
    })
  }


  render() {

    let Splash_Screen = (

      <View>
        <View style={styles.SplashScreen_ChildView}>


          <Image source={load} style={{ height: 70, width: 200, }} />
          <Image source={img} style={{ height: 50, width: 200, marginBottom: 60 }} />

        </View>
      </View>
    )

    return (

      <View>

        <View style={styles.container}>

          {(this.state.isVisible === true) ? Splash_Screen : null}


          {this.state.signInDisplay == true ? <SignIn logInUser={this.logInUser.bind(this)} people={this.state.people} newUser={this.newUser.bind(this)} /> : null}

          {this.state.bikeSearch == true ? <SearchBike searchBike={this.searchBike} shops2={this.state.shops2} menu={this.menu.bind(this)} /> : null}

          {this.state.recommendedSpots == true ? <Recommended searchSpots={this.searchSpots} spots2={this.state.spots2} menu={this.menu.bind(this)} /> : null}

        </View>

        <View style={{ marginBottom: 30 }}>
          {this.state.newSign == true ? <SignUp register={this.register.bind(this)} newLoginUser={this.state.newLoginUser} home={this.home.bind(this)} /> : null}

        </View>

        <View style={{ marginBottom: 40 }}>
          {this.state.showProfile == true ? <Profile people={this.state.people} menu={this.menu.bind(this)} /> : null}
          {this.state.secondUser == true ? <NewUserProfile newLoginUser={this.state.newLoginUser} menu={this.menu.bind(this)} /> : null}
        </View>

        <View>
          {this.state.menu == true ? <Menu profile={this.profile.bind(this)} logout={this.logout.bind(this)} rentBike={this.rentBike.bind(this)} spotsfunc={this.spotsfunc.bind(this)} /> : null}
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    marginVertical: 35,
  },
  MainContainer:
  {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: (Platform.OS === 'android') ? 20 : 0
  },

  SplashScreen_RootView:
  {
    justifyContent: 'center',
    flex: 1,
    margin: 10,
    position: 'absolute',
    width: '100%',
    height: '100%',

  },

  SplashScreen_ChildView:
  {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    margin: 20,
  }
});
