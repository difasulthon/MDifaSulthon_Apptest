import React from 'react';
import {StyleSheet} from 'react-native';
import {BaseScreen, PageHeader} from '../component';
import navigationService from '../navigation-service';

const ContactForm = () => {
  const onBackButton = () => {
    navigationService.back();
  };

  return (
    <BaseScreen>
      <PageHeader pageTitle="Form" backButton onBackButton={onBackButton} />
    </BaseScreen>
  );
};

export default ContactForm;

const styles = StyleSheet.create({});
