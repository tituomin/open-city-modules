/* @flow */


import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Platform,
  TouchableOpacity,
  TouchableWithoutFeedback,
  TextInput,
} from 'react-native';
import { type ServiceRequest } from 'open-city-modules/src/types'
import Icon from 'react-native-vector-icons/MaterialIcons';
import MarkerPin from 'open-city-modules/img/marker_pin.png';
import EStyleSheet from 'react-native-extended-stylesheet';
import styles from './styles';
import Color from 'color';

type Props = {
  data: { title: ?string, body: ?string };
  serviceRequest: ServiceRequest;
  onClick: () => void;
  onClose: () => void;
}

const MarkerPopup = ({
  data,
  onClick,
  onClose
}: Props) => {
  const tintColor = Color(EStyleSheet.value('$colors.med'))
  return (
    <TouchableWithoutFeedback
      style={styles.container}
      onPress={onClose}
     >
      <View
        style={styles.container}>
        <TouchableOpacity onPress={onClick} style={styles.popup}>
          <View style={styles.header}>
            <Text
              numberOfLines={1}
              style={styles.headerText}
            >
              {data && data.title}
            </Text>
          </View>
          <View style={styles.body}>
            <Text
              style={styles.bodyText}
              numberOfLines={2}
            >
              {data && data.body}
            </Text>
          </View>
          <View
            style={styles.okButton}
          >
            <Icon name="keyboard-arrow-right" size={32} color={tintColor} />
          </View>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={onClose}
          >
            <Icon name="close" size={24} color={tintColor} />
          </TouchableOpacity>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
};


export default MarkerPopup;
