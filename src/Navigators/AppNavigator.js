import { createAppContainer, createStackNavigator } from 'react-navigation'
import SplashScreen  from '../Components/SplashScreen/SplashScreen'
import { Screens } from '../Constants/Screens'


const StackNavigator = createStackNavigator(
    {
        SplashScreen: SplashScreen,
    },
    {
        initialRouteName: Screens.SplashScreen, // By default the application will show the splash screen
        headerMode: 'none',
    }
)

export default createAppContainer(StackNavigator)
