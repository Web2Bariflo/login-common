import { Component,ViewEncapsulation, OnInit} from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthenticationService } from '../authentication.service';
import { RegisterSuccessComponent } from '../register-success/register-success.component';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: any = {}; // This object will hold the user's registration data
  dob: string = '';

  
  selectCategory:any;
  counter: number = 1; // Default quantity

  devicedetails:any;
  optionsCategory =[];
  counters: number[] = [1];
  pondsCount=1;
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  numberFormControl = new FormControl(null, [Validators.required, Validators.pattern(/^\d{10}$/)]);

  aadharFormControl =  new FormControl(null, [Validators.required, Validators.pattern(/^\d{12}$/)]);

  firstFormControl =  new FormControl(null, [Validators.required])
  lastFormControl =  new FormControl(null, [Validators.required])
  accountFormControl =  new FormControl(null, [Validators.required])

  pondFormControl =  new FormControl(null, [Validators.required])
  districtFormControl =  new FormControl(null, [Validators.required])

  deviceSelect:any;

  firstname:any;
  lastname:any;
  mobileno:any;
  aadharno:any;
    email:any;
  accountname:any;
  pondname:any;
  districtname:any;
  customParams:any;
  matcher = new MyErrorStateMatcher();

  registerDetails={};
  
  constructor(private auth:AuthenticationService, private dialog:MatDialog){}

  onSubmit() {
   

  }

  ngOnInit(): void {
        
  this.auth.onGetDeviceTypes().subscribe(response=>
    {console.log(response),
    this.devicedetails = response
    this.optionsCategory = this.devicedetails.results.map((item: any) =>item[0]);
    console.log(this.optionsCategory)
    },
    error=>
    console.log(error) )
  }
  
  increment(index: number) {
  
  this.selectItemsAndCounters[index].count++;
  
  }
  
  
  
  
  decrement(index: number) {
  
  if (this.selectItemsAndCounters[index].count > 1) {
  
    this.selectItemsAndCounters[index].count--;
  
  }
  
  }


  pondsInc(){
   

    this.pondsCount++;
  }

  pondsDec(){
    if (this.pondsCount>1){
      this.pondsCount--;
    }
   
  }
  
  
  
  selectItems: { value: any}[] = [{ value: '' }];
  
  selectItemsAndCounters: { value: string; count: number }[] = [];
  
  
  check()
  {
    console.log(this.selectCategory)
  }
  
  addSelectItem() {
    // this.selectItemsAndCounters.splice(1, 0);
  
  this.selectItemsAndCounters.push({ value: '', count: 1 });
  
  console.log( this.selectItemsAndCounters)
  
  
  
  }
  
  onRemove(index:any){
    this.selectItemsAndCounters.splice(index, 1);
  }
  
  
  onMobileNext(){
  
    const length= this.selectItemsAndCounters.length;
  
    let count = 0;
  
    for (let i =0; i<length; i++){
      if (this.selectItemsAndCounters[i].value !==''){
        count  = count+1;
      }
    }
  

  
  
  }

  onRegister(){
 

    if (this.selectCategory === 'aqua'){
      this.customParams = {accountname:this.accountname, devicesList:this.selectItemsAndCounters}
    }

   else if (this.selectCategory === 'water'){
    this.customParams = {pondname:this.pondname, pondcount:this.pondsCount, districtname: this.districtname}
   }

    this.registerDetails={firstname:this.firstname, lastname:this.lastname,email:this.email,mobno:parseInt(this.mobileno),
      adhaar:parseInt(this.aadharno), user_cat:this.selectCategory,params: this.customParams}

    this.auth.onRegister(this.registerDetails).subscribe((response)=>{
      console.log(response)
      if (response.message ==='Registration successfully as Aqua-culture user'|| response.message === 'Registration successfully as Waterbody user' ){
        const dialogRef = this.dialog.open(RegisterSuccessComponent, {
              width: '350px'
              
            });
       
      }

    }, (error)=>{
      console.log(error)
    })

  }
  
}
