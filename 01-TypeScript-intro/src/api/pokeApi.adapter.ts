import axios from 'axios';
// import { PokeapiResponse } from '../interfaces/pokeapi-response.interface';

export class PokeApiAdapter {

    private readonly http = axios;

    async get<T>(url: string): Promise<T> {
        const { data } = await this.http.get<T>(url);
        return data;
    }

    async post(url: string, data: any) {

    }
    async patch(url: string, data: any) {

    }
    async delete(url: string) {

    }


}