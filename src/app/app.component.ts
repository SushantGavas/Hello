import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello Angular';
  color="red";
  data=[
    {
      name:'Sushant',
      age:29,
      email:'sushant@gmail.com'
    },
    {
      name:'Ramesh',
      age:25,
      email:'ramesh@gmail.com'
    },
    {
      name:'Prakash',
      age:35,
      email:'prakash@gmail.com'
    },
    {
      name:'Priya',
      age:29,
      email:'priya@gmail.com'
    },
    {
      name:'Smita',
      age:21,
      email:'smita@gmail.com'
    },
    {
      name:'Rani',
      age:15,
      email:'rani@gmail.com'
    }
  ];

}
