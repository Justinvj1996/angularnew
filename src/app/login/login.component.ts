import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  accountdetails:any = {
    1000: { accno: 1000, name: "userone", balance: 5000, password: "user1" },
    1001: { accno: 1001, name: "usertwo", balance: 2000, password: "user2" },
    1002: { accno: 1002, name: "userthree", balance: 6000,password: "user3" },
    1003: { accno: 1003, name: "userfour", balance: 8000, password: "user4" },
    1004: { accno: 1004, name: "userfive", balance: 4000, password: "user5" },
  }
  ain = "Perfect banking partner" //string interpolation
  acno = "Enter your account number :";
  pwd = "";
  constructor(private router:Router) { }//create a private variable "router" for login and adding instance(Router) of app-routing module, // dependecy injenction

  ngOnInit(): void {
  }
  getUsername(event: any) {
    this.acno = event.target.value;

  }
  getPwd(event: any) {
    this.pwd = event.target.value;
  }
  login() {
  var accNumber = this.acno;// assign a variable for this.acno
  var pswd = this.pwd;//assign a variable for this.pwd
    let dataset = this.accountdetails;//get acountdetails to dataset
    if (accNumber in dataset) {//checking account number in dataset
      var pswd1= dataset[accNumber].password 
        // console.log(pswd1);
        if(pswd1==pswd){
        alert("Login successful")
        this.router.navigateByUrl("dashboard");//navigated to dashboard url 
             }
      else {
        alert("Invalid Password")
      }
    }
    else {
      alert("INVALID DATA")
    }
  }
}
