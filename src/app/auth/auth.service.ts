import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { User } from "./models/user.model";
import { userConst } from "./user.const";

@Injectable()
export class AuthService {

    // constructor(private http:HttpClient) {

    // }

    // login(username:string, password:string, group:string): Observable<User> {
    //     return this.http.post<User>('/api/login', {username,password,group});
    // }

    login(username:string, password:string, group:string) {
        const val = {username, password, group}
        const userList$ = new Observable<User>((subscriber) =>{
            subscriber.next(val);
          })
      
        return {userList$}
        }
}