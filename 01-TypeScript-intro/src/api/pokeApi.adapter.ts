import axios from 'axios';
// import { PokeapiResponse } from '../interfaces/pokeapi-response.interface';

export interface HttpAdapter {
    get<T>(url: string): Promise<T>;
}




export class PokeApiFetchAdapter implements HttpAdapter {
    async get<T>(url: string): Promise<T> {
        const resp = await fetch(url);
        const data: T = await resp.json();
        console.log("con fetch");
        return data;
    }

}



export class PokeApiAdapter implements HttpAdapter {
    private readonly http = axios;


    async get<T>(url: string): Promise<T> {
        const { data } = await this.http.get<T>(url);
        console.log("con Axios");
        return data;
    }

    async post(url: string, data: any) {

    }
    async patch(url: string, data: any) {

    }
    async delete(url: string) {

    }


}