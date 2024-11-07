import { TestBed } from '@angular/core/testing';
import { RegisterComponent } from '../components/register/register.component';
import { Observable, of } from 'rxjs';
import { UserService } from '../services/user.service';
import { provideHttpClient } from '@angular/common/http';


describe('Register Component', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        provideHttpClient()
      ],
      imports: [RegisterComponent],
    }).compileComponents();
  });

  it('The user has been created message', async () => {
    let userService: UserService = TestBed.inject(UserService); 

    const fixture = TestBed.createComponent(RegisterComponent);
    
    const mockData = {
      "username": "miquel",
      "email": "miquel@gmail.com",
      "password": "El Meu Password",
      "id": "868",
      "createdAt": "2024-11-07T15:22:19.534Z"
    };

    const data = {
      "username": "miquel",
      "email": "miquel@gmail.com",
      "password": "El Meu Password"
    };

    spyOn(userService, "postUser").and.returnValue(of(mockData)) ;
    fixture.detectChanges();

    const submit: HTMLButtonElement = fixture.nativeElement.querySelector("button") as HTMLButtonElement;
    submit.click();

    fixture.detectChanges();

    const message: HTMLSpanElement = fixture.nativeElement.querySelector("p span") as HTMLSpanElement;

    expect(message.textContent).toBe("Usuari creat satisfactòriament");
  });

  
});
