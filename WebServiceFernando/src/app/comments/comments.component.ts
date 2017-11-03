import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
  providers:[PostService]
})
export class CommentsComponent implements OnInit {
  comments:IComment[]; 
 constructor(private postService:PostService) {
  //this.spinnerService.show();
    postService.getComments().subscribe(
      comment=>{
      //  this.spinnerService.hide();
        console.log(comment);
        this.comments=comment;
    });
   }

  ngOnInit() {
  }

}
interface IComment{
  postId:string;
  id:string;
  name:string;
  email:string;
  body:string;
}
