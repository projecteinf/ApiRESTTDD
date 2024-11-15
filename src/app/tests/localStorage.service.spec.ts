import { TestBed } from '@angular/core/testing';

import { LocalStorageService } from '../services/localStorage.service';
import { provideHttpClient } from '@angular/common/http';

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

  it('Creates an entry in the localStorage', () =>{
    service.clear("User");
    service.setItem("User","{'username':'projecteinf'}");
    const user=service.getItem("User");
    expect(user.username).toBe("projecteinf");
  })

});