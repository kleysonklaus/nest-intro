import axios from 'axios';
// import { PokeapiResponse } from '../interfaces/pokeapi-response.interface';

export class PokeApiAdapter {

    private readonly _axios = axios;

    async get(url: string) {
        const { data } = await this._axios.get(url);
        return data;
    }

    async post(url: string, data: any) {

    }
    async patch(url: string, data: any) {

    }
    async delete(url: string) {

    }


}