/* @flow */
import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { withProps } from 'recompose';

import FeedbackModule from 'open-city-modules/src/modules/Feedback';
import {
  ChoiceView,
  createSingleChoiceStep,
  createMultiChoiceStep,
} from 'open-city-modules/src/steps';

const initColors = (colors) => {
  EStyleSheet.build({
    $colors: colors,
  });
};

const colors = {
  min: 'white',
  med: 'blue',
  max: 'black',
};

initColors(colors);

const MyGridView = withProps({ mode: 'grid' })(ChoiceView);
const MyListView = withProps({ mode: 'list' })(ChoiceView);
const MultiChoiceStep = createMultiChoiceStep(MyGridView);
const SingleChoiceStep = createSingleChoiceStep(MyListView);

const OnboardingMock = () => {
  const interestOptions = [
    { value: 'restaurants' },
    { value: 'movies' },
    { value: 'family' },
    { value: 'health' },
    { value: 'cityPlanning' },
    { value: 'exercise' },
  ];
  const customProps = {
    choiceKey: 'interests',
    options: interestOptions,
    ns: 'interestStep',
    t: str => str,
    i18n: null,
  };
  const noop = () => {};
  const stepProps = {
    ...customProps,
    next: noop,
    previous: noop,
    profile: {},
    step: 0,
    totalSteps: 5,
    colors,
    locale: 'fi',
  };
  return <SingleChoiceStep {...stepProps} />;
};

export default OnboardingMock;
