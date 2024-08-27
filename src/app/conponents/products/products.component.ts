import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, viewChild } from '@angular/core';
import { AppService } from '../../service/app.service';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { forkJoin } from 'rxjs';
import { sign } from 'crypto';
import { query } from 'express';




@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

 
  URL: string = 'https://localhost:7025/img/';
  id: any;
  products: any;
  Similarproducts: any;
  lstsimi: any = [];
  lstdanhgia: any= [];
  danhgiabyid: any = [];
  isLogin: any;
  public breakpoints: number = 5;
  giohang:any=[];
  oders:any=[]
  lstproducts:any=[]
  sizeControl = new FormControl('S');
  soluongControl = new FormControl(1);
  profileuser:any=[];
  tenSp:any
  productForm: FormGroup = new FormGroup({
    size: this.sizeControl,
    soluong: this.soluongControl
  })
  OdersF:FormGroup = new FormGroup({
    idSp: new FormControl(''),
    userName:new FormControl(''),
    hoVaTen:new FormControl(''),
    email:new FormControl(''),
    soDienThoai:new FormControl(''),
    diaChi:new FormControl(''),
    tenSp:new FormControl(''),
    soLuong:this.soluongControl,
    size:this.sizeControl,
    giaSp:new FormControl(''),
    subtotal:new FormControl(''),
  })
  Comments: FormGroup = new FormGroup({
    comments: new FormControl('', [Validators.required]),
    idSp: new FormControl(''),
    userName: new FormControl('')
  });

  constructor(private app: AppService, private activeRouter: ActivatedRoute) { }

  ngOnInit(): void {
  
   this.profileuser = JSON.parse(sessionStorage.getItem('Login') || '{} ')


    this.activeRouter.paramMap.subscribe(query => {
      this.id = query.get("id");
      this.loadData();
    });
    if (window.innerWidth < 960) {
      this.breakpoints = 3;
    }
    if (window.innerWidth < 720) {
      this.breakpoints = 2;
    }
    if (window.innerWidth < 540) {
      this.breakpoints = 2;
    }
  }

  loadData(): void {
 
      
      
   
    forkJoin({
     
      product: this.app.lstproductsbyId(this.id),
      similarProducts: this.app.lstproducts(),
      lstproducts:this.app.lstproducts(),
      danhGia: this.app.lstDanhGia(),

    }).subscribe(responses => {
 
      this.products = responses.product;
      this.Similarproducts = responses.similarProducts;
      this.lstproducts = responses.lstproducts;
      this.lstdanhgia = responses.danhGia;
      this.lstsimi = this.Similarproducts.filter((item: any) => item.danhMuc === this.products.danhMuc);
      this.danhgiabyid = this.lstdanhgia.filter((item: any) => item.idSp === this.products.id)
      this.isLogin = this.app.CheckLogin();
      this.Comments.patchValue({
        idSp: this.id,
        userName: this.isLogin.userName
      });
      this.OdersF.patchValue({
        idSp: this.id,
        userName:this.isLogin.userName,
        hoVaTen:this.profileuser.hoVaTen,
        email:this.profileuser.email,
        soDienThoai:this.profileuser.soDienThoai,
        diaChi:this.profileuser.diaChi,
        tenSp:this.products.tenSp,
        giaSp:this.products.giaSp,
        subtotal: (this.products.giaSp ?? 0) * (this.soluongControl.value ?? 0)
      })
    });
  }

  onComment(): void {
    this.app.comment(this.Comments.value).subscribe(res => {
   if(res.code == 400){
    Swal.fire({
      title: "Lỗi rồi",
      text: "Hãy đánh giá thật cho chúng tôi biết cảm nhận của bạn",
      icon: "warning"
    });
    this.Comments.reset();
      this.loadData(); 
   }else{
    Swal.fire({
      title: "Cảm ơn",
      text: "Đã gửi bài đánh giá của bạn",
      icon: "success"
    });
   }
 
      this.Comments.reset();
      this.loadData(); 
    });
  }


 Cart(){
   if(!this.isLogin){
   sessionStorage.setItem('currentPath', window.location.href);
   location.assign("http://localhost:4200/Login")
    return;
    }
    this.app.Addcart({
      idSp:this.id,
      userName:this.isLogin.userName,
      tenSp:this.products.tenSp,
      img:this.products.img,
      danhMuc:this.products.danhMuc,
      giaSp:this.products.giaSp,
      size:this.sizeControl.value,
      soluong:this.soluongControl.value}).subscribe(res=>{
      this.giohang = res
      Swal.fire({
        title: "Thành Công",
        text: "Tiếp tục mua sắm nhé!",
        icon: "success"
      });
     
    })
   
   
 }

Muangay(tenSp:any){
  this.tenSp = tenSp
if(!this.isLogin){
  sessionStorage.setItem('currentPath', window.location.href);
  location.assign("http://localhost:4200/Login")
   return;
}
else{
    this.app.ByCarts({
      idSp:this.id,
      tenSp:this.products.tenSp,
      giaSp:this.products.giaSp,
      size:this.sizeControl.value,
      soluong:this.soluongControl.value,
      subtotal: (this.products.giaSp ?? 0) * (this.soluongControl.value ?? 0)
    }).subscribe(res=>{
      this.oders = res
    })
}  

}
ByOder(){
  this.OdersF.patchValue({
    subtotal: (this.products.giaSp ?? 0) * (this.soluongControl.value ?? 0)
  });
 this.app.AddOders({
        idSp: this.id,
        userName:this.isLogin.userName,
        hoVaTen:this.profileuser.hoVaTen,
        email:this.profileuser.email,
        soDienThoai:this.profileuser.soDienThoai,
        diaChi:this.profileuser.diaChi,
        tenSp:this.products.tenSp,
        giaSp:this.products.giaSp,
        soLuong:this.soluongControl.value,
        size:this.sizeControl.value,
        subtotal: (this.products.giaSp ?? 0) * (this.soluongControl.value ?? 0) 
 }).subscribe(res=>{
  Swal.fire({
    title: "Thành Công",
    text: "Tiếp tục mua sắm nhé!",
    icon: "success"
  });
  setTimeout(() => {
    location.reload()
  }, 1000);
 })
this.app.notifycation({
  idSp: this.id,
  userName:this.isLogin.userName,
  tenSp:this.products.tenSp,
  title:`Đặt hàng sản phẩm ${this.tenSp} thành công`,
  size:this.sizeControl.value,
}).subscribe(res=>{
})
 



}
}
