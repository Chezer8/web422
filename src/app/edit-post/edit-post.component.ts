
import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Router, ActivatedRoute } from '@angular/router';
import { BlogPost } from '../BlogPost';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {

  blogPost: BlogPost;
  tags: string;
  constructor(private postService: PostService, private route: Router, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
   
    this.postService.getPostbyId(this.activeRoute.snapshot.params['id']).subscribe((response) => {
      this.blogPost = response;
      this.tags = this.blogPost.tags.toString();
    });


  }
  formSubmit() {
    this.blogPost.tags = this.tags.split(',').map(tag => tag.trim());
    this.postService.updatePostById(this.blogPost._id, this.blogPost).subscribe((response) => this.route.navigate(['admin']));
  }

  deletePost() {
    this.postService.deletePostById(this.blogPost._id).subscribe((response) => this.route.navigate(['admin']));
  }

}