import { Component, OnInit } from '@angular/core';
import {PostService } from '../post.service';
import {Router} from '@angular/router';
import {BlogPost} from '../BlogPost';

@Component({
  selector: 'app-posts-table',
  templateUrl: './posts-table.component.html',
  styleUrls: ['./posts-table.component.css']
})
export class PostsTableComponent implements OnInit {

  blogPosts:Array<BlogPost> = [];

  constructor(private data:PostService, private route:Router) { }

  ngOnInit(): void {
    this.data.getAllPosts().subscribe((data)=> this.blogPosts=data);
  }

  rowClicked(e,id){
    this.route.navigate(['admin/post',id]);
  }

}
