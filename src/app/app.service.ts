import { Injectable } from'@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError,map } from 'rxjs/operators';
 
@Injectable({
    providedIn:'root'
})

export class ApiService {

    baseUrl:string = '';
    constructor(private http:HttpClient)
    {   
        // this.baseUrl='https://public-api.wordpress.com/rest/v1.1/sites/vocon-it.com/posts';
    }

    public getData(baseUrl:string)
    {
        return this.http.get(baseUrl);
    }
}