import { Cliente, Grupo } from "./../cliente.model";
import { ClientesService } from "./../clientes.service";
import { Component, OnInit, OnDestroy } from '@angular/core';

import { Observable, Subscription } from "rxjs";


@Component({
  selector: 'app-listado-clientes',
  templateUrl: './listado-clientes.component.html',
  styleUrls: ['./listado-clientes.component.css']
})
export class ListadoClientesComponent implements OnInit {

  clientes: Cliente[];
  clientes$: Observable<Cliente[]>;
  clientesSubscription: Subscription;

  constructor(private clientesService: ClientesService) { }

  ngOnInit(): void {
    this.clientes$ = this.clientesService.getClientes$();
    this.clientesSubscription = this.clientes$.subscribe(clientes => this.clientes = clientes);
  }

   ngOnDestroy() {
    this.clientesSubscription.unsubscribe();
   }
}

