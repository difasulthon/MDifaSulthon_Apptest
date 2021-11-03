import {CommonActions} from '@react-navigation/native';
import {NavigationActions} from '@react-navigation/compat';

let navigator;

const setTopLevelNavigator = navigatorRef => {
  navigator = navigatorRef;
};

const navigate = (routeName, params) => {
  navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    }),
  );
};

const openDrawer = () => {
  navigator.dispatch(NavigationActions.openDrawer());
};

const resetTo = routeName => {
  const resetAction = CommonActions.reset({
    index: 0,
    routes: [{name: routeName}],
  });
  navigator.dispatch(resetAction);
};

const back = key => {
  navigator.dispatch(
    NavigationActions.back({
      key,
    }),
  );
};

const navigateReset = (routeName, params) => {
  navigator.dispatch(
    CommonActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({
          routeName,
          params,
        }),
      ],
    }),
  );
};

export default {
  navigate,
  navigateReset,
  openDrawer,
  back,
  resetTo,
  setTopLevelNavigator,
};
