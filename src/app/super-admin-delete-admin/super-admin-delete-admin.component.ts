import { Component, Inject } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-super-admin-delete-admin',
  templateUrl: './super-admin-delete-admin.component.html',
  styleUrls: ['./super-admin-delete-admin.component.css']
})
export class SuperAdminDeleteAdminComponent {



  deletedataUser:any;
  constructor(@Inject(MAT_DIALOG_DATA)  public data:any,private auth:AuthenticationService,private dialogRef:MatDialogRef<SuperAdminDeleteAdminComponent>) { 
      console.log(data)
      this.deletedataUser=data
  }


 async confirmUserDelete(){
    console.log('in',this.deletedataUser)

    try {
      const response = await this.auth.DeleteAdmin(this.deletedataUser).toPromise();
      console.log(response);
   
    } catch (error) {
      console.log(error);
    }
    window.location.reload()
    this.dialogRef.close();
  
  }

  closeUserDelete(){
    this.dialogRef.close();
  }
  
}
