import Amplitude from 'amplitude-js'
import {AmplitudeApiKey} from '../private/private';

export var amp = Amplitude.getInstance();
amp.init(AmplitudeApiKey);

var eventProperties = {
  testProperty: 'testProperty'
}
// amp.logEvent('TEST_EVENT', eventProperties);
