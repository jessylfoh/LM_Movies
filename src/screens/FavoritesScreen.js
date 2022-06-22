import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import {styles} from '../config/styles'

const FavoritesScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Liste de mes films favoris</Text>
        </View>
    )
}

export default FavoritesScreen

