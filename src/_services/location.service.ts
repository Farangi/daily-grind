import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class LocationService {
	constructor( private http: Http ) { }

	getAll() {
		return this.http.get( '/locations' ).map( ( response: Response ) => response.json() );
	}
}