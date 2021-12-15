import React from 'react'
import { View, Text, Image } from 'react-native'
import { styles } from '../../styles/styles';
import Button from './Button'

const Header = () => {
    return (
      <View style={{flexDirection: 'row', justifyContent: "space-around", alignItems: "center"}}>
        <Button size="small" color="white" name="settings-outline" />
        <Image source={require("../../assets/aboba.jpg")} style={styles.image} />
        <Button size="small" color="white" name="settings-outline" />
      </View>
    );
}

export default Header
