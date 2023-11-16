import { Component , OnInit} from '@angular/core';
import { Departamento } from 'src/app/models/Departamento';
import { ServiceDepartamentos } from 'src/app/services/service.departamentos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  implements OnInit{
  public departamentos!: Array<Departamento>

  constructor(private _ServiceDepartamentos: ServiceDepartamentos){}

  ngOnInit(): void {
    this.loadDepartamentos()   
  }

  eliminar(id:number):void{
    this._ServiceDepartamentos.eliminarDepartamento(id.toString()).subscribe(response=>{
      this.loadDepartamentos()
    })
  }

  loadDepartamentos():void{
    this._ServiceDepartamentos.getDepartamentos().subscribe(response=>{
        this.departamentos=response
      })
  }
}
