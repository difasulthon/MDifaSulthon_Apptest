import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {Icon} from 'react-native-elements';
import * as imagePicker from 'react-native-image-picker';
import {COLOR_INPUT_BORDER_INACTIVE, COLOR_PRIMARY} from '../contant';
import {getScreenDimension} from '../helper';
import {moderateScale} from 'react-native-size-matters';

const {width} = getScreenDimension();

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
  pictureBoxContainer: {
    flex: moderateScale(1),
  },
  pictureBox: {
    width: (width - 25) / 2,
    height: (width - 25) / 2,
    aspectRatio: moderateScale(1),
    borderRadius: moderateScale(20),
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: moderateScale(1),
    borderColor: COLOR_INPUT_BORDER_INACTIVE,
  },
});

const renderSelectPicture = onSelectPicture => {
  const options = {
    quality: 1,
  };
  imagePicker.launchImageLibrary(options, response => {
    if (response.assets) {
      onSelectPicture(response.assets[0]);
    }
  });
};

const AddPhoto = ({onSelectPicture, loading}) => {
  const renderIconAddPhoto = () => (
    <Icon
      name="plus"
      type="feather"
      size={moderateScale(50)}
      color={COLOR_PRIMARY}
    />
  );

  if (loading) {
    return (
      <View style={styles.container}>
        <View style={styles.pictureBoxContainer}>
          <View style={styles.pictureBox}>
            <ActivityIndicator size="small" color={COLOR_PRIMARY} />
          </View>
        </View>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <View style={styles.pictureBoxContainer}>
        <TouchableOpacity
          style={styles.pictureBox}
          onPress={() => renderSelectPicture(onSelectPicture)}>
          {renderIconAddPhoto()}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddPhoto;
