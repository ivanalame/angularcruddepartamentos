import { Component, ViewChild, ElementRef } from '@angular/core';
import { Departamento } from 'src/app/models/Departamento';
import { ServiceDepartamentos } from 'src/app/services/service.departamentos';
import {Router} from "@angular/router"

@Component({
  selector: 'app-insertar',
  templateUrl: './insertar.component.html',
  styleUrls: ['./insertar.component.css']
})
export class InsertarComponent{
  @ViewChild("cajaid") cajaIdRef!: ElementRef
  @ViewChild("cajanombre") cajanombreRef!: ElementRef
  @ViewChild("cajalocalidad") cajalocalidadRef!: ElementRef

  constructor(private _serviceDepartamentos: ServiceDepartamentos, private _router:Router) {
    
  }
 
  insertarDepartamento():void{
    var num = parseInt(this.cajaIdRef.nativeElement.value);
    var nombre = this.cajanombreRef.nativeElement.value;
    var localidad = this.cajalocalidadRef.nativeElement.value;

    var newDepartamento = new Departamento(num,nombre,localidad)

    this._serviceDepartamentos.insertarDepartamento(newDepartamento).subscribe(response=>{
      this._router.navigate(["/"])
    })
  }

}
