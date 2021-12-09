import { Component, OnInit } from '@angular/core';
import { Donacion } from 'src/app/models/donacion.model'
import { DonacionService } from 'src/app/services/donacion.service';
import { Usuario } from 'src/app/models/usuario.model';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearDonacionComponent implements OnInit {

  public usuarios : Usuario[] = [];

  DonanteForm!:FormGroup;

  constructor(private donacionService : DonacionService, private fb:FormBuilder) { }

  ngOnInit(): void {
    this.DonanteForm=this.fb.group({
      donante:[''],
      descripcion:['']
    })
    this.listarDonantes();
    this.crearDonacion();
  }

  listarDonantes(){
    this.donacionService.listarDonante().subscribe((donantes : any)=>{
      this.usuarios=donantes;
      console.log(donantes);
    })
  }

  crearDonacion(){
    this.donacionService.crearDonacion(this.DonanteForm.value).subscribe((respueta:any)=>{
    console.log(respueta);
    this.DonanteForm.reset();
    })
  }


}
