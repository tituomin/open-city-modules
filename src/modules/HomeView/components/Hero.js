import React, { Component } from 'react';
import FastImage from 'react-native-fast-image';
import {
  Image,
  View,
  Text,
  Platform,
  TouchableHighlight,
  TouchableNativeFeedback,
  ActivityIndicator,
} from 'react-native';
import Wave from 'open-city-modules/src/modules/HomeView/components/Wave';
import EStyleSheet from 'react-native-extended-stylesheet';

import styles from '../styles';

class Hero extends Component {
  constructor(props) {
    super(props);
  }

  navToEvent = () => {
    this.props.navigation.navigate('EventDetailView', {
      eventUrl: this.props.eventUrl,
    });
  }

  render() {
    const {
      imageUrl,
      date,
      place,
      headline,
      loading,
      banner,
    } = this.props;

    const pic = {
      uri: imageUrl,
      priority: FastImage.priority.high,
    };

    const HeroContent = (
      <View style={styles.heroWrapper}>
        <FastImage
          source={pic}
          style={styles.heroImage}
          resizeMode="cover"
        />
        <View style={styles.heroOverlay}>
          <Text style={styles.heroDate}>{date}</Text>
          <Text style={styles.heroPlace}>{place}</Text>
          <Text style={styles.heroHeadline}>{headline}</Text>
        </View>
        <Wave topColor={EStyleSheet.value('$colors.max')}/>

        {loading &&
          <View style={styles.loadingOverlay}>
            <ActivityIndicator size="large" />
          </View>
        }
      </View>
    );

    return (
      Platform.select({
        ios: (
          <TouchableHighlight onPress={this.navToEvent}>
            {HeroContent}
          </TouchableHighlight>
        ),
        android: (
          <TouchableNativeFeedback onPress={this.navToEvent}>
            {HeroContent}
          </TouchableNativeFeedback>
        ),
      })
    );
  }
}

export default Hero;
