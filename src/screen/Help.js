import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  BaseScreen,
  Body,
  BodySmall,
  KeyboardAwareScrollView,
  PageHeader,
  VerticalSpacer,
} from '../component';
import navigationService from '../navigation-service';
import {moderateScale} from 'react-native-size-matters';

const Help = () => {
  return (
    <BaseScreen>
      <PageHeader
        pageTitle="Help"
        closeButton
        onCloseButton={() => navigationService.back()}
      />
      <KeyboardAwareScrollView>
        <View style={styles.container}>
          <Body bold>View List</Body>
          <BodySmall>1. Pull down to refresh</BodySmall>
          <BodySmall>2. Scroll up to more view</BodySmall>
          <VerticalSpacer height={30} />
          <Body bold>Create</Body>
          <BodySmall>1. Click floating button on bottom right</BodySmall>
          <BodySmall>2. Complete the form</BodySmall>
          <BodySmall>3. Click Add button</BodySmall>
          <VerticalSpacer height={30} />
          <Body bold>Update</Body>
          <BodySmall>1. Long press at item on list</BodySmall>
          <BodySmall>2. Choose Update</BodySmall>
          <BodySmall>3. Waiting for moving screen</BodySmall>
          <BodySmall>4. Let's update data and click button Update</BodySmall>
          <VerticalSpacer height={30} />
          <Body bold>Delete</Body>
          <BodySmall>1. Long press at item on list</BodySmall>
          <BodySmall>2. Choose Delete</BodySmall>
          <BodySmall>3. Click yes for delete and no for cancel</BodySmall>
          <VerticalSpacer height={30} />
          <Body bold>View Detail</Body>
          <BodySmall>1. Press item on list</BodySmall>
          <BodySmall>2. Waiting for moving screen</BodySmall>
        </View>
      </KeyboardAwareScrollView>
    </BaseScreen>
  );
};

export default Help;

const styles = StyleSheet.create({
  container: {
    flex: moderateScale(1),
    paddingHorizontal: moderateScale(16),
    paddingVertical: moderateScale(20),
  },
});
