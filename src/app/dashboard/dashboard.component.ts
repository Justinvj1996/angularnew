import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  acno = "";
  pwd = "";
  amt = "";
  depositForm = this.fb.group({
    acno: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(5), Validators.pattern('[0-9]*')]],
    pwd: ['', [Validators.required, Validators.minLength(4), Validators.pattern('[A-Z a-z 0-9]*')]],
    amt: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(7), Validators.pattern('[0-9]*')]]
  });
  withdrawForm = this.fb.group({
    acno: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(5), Validators.pattern('[0-9]*')]],
    pwd: ['', [Validators.required, Validators.minLength(4), Validators.pattern('[A-Z a-z 0-9]*')]],
    amt: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(7), Validators.pattern('[0-9]*')]]
  });


  constructor(private router: Router, public dataService: DataService, private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  deposit() { 
    if(this.depositForm.valid){
      var result = this.dataService.deposit(this.depositForm.value.acno, this.depositForm.value.pwd, this.depositForm.value.amt)
    
    }
    else{
      alert("Invalid Form")
    }
  }
  withdraw() { 
    if(this.withdrawForm.valid){
      var result = this.dataService.withdraw(this.withdrawForm.value.acno, this.withdrawForm.value.pwd, this.withdrawForm.value.amt)
    
    }
    else{
      alert("Invalid Form")
    }
  }


}
