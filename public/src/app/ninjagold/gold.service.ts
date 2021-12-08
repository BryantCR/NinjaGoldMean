import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GoldService {

  constructor(private _http: HttpClient) { }

  create(){
    return this._http.get("http://localhost:8080/ninjagold/firsttime")
  }

  farm(){
    return this._http.get("http://localhost:8080/ninjagold/farm")
  }

  cave(){
    return this._http.get("http://localhost:8080/ninjagold/cave")
  }

  casino(){
    return this._http.get("http://localhost:8080/ninjagold/casino")
  }

  house(){
    return this._http.get("http://localhost:8080/ninjagold/house")
  }

  reset(){
    return this._http.get("http://localhost:8080/ninjagold/reset")
  }











}
