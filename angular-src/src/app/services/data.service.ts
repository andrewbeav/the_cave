import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class DataService {

  constructor(public http:Http) {
    console.log('Data service connected');
  }

  getManifestos() {
    return this.http.get('/api/manifestos').map(res => res.json());

  }

}
