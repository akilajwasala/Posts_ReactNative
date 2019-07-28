import React from 'react';
import { TouchableOpacity, View, Dimensions, Image } from 'react-native';

const { width } = Dimensions.get('window');

export default  GridCell = ({ navigation, item, numColumns }) => {
    
    return (
        <TouchableOpacity onPress={() => {
            navigation.navigate('ImageView',{
                album: item,
                name: 'Image View'
            })
        }}>
            <View style={[styles.item, { height: width / numColumns}]}>
                <Image
                    style={[styles.imageStyle, { width: width / numColumns}]}
                    source={{ uri: item.thumbnailUrl }}
                />
            </View>
        </TouchableOpacity>
    )
}


const styles = {
    imageStyle: {
        height: null,
        flex: 1,
    },
    item: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        margin: 0
    },
    container: {
        flex: 1,
        marginVertical: 20,
    }
}