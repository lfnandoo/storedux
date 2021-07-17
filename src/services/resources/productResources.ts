import api from '../api';

export default class productResource {
  static async getProducts() {
    return await api.get('/product');
  }
}