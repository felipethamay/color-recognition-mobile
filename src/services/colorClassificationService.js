import axios from 'axios';
import { API_BASE_URL } from '../config/environment';

export const classifyColor = async (imageBase64) => {
  const formData = new FormData();

  const file = {
    uri: `data:image/png;base64,${imageBase64}`,
    type: 'image/png',
    name: 'image.png',
  };

  formData.append('image', file);

  try {
    const response = await axios.post(`${API_BASE_URL}/color-classification/predict`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      timeout: 120000,
    });
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error('Erro na resposta da API:', error.response.status, error.response.data);
    } else if (error.request) {
      console.error('A requisição foi feita, mas não houve resposta. Detalhes:', error.request);
      Alert.alert('Erro', 'A API está demorando para responder. Tente novamente mais tarde.');
    } else {
      console.error('Erro ao configurar a requisição:', error.message);
    }
  }
};