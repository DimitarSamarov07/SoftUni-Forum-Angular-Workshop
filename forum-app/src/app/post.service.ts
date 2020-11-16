import {Injectable} from '@angular/core';
import {environment} from "../environments/environment";
import {Observable} from "rxjs";
import {IPost} from "./interfaces/post";
import {HttpClient} from "@angular/common/http";

const apiUrl = environment.apiUrl;

@Injectable()
export class PostService {

  constructor(private http: HttpClient) {
  }

  loadPostList(limit?: number): Observable<IPost[]> {
    const url = `${apiUrl}/posts${limit ? `?limit=${limit}` : ""}`
    return this.http.get<IPost[]>(url)
  }
}
