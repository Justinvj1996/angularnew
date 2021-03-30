import { Injectable } from '@angular/core';
import { LoginComponent } from '../login/login.component';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  accountdetails: any = {
    1000: { accno: 1000, name: "Zane", balance: 5000, password: "user1" },
    1001: { accno: 1001, name: "Akansha", balance: 2000, password: "user2" },
    1002: { accno: 1002, name: "Ziyad", balance: 6000, password: "user3" },
    1003: { accno: 1003, name: "Charlie", balance: 8000, password: "user4" },
    1004: { accno: 1004, name: "David", balance: 4000, password: "user5" },
  }
  currentUser: any;
  constructor() {
    this.getDetails()
  }
  saveDetails() {//storing datas on local storage of browser
    localStorage.setItem("accountDetails", JSON.stringify(this.accountdetails))
    if(this.currentUser){
    localStorage.setItem("currentUser", JSON.stringify(this.currentUser))
    }
  }
  getDetails() {//getting datas from local storage of browser
    if( localStorage.getItem("accountDetails")){
      this.accountdetails =JSON.parse(localStorage.getItem("accountDetails")||'')
    }
    
    if( localStorage.getItem("currentUser")){
    this.currentUser =JSON.parse( localStorage.getItem("currentUser")||'')
  }
}
  register(name: any, accno: any, password: any) {
    if (accno in this.accountdetails) {
      alert("User already Exist - Please login")
      return false;
    }
    else {
      this.accountdetails[accno] = {
        accno,
        name,
        balance: 0,
        password

      }
      this.saveDetails();
      alert("Registration Successfull")
      console.log(this.accountdetails);
      return true;

    }
  }
  login(accno: any, pwd: any) {
    let dataset = this.accountdetails;
    if (accno in dataset) {
      var pswd1 = dataset[accno].password
        if (pswd1 == pwd) {
        this.currentUser = dataset[accno].name
        this.saveDetails();
        alert("Login successful")
        return true
      }
      else {
        alert("Invalid Password")
        return false
      }
    }
    else {
      alert("INVALID DATA")
      return false
    }
  }
  deposit(acno: any, pwd: any, amt: any) {
    var amount = parseInt(amt)
    let dataset = this.accountdetails;
    if (acno in dataset) {
      var pswd1 = dataset[acno].password

      if (pswd1 == pwd) {
        dataset[acno].balance += amount;
        this.saveDetails();
        alert("Account credited with amount: " + amount + " New balance is: " + dataset[acno].balance)
      }
      else {
        alert("Invalid Password")
      }
    }
    else {
      alert("INVALID DATA")
    }

  }
  withdraw(acno: any, pwd: any, amt: any) {
    var amount = parseInt(amt)
    let dataset = this.accountdetails;
    if (acno in dataset) {
      var pswd1 = dataset[acno].password

      if (pswd1 == pwd) {
        if (amount > dataset[acno].balance) {
          alert("Insufficient Balance")
        }
        else {
          dataset[acno].balance -= amount;
          this.saveDetails();
          alert("Account debited with amount: " + amount + " New balance is: " + dataset[acno].balance)
        }
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

