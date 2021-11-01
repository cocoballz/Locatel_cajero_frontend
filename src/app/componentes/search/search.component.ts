import {Component, OnInit} from '@angular/core';
import {UsersService} from "../../services/users.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  tipo: number;
  valor: number;
  cuenta: number;

  constructor(private userservice: UsersService) {

    this.tipo = 1;
    this.valor = 0;
    this.cuenta = 0;

  }

  ngOnInit(): void {
  }

  busqueda() {
    const datos = {'tipo': this.tipo, 'valor': this.valor, 'cuenta': this.cuenta}

    this.userservice.modificacion(datos).subscribe(data => {
        console.log(data);
        if (data.status) {
          Swal.fire({
            title: 'Datos Cuenta:'+data.datos.cuenta,
            html:' <ul class="list-group">  <li class="list-group-item list-group-item-action active" aria-current="true">Informacion Cuenta</li> <li class="list-group-item">cuenta: '+data.datos.cuenta+' </li>  <li class="list-group-item">nombre: '+data.datos.name+' </li>  <li class="list-group-item">Creacion: '+data.datos.create+' </li>  <li class="list-group-item">Ult. tramite: '+data.datos.Actualiza+' </li>  <li class="list-group-item">saldo: $'+data.datos.saldo+' </li> </ul>'
          })
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Opss... Error en la Consulta',
            html: '<hr>' + data.message
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
