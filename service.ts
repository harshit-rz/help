import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
api:string='https://activity-loyalty.qa.cnxloyalty.com/activity/v1.0/health';
head = new HttpHeaders({'cnx-userip':'127.0.0.1', 'cnx-tenantId':'2o9o3ae99ts'});
  constructor(private httpclient:HttpClient) { }
  GetAllProducts():Observable<Product[]>
  {
    return this.httpclient.get<Product[]>(this.api+'GetProducts');
  }
  AddProduct(product:Product):Observable<any>
  {
    return this.httpclient.post(this.api+'AddProduct',product);
  }
  DisplayHealth(): Observable<any>{
    return this.httpclient.get(this.api, {headers:this.head});
  }

}


// import { Injectable } from '@angular/core';

// import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

// import { Observable } from 'rxjs';

// import { Product } from './product';



// @Injectable({

//   providedIn: 'root'

// })

 

// export class ProductService {

// api:string='https://activity-loyalty.qa.cnxloyalty.com/activity/v1.0/search/result';

//   constructor(private httpclient:HttpClient) { }

//   GetAllProducts():Observable<Product[]>

//   {

//     return this.httpclient.get<Product[]>(this.api+'GetProducts');

//   }

//   head = new HttpHeaders({'cnx-userip':'127.0.0.1', 'cnx-tenantId':'2o9o3ae99ts'});




 

//   body=

//     {

//       "paging": {

//         "pageNo": 1,

//         "pageSize": 30,

//         "orderBy": "price"

//       },

//       "sessionId": "b5e4c28b-21c7-4829-a28f-f91a2608d6d0-ACNXT$1371",

//       "currency": "USD"

//     }






//   AddProduct(product:Product):Observable<any>

//   {

//     return this.httpclient.post(this.api,this.body,{headers:this.head});

//   }



// }
