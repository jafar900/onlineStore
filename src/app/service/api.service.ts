import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import{map} from 'rxjs/operators';
import { Products } from 'src/products';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  serachText : any;

  constructor(private http :HttpClient) { }
  
  grtproduct(){
    return this.http.get<Products[]>("https://fakestoreapi.com/products")
    .pipe(map((res:Products[])=>{
      // console.log(res)
      return res;

    }))
  }

}
