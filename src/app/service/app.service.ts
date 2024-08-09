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
    lstcategoriesbydanhmuc(danhMuc:any){
      return this.http.get(`${APIURL}/Products/${danhMuc}`)
    }
    categoriesbydanhmuc(danhMuc:any){
      return this.http.get(`${APIURL}/Categories/${danhMuc}`)
    }
  }
