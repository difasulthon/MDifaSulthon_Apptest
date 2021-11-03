import React, {useEffect, useState} from 'react';
import {FlatList, Image, RefreshControl, StyleSheet, View} from 'react-native';
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
  NAV_NAME_CONTACT_DETAIL,
  NAV_NAME_CONTACT_FORM,
} from '../contant';
import {
  alertAskForConfirmation,
  alertError,
  alertInfo,
  deleteContact,
  getContactById,
  getContacts,
} from '../helper';
import LocalizedString from '../localization';
import navigationService from '../navigation-service';

const ContactList = () => {
  const [loading, setLoading] = useState(false);
  const [contacts, setContacts] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [chooseItem, setChooseItem] = useState({});

  const onAddContact = () => {
    navigationService.navigate(NAV_NAME_CONTACT_FORM);
  };

  const onApear = () => {
    setLoading(true);
    getContacts()
      .then(res => {
        setContacts(res.data);
        setLoading(false);
      })
      .catch(err => {
        setLoading(false);
        alertError(err.message);
      });
  };

  useEffect(() => {
    onApear();
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
            // onApear();
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
          <BodySmall style={styles.blueText}>
            {LocalizedString.contactList.labelView}
          </BodySmall>
          <BodySmall> & </BodySmall>
          <BodySmall style={styles.blueText}>
            {LocalizedString.contactList.labelAdd}{' '}
          </BodySmall>
          <BodySmall>{LocalizedString.contactList.labelYourContact}</BodySmall>
        </View>
        <VerticalSpacer height={24} />
        <HorizontalLine />
        <VerticalSpacer height={24} />
        <FlatList
          showsVerticalScrollIndicator={false}
          data={contacts}
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
              refreshing={loading}
              onRefresh={onApear}
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
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 30,
    paddingVertical: 10,
  },
  subtitleContainer: {
    flexDirection: 'row',
  },
  blueText: {
    color: COLOR_PRIMARY,
  },
  listContainer: {
    flex: 1,
  },
  modalContainer: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  photoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 12,
  },
  photo: {
    width: 80,
    height: 80,
    aspectRatio: 1,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLOR_PRIMARY,
    marginRight: 14,
  },
  modalContentContainer: {
    flex: 1,
  },
  textContainer: {
    flex: 1,
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
