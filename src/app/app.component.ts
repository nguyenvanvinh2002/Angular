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
  lstcart:any;
  lstoders:any;
  CartCount: number=0;
  OdersCount:number =0;
  URL: string = 'https://localhost:7025/img/';
  
  constructor(private app:AppService ){}

  ngOnInit(): void {
  this.isLogin =  this.app.CheckLogin();
  this.app.lstCart().subscribe(res=>{
   this.lstcart = res
   this.filterCartByUserName();
  })
this.app.lstOders().subscribe(res=>{
this.lstoders =res
this.filterOdersbyuserName();
});



  }
  filterOdersbyuserName() {
    if (this.isLogin && this.isLogin.userName && this.lstoders) {
      var filteredOders = this.lstoders.filter((product: any) => product.userName === this.isLogin.userName);
      this.OdersCount = filteredOders.length;
   
    }
  }
  filterCartByUserName() {
    if (this.isLogin && this.isLogin.userName && this.lstcart) {
      const filteredCart = this.lstcart.filter((product: any) => product.userName === this.isLogin.userName);
      this.CartCount = filteredCart.length;
     
    }
  }

  
 Logout(){
  
  sessionStorage.clear();
  
  location.reload();
  
 }
}
