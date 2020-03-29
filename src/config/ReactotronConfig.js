import Reactotron, {networking} from 'reactotron-react-native';

if (__DEV__) {
  const tron = Reactotron.configure().use(networking()).useReactNative().connect();

  console.tron = tron;

  tron.clear();
}
