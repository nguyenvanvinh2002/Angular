import { Component, OnInit } from '@angular/core';
import { AppService } from './service/app.service';
import { ActivatedRoute } from '@angular/router';
import { query } from 'express';
import Swal from 'sweetalert2';

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
  lstnotify:any;
  CartCount: number=0;
  OdersCount:number =0;
  NotifyCount:number=0
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
this.app.Getnotify().subscribe(res=>{
  this.lstnotify = res
  this.filterNotifybyuserName();
})
  }
  filterNotifybyuserName() {
    if (this.isLogin && this.isLogin.userName && this.lstnotify) {
      var filteredNOtify = this.lstnotify.filter((Notify: any) => Notify.userName === this.isLogin.userName)
      this.lstnotify = filteredNOtify;
      this.NotifyCount = filteredNOtify.length;
    }
  }
  filterOdersbyuserName() {
    if (this.isLogin && this.isLogin.userName && this.lstoders.lst) {
      var filterOders = this.lstoders.lst.filter((Oder: any) => Oder.userName === this.isLogin.userName);
      this.OdersCount = filterOders.length;
    }
  }
  filterCartByUserName() {
    if (this.isLogin && this.isLogin.userName && this.lstcart) {
      const filteredCart = this.lstcart.filter((product: any) => product.userName === this.isLogin.userName);
      this.CartCount = filteredCart.length;
    }
  }
  alert(){
    Swal.fire({
      title:"Thông báo",
      text:"Vui lòng đăng nhập",
      icon:"error"
    })
  }
  
 Logout(){
  sessionStorage.clear();
  location.reload();
 }
 delenotify(userName:any){
  this.app.Removenotify(userName).subscribe(res =>{
    Swal.fire({
      title:"Thông báo",
      text:"Thành công",
      icon:"success"
    })
    setTimeout(() => {
      location.reload();
    }, 1000);
  })
 }
}
