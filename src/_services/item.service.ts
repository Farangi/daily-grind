import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class ItemService {
    constructor(private http: Http) { }

    getAll() {
        return this.http.get('/items').map((response: Response) => response.json());
	}
	
	getById( _id: string ) {
		return this.http.get( '/items/' + _id ).map( ( response: Response ) => response.json() );
	}
}