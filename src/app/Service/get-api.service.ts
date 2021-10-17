import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import {map} from 'rxjs/operators';
import {Todo} from '../interfaces/Todo';
import {environment} from '../../environments/environment';

const API_BLOG = environment.API_BASE_URL + '/api/v1/blog/';

@Injectable({
  providedIn: 'root'
})

export class GetApiService {

  constructor(
    private http:HttpClient
  ) { }



  getApi() {
    return this.http.get<{success: boolean; data: Todo[]; count: number}>(API_BLOG + 'get-all-blogs')
  }
  postApi( data: any ){
    return this.http.post<{success: boolean; data: Todo[]; count: number}>(API_BLOG + 'add-blog', data);
  }
  deleteApi( id:any ){
    return this.http.delete<{success: boolean; data: Todo[]; count: number}>(API_BLOG + '/delete-blog-by-id/'+id).pipe(map((res:any)=>{
      return res;
    }));
  }
  updateApi( data:any ){
    console.log("Server side : ", data);
    return this.http.put<{success: boolean; data: Todo[]; count: number}>(API_BLOG + '/edit-blog-by-id', data).pipe(map((res:any)=>{
      return res;
    }));
  }
  
}
