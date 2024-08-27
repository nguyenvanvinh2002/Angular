import { Component, OnInit } from '@angular/core';
import { AppService } from '../../service/app.service';

@Component({
  selector: 'app-showtabproducts',
  templateUrl: './showtabproducts.component.html',
  styleUrls: ['./showtabproducts.component.css']
})
export class ShowtabproductsComponent implements OnInit {
  g:number=1
  dataproducts: any = []; 
  productsgiamgia:any=[];

  URL: string = 'https://localhost:7025/img/';
  
  constructor(private app: AppService) {}

  ngOnInit(): void {
    this.app.lstproducts().subscribe(res => {
      this.dataproducts = res;
      this.productsgiamgia = res
      
    });
  }
  giamgiasoc(){
    this.dataproducts = this.productsgiamgia.filter((item:any)=>item.giamGia).sort((a:any,b:any)=>b.giamGia-a.giamGia)
  }
  selectall(){
    this.app.lstproducts().subscribe(res => {
      this.dataproducts = res;
    });
  }
  do100k(){
    this.dataproducts = this.productsgiamgia.filter((item:any)=> item.giaSp <= 100000)
  }
  filter(event:any) : void{
    const name = event.target.value
    this.app.search(name).subscribe(res=>{
      this.dataproducts = res
      console.log(this.dataproducts)
    })
  }
}
