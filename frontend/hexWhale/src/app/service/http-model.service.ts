import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
 
@Injectable({
  providedIn: 'root'
})

export class HttpModelService {
  url:string = `http://localhost:8089`;
  constructor(private http:HttpClient ) { }

  httpCaller(request){

    if(request.method === 'post'){
      return this.http.post(`${this.url}${request.path}`,request.params);

    }
    else if(request.method === 'get'){
      return this.http.get(`${this.url}${request.path}`,{params:request.params});

    }
    else if(request.method === 'put'){
      return this.http.put(`${this.url}${request.path}`,request.params)

    }
    else if(request.method === 'delete'){
      return this.http.delete(`${this.url}${request.path}`,request.params);
    }
    

  }
}
