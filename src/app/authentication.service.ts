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
  // 20.244.37.91
  onRegister(registerDetails:any){
    console.log(registerDetails);
    return this.http.post<any>('http://20.244.37.91:8000/regd/',registerDetails)

  }

// 37.91
  onGetDeviceTypes(){
    console.log('hello')
    return this.http.get<any>('http://4.188.244.11/devicetype_view/')
  }

  onSuperAdminCreate(adminDetails:any){
    console.log(adminDetails);
    return this.http.post<any>('http://20.244.37.91:8000/admincreate/', adminDetails)
  
  }

  DeleteAdmin(mobileno:any){
    const userDelete = {mobno:mobileno}
    return this.http.post<any>('http://20.244.37.91:8000/admin_delete/',userDelete)
  
  }
  getDataAdmin() {
    return this.http.get('http://20.244.37.91:8000/admin_view/');
  }



  onForgotPassword(mobno:any){
    const forgotEmail = {email:mobno}
  console.log(forgotEmail)
  return this.http.post<any>('http://4.188.244.11/email_verification/',forgotEmail)
  }

  onCheckOTP(email:any){
    console.log(email);
    const otpCode={email}
    return this.http.get<any>(`http://4.188.244.11/password_sent/${email}/`)
  
  }
}

// 20.244.37.91:8000

