import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import  { DataService }  from '../service/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

   username:string='';
   password:string='';
   filterForAdmin='';
   res:any;
  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
    
  }
  handelUsername(event: any) { // without type info
    this.username = event.target.value ;
    console.log("user name",this.username)

  }
  handelPassword(event: any) { // without type info
    this.password = event.target.value ;

  }
  handelLogin(){
    console.log("user name len",this.username,this.username.length)
    // if(this.username.length === 0 && this.password.length === 0){
      if(this.username.length > 0 && this.password.length > 0  ){
      this.dataService.doLogin(this.username, this.password).subscribe((data: any) => {
        // const resSTR = JSON.stringify(res);
        // const resJSON = JSON.parse(resSTR);
        console.log("data",data)
        this.res=data;
        console.log("data 1",this.res.isSuccess)
        if (this.res.isSuccess == true) {
           this.dataService.role = data.role;
            localStorage.setItem('token', JSON.stringify(this.res.token));
            localStorage.setItem('role', data.role);
            this.router.navigate(['dashboard']);

        } else {
            
            alert('Sorry Enter Valid Credentials');
        }
  
    });
  
    }
    else{
      alert('Please Enter All Fields');
    }
   

  }
  handelSignup(){
    window.location.href = '/signup';
  }
  radioChange(event: any) {
    this.filterForAdmin = event.value;
    alert("radio selected "+this.filterForAdmin);
  }

}
