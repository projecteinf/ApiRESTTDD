import { TestBed } from '@angular/core/testing';
import { RegisterComponent } from '../components/register/register.component';
import { of } from 'rxjs';
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

  it('The user has been created message',  () => {
    let userService: UserService = TestBed.inject(UserService); 

    const fixture = TestBed.createComponent(RegisterComponent);
    
    const response = {
      "username": "miquel",
      "email": "miquel@gmail.com",
      "password": "El Meu Password",
      "id": "868",
      "createdAt": "2024-11-07T15:22:19.534Z"
    };

    spyOn(userService, "postUser").and.returnValue(of(response)) ;
    fixture.detectChanges();

    const message: HTMLSpanElement = fixture.nativeElement.querySelector("p span") as HTMLSpanElement;
    expect(message.textContent).toBe("");

    const submit: HTMLButtonElement = fixture.nativeElement.querySelector("button") as HTMLButtonElement;
    submit.click();

    fixture.detectChanges();

    expect(message.textContent).toBe("Usuari creat satisfactòriament");
  }); 
  
  it('Error creating the user message',  () => {
    let userService: UserService = TestBed.inject(UserService); 

    const fixture = TestBed.createComponent(RegisterComponent);
    
    const response = {
      "error": "Invalid data"
    };

    spyOn(userService, "postUser").and.returnValue(of(response)) ;
    fixture.detectChanges();

    const message: HTMLSpanElement = fixture.nativeElement.querySelector("p span") as HTMLSpanElement;
    expect(message.textContent).toBe("");

    const submit: HTMLButtonElement = fixture.nativeElement.querySelector("button") as HTMLButtonElement;
    submit.click();

    fixture.detectChanges();

    expect(message.textContent).toBe("Error en la creació de l'usuari");
  });


  it('Submit button is enabled if data is not saved or saving', () => {
    const fixture = TestBed.createComponent(RegisterComponent);
    fixture.detectChanges();
    
    const submitEnabled: HTMLButtonElement = fixture.nativeElement.querySelector("button") as HTMLButtonElement;
    expect(submitEnabled.getAttribute("disabled")).toBeFalsy();
  });


  it('Submit button is disabled if data is saving', async () => {
    const fixture = TestBed.createComponent(RegisterComponent);

    const response = {
      "username": "miquel",
      "email": "miquel@gmail.com",
      "password": "El Meu Password",
      "id": "868",
      "createdAt": "2024-11-07T15:22:19.534Z"
    };
    
    let userService: UserService = TestBed.inject(UserService); 
    spyOn(userService, "postUser").and.returnValue(of(response)) ;

    const submit: HTMLButtonElement = fixture.nativeElement.querySelector("button") as HTMLButtonElement;
    await fixture.whenStable();
    fixture.detectChanges();

    console.log("ABANS DE CLICK",fixture.nativeElement);
    expect(submit.disabled).toBeFalse();
    submit.click();
    fixture.detectChanges();
    console.log("DESPRÉS DE CLICK",fixture.nativeElement);
    expect(submit.disabled).toBeTrue();
    
    await fixture.whenStable();
    fixture.detectChanges();
    console.log("QUAN ESTÀ ESTABLE",fixture.nativeElement);
    expect(submit.disabled).toBeFalse();
  });

});
