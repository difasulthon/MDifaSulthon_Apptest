import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import navigationService from './navigation-service';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from './redux/store';
import Splash from './screen/Splash';
import {createStackNavigator} from '@react-navigation/stack';
import {
  NAV_NAME_CONTACT_DETAIL,
  NAV_NAME_CONTACT_FORM,
  NAV_NAME_CONTACT_LIST,
  NAV_NAME_SPLASH,
} from './contant';
import ContactList from './screen/ContactList';
import ContactForm from './screen/ContactForm';
import ContactDetail from './screen/ContactDetail';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<Splash disableEvents />} persistor={persistor}>
        <SafeAreaProvider>
          <NavigationContainer
            ref={navigatorRef => {
              navigationService.setTopLevelNavigator(navigatorRef);
            }}>
            <Stack.Navigator screenOptions={{headerShown: false}}>
              <Stack.Screen name={NAV_NAME_SPLASH} component={Splash} />
              <Stack.Screen
                name={NAV_NAME_CONTACT_LIST}
                component={ContactList}
              />
              <Stack.Screen
                name={NAV_NAME_CONTACT_FORM}
                component={ContactForm}
              />
              <Stack.Screen
                name={NAV_NAME_CONTACT_DETAIL}
                component={ContactDetail}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
