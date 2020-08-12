import { environment } from '../../environments/environment';

export const baseUrl = environment.production ? 'https://api.thefarm.com' : 'http://localhost:3000'
export const productsUrl = baseUrl + '/products'
export const cartUrl = baseUrl + '/cart'
