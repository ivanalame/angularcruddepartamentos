import { Injectable} from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";     //Este para el post
import { environment } from "src/environments/environment";

import { Departamento } from "../models/Departamento";

@Injectable()
export class ServiceDepartamentos {
    constructor(private _http: HttpClient){

    }

    getDepartamentos(): Observable<any>{
        var request = "api/departamentos"
        var url = environment.urlApiDepartamentos + request
        return this._http.get(url)
    }

    insertarDepartamento(departamento : Departamento): Observable<any>{
        //DEBEMOS CONVERTIR EL OBJETO CLASS DEPARTAMENTO A JSON 
        var json = JSON.stringify(departamento)
        
        //VAMOS A ENVIAR EL OBJETO JSON, POR LO QUE DEBEMOS INDICAR 
        //EN LA PETICION EL FORMATO DE DICHO OBJETO , LO REALIZAMOS CON HEADERS
        var header = new HttpHeaders().set("Content-Type", "application/json");

        var request = "api/departamentos"
        var url = environment.urlApiDepartamentos + request
        return this._http.post(url,json,{headers:header})
    }

    modificarDepartamento(departamento :Departamento):Observable<any>{
        var json = JSON.stringify(departamento)

        var header = new HttpHeaders().set("Content-Type" ,"application/json")

        var request = "api/departamentos"
        var url = environment.urlApiDepartamentos + request
        return this._http.put(url,json,{headers:header})
    }

    eliminarDepartamento(id:string):Observable<any>{

        var request = "api/departamentos/"+id
        var url = environment.urlApiDepartamentos + request
        return this._http.delete(url)
    }
}
