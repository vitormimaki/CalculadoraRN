import React from 'react'
import { SafeAreaView, StyleSheet, Text, Dimensions, TouchableHighlight, Button, TouchableOpacity} from 'react-native'

export default props => {
    const stylesButton = [style.button]
    if(props.double) stylesButton.push(style.buttonDouble)
    if(props.triple) stylesButton.push(style.buttonTriple)
    if(props.operation) stylesButton.push(style.operationButton)
    return (
        <TouchableHighlight onPress={() => props.onClick(props.label)}>
            <Text style={stylesButton}>{props.label}</Text>
        </TouchableHighlight>
    )
}

const style = StyleSheet.create({
    button: {
        fontSize: 40,
        height: Dimensions.get('window').width / 4,
        width: Dimensions.get('window').width / 4,
        padding: 20,
        backgroundColor: '#f0f0f0',
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#888',
    },
    operationButton: {
        color: '#fff',
        backgroundColor: '#fa8231',
    },
    buttonDouble: {
        width: (Dimensions.get('window').width / 4) * 2,
    },
    buttonTriple: {
        width: (Dimensions.get('window').width / 4) * 3,
    },
})