import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  uname = "";
  acno = "";
  pwd = "";

  registerForm = this.fb.group({
    uname: ['', [Validators.required, Validators.pattern('[a-z A-Z]*')]],
    acno: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(5), Validators.pattern('[0-9]*')]],
    pwd: ['', [Validators.required, Validators.minLength(4), Validators.pattern('[A-Z a-z 0-9]*')]]
  });
  constructor(private dataService: DataService, private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  register() {

    if (this.registerForm.valid) {
      var result = this.dataService.register(this.registerForm.value.uname, this.registerForm.value.acno, this.registerForm.value.pwd)
      if (result) {
        this.router.navigateByUrl("");
      }
      else {
        this.router.navigateByUrl("");
      }
    }

  }

}

