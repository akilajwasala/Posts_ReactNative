import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default PostCell = ({ navigation, item, name }) => {
    return (
        <TouchableOpacity onPress={() => {
                navigation.navigate('Details', {
                    post: item,
                    name: 'Image'
                })
            }}>
                <View style={styles.containerStyle}>
                    <Text style={styles.textStyleTitle}>{name}</Text>
                    <Text style={styles.textStyleNormal}>{item.title}</Text>
                </View>
        </TouchableOpacity>
    ) 
}

const styles = StyleSheet.create({
    containerStyle: {
        borderWidth: 1,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#000000',
        borderBottomWidth: 1,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
        justifyContent: 'flex-start',
        flex: 1,
        backgroundColor: '#6ED4C8'
    },
    textStyleNormal: {
        fontSize: 16,
        paddingTop: 10,
        paddingBottom: 10,
        marginLeft: 10,
        marginRight: 10
    },
    textStyleTitle: {
        fontSize: 18,
        paddingTop: 10,
        paddingBottom: 10,
        marginLeft: 10,
        marginRight: 10
    }
})