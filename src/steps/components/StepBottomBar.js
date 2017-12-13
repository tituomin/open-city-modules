/* @flow */
import React from 'react';
import {
  View,
  Button,
  Text,
  TouchableOpacity,
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

let styles;

type Props = {
  onPreviousPress: () => void,
  onNextPress: () => void,
  nextDisabled: boolean,
  step: any,
  totalSteps: any,
  bgColor: string,
  fgColor: string,
  previousLabel: string,
  nextLabel: string,
};

const StepBottomBar = (props: Props) => {
  // Icons for steps
  const steps = [];
  for (let stepNum = 0; stepNum < props.totalSteps; stepNum++) {
    steps.push((
      <Icon
        key={stepNum}
        name="checkbox-blank-circle"
        size={40}
        style={[
          styles.step,
          { color: props.fgColor },
          stepNum !== props.step ? { opacity: 0.5 } : {}]}
      />
    ));
  }
  // Navigations disabled?
  const prevNav = props.step === 0;
  const nextNav = props.nextDisabled;
  return (
    <View style={[styles.bottomBar, { backgroundColor: props.bgColor }]}>
      <TouchableOpacity
        onPress={props.onPreviousPress}
        disabled={prevNav}
        style={[styles.navButton, { alignItems: 'flex-start' }, prevNav ? { opacity: 0.5 } : { opacity: 1 }]}
      >
        {props.previousLabel ?
          <Text style={{ color: props.fgColor, fontSize: 16 }}>{props.previousLabel}</Text>
          : <Icon
            name="chevron-left"
            size={40}
            style={{ color: props.fgColor }}
          />
        }
      </TouchableOpacity>
      <View style={styles.steps}>
        {steps}
      </View>
      <TouchableOpacity
        onPress={props.onNextPress}
        disabled={nextNav}
        style={[styles.navButton, { alignItems: 'flex-end' }, nextNav ? { opacity: 0.5 } : { opacity: 1 }]}
      >
        {props.nextLabel ?
          <Text style={{ color: props.fgColor, fontSize: 16 }}>{props.nextLabel}</Text>
          : <Icon
            name="chevron-right"
            size={40}
            style={{ color: props.fgColor }}
          />
        }
      </TouchableOpacity>
    </View>
  );
};

styles = EStyleSheet.create({
  bottomBar: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    height: 45,
    justifyContent: 'center',
    borderTopWidth: 1,
    borderColor: '$colors.med',
  },
  steps: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  step: {
    fontSize: 20,
  },
  navButton: {
    flex: 1,
    justifyContent: 'center',
    padding: 5,
  }
});

export default StepBottomBar;
