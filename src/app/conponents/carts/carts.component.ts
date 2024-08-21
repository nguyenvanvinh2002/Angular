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
  lstcartsbyusername:any;
  textname:string= 'Chọn Tất Cả'
  textoder:string="Đặt Hàng"
  textdele:string='Xóa Tất Cả'

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
  dele(id:number,size:string,userName:string){
    this.app.deleteCart(id,size,this.userName).subscribe(res=>{
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
  selectAll() {
    const allSelected = this.lstcartsbyusername.every((item:any) => item.selected);
    if(allSelected){
      this.lstcartsbyusername.forEach((lst:any) => lst.selected = false);
     
      this.textname =' Chọn Tất Cả'
      this.textoder= 'Đặt Hàng'
    }
    else{
      this.lstcartsbyusername.forEach((lst:any) => lst.selected = true );
        this.textname ='Bỏ Chọn Tất Cả'
        this.textoder = 'Đặt Hàng'
        
    }
  }
  odercount(){
    const getoder = this.lstcartsbyusername.filter((lst:any)=>lst.selected)
    if(getoder.length == 0){
      Swal.fire({
        title: "Lỗi",
        text: "Chọn sản phẩm cần oder",
        icon: "error"
      })
     }
     else{
      Swal.fire({
        title: ":)",
        text: "Chưa có chức năng này",
        icon: "warning"
      })
     }
  }
  Remove(){
    const getdele = this.lstcartsbyusername.filter((lst:any)=>lst.selected)
   if(getdele.length == 0){
    Swal.fire({
      title: "Lỗi",
      text: "Chọn sản phẩm cần xóa",
      icon: "error"
    })
   }
   else{
    Swal.fire({
      title: ":)",
      text: "Chưa có chức năng này",
      icon: "warning"
    })
   }
  
  }
 
}
