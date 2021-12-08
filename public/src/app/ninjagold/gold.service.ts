import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GoldService {

  constructor(private _http: HttpClient) { }

  create(){
    return this._http.get("http://localhost:8080/gold/firsttime")
  }

  farm(){
    return this._http.get("http://localhost:8080/gold/farm")
  }

  cave(){
    return this._http.get("http://localhost:8080/gold/cave")
  }

  casino(){
    return this._http.get("http://localhost:8080/gold/casino")
  }

  house(){
    return this._http.get("http://localhost:8080/gold/house")
  }

  reset(){
    return this._http.get("http://localhost:8080/gold/reset")
  }











}
