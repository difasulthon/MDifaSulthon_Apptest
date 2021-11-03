import React, {useEffect, useState} from 'react';
import {FlatList, RefreshControl, StyleSheet, View} from 'react-native';
import {
  BaseScreen,
  BodySmall,
  ButtonAdd,
  CardContact,
  H1,
  HorizontalLine,
  VerticalSpacer,
} from '../component';
import {
  COLOR_BACKGROUND,
  COLOR_PRIMARY,
  NAV_NAME_CONTACT_FORM,
} from '../contant';
import {getContacts} from '../helper';
import navigationService from '../navigation-service';

const ContactList = () => {
  const [loading, setLoading] = useState(false);
  const [contacts, setContacts] = useState([]);

  const onAddContact = () => {
    navigationService.navigate(NAV_NAME_CONTACT_FORM);
  };

  const onApear = () => {
    setLoading(true);
    getContacts()
      .then(res => {
        setContacts(res.data);
        setLoading(false);
        console.log(res);
      })
      .catch(err => {
        setLoading(false);
        console.log(err);
      });
  };

  useEffect(() => {
    onApear();
  }, []);

  const onPressCrad = item => {
    console.log(item);
  };

  const onLongPressCard = item => {
    console.log(item);
  };

  return (
    <BaseScreen>
      <View style={styles.container}>
        <H1 bold>Hi, Pengguna</H1>
        <View style={styles.subtitleContainer}>
          <BodySmall style={styles.blueText}>Lihat</BodySmall>
          <BodySmall> & </BodySmall>
          <BodySmall style={styles.blueText}>Tambahkan </BodySmall>
          <BodySmall>Kontakmu Sekarang</BodySmall>
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
});
