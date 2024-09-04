import { Component, OnInit } from '@angular/core';
import { AppService } from '../../service/app.service';

@Component({
  selector: 'app-showtabproducts',
  templateUrl: './showtabproducts.component.html',
  styleUrls: ['./showtabproducts.component.css']
})
export class ShowtabproductsComponent implements OnInit {
  g:number=1
  key:string=''
  dataproducts: any = []; 
  productsgiamgia:any=[];
  loadding:any
  URL: string = 'https://localhost:7025/img/';
  
  constructor(private app: AppService) {}

  ngOnInit(): void {
    this.app.lstproducts(this.key).subscribe(res => {
      this.dataproducts = res;
      this.productsgiamgia = res
    });
  }
  giamgiasoc(){
    this.loadding = true
   setTimeout(() => {
    this.dataproducts = this.productsgiamgia.filter((item:any)=>item.giamGia).sort((a:any,b:any)=>b.giamGia-a.giamGia)
    this.loadding = false
   }, 1000);
  }
  selectall(){
    this.loadding =true
    this.app.lstproducts(this.key).subscribe(res => {
      setTimeout(() => {
        this.dataproducts = res;
        this.loadding =false
      }, 1000);
    });
  }
  do100k(){
    this.loadding = true
    setTimeout(() => {
      this.dataproducts = this.productsgiamgia.filter((item:any)=> item.giaSp <= 100000)
      this.loadding = false
    }, 1000);
  }
  filter(event:any) : void{
    this.loadding = true
    const name = event.target.value
    this.app.lstproducts(name).subscribe(res=>{
      setTimeout(() => {
        this.dataproducts = res
        this.loadding = false
      }, 1000);
    
    })
    
  }
}
