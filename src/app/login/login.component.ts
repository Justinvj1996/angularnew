import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  ain = "Perfect banking partner" //string interpolation
  acno = "Enter your account number :";
  pwd = "";
  loginForm = this.fb.group({
    acno: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(5), Validators.pattern('[0-9]*')]],
    pwd: ['', [Validators.required, Validators.minLength(4), Validators.pattern('[A-Z a-z 0-9]*')]]
  });
  constructor(private router: Router, private dataService: DataService, private fb: FormBuilder) { }//create a private variable "router" for login and adding instance(Router) of app-routing module, // dependecy injenction

  ngOnInit(): void {
  }

  login() {
    if (this.loginForm.valid) {
      var accNumber = this.loginForm.value.acno;
      var pswd = this.loginForm.value.pwd;
      var result = this.dataService.login(accNumber, pswd)
      if (result) {
        this.router.navigateByUrl("dashboard");
      }
    }
    else {
      alert("Invalid form")
    }
  }
}
