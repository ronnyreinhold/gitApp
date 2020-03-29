import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './pages/Main';
import User from './pages/User';
import Repository from './pages/Repository';

const Stack = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#72B0CC',
          },
          headerTintColor: '#fff',
          headerBackTitle: 'false',
        }}
      >
        <Stack.Screen
          name="Main"
          options={{ title: 'Usuários' }}
          component={Main}
        />
        <Stack.Screen
          name="User"
          component={User}
          options={({ route }) => ({ title: route.params.user.name })}
        />

        <Stack.Screen
          name="Repository"
          component={Repository}
          options={({ route }) => ({ title: route.params.repository.name })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
