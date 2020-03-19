import AsyncStorage from '@react-native-community/async-storage';

const setItemStorage = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);    
  } catch(error) {
    console.log('Erro ao armazenar o usuário logado', error);
  }
}

const getItemStorage = async key => {
  try {
    return await AsyncStorage.getItem(key);
  } catch(error) {
    console.log('Erro ao recuperar o usuário logado', error);
  }
}

export { setItemStorage, getItemStorage }
