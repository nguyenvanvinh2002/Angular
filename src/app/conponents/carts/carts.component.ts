import { Component, OnInit } from '@angular/core';
import { AppService } from '../../service/app.service';
import { ActivatedRoute } from '@angular/router';
import { query } from 'express';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrl: './carts.component.css'
})
export class CartsComponent implements OnInit {
  isLogin:any;
  userName:any
  lstcartsbyusername:any

   URL:string='https://localhost:7025/img/'
  constructor( private app:AppService,private activeRouter:ActivatedRoute){}
  ngOnInit(): void {
    this.isLogin = this.app.CheckLogin


    this.activeRouter.paramMap.subscribe(query=>{
    this.userName= query.get('userName')
    this.app.lstCartbyUserName(this.userName).subscribe(res=>{
    this.lstcartsbyusername = res
   
   
  })
   })
   
  }
  dele(id:number,size:string){
    this.app.deleteCart(id,size).subscribe(res=>{
      Swal.fire({
        title: "Thành công",
        text: "Xóa sản phẩm thành công",
        icon: "success"
      }).then(()=>{
        this.app.lstCartbyUserName(this.userName).subscribe(res=>{
          this.lstcartsbyusername = res
        })
      })
    
    });
   
  }
}
