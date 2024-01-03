import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  login(userDetails:any){
    console.log(userDetails);
    return this.http.post<any>('http://20.244.37.91:8000/log_in/',userDetails)

  }

  onRegister(registerDetails:any){
    console.log(registerDetails);
    return this.http.post<any>('http://20.244.37.91:8000/regd/',registerDetails)

  }


  onGetDeviceTypes(){
    console.log('hello')
    return this.http.get<any>('http://4.188.244.11/devicetype_view/')
  }


}
