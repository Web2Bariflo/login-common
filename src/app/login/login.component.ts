import { Component,OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

userInput:any;
password:any;
mobileno:any;
constructor(private auth:AuthenticationService, private route:Router){

}
ngOnInit(): void {
    
 
}
  onLogin(){
     
   if (typeof this.userInput === "string" && /^\d+$/.test(this.userInput)){
    this.mobileno = parseInt(this.userInput);
    console.log('num',this.mobileno)

 }
 else{
  this.mobileno = this.userInput;
 }
    
    const userDetails = {username:this.mobileno, password:this.password}
    console.log(userDetails)

    this.auth.login(userDetails).subscribe((response)=>{
      console.log(response);
      const token = response.token

      if (response.message === "Login Successfull For  SuperAdmin"){
        const userName = "Mrityunjay Sahu"
        const UserDataSet = {userName}
        this.route.navigate(['./admins-view'])
        localStorage.setItem('userData',JSON.stringify(UserDataSet))
      }
//4.240.1.15

      else if(response.cat === 'aqua'){
       
        if (response.message === "Login Successfull For aqua Admin"){
          window.location.href =`http://aqua.bariflorobotics.com/adminside/verify-token?category=aquaUser&token=${token}&mono=${response.mobno}`
        }
        else{
          window.location.href =`http://aqua.bariflorobotics.com/users/verify-token?category=aquaUser&token=${token}&mobno=${response.mobno}`

        }
       console.log(response.mobno);
        
      }

    else if(response.cat === 'water'){
        if (response.message === "Login Successfull For waterbody Admin"){
          window.location.href =`http://4.240.112.100:4200/verify-token?category=waterAdmin&token=${token}`

        }
        else{
          window.location.href =`http://4.240.112.100:4200/verify-token?category=waterUser&token=${token}`
          
        }
      }

      else if (response.cat === '3d'){
        if (response.message === "Login Successfull For 3D Admin"){
          window.location.href =`http://localhost:4200/verify-token?category=threeAdmin&token=${token}`

        }
        else{
          window.location.href =`http://localhost:4200/verify-token?category=threeUser&token=${token}`
          
        }
      }
     
      else{
        // localStorage.setItem('logMob',JSON.stringify(mobileno))
        // this.dataSharingService.loginSetMob(mobileno)
        // this.router.navigate(['./dashboard'])
        alert(response.error)
        this.route.navigate(['./login'])

      }
     
        
        
      }
     , (error)=>{
      console.log(error)
    })

  this.userInput=''
   this.password=''


  }



}
