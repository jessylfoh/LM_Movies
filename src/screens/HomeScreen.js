import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import {styles} from '../config/styles'

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Liste des films les plus populaires </Text>
        </View>
    )
}

export default HomeScreen

