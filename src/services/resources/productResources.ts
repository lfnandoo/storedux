import api from '../api';

export default class productResource {
  static getProducts() {
    return api.get('/product');
  }
}