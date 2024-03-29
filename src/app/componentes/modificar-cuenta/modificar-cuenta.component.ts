import {Component, OnInit} from '@angular/core';
import {UsersService} from "../../services/users.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-modificar-cuenta',
  templateUrl: './modificar-cuenta.component.html',
  styleUrls: ['./modificar-cuenta.component.css']
})
export class ModificarCuentaComponent implements OnInit {

  tipo: number;
  valor: number;
  cuenta: number;

  constructor(private userservice: UsersService) {
    this.tipo = 0;
    this.valor = 0;
    this.cuenta = 0;
  }

  ngOnInit(): void {
  }

  modificacion() {
    const datos = {'tipo': this.tipo, 'valor': this.valor, 'cuenta': this.cuenta}

    this.userservice.modificacion(datos).subscribe(data => {

        if (data.status) {
          Swal.fire({
            icon: 'success',
            title: 'Felicidades...',
            text: 'Proceso Completado con exito [' + data.message + ']'
          })
        }else{
          Swal.fire({
            icon: 'error',
            title: 'Opss... Error en la Transaccion',
            html: '<hr>'+ data.message
          });

        }
      }
      ,
      error => {
        Swal.fire({
          icon: 'error',
          title: 'Opss... Error en los Datos',
          html: '<hr><small> Recuerda que:</small> <br> [El numero de cuenta debe ser valido] <br> [Debe seleccionar un Tipo de Movimiento]<br>[El Monto de la Transacción debe ser superior a $0]'
        });
      });
  }
}
