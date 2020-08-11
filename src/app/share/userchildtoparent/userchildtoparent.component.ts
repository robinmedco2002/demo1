import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-userchildtoparent',
  templateUrl: './userchildtoparent.component.html',
  styleUrls: ['./userchildtoparent.component.css']
})
export class UserchildtoparentComponent implements OnInit {

  @Output() parentComponent: EventEmitter<any>= new  EventEmitter()

  constructor() { }

  ngOnInit(): void {
    // this.parentComponent.emit({name:'Robin', age:28, country:'India'})
  }

  sendData()
  {
    let item={name:'Robin', age:28, country:'India'}
    this.parentComponent.emit(item)
  }


}
