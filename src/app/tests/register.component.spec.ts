import { TestBed } from '@angular/core/testing';
import { RegisterComponent } from '../components/register/register.component';
import { of } from 'rxjs';


describe('Register Component', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [],
      imports: [RegisterComponent],
    }).compileComponents();
  });

  it('The user has been created message', () => {
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

    spyOn(registerService, "postUser").and.returnValue(of(mockData));
    fixture.detectChanges();

    const submit: HTMLButtonElement = fixture.nativeElement.querySelector("Button") as HTMLButtonElement;
    submit.click();

    fixture.detectChanges();

    const message: HTMLSpanElement = fixture.nativeElement.querySelector("p span") as HTMLSpanElement;

    expect(message.textContent).toBe("Usuari creat satisfactòriament");
  });

  
});
