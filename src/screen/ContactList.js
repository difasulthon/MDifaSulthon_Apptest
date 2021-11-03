import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {
  BaseScreen,
  BodySmall,
  ButtonAdd,
  Card,
  H1,
  HorizontalLine,
  VerticalSpacer,
} from '../component';
import {COLOR_PRIMARY, NAV_NAME_CONTACT_FORM} from '../contant';
import navigationService from '../navigation-service';

const contact = [
  {
    id: 1,
    firstName: 'Difa',
    lastName: 'Sulthon',
    age: 23,
  },
  {
    id: 2,
    firstName: 'Difa',
    lastName: 'Sulthon',
    age: 23,
  },
  {
    id: 3,
    firstName: 'Difa',
    lastName: 'Sulthon',
    age: 23,
  },
  {
    id: 4,
    firstName: 'Difa',
    lastName: 'Sulthon',
    age: 23,
  },
];

const ContactList = () => {
  const renderContactItem = ({item}) => {
    return <Card item={item} />;
  };

  const onAddContact = () => {
    navigationService.navigate(NAV_NAME_CONTACT_FORM);
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
          data={contact}
          key={'_'}
          keyExtractor={ix => '_' + ix.id}
          renderItem={renderContactItem}
          style={styles.listContainer}
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
