import { Router } from '@angular/router';
import { User } from './../auth/user.model';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-ranklist',
  templateUrl: './ranklist.component.html',
  styleUrls: ['./ranklist.component.css']
})
export class RanklistComponent implements OnInit {
  alluser:User;
  constructor(private authenticationService: AuthenticationService,private router:Router) { }
  
  ngOnInit(): void {
    this.authenticationService.getAllUsers().subscribe(response=>{
      console.log(response);
      this.alluser=response;
      this.router.navigate(['/ranklist']);
      
    },
    error=>{

    })
  }

}
