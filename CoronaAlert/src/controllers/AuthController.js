import api from '../services/api';

const login = async (email, password) => {
  const response = await api.post('/login', { email, password });
  const {_id} = response.data;
  return _id;
}

export { login }
