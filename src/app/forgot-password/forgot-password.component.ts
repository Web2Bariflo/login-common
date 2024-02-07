import { Component } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
userInput:any;
errorMsg:any;

constructor(private auth:AuthenticationService, private router:Router){}

async onLogin(){
  
  if (this.userInput !== undefined){
    await this.auth.onForgotPassword(this.userInput).subscribe(response=>
      {console.log(response)
        // this.dataSharingService.setOtp(response.otp);
        localStorage.setItem('otpNum',JSON.stringify(response.otp))
        this.router.navigate(['./check-otp'])
        localStorage.setItem('forgotPass',JSON.stringify(this.userInput))
      }, error=>
      console.log(error))
  
    
  }
  else{
    this.errorMsg ='*Please Enter the Email Id!'
  }

}

}
