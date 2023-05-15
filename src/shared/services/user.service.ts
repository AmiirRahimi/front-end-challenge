import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { Observable } from "rxjs";
import { UsersModule } from "src/app/page/users/users.module";

@Injectable({
    providedIn: null
})
export class UserService{

    constructor(public http: HttpClient){}

    getUsersList(): Observable<any>{
        return this.http.get('https://646267f44dca1a661345a291.mockapi.io/api/v1/users')
    }
}