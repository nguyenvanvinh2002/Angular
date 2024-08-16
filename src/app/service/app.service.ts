  import { HttpClient, HttpHeaders } from '@angular/common/http';
  import { Injectable } from '@angular/core';
  const APIURL = 'https://localhost:7025/api/v1'

  @Injectable({
    providedIn: 'root'
  })
  export class AppService {


    constructor(private http:HttpClient) {
    
    }
    lstproducts(){
        return this.http.get(`${APIURL}/Products`)
    }
    Login(login:any) {
      return this.http.post<any>(`${APIURL}/Login`,login );
    }
    CheckLogin() :any{
      let jsondata = sessionStorage.getItem('Login')
      if(jsondata){
        return JSON.parse(jsondata)
      }
      return false;
    }
    Register(register:any){
      return this.http.post<any>(`${APIURL}/Register`,register)
    }
    lstcategories(){
      return this.http.get(`${APIURL}/Categories`)
    }
    lstproductsbydanhmuc(danhMuc:any){
      return this.http.get(`${APIURL}/Products/${danhMuc}`)
    }
    categoriesbydanhmuc(danhMuc:any){
      return this.http.get(`${APIURL}/Categories/${danhMuc}`)
    }
    lstproductsbyId(Id:any){
      return this.http.get(`${APIURL}/Products/${Id}`)
    }
    lstDanhGia(){
      return this.http.get(`${APIURL}/DanhGia`)
    }
    comment(comment:any){
      return this.http.post<any>(`${APIURL}/DanhGia`,comment)
    }
    Addcart(Carts:any){
      return this.http.post<any>(`${APIURL}/Carts`,Carts)
    }
    lstCart(){
      return this.http.get(`${APIURL}/Carts`)
    }
    lstCartbyUserName(userName:any){
      return this.http.get(`${APIURL}/Carts/${userName}`)
    }
   deleteCart(idSp:number,Size:string){
    return this.http.delete(`${APIURL}/Carts/${idSp}/${Size}`)
   }
   Bycart(idSp:any){
    return this.http.post<any>(`${APIURL}/Carts/ByCart/`,idSp)
   }
   AddOders(Oders:any){
    return this.http.post<any>(`${APIURL}/Oders`,Oders)
  }
  lstOderstbyUserName(userName:any){
    return this.http.get(`${APIURL}/Oders/${userName}`)
  }
  }
