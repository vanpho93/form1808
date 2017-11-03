import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()

export class SignInService {
    constructor(private http: Http) {}

    signIn(body) {
        const headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.post('http://localhost:3000/signin', JSON.stringify(body), { headers })
        .toPromise()
        .then(res => res.text());
    }
}
