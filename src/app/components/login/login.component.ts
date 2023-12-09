import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName!:string;
  password!: string;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  login() {
    if (this.userName == "aaa" && this.password == "222") {
      localStorage.setItem('userId', '1');
      localStorage.setItem('userName', this.userName);
      this.router.navigate(['/product-list']);
    }else {
      alert('User name or Password is incorrect');
    }
  }
}
