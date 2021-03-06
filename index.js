/* @flow */
// Steps
import {
  SplashScreen,
  ChoiceView,
  createSingleChoiceStep,
  createMultiChoiceStep,
} from 'open-city-modules/src/steps';

// Modules
import FeedbackModule from 'open-city-modules/src/modules/Feedback';
import HomeViewModule from 'open-city-modules/src/modules/HomeView';
import WebViewModule from 'open-city-modules/src/modules/WebView';
import { configureFeedback } from 'open-city-modules/src/modules/Feedback/config';
import { configureHomeView } from 'open-city-modules/src/modules/HomeView/config';
import EStyleSheet from 'react-native-extended-stylesheet';
import { type ColorSet } from 'open-city-modules/src/types';

// Components
import * as Components from 'open-city-modules/src/components';

// eslint-disable-next-line
import Development from './development'

const initColors = (colors: ColorSet) => {
  EStyleSheet.build({
    $colors: colors,
  });
};

export {
  configureFeedback, configureHomeView,
  initColors,
  SplashScreen, ChoiceView, createSingleChoiceStep, createMultiChoiceStep,
  WebViewModule, FeedbackModule, HomeViewModule,
  Components,
};
