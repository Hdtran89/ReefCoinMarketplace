import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  Animated,
  Dimensions
} from 'react-native'

import { connect } from 'react-redux'
import { Auth } from 'aws-amplify'

import { logOut } from '../actions'
import { colors, fonts } from '../theme'
const { width, height } = Dimensions.get('window')

class Messages extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.messages_container}>
          <Text style={styles.welcome}>Messages</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  messages_container: {
    alignItems: 'center'
  },
  welcome: {
    fontFamily: fonts.light,
    color: 'rgba(0, 0, 0, .85)',
    marginBottom: 26,
    fontSize: 22,
    textAlign: 'center'
  }
})

const mapStateToProps = state => ({
  auth: state.auth
})
export default connect(mapStateToProps)(Messages)