import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-success',
  templateUrl: './register-success.component.html',
  styleUrls: ['./register-success.component.css']
})
export class RegisterSuccessComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<RegisterSuccessComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private route:Router
  ) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.dialogRef.close();
      this.route.navigate(['./login'])
    }, 4000);
  }
}