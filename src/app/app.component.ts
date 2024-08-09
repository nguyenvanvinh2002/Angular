import { Component, OnInit } from '@angular/core';
import { AppService } from './service/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  
  title = 'KidsEcom';
  isLogin:any;
  constructor(private app:AppService){}
  ngOnInit(): void {
  this.isLogin =  this.app.CheckLogin();
  
  
  }
 Logout(){
  sessionStorage.clear();
  location.reload()
 }
}
