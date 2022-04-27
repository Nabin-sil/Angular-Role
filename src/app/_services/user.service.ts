import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@environments/environment';
import { User } from '@app/_models';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {
    adminapiUrl="http://localhost:3000/users"

    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>(`${environment.apiUrl}/users`);
    }

    getById(id: number) {
        return this.http.get<User>(`${environment.apiUrl}/users/${id}`);
    }



      //Get all data
      getAllUser():Observable<any>{
        return this.http.get(`${this.adminapiUrl}`);
      }
      
      //Post data
      createUser(data:any):Observable<any>{
        console.log(data, 'Data Created');
        return this.http.post(`${this.adminapiUrl}`, data);
        
      }
      
      
      //update Data
      updateUser(data:any, id:any):Observable<any>{
        let ids =id;
        return this.http.put(`${this.adminapiUrl}/${ids}`, data);
      }
      
      //Delete Data
      
      deleteUser(id:any):Observable<any>{
        let ids =id;
        return this.http.delete(`${this.adminapiUrl}/${ids}`);
      }
      
      getSingleData(id:any):Observable<any>{
        let ids =id;
        return this.http.get(`${this.adminapiUrl}/${ids}`);
      
      }
      
 }
      


 @Injectable({
    providedIn: 'root'
  })
export class ApiService {
    adminapiUrl="http://localhost:3000/users"
      constructor(private _http: HttpClient) { }
    
    //Get all data
    getAllUser():Observable<any>{
      return this._http.get(`${this.adminapiUrl}`);
    }
    
    //Post data
    createUser(data:any):Observable<any>{
      console.log(data, 'Data Created');
      return this._http.post(`${this.adminapiUrl}`, data);
      
    }
    
    
    //update Data
    updateUser(data:any, id:any):Observable<any>{
      let ids =id;
      return this._http.put(`${this.adminapiUrl}/${ids}`, data);
    }
    
    //Delete Data
    
    deleteUser(id:any):Observable<any>{
      let ids =id;
      return this._http.delete(`${this.adminapiUrl}/${ids}`);
    }
    
    getSingleData(id:any):Observable<any>{
      let ids =id;
      return this._http.get(`${this.adminapiUrl}/${ids}`);
    
    }
    
    }
    