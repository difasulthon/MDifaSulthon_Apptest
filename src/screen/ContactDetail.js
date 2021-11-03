import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {Icon} from 'react-native-elements';
import {BaseScreen, Body, H3} from '../component';
import {COLOR_BACKGROUND} from '../contant';
import {ios} from '../helper';
import navigationService from '../navigation-service';
import {moderateScale} from 'react-native-size-matters';

const ContactDetail = ({route}) => {
  const params = route.params.data;

  return (
    <BaseScreen>
      <Image source={{uri: params.photo}} style={styles.photo} />
      <View style={styles.detailContainer}>
        <H3 bold>
          {params.firstName} {params.lastName}
        </H3>
        <Body>{params.age} Tahun</Body>
      </View>
      <View style={styles.iconBackContainer}>
        <TouchableOpacity onPress={() => navigationService.back()}>
          <Icon
            name={ios ? 'ios-arrow-back' : 'md-arrow-back'}
            type="ionicon"
            color={COLOR_BACKGROUND}
            size={30}
          />
        </TouchableOpacity>
      </View>
    </BaseScreen>
  );
};

export default ContactDetail;

const styles = StyleSheet.create({
  photo: {
    width: '100%',
    height: '75%',
    borderBottomRightRadius: moderateScale(70),
  },
  detailContainer: {
    paddingHorizontal: moderateScale(16),
    flex: moderateScale(1),
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconBackContainer: {
    height: moderateScale(40),
    width: moderateScale(40),
    backgroundColor: 'black',
    opacity: 0.4,
    borderRadius: moderateScale(40 / 2),
    position: 'absolute',
    top: moderateScale(16),
    left: moderateScale(16),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
