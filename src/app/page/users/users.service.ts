import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { Observable } from "rxjs";
import { UsersModule } from "src/app/page/users/users.module";

@Injectable({
    providedIn: null
})
export class UsersService{

    private _baseUrl: string = 'https://dummyjson.com/'

    constructor(public http: HttpClient){}
    
    // the endpoint in the document was not work for me, so i replace it with another endpoint.hope there be no problem with this
    getUsersList(): Observable<any>{
        return this.http.get('https://646267f44dca1a661345a291.mockapi.io/users',{headers:{'content-type':'application/json'}})
    }
}