import { Component } from '@angular/core';

import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Dialog } from '@angular/cdk/dialog';
import { Router } from '@angular/router';
import { SuperAdminDeleteAdminComponent } from '../super-admin-delete-admin/super-admin-delete-admin.component';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent {
  opened: boolean = true;
  constructor(private router:Router, private auth:AuthenticationService, private dialog: MatDialog){
     
    this.auth.getDataAdmin().subscribe((response)=>{this.userData = response
      console.log(this.userData)
      // this.filteredData = this.userData.datas.filter((item:any) => item[2] === 'admin');
      // console.log(this.filteredData)
      this.totalAdmins  = this.userData.datas.length
      }
      ,
    
      error =>
        console.log(error)
      )

      


  }

  onLogout():void{
    window.location.href = 'http://aqua.bariflorobotics.com/login'


  }
  onLogout1():void{
    window.location.href = 'http://aqua.bariflorobotics.com/login'


  }
  
  // SuperAdminDeleteAdminComponent
  onDeleteUser(mobileno:any):void{

    const dialogRef = this.dialog.open(SuperAdminDeleteAdminComponent,{
        width:'300px',
        data: mobileno
      })
      dialogRef.afterClosed().subscribe(result=>{
        console.log("dialog is closed")
      })
   
        
     }
  totalAdmins:any;
  mobileno:any;
  password:any;
  totalUsers:any;
  loginDetails:any
  openDialog3(data:any): void {
    // const dialogRef = this.dialog.open(EditUserComponent, {
    //   width: '700px',
    //   data:data
    // });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed')
      
    // });

    this.mobileno = data[2];
    this.password =  data[4];
  
    this.loginDetails={username:this.mobileno,password:this.password}
    this.auth.login(this.loginDetails).subscribe((response)=>{
      console.log(response);
      const token = response.token
     if(response.cat === 'aqua'){
        if (response.message === "Login Successfull For aqua Admin"){
          window.location.href =`http://4.240.1.15/verify-token?category=aquaAdmin&token=${token}`
        }
        else{
          window.location.href =`http://4.240.1.15/verify-token?category=aquaUser&token=${token}`

        }
      }

    else if(response.cat === 'water'){
        if (response.message === "Login Successfull For waterbody Admin"){
          window.location.href =`http://localhost:4200/verify-token?category=waterAdmin&token=${token}`

        }
        else{
          window.location.href =`http://localhost:4200/verify-token?category=waterUser&token=${token}`
          
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
        // this.router.navigate(['./login'])

      }
     
        
        
      }
     , (error)=>{
      console.log(error)
    })
  
    
  }


  userData:any =[]
userStoreData:any;
userNameProfile:any;
filteredData:any;
filterText: string = '';



  ngOnInit(): void {
    this.userStoreData=localStorage.getItem('userData')
    const userDataObject = JSON.parse(this.userStoreData);
    this.userNameProfile=userDataObject.userName
     
    
    this.auth.getDataAdmin().subscribe((response)=>{this.userData = response
      console.log(this.userData)
      // this.filteredData = this.userData.datas.filter((item:any) => item[2] === 'admin');
      // console.log(this.filteredData)
      this.filteredData  = this.userData.datas
      this.totalPages = Math.ceil(this.filteredData.length / this.pageSize)
      console.log(this.totalPages) }
      ,
    
      error =>
        console.log(error)
      )
    
      
  }
  
  pageSize: number = 10; // Number of items per page
  currentPage: number = 1; // Current page
  totalPages: number = 1; // Total number of pages
 

  setPage(pageNumber: number) {
    if (pageNumber >= 1 && pageNumber <= this.totalPages) {
      this.currentPage = pageNumber;
    }
  }
  
  // Function to go to the next page
  nextPage() {
    this.setPage(this.currentPage + 1);
  }
  
  // Function to go to the previous page
  prevPage() {
    this.setPage(this.currentPage - 1);
  }
  
  getCurrentPageData(): any {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    if (this.filteredData !== undefined) {
      return this.filteredData.slice(startIndex, endIndex);
    }
  }
  

  filterData() {
    this.filteredData = this.userData.datas.filter((item: any) => {
      // Check if the item is an admin and matches the filter text
      // const isAdmin = item[2] === 'admin';
      const matchesName = item[0].toLowerCase().includes(this.filterText.toLowerCase());
      return matchesName;
    });
  
    // Recalculate the total number of pages
    this.totalPages = Math.ceil(this.filteredData.length / this.pageSize);
  
    // Reset the current page to 1 when filtering
    this.currentPage = 1;
  }
}
