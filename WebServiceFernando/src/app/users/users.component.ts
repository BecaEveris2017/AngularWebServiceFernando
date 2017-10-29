import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers:[PostService]
})
export class UsersComponent implements OnInit {
  users:User[]; 
  constructor(private postService:PostService) {
    postService.getUsers().subscribe(
      user=>{
        console.log( user);
        this.users=user;
    });
   }
  ngOnInit() {
  }

}
interface User{
  id:string;
  name:string;
  email:string;
  address:{
    street:string;
    suite:string;
    city:string;
    zipcode:string;
    geo:{
      lat:string;
      Lng:string;
    }
  }
  phone:string;
  website:string;
  company:{
    name:string;
    catchPhrase:string;
    bs:string;
  }

}
