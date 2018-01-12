import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';


@Injectable()
export class OrderService {
    constructor(private http: Http) { }

    checkBalanceAvailability(order: any) {
        return this.http.post('/orders/checkBalanceAvailability', order).map((response: Response) => response.json());
    }
	
	create(order: any) {
        return this.http.post('/orders/create', order);
    }
}