import { Component, OnInit } from '@angular/core';
import { AppService } from '../../service/app.service';

@Component({
  selector: 'app-showtabproducts',
  templateUrl: './showtabproducts.component.html',
  styleUrls: ['./showtabproducts.component.css']
})
export class ShowtabproductsComponent implements OnInit {
  p:number=1
  dataproducts: any = []; 
  originalProducts: any = []; 
  URL: string = 'https://localhost:7025/img/';
  
  constructor(private app: AppService) {}

  ngOnInit(): void {
    this.app.lstproducts().subscribe(res => {
      this.dataproducts = res;
    });
  }


}
