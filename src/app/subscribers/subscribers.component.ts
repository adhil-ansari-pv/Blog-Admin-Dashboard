import { Component, OnInit } from '@angular/core';
import { SubscribersService } from '../services/subscribers.service';

@Component({
  selector: 'app-subscribers',
  templateUrl: './subscribers.component.html',
  styleUrls: ['./subscribers.component.scss']
})
export class SubscribersComponent implements OnInit{
subScribersArray: any;
  constructor(private subService:SubscribersService){}
  ngOnInit(): void {
    this.subService.loadData().subscribe(val =>{
      this.subScribersArray = val
    })
  }
  onDelete(id:string){
    this.subService.deleteData(id)
  }
}
