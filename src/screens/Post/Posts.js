//This is the Screen 1
import  React, { Component } from 'react'
import { View, FlatList, ActivityIndicator } from 'react-native'

import { PostCell } from '../../components';
import { getPostAsync, getUserAsync } from '../../services';

export default class Post extends Component {
    state = {
        isLoading: true,
        posts: [],
        users: []
    }

    async componentDidMount() {
        // since there is no user details embedded in the 'Post' object, got all the users one time and mapped in to an array. 
        const users = await getUserAsync();
        const posts = await getPostAsync();

        this.setState({
            isLoading: false,
            posts,
            users
        })

    }

    render() {
        const { isLoading, posts } = this.state;

        if (isLoading) {
            return (
                <View>
                    <ActivityIndicator size='large' animating />
                </View>
            )
        } else {
            return (
                <View>
                    <FlatList
                        data={posts}
                        renderItem={this.renderPostItem}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </View>
            )
        }
    }

    getUserNameById = (id) => {
        return this.state.users.length > 0 ?
         this.state.users.find(item => item.id == id).name: '';
    }

    renderPostItem = ({ item, index }) => <PostCell
        key={index} 
        navigation={this.props.navigation}
        item={item}
        name={this.getUserNameById(item.userId)}
    />
}