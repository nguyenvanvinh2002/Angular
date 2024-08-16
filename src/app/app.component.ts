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
  lstcategories:any
  title = 'KidsEcom';
  isLogin:any;
  datacart:any=[]
  URL: string = 'https://localhost:7025/img/';
  constructor(private app:AppService ,private activeRouter:ActivatedRoute){}
  ngOnInit(): void {
  this.isLogin =  this.app.CheckLogin();
  this.app.lstcategories().subscribe(res=>{
    this.lstcategories = res
   
  })
  }
  carts(){
    location.assign("http://localhost:4200/Login")
  }
 Logout(){
  sessionStorage.clear();
  location.reload()
 }
}
