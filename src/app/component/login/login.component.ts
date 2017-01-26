import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { Headers } from '@angular/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  visibility="hidden";
    username:string;
    password:string;

  constructor(public router: Router, public http: Http) { }

  ngOnInit() {
  }

  tutup(){
    this.visibility="hidden";
  }

  buka(){
    this.visibility="visible";
  }

  login(user_name, user_password) {
  let headers1 = new Headers();
    headers1.append('Accept', 'application/json');
    headers1.append('Content-Type', 'application/json');

    let body = JSON.stringify({ user_name, user_password });
    this.http.post('http://localhost:8090/login', body, { headers: headers1 })
        .subscribe(
            response => {
              alert("halo")
              console.log(response)
              localStorage.setItem('id_token', response.json().token);
              this.router.navigate(['sellerarea']);
            },
            error => {
              alert(error.text());
              console.log(error.text());
            }
        );
  }
}
