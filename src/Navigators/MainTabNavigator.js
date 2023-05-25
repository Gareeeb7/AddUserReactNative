import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import Colors from '../Theme/Colors'
import ExampleScreen from '../Containers/Example/ExampleScreen'

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const ExploreStack = createStackNavigator(
  {
    Explore: ExampleScreen,
  },
  config
);

ExploreStack.navigationOptions = {
  tabBarLabel: 'Explore',
    tabBarOptions: {
        activeTintColor: Colors.primary,
        style: {
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
            borderColor: Colors.success,
            borderWidth: 1,
        }
    }

};

ExploreStack.path = '';

const DealsStack = createStackNavigator(
  {
    // Links: RequestListScreen,
      Deals: ExampleScreen,
  },
  config
);

DealsStack.navigationOptions = {
  tabBarLabel: 'Deals',
  tabBarOptions: {
    activeTintColor: Colors.primary,
    style: {
      borderTopRightRadius: 20,
      borderTopLeftRadius: 20,
      borderColor: Colors.success,
      borderWidth: 1,
    }
  }
};

DealsStack.path = '';

const SpotlightStack = createStackNavigator(
  {
    Spotlight: ExampleScreen,
  },
  config
);

SpotlightStack.navigationOptions = {
  tabBarLabel: 'Spotlight',
  tabBarOptions: {
    activeTintColor: Colors.primary,
    style: {
      borderTopRightRadius: 20,
      borderTopLeftRadius: 20,
      borderColor: Colors.success,
      borderWidth: 1,
    }
  }
};

SpotlightStack.path = '';


const EventsStack = createStackNavigator(
  {
    Events: ExampleScreen,
  },
  config
);

EventsStack.navigationOptions = {
  tabBarLabel: 'Events',
  tabBarOptions: {
    activeTintColor: Colors.primary,
    style: {
      borderTopRightRadius: 20,
      borderTopLeftRadius: 20,
      borderColor: Colors.success,
      borderWidth: 1,
    }
  }
};

EventsStack.path = '';



const ProfileStack = createStackNavigator(
    {
        Profile: ExampleScreen,
    },
    config
);

ProfileStack.navigationOptions = {
    tabBarLabel: 'Profile',
  tabBarOptions: {
    activeTintColor: Colors.primary,
    style: {
      borderTopRightRadius: 20,
      borderTopLeftRadius: 20,
      borderColor: Colors.success,
      borderWidth: 1,
    }
  }
};

ProfileStack.path = '';

const tabNavigator = createBottomTabNavigator({
    ExploreStack,
    DealsStack,
    SpotlightStack,
  EventsStack,
    ProfileStack
},);

tabNavigator.path = '';

export default tabNavigator;
