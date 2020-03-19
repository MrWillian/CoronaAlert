import AsyncStorage from '@react-native-community/async-storage';

const setItemStorage = async (key, value) => {
  await AsyncStorage.setItem(key, value);
}

const getItemStorage = async key => {
  return await AsyncStorage.getItem(key);
}

export { setItemStorage, getItemStorage }
