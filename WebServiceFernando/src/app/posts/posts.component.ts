import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { NgProgressModule } from 'ngx-progressbar';
import { Http} from '@angular/http';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
  providers:[PostService]
})
export class PostsComponent implements OnInit {

  posts:IPost[]; 
  
  
  constructor(private postService:PostService){
    //console.log();
    postService.getPost().subscribe(
      post=>{
        console.log(post);
      this.posts=post;
    })
    
  }
  ngOnInit() {
  }

}
//Interface para poder vaciar los datos
interface IPost{
  userId:string;
  id:string;
  title:string;
  body:string;
}


