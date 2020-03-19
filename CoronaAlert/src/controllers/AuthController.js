import api from '../services/api';

const login = async (email, password) => {
  try {
    const response = await api.post('/login', { email, password });
    const {_id} = response.data;
    return _id;
  } catch(error) {
    console.log('Usuário não existe!', error);
  }
}

export { login }
