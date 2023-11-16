import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { Departamento, } from 'src/app/models/Departamento';
import { ServiceDepartamentos } from 'src/app/services/service.departamentos';
import {Router,Params, ActivatedRoute} from "@angular/router" 

@Component({
  selector: 'app-editdepartamento',
  templateUrl: './editdepartamento.component.html',
  styleUrls: ['./editdepartamento.component.css']
})
export class EditdepartamentoComponent implements OnInit{
  public departamento!: Departamento

  @ViewChild("cajaid") cajaIdRef!: ElementRef
  @ViewChild("cajanombre") cajanombreRef!: ElementRef
  @ViewChild("cajalocalidad") cajalocalidadRef!: ElementRef
  constructor(private _serviceDepartamentoS :ServiceDepartamentos,
        private _router: Router,
        private _activeRoute:ActivatedRoute ){}

  ngOnInit(): void {
    //recogemos los datos de los parametros 
    //params siempre es string
      this._activeRoute.params.subscribe((parametros: Params)=>{
        var id =(parametros['id'])
        var nombre = parametros['nombre']
        var localidad = parametros['localidad']

        this.departamento = new Departamento(id,nombre,localidad)
      })
  }


  modificarDepartamento():void{
   var id = this.cajaIdRef.nativeElement.value
   var nombre = this.cajanombreRef.nativeElement.value
   var localidad = this.cajalocalidadRef.nativeElement.value

    //MODIFICAMO EL OBJETO DEPARTAMENTO DE LA CLASE QUE 
    //ES EL OBJETO QUE VAMOS A ENVIAR 
    this.departamento.nombre = nombre
    this.departamento.localidad  = localidad

    this._serviceDepartamentoS.modificarDepartamento(this.departamento).subscribe(response=>{
      this._router.navigate(['/'])
    })
  }
}
