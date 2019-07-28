import { createStackNavigator } from 'react-navigation';
import { Post, Details, ImageView } from '../screens';

const AppNavigator = createStackNavigator({
    Post: {
      screen: Post,
      navigationOptions: ({ navigation }) => ({
        title: 'Posts',
      }),
    },
    Details: {
      screen: Details,
      navigationOptions: ({ navigation }) => ({
        title: 'Details',
      }),
    },
    ImageView: {
      screen: ImageView,
      navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.name}`,
    }),
    }
});

export default AppNavigator;
