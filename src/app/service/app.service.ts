  import { HttpClient, HttpHeaders } from '@angular/common/http';
  import { Injectable } from '@angular/core';
  const APIURL = 'https://localhost:7025/api/v1'

  @Injectable({
    providedIn: 'root'
  })
  export class AppService {

    private header =new HttpHeaders();
    constructor(private http:HttpClient) {
    
    }
    private getauth():HttpHeaders{
      const token = sessionStorage.getItem('token');
      let headers = this.header;
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
    }
    lstproducts(name:any){
        return this.http.get(`${APIURL}/Products?name=${name}`,{headers:this.getauth()})
    }
    Login(body:any) {
      return this.http.post(`${APIURL}/Login`,body,{headers:this.getauth()});
    }
    CheckLogin() :any{
      let jsondata = sessionStorage.getItem('Login')
      if(jsondata){
        return JSON.parse(jsondata)
      }
      return false;
    }
    Register(register:any){
      return this.http.post<any>(`${APIURL}/Register`,register,{headers:this.getauth()})
    }
    lstcategories(){
      return this.http.get(`${APIURL}/Categories`,{headers:this.getauth()})
    }
    lstproductsbydanhmuc(danhMuc:any){
      return this.http.get(`${APIURL}/Products/${danhMuc}`,{headers:this.getauth()})
    }
    categoriesbydanhmuc(danhMuc:any){
      return this.http.get(`${APIURL}/Categories/${danhMuc}`,{headers:this.getauth()})
    }
    lstproductsbyId(Id:any){
      return this.http.get(`${APIURL}/Products/${Id}`,{headers:this.getauth()})
    }
    lstDanhGia(){
      return this.http.get(`${APIURL}/DanhGia`,{headers:this.getauth()})
    }
    comment(comment:any){
      return this.http.post<any>(`${APIURL}/DanhGia`,comment,{headers:this.getauth()})
    }
    Addcart(Carts:any){
      return this.http.post<any>(`${APIURL}/Carts`,Carts,{headers:this.getauth()})
    }
    lstCart(){
      return this.http.get(`${APIURL}/Carts`,{headers:this.getauth()})
    }
    lstOders(){
      return this.http.get(`${APIURL}/Oders`,{headers:this.getauth()})
    }
    lstCartbyUserName(userName:any){
      return this.http.get(`${APIURL}/Carts/${userName}`,{headers:this.getauth()})
    }
   deleteCart(idSp:number,Size:string,userName:string){
    return this.http.delete(`${APIURL}/Carts/${idSp}/${Size}/${userName}`,{headers:this.getauth()})
   }
   ByCarts(idSp:any){
    return this.http.post<any>(`${APIURL}/Carts/ByCart/`,idSp,{headers:this.getauth()})
   }
   AddOders(Oders:any){
    return this.http.post<any>(`${APIURL}/Oders`,Oders,{headers:this.getauth()})
  }
  lstOderstbyUserName(userName:any){
    return this.http.get(`${APIURL}/Oders/${userName}`,{headers:this.getauth()})
  }
  profilebyusser(userName:any,type:any){
    return this.http.get(`${APIURL}/Users?q=${userName}&type=${type}`,{headers:this.getauth()})
  }
  updateprofile(userName:any,user:any){
    return this.http.put(`${APIURL}/Users/${userName}`,user,{headers:this.getauth()})
  }
  notifycation(content:any){
    return this.http.post(`${APIURL}/Thongbao`,content,{headers:this.getauth()})
  }
  Getnotify(){
    return this.http.get(`${APIURL}/Thongbao`,{headers:this.getauth()})
  }
  Removenotify(userName:any){
    return this.http.delete(`${APIURL}/Thongbao/${userName}`,{headers:this.getauth()})
  }
  }
