import React, {useState} from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {Icon} from 'react-native-elements';
import {
  AddPhoto,
  BaseScreen,
  Button,
  KeyboardAwareScrollView,
  PageHeader,
  TextFieldOutline,
  VerticalSpacer,
} from '../component';
import {
  COLOR_BACKGROUND,
  COLOR_ERROR,
  COLOR_PRIMARY,
  COLOR_SECONDARY,
  IMAGE_SOURCE_URI_PREFIX,
  POPPINS_REGULAR,
} from '../contant';
import {
  alertError,
  alertInfo,
  getScreenDimension,
  postContact,
  putContact,
} from '../helper';
import navigationService from '../navigation-service';
import ImgToBase64 from 'react-native-image-base64';

const {width} = getScreenDimension();

const renderPicture = (picture, onDeletePicture) => (
  <View style={styles.pictureBoxContainer}>
    <View style={styles.pictureBox}>
      <Image style={styles.imageShow} source={{uri: picture}} />
    </View>
    <TouchableOpacity
      onPress={() => onDeletePicture()}
      activeOpacity={0.8}
      style={styles.iconRemovePicture}>
      <Icon name="x-circle" type="feather" size={32} color={COLOR_ERROR} />
    </TouchableOpacity>
  </View>
);

const ContactForm = ({route}) => {
  const params = route.params ? route.params.data : null;

  const [firtsName, setFirstName] = useState(params ? params.firstName : '');
  const [lastName, setLastName] = useState(params ? params.lastName : '');
  const [age, setAge] = useState(params ? params.age.toString() : '');
  const [photo, setPhoto] = useState(params ? params.photo : null);
  const [loading, setLoading] = useState(false);

  const onBackButton = () => {
    navigationService.back();
  };

  const onSelectPicture = data => {
    ImgToBase64.getBase64String(data.uri)
      .then(base64String => {
        setPhoto(`${IMAGE_SOURCE_URI_PREFIX}${base64String}`);
      })
      .catch(err => console.log(err));
  };

  const onDeletePicture = () => {
    setPhoto();
  };

  const resetValue = () => {
    setFirstName('');
    setLastName('');
    setAge('');
    setPhoto();
  };

  const onAddPress = () => {
    setLoading(true);
    const data = {
      firstName: firtsName,
      lastName: lastName,
      age: parseInt(age),
      photo: photo,
    };
    if (params) {
      putContact(data)
        .then(res => {
          setLoading(false);
          alertInfo(res.message);
        })
        .catch(err => {
          alertError(err);
          setLoading(false);
        });
    } else {
      postContact(data)
        .then(res => {
          resetValue();
          setLoading(false);
          alertInfo(res.message);
          navigationService.back();
        })
        .catch(err => {
          alertError(err);
          setLoading(false);
        });
    }
  };

  return (
    <BaseScreen>
      <PageHeader pageTitle="Form" backButton onBackButton={onBackButton} />
      <KeyboardAwareScrollView>
        <View style={styles.container}>
          <View style={styles.photoContainer}>
            {photo ? (
              renderPicture(photo, onDeletePicture)
            ) : (
              <AddPhoto onSelectPicture={onSelectPicture} />
            )}
          </View>
          <VerticalSpacer height={20} />
          <TextFieldOutline
            label="Firts Name"
            placeholder="Input your first name"
            value={firtsName}
            onChangeText={text => setFirstName(text)}
          />
          <VerticalSpacer height={20} />
          <TextFieldOutline
            label="Last Name"
            placeholder="Input your last name"
            value={lastName}
            onChangeText={text => setLastName(text)}
          />
          <VerticalSpacer height={20} />
          <TextFieldOutline
            label="Age"
            placeholder="Input your age"
            value={age}
            onChangeText={text => setAge(text)}
            keyboardType="numeric"
          />
          <VerticalSpacer height={40} />
        </View>
      </KeyboardAwareScrollView>

      <Button
        containerStyle={styles.buttonAdd}
        caption={params ? 'Update' : 'Tambah'}
        loading={loading}
        onPress={onAddPress}
      />
    </BaseScreen>
  );
};

export default ContactForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  photoContainer: {
    flex: 1,
    alignSelf: 'center',
  },
  labelPhoto: {
    fontSize: 16,
    fontFamily: POPPINS_REGULAR,
    color: COLOR_SECONDARY,
  },
  buttonAdd: {
    marginHorizontal: 16,
    marginBottom: 16,
  },
  pictureBoxContainer: {
    alignSelf: 'center',
    flex: 1,
  },
  pictureBox: {
    width: (width - 25) / 2,
    height: (width - 25) / 2,
    aspectRatio: 1,
    borderRadius: 13,
    borderColor: '#d6d7da',
    marginRight: 7,
  },
  iconRemovePicture: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 32,
    height: 32,
    backgroundColor: COLOR_BACKGROUND,
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageShow: {
    borderRadius: 20,
    height: '100%',
    borderWidth: 1,
    borderColor: COLOR_PRIMARY,
  },
});
