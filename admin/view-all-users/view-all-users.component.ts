import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/user-service.service';

@Component({
  selector: 'app-view-all-users',
  templateUrl: './view-all-users.component.html',
  styleUrls: ['./view-all-users.component.css']
})
export class ViewAllUsersComponent {
  users:any[]=[];
constructor(private router:Router,
  private userService:UserServiceService){
    userService.viewAllUsers().subscribe((response:any)=>{
      this.users=response;
    });
  }
}
