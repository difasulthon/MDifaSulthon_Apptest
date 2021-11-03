import React, {useEffect, useState} from 'react';
import {FlatList, Image, RefreshControl, StyleSheet, View} from 'react-native';
import {Icon} from 'react-native-elements';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import {
  BaseScreen,
  Body,
  BodySmall,
  Button,
  ButtonAdd,
  CardContact,
  H1,
  HorizontalLine,
  ModalSwipe,
  VerticalSpacer,
} from '../component';
import {
  COLOR_BACKGROUND,
  COLOR_ERROR,
  COLOR_PRIMARY,
  COLOR_SECONDARY,
  NAV_NAME_CONTACT_DETAIL,
  NAV_NAME_CONTACT_FORM,
  NAV_NAME_HELP,
} from '../contant';
import {
  alertAskForConfirmation,
  alertError,
  alertInfo,
  deleteContact,
  getContactById,
} from '../helper';
import LocalizedString from '../localization';
import navigationService from '../navigation-service';
import {clearListContact} from '../redux/action';
import getListContactAsync from '../redux/action/async/getListContactAsync';
import {moderateScale} from 'react-native-size-matters';

const ContactList = () => {
  const [loading, setLoading] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [chooseItem, setChooseItem] = useState({});

  const downloading = useSelector(state => state.contact.downloading);
  const listContact = useSelector(state => state.contact.listContact);

  const dispatch = useDispatch();

  const onAddContact = () => {
    navigationService.navigate(NAV_NAME_CONTACT_FORM);
  };

  const onRefresh = () => {
    dispatch(clearListContact());
    dispatch(getListContactAsync());
  };

  useEffect(() => {
    dispatch(getListContactAsync());
  }, []);

  const onPressCrad = item => {
    setLoading(true);
    getContactById(item.id)
      .then(res => {
        setLoading(false);
        navigationService.navigate(NAV_NAME_CONTACT_DETAIL, {data: res.data});
      })
      .catch(err => {
        setLoading(false);
        alertError(err.message);
      });
  };

  const onLongPressCard = item => {
    setChooseItem(item);
    setIsModalVisible(true);
  };

  const updateItem = data => {
    setLoading(true);
    setIsModalVisible(false);
    getContactById(data.id)
      .then(res => {
        setLoading(false);
        navigationService.navigate(NAV_NAME_CONTACT_FORM, {data: res.data});
      })
      .catch(err => {
        setLoading(false);
        alertError(err.message);
      });
  };

  const deleteItem = data => {
    alertAskForConfirmation(
      `${LocalizedString.contactList.askDeleteConfirm} ${data.firstName}?`,
      () => {
        setLoading(true);
        setIsModalVisible(false);
        deleteContact(data.id)
          .then(async res => {
            dispatch(getListContactAsync());
            setLoading(false);
            alertInfo(res.message);
          })
          .catch(err => {
            setLoading(false);
            alertError(err.message);
          });
      },
    );
  };

  return (
    <BaseScreen>
      <View style={styles.container}>
        <H1 bold>Hi, {LocalizedString.contactList.labelUser}!</H1>
        <View style={styles.subtitleContainer}>
          <View style={styles.greetingContainer}>
            <BodySmall style={styles.blueText}>
              {LocalizedString.contactList.labelView}
            </BodySmall>
            <BodySmall> & </BodySmall>
            <BodySmall style={styles.blueText}>
              {LocalizedString.contactList.labelAdd}{' '}
            </BodySmall>
            <BodySmall>
              {LocalizedString.contactList.labelYourContact}
            </BodySmall>
          </View>
          <Icon
            name="newspaper"
            type="ionicon"
            size={24}
            color={COLOR_SECONDARY}
            onPress={() => navigationService.navigate(NAV_NAME_HELP)}
          />
        </View>
        <VerticalSpacer height={24} />
        <HorizontalLine />
        <VerticalSpacer height={24} />
        <FlatList
          showsVerticalScrollIndicator={false}
          data={listContact}
          key={'_'}
          keyExtractor={ix => '_' + ix.id}
          renderItem={({item}) => {
            return (
              <CardContact
                item={item}
                onPress={onPressCrad}
                onLongPress={onLongPressCard}
              />
            );
          }}
          style={styles.listContainer}
          refreshControl={
            <RefreshControl
              refreshing={loading || downloading}
              onRefresh={onRefresh}
              enabled
              progressBackgroundColor={COLOR_BACKGROUND}
              colors={[COLOR_PRIMARY]}
            />
          }
        />

        <ButtonAdd onPress={onAddContact} />
      </View>
      <ModalSwipe
        isVisible={isModalVisible}
        onSwipeComplete={() => setIsModalVisible(false)}>
        <View style={styles.modalContainer}>
          {chooseItem ? (
            <>
              <View style={styles.modalContentContainer}>
                <View style={styles.detailContainer}>
                  <Image
                    style={styles.photo}
                    source={{uri: chooseItem.photo}}
                  />
                  <View style={styles.textContainer}>
                    <View style={styles.labelContainer}>
                      <Body>
                        {LocalizedString.contactList.labelFirstName}:{' '}
                      </Body>
                      <Body bold>{chooseItem.firstName}</Body>
                    </View>
                    <View style={styles.labelContainer}>
                      <Body>{LocalizedString.contactList.labelLastName}: </Body>
                      <Body bold>{chooseItem.lastName}</Body>
                    </View>
                    <View style={styles.labelContainer}>
                      <Body>{LocalizedString.contactList.labelAge}: </Body>
                      <Body bold>
                        {chooseItem.age} {LocalizedString.contactList.labelYear}
                      </Body>
                    </View>
                  </View>
                </View>
              </View>
            </>
          ) : null}
          <View style={styles.buttonContainer}>
            <Button
              caption={LocalizedString.contactList.buttonCaptionUpdate}
              onPress={() => updateItem(chooseItem)}
            />
            <Button
              containerStyle={styles.buttonDelete}
              caption={LocalizedString.contactList.buttonCpationDelete}
              onPress={() => deleteItem(chooseItem)}
            />
          </View>
        </View>
      </ModalSwipe>
    </BaseScreen>
  );
};

export default ContactList;

const styles = StyleSheet.create({
  container: {
    flex: moderateScale(1),
    paddingHorizontal: moderateScale(16),
    paddingTop: moderateScale(30),
    paddingVertical: moderateScale(10),
  },
  greetingContainer: {
    flex: moderateScale(1),
    flexDirection: 'row',
  },
  subtitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  blueText: {
    color: COLOR_PRIMARY,
  },
  listContainer: {
    flex: moderateScale(1),
  },
  modalContainer: {
    flex: moderateScale(1),
    paddingHorizontal: moderateScale(16),
    paddingVertical: moderateScale(10),
  },
  photoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: moderateScale(12),
  },
  photo: {
    width: moderateScale(80),
    height: moderateScale(80),
    aspectRatio: moderateScale(1),
    borderRadius: moderateScale(10),
    borderWidth: moderateScale(1),
    borderColor: COLOR_PRIMARY,
    marginRight: moderateScale(14),
  },
  modalContentContainer: {
    flex: moderateScale(1),
  },
  textContainer: {
    flex: moderateScale(1),
  },
  labelContainer: {
    flexDirection: 'row',
  },
  detailContainer: {
    flexDirection: 'row',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonDelete: {
    backgroundColor: COLOR_ERROR,
  },
});
