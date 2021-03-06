import { StyleSheet, Platform, Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Color from 'color';


const styles = EStyleSheet.create({
  $borderColor: () => Color(EStyleSheet.value('$colors.max')).alpha(0.3),
  $inactiveBG: () => Color(EStyleSheet.value('$colors.max')).alpha(0.1),
  $inactiveText: () => Color(EStyleSheet.value('$colors.max')).alpha(0.3),
  header: {
    height: 64,
    padding: 4,
    borderWidth: 1,
    borderColor: '$borderColor',
    // alignItems: 'center',
    justifyContent: 'center',
  },
  tabs: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabButton: {
    height: 48,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  active: {
    color: '$colors.min',
  },
  activeBackground: {
    backgroundColor: '$colors.med',
  },
  inactive: {
    color: '$inactiveText',
  },
  inactiveBackground: {
    backgroundColor: '$inactiveBG',
  },
  label: {
    fontSize: 22,
    fontWeight: '700',
    backgroundColor: 'transparent',
    textAlign: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingHorizontal: 16,
  },
  titleContainer: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  rightAction: {
    position: 'absolute',
    right: 8,
  },
  leftAction: {
    position: 'absolute',
    left: 8,
  },
  image: {
    width: 32,
    height: 32,
    tintColor: '$colors.med',
  },
  placeHolder: {
    width: 32,
    height: 32,
  },
  disabled: {
    tintColor: '$inactiveText',
  },
  logo: {
    height: 26,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
