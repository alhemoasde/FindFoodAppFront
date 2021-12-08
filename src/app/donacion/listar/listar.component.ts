import { Component, OnInit } from '@angular/core';
import { Donacion } from 'src/app/models/donacion.model'
import { DonacionService } from 'src/app/services/donacion.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarDonacionComponent implements OnInit {

  public donacion : Donacion[] = [];

  constructor(private donacionService : DonacionService) { }

  ngOnInit(): void {
    this.listarDonacion();
  }

  listarDonacion(){
    this.donacionService.listarDonacion().subscribe((donacion : any)=>{
      console.log(donacion);
    })
  }

}
