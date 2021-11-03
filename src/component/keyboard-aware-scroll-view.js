import React from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const Control = ({children, ...props}) => {
  return (
    <KeyboardAwareScrollView showsVerticalScrollIndicator={false} {...props}>
      {children}
    </KeyboardAwareScrollView>
  );
};

export default Control;
