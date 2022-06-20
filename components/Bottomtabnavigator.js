import React, {Component} from 'react';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs'; 
import { NavigationContainer } from '@react-navigation/native';
import Search from '../screens/Search';
import Tracsaction from '../screens/Transaction';

const Tab = createBottomTabNavigator();
export default class Bottomtabnavigator extends Component {
  render() {
    return (
      <NavigationContainer>
          <Tab.Navigator>
              <Tab.Screen name='Tracsaction' component={Tracsaction}/>
              <Tab.Screen name='Search' component={Search}/>
          </Tab.Navigator>
      </NavigationContainer>
    )
  }
}
