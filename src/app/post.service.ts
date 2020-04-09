import { Injectable } from '@angular/core';
import { BlogPost } from './BlogPost';
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs';

const perPage = 6;

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http : HttpClient) { }

  getPosts(page,tag,category): Observable<BlogPost[]>{

    let params = {
      page: page,
      perPage: perPage.toString(),
    }

    if (tag != null || tag != undefined) {
      params["tag"] = tag;
    }

    if (category != null || category != undefined) {
      params["category"] = category;
    }

   return this.http.get<BlogPost[]>(`https://guarded-bastion-43395.herokuapp.com/api/posts`,{params});
   
  }


  getPostbyId(id): Observable<BlogPost>{
    return this.http.get<BlogPost>(`https://guarded-bastion-43395.herokuapp.com/api/posts/${id}`);
  }

  getCategories(): Observable<any>{
    return this.http.get<any>(`https://guarded-bastion-43395.herokuapp.com/api/categories`);
  }

  getTags(): Observable<string[]>{
    return this.http.get<string[]>(`https://guarded-bastion-43395.herokuapp.com/api/tags`);
  }


  getAllPosts():Observable<BlogPost[]>{
    return this.http.get<BlogPost>(`https://guarded-bastion-43395.herokuapp.com/api/posts?page=1&perPage=${Number.MAX_SAFE_INTEGER}`)
  }

  newPost(data: BlogPost): Observable<any>{
    return this.http.get<any>(`https://guarded-bastion-43395.herokuapp.com/api/posts`,data);
  }

  updatePostById(id:string, data:BlogPost): Observable<any>{
    return this.http.get<any>(`https://guarded-bastion-43395.herokuapp.com/api/posts/${id}`,data);
  }

  deletePostById(id:string): Observable<any>{
    return this.http.delete<any>(`https://guarded-bastion-43395.herokuapp.com/api/posts${id}`);
  }

}
