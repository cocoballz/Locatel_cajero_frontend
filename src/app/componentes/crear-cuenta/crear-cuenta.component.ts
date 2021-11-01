import {Component, OnInit} from '@angular/core';
import {UsersService} from "../../services/users.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-crear-cuenta',
  templateUrl: './crear-cuenta.component.html',
  styleUrls: ['./crear-cuenta.component.css']
})
export class CrearCuentaComponent implements OnInit {
  name: string;
  saldo: number;
  user: number;
  auth_token: string;

  constructor(private userservice: UsersService) {

    this.name = '';
    this.user = 1;
    this.saldo = 0;
    this.auth_token = this.userservice.getToken();
  }

  ngOnInit(): void {
  }

  new_acount() {
    const user = {user: this.user, nombre: this.name, valor_inicial: this.saldo, auth_token: this.auth_token};

    this.userservice.new_acount(user).subscribe(data => {
        console.log('creado');
        console.log(data);

        if (data.status) {
          Swal.fire({
            icon: 'success',
            title: 'Felicidades...',
            text: 'Proceso Completado con exito [' + data.message + ']'
          })
        }
      },
      error => {
        Swal.fire({
          icon: 'error',
          title: 'Opss... Error en los Datos',
          html: '<hr><small> Recuerda que:</small><br> [Campo nombre superior a 3 caracteres]<br>[El Campo Saldo Superior a $0]'
        });
      });


  }

}
