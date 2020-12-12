import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Tutorial184695Navigator from '../features/Tutorial184695/navigator';
import NotificationList184667Navigator from '../features/NotificationList184667/navigator';
import Settings184666Navigator from '../features/Settings184666/navigator';
import Settings184658Navigator from '../features/Settings184658/navigator';
import UserProfile184656Navigator from '../features/UserProfile184656/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Tutorial184695: { screen: Tutorial184695Navigator },
NotificationList184667: { screen: NotificationList184667Navigator },
Settings184666: { screen: Settings184666Navigator },
Settings184658: { screen: Settings184658Navigator },
UserProfile184656: { screen: UserProfile184656Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
