import { Component, OnInit } from '@angular/core';
import {GoldService} from './gold.service';

@Component({
  selector: 'app-ninjagold',
  templateUrl: './ninjagold.component.html',
  styleUrls: ['./ninjagold.component.css']
})
export class NinjagoldComponent implements OnInit {

  goldAmount:number = 0

  messageList:any = []

  constructor(private _HttpService: GoldService) { }

  ngOnInit(): void {
    this.start()
    this.reset()
  }

  start():void{
    this._HttpService.create()
    .subscribe((data:any)=>{
      console.log(data);
    })
  }

  reset():void{
    this._HttpService.reset()
    .subscribe((data:any)=>{
      console.log(data);
    })
  }

  farm():void{
    this._HttpService.farm()
    .subscribe((data:any)=>{
      this.goldAmount = data.newvalue
      this.messageList.push(`You earned ${data.goldupdated} at the Farm`)
    })
  }

  cave():void{
    this._HttpService.cave()
    .subscribe((data:any)=>{
      this.goldAmount = data.newvalue
      this.messageList.push(`You earned ${data.goldupdated} at the Cave`)
    })
  }

  casino():void{
    this._HttpService.casino()
    .subscribe((data:any)=>{
      this.goldAmount = data.newvalue
      if(data.goldupdated<0){
        this.messageList.push(`You lost ${data.goldupdated} at the Casino`)
      }
      else{
        this.messageList.push(`You earned ${data.goldupdated} at the Casino`)
      }
    })
  }

  house():void{
    this._HttpService.house()
    .subscribe((data:any)=>{
      this.goldAmount = data.newvalue
      this.messageList.push(`You earned ${data.goldupdated} at the House`)
    })
  }


}
