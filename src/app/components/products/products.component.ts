import { Component, OnInit } from '@angular/core';
import { filter, of } from 'rxjs';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';
import { Products } from 'src/products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements  OnInit  {
  searchkey ="";
  public productList:Products[]=[];
  public categoryList:any;
  constructor(private api:ApiService ,private cartservice : CartService ) {
  }

  ngOnInit(): void {
    
    this.api.grtproduct().subscribe(res=>{
      this.productList=res;
      this.categoryList=res;
      console.log(this.productList)
      
      this.productList.forEach((product:Products) => {
       
        if(product.category === "women's clothing" || product.category ==="men's clothing"){
          product.category = "fashion"
        }
        Object.assign(product,{quantity:1 ,total :product.price});
        
      });
    });

    this.cartservice.search.subscribe((val:any)=>{
      this.searchkey=val;
    });
    
  }

  addtocart(item :any){
    this.cartservice.addtocart(item);

  }

  filter(category :string){
    
    this.categoryList = this.productList.filter((ab:any)=>{
         if(ab.category == category || category ==''){
           console.log(ab)
           return ab;
          
         }
       
       })
  }
  

}
    
  // //  this.categoryList = this.productList.filter((ab:any)=>{
  // //    if(ab.category == category || category ==''){
  // //      return ab;
      
  //    }
   
  //  })
   
  // }

 


