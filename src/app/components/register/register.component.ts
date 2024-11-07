import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  constructor (private userService: UserService) {}

  errorMessage: string = "";

  submit():void {
    this.userService.postUser({
      "username": "miquel",
      "email": "miquel@gmail.com",
      "password": "El Meu Password"
    }).subscribe((response) => {
      console.log("Cridant a:",response);
      this.errorMessage = "Usuari creat satisfactòriament";
      if (response.error) {
        console.log("ENTRA AMB ERROR!");
        this.errorMessage = "Error en la creació de l'usuari";
      }
    })  
  }
}
