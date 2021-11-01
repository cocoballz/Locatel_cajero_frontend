import { Component, OnInit } from '@angular/core';
import {UsersService} from  '../../services/users.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-crear-user',
  templateUrl: './crear-user.component.html',
  styleUrls: ['./crear-user.component.css']
})
export class CrearUserComponent implements OnInit {
  email: string;
  password: string;
  name: string;
  passwordError: boolean;

  constructor(public userService:UsersService, public router:Router) {
    this.email = '';
    this.password = '';
    this.name = '';
    this.passwordError = true;
  }

  ngOnInit(): void {
  }

  register() {
    const user = {name: this.name, email: this.email, password: this.password};
    this.userService.register(user).subscribe( data => {
      console.log('creado');
      console.log(data);
      this.userService.setToken(data.access_token);
      this.router.navigateByUrl('/');
    },
    error => {
      console.log(error);
    });
  }

}
