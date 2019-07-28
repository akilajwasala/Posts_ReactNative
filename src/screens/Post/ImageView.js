//This is the Screen 3
import React from 'react'
import { View, Image, StyleSheet } from 'react-native'

export default ImageView = (props) => {
    return (
        <View style={styles.containerStyle}>
            <Image
                style={styles.imageStyle}
                source={{uri: props.navigation.state.params.album.url}}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    imageStyle: {
        flex: 1,
    },
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
        height: 300,
        width: null
    }
})