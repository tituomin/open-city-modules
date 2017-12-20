/* @flow */
import * as React from 'react';

import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { type ServiceRequest } from 'open-city-modules/src/types';
import { getConfig } from 'open-city-modules/src/modules/Feedback/config';
import Marker from 'open-city-modules/src/components/Marker';
import MarkerNew from 'open-city-modules/img/marker_new.png';
import styles from './styles';

const Config = getConfig();
// Button which will have an absolute position on the bottom right corner

type Props = {
  region: {
    latitude: float,
    longitude: float,
    latitudeDelta: float,
    longitudeDelta: float,
  };
  onRegionChangeComplete: ({
      latitude: float,
      longitude: float,
      latitudeDelta: float,
      longitudeDelta: float,
  });
  onMarkerPressed: () => void;
  serviceRequests: Array<ServiceRequest>
}

const ServiceRequestMapView = ({
  region,
  onRegionChangeComplete,
  onMarkerPressed,
  serviceRequests,
  onRegionChange,
}): Props => (
  <MapView.Animated
    style={styles.map}
    ref={(ref) => { this.mapView = ref; }}

    region={region}
    showsUserLocation
    provider={PROVIDER_GOOGLE}
    followUserLocation={false}
    toolbarEnabled={false}
    // onPress={this.onMapViewClick.bind(this)}
    onRegionChangeComplete={onRegionChangeComplete}
  >
    { serviceRequests && serviceRequests.map((serviceRequest) => {
      if (serviceRequest.location.latitude && serviceRequest.location.longitude) {
        return (
          <MapView.Marker
            key={serviceRequest.id}
            coordinate={serviceRequest.location}
            onPress={() => onMarkerPressed(serviceRequest)}

          >
            <Marker
              icon={MarkerNew}
            />
            <MapView.Callout tooltip={true}/>
          </MapView.Marker>
        );
      }
    })
  }
</MapView.Animated>
);



  export default ServiceRequestMapView;
