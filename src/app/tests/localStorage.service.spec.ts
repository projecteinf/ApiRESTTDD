import { TestBed } from '@angular/core/testing';

import { provideHttpClient } from '@angular/common/http';
import { LocalStorageService } from '../services/localStorage.service';


describe('Local Storage Service', () => {
  let service: LocalStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[provideHttpClient()]
    });
    service = TestBed.inject(LocalStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Creates an entry in the localStorage', () => {
    console.log('START - Creates an entry in the localStorage');
    
    
    let user: any = {"username":"projecteinf"};
    
    service.clear("User");
    service.setItem("User", JSON.stringify(user));  
    
    user = service.getItem("User");
    
    console.log(user);  // Ha de mostrar l'objecte amb la propietat `username`
    
    expect(user.username).toBe("projecteinf");
    
    console.log('END - Creates an entry in the localStorage');
  });

});