import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Header, Icon} from 'react-native-elements';
import {H3} from '.';
import {
  COLOR_BACKGROUND,
  COLOR_BORDER,
  COLOR_PRIMARY,
  COLOR_TEXT_INPUT,
} from '../contant';
import {ios} from '../helper';

const renderLeftContainer = (backButton, onBackButton) => {
  if (backButton) {
    return (
      <TouchableOpacity style={styles.leftContainer} onPress={onBackButton}>
        <Icon
          name={ios ? 'ios-arrow-back' : 'md-arrow-back'}
          type="ionicon"
          color={COLOR_PRIMARY}
          size={30}
        />
      </TouchableOpacity>
    );
  }
  return null;
};

const renderRefreshButton = (refreshButton, style, onPress) =>
  refreshButton ? (
    <TouchableOpacity onPress={onPress} style={[styles.refreshButton, style]}>
      <Icon
        name="refresh"
        type="material-community"
        size={30}
        color={COLOR_PRIMARY}
      />
    </TouchableOpacity>
  ) : null;

const renderCloseButton = (closeButton, onPress) =>
  closeButton ? (
    <TouchableOpacity style={styles.closeButton} onPress={onPress}>
      <Icon
        name={ios ? 'ios-close' : 'md-close'}
        type="ionicon"
        color={COLOR_PRIMARY}
        size={30}
      />
    </TouchableOpacity>
  ) : null;

const renderRightContainer = (
  refreshButton,
  closeButton,
  onRefreshPressed,
  refreshButtonContainerStyle,
  onCloseButton,
) => {
  return (
    <View style={styles.rightContainer}>
      {renderRefreshButton(
        refreshButton,
        refreshButtonContainerStyle,
        onRefreshPressed,
      )}
      {renderCloseButton(closeButton, onCloseButton)}
    </View>
  );
};

const renderTitle = pageTitle => {
  return <H3 style={styles.title}>{pageTitle}</H3>;
};

const PageHeader = ({
  pageTitle,
  backButton,
  onBackButton,
  refreshButton,
  closeButton,
  onRefreshPressed,
  refreshButtonContainerStyle,
  onCloseButton,
}) => {
  return (
    <Header
      placement="left"
      containerStyle={styles.container}
      leftComponent={renderLeftContainer(backButton, onBackButton)}
      centerComponent={renderTitle(pageTitle)}
      rightComponent={renderRightContainer(
        refreshButton,
        closeButton,
        onRefreshPressed,
        refreshButtonContainerStyle,
        onCloseButton,
      )}
    />
  );
};

export default PageHeader;

const styles = StyleSheet.create({
  container: {
    height: 75,
    flexDirection: 'row',
    backgroundColor: COLOR_BACKGROUND,
    alignItems: 'center',
    marginBottom: ios ? 5 : 0,
    paddingTop: 0,
    borderBottomWidth: 1,
    borderBottomColor: COLOR_BORDER,
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  leftContainer: {
    paddingLeft: 5,
    paddingRight: 5,
  },
  title: {
    color: COLOR_TEXT_INPUT,
  },
  refreshButton: {
    paddingHorizontal: 5,
  },
  closeButton: {
    paddingLeft: 10,
    paddingRight: 5,
  },
});
