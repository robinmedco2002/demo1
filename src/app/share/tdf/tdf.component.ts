import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrls: ['./tdf.component.css']
})
export class TdfComponent implements OnInit {
  submitted = false;
  constructor() { }

  ngOnInit(): void {
  }


country = ['India', 'USA', 'UK', 'Dubai', 'Bangkok', 'Colombo'];

onSubmit(data)
{
 this.submitted = true;
  console.log('good', data)
  
}

}
