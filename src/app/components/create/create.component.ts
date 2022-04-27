import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '@app/_services/user.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.less']
})
export class CreateComponent implements OnInit {
  errMsg: string;
  successMsg: any;
  getparamid:any;

 // userForm!: FormGroup

  constructor(private api: ApiService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.getparamid = this.router.snapshot.paramMap.get('id');
    if(this.getparamid){
    this.api.getSingleData(this.getparamid).subscribe((res)=>{
      console.log(res,'Update user sucessful');
      this.userForm.patchValue({
        full_Name: res.data[0].full_Name,
        job_Title: res.data[0].job_Title

      })
    })
  }
  }

  userForm= new FormGroup({
    'full_Name': new FormControl('', Validators.required),
    'job_Title': new FormControl('', Validators.required),

  })

  userSubmit(){
    if(this.userForm.valid){
      console.log(this.userForm.value);
      this.api.createUser(this.userForm.value).subscribe((res)=>{
        console.log(res, 'Data added sucessfully');
        this.userForm.reset();
        this.successMsg = res.message;
      })
    }
    else{
      this.errMsg='All Fields are required';
    }
  }


//Update user

updateUser(){

  if(this.userForm.valid){
    this.api.updateUser(this.userForm.value, this.getparamid).subscribe((res)=>{
      console.log(res, 'Data Updated Successfully');
      this.successMsg= res.message;
    })
  } else{
    this.errMsg = 'All fields are required'

  }
}

}
