import React from 'react';
import {View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {Body, BodySmall} from '.';
import {COLOR_BACKGROUND, COLOR_BORDER, POPPINS_LIGHT} from '../contant';

const styles = StyleSheet.create({
  cardContentContainer: {
    flex: 1,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: COLOR_BORDER,
    backgroundColor: COLOR_BACKGROUND,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    marginBottom: 10,
    marginTop: 10,
  },
  cardContentRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  content: {
    flex: 1,
    padding: 10,
  },
  ageText: {
    fontFamily: POPPINS_LIGHT,
  },
  photoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 12,
  },
  photo: {
    width: 40,
    height: 40,
    aspectRatio: 1,
    borderRadius: 40 / 2,
    borderColor: '#d6d7da',
    marginRight: 14,
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
