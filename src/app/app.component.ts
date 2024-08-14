import { Component, OnInit } from '@angular/core';
import { AppService } from './service/app.service';
import { ActivatedRoute } from '@angular/router';
import { query } from 'express';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  
  title = 'KidsEcom';
  isLogin:any;
  datacart:any=[]
 
  constructor(private app:AppService ,private activeRouter:ActivatedRoute){}
  ngOnInit(): void {
  this.isLogin =  this.app.CheckLogin();

  }
  carts(){
    location.assign("http://localhost:4200/Login")
  }
 Logout(){
  sessionStorage.clear();
  location.reload()
 }
}
