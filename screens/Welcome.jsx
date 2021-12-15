import React from 'react'
import { Text, SafeAreaView } from 'react-native'
import ButtonWithText from '../components/UI/ButtonWithText'
import { styles } from '../styles/styles'

const Welcome = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.androidSafeArea}>
            <Text style={styles.regular}>Welcome to the cum zone</Text>
            <ButtonWithText size="big" title='Proceed' onPress={() => navigation.navigate('Auth')}/>
        </SafeAreaView>
    )
}

export default Welcome
