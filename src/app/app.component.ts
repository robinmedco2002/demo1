import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Design Media';

  
// data='Robin Kumar Example Parent data to child data transfer';

// dataobj={
//   name:'Robin',
//   age: 22
// }

users=[
  {
    name: 'Robin',
    age: 30,
    country: 'India'
  },

  {
    name: 'Sam',
    age: 20,
    country: 'UK'
  },

  {
    name: 'Liza',
    age: 22,
    country: 'India'
  }
]

name=""
age=""
country=""
parentComponent(userdata)
{
  console.log(userdata)
  this.name=userdata.name,
  this.age=userdata.age,
  this.country=userdata.country
}

}
