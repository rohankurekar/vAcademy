import { Component, OnInit } from '@angular/core';
import { User } from '../auth/user.model';

@Component({
  selector: 'app-profile', 
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userData

  constructor() { }

  ngOnInit(): void {
    this.userData=JSON.parse(localStorage.getItem('userData'))
   
  }

}
 