import React from 'react';
import {StyleSheet, View} from 'react-native';
import Modal from 'react-native-modal';
import {COLOR_BACKGROUND, COLOR_SWIPE_MODAL} from '../contant';
import {getScreenDimension} from '../helper';
import {moderateScale} from 'react-native-size-matters';

const {height, width} = getScreenDimension();

const ModalSwipe = ({
  children,
  isVisible,
  onSwipeComplete,
  style,
  ...props
}) => {
  return (
    <Modal
      isVisible={isVisible}
      onSwipeComplete={onSwipeComplete}
      swipeDirection="down"
      style={styles.container}
      deviceHeight={height}
      deviceWidth={width}
      backdropOpacity={0.2}
      onBackdropPress={onSwipeComplete}
      {...props}>
      <View style={styles.content}>
        <View style={styles.swipeable} />
        {children}
      </View>
    </Modal>
  );
};

export default ModalSwipe;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
    margin: moderateScale(0),
  },
  content: {
    height: '30%',
    backgroundColor: COLOR_BACKGROUND,
    borderTopRightRadius: moderateScale(32),
    borderTopLeftRadius: moderateScale(32),
    padding: moderateScale(20),
  },
  swipeable: {
    height: moderateScale(5),
    width: moderateScale(40),
    backgroundColor: COLOR_SWIPE_MODAL,
    borderRadius: moderateScale(3.5),
    alignSelf: 'center',
  },
});
