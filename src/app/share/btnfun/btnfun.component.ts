import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-btnfun',
  templateUrl: './btnfun.component.html',
  styleUrls: ['./btnfun.component.css']
})
export class BtnfunComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  btnclick()
  {
    alert("Welcome to Robin")
  }

  btnclick2(myname){
    alert(myname)
  }

  yourName="Robin"
  btnclick3(myname){
    alert(myname)
  }

  myName=""
  myEvent(evt)
  {
    console.warn(evt)
    this.myName=evt
  }


show="true"

show2="yes"

show3="red"

color="blue"


// data=['Robin', 'Sam','Rock','Pankaj']

data=[
  {
    name: 'Robin',
    age: 30,
    sex: 'Male',
    mobile: '9876543210',
    country: 'India'
  },

  {
    name: 'Pankaj',
    age: 22,
    sex: 'Male',
    mobile: '4141543210',
    country: 'India'
  },

  {
    name: 'Soni',
    age: 24,
    sex: 'Female',
    mobile: '7476543210',
    country: 'UK'
  },

  {
    name: 'Rock',
    age: 44,
    sex: 'Male',
    mobile: '2412543210',
    country: 'India'
  },

  {
    name: 'Sam',
    age: 47,
    sex: 'Male',
    mobile: '6276543210',
   country: 'India'
  },
]


err=false;

updateColor()
{
  this.color="orange"
}


}




