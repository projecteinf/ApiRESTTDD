import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  clear(key:string) {
    localStorage.removeItem(key)
  }

  setItem(key:string,value:string) 
  {
    localStorage.setItem(key, value);
  }

  getItem(key:string): JSON {
    return JSON.parse(localStorage.getItem(key)!);
  }
    

}
