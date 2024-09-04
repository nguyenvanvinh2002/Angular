import { Component, OnInit } from '@angular/core';
import { AppService } from '../../service/app.service';
import { ActivatedRoute } from '@angular/router';
import { query } from 'express';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent implements OnInit {
userName:any
lstoders:any=[]
loadding:any
  constructor ( private app:AppService , private activeRouter:ActivatedRoute){}
  ngOnInit(): void {
    this.loadding = true
    this.activeRouter.paramMap.subscribe(query=>{
      this.userName = query.get('userName');
    })
    this.app.lstOderstbyUserName(this.userName).subscribe(res=>{
    setTimeout(() => {
      this.lstoders = res
      this.loadding = false
    }, 1000);
    })

    
  }

}
