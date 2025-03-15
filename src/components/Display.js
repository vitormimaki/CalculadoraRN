import React from "react"
import {StyleSheet, SafeAreaView, Text} from 'react-native'

export default props => {
    return (
        <SafeAreaView style={style.display}>
            <Text style={style.displayValue}
                numberOfLines={1}>{props.value}</Text>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    display: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'flex-end',
        backgroundColor: 'rgba(0,0,0,0.6)',
    },
    displayValue: {
        fontSize: 55,
        color: '#fff',
    }
})