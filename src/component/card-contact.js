import React from 'react';
import {View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {Body, BodySmall} from '.';
import {
  COLOR_BACKGROUND,
  COLOR_BORDER,
  COLOR_PRIMARY,
  POPPINS_LIGHT,
} from '../contant';
import {moderateScale} from 'react-native-size-matters';

const styles = StyleSheet.create({
  cardContentContainer: {
    flex: moderateScale(1),
    borderRadius: moderateScale(10),
    borderWidth: moderateScale(0.5),
    borderColor: COLOR_BORDER,
    backgroundColor: COLOR_BACKGROUND,
    shadowColor: '#000',
    shadowOffset: {
      width: moderateScale(0),
      height: moderateScale(1),
    },
    shadowOpacity: moderateScale(0.2),
    shadowRadius: moderateScale(1.41),
    elevation: moderateScale(2),
    marginBottom: moderateScale(10),
    marginTop: moderateScale(10),
  },
  cardContentRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  content: {
    flex: 1,
    padding: moderateScale(10),
  },
  ageText: {
    fontFamily: POPPINS_LIGHT,
  },
  photoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: moderateScale(12),
  },
  photo: {
    width: moderateScale(40),
    height: moderateScale(40),
    aspectRatio: moderateScale(1),
    borderRadius: moderateScale(40 / 2),
    marginRight: moderateScale(14),
    borderWidth: moderateScale(1),
    borderColor: COLOR_PRIMARY,
  },
});

const CardContact = ({item, onPress, onLongPress}) => {
  return (
    <TouchableOpacity
      onLongPress={() => onLongPress(item)}
      onPress={() => onPress(item)}>
      <View style={styles.cardContentContainer}>
        <View style={styles.cardContentRow}>
          <View style={styles.photoContainer}>
            <Image style={styles.photo} source={{uri: item.photo}} />
          </View>
          <View style={styles.content}>
            <Body numberOfLines={2} ellipsizeMode="tail" bold>
              {item.firstName} {item.lastName}
            </Body>
            <BodySmall style={styles.ageText}>{item.age} Tahun</BodySmall>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const areEqual = (prevProps, nextProps) => {
  return prevProps.text === nextProps.text;
};

export default React.memo(CardContact, areEqual);
