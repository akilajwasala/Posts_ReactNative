//This is the Screen 2
import React, { Component } from 'react'
import { Text, View, ActivityIndicator, FlatList, TouchableOpacity, Image, Dimensions } from 'react-native';

import { GridCell } from '../../components';
import { getPhotoAsync } from '../../services';

const numColumns = 3;

export default class Details extends Component {
    constructor() {
        super()
        this.state = {
            isLoading: true,
            dataSource: []
        }
    }

    async componentDidMount() {
        const dataSource = await getPhotoAsync(1);
        
        this.setState({
            isLoading: false,
            dataSource: dataSource
        })
    }

    render() {
        const { isLoading, dataSource } = this.state;

        if (isLoading) {
            return (
                <View>
                    <View style={styles.containerStyle}>
                        <Text style={styles.textStyle}>{this.props.navigation.state.params.post.title}</Text>
                        <Text style={styles.textStyle}>{this.props.navigation.state.params.post.body}</Text>
                    </View>
                    <View>
                        <ActivityIndicator size='large' animating />
                    </View>
                </View>
            )
        } else {
            return (
                <View>
                    <View style={styles.containerStyle}>
                        <Text style={styles.textStyle}>{this.props.navigation.state.params.post.title}</Text>
                        <Text style={styles.textStyle}>{this.props.navigation.state.params.post.body}</Text>
                    </View>
                    <FlatList
                        data={dataSource}
                        renderItem={this.renderItem}
                        keyExtractor={(item, index) => index.toString()}
                        numColumns={numColumns}
                    />
                </View>
            )
        }
    }

    renderItem = ({ item, index }) => {
        return (<GridCell 
            item={item}
            navigation={this.props.navigation}
            numColumns={numColumns}
            />
        )
    }
}

const styles = {
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
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
        marginBottom: 10,
        justifyContent: 'flex-start'
    },
    textStyle: {
        fontSize: 16,
        paddingTop: 10,
        paddingBottom: 10,
        marginLeft: 10,
        marginRight: 10
    },
    imageStyle: {
        height: null,
        flex: 1,
        width: Dimensions.get('window').width / numColumns
    },
    item: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        margin: 0,
        height: Dimensions.get('window').width / numColumns,
    },
    container: {
        flex: 1,
        marginVertical: 20,
    }
}