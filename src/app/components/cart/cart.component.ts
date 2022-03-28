import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public products :any =[];
  public grandTotal : number =0;

  constructor(private cartservice : CartService) { }

  ngOnInit(): void {

    this.cartservice.getproduct().subscribe(res=>{
      this.products=res;
      this.grandTotal=this.cartservice.gettotalprice();
    })

    }
    removeItem(item:any){
      this.cartservice.removeCartitem(item);
    }

    
    deleteall(){
      this.cartservice.removeAllCart();
    }
  }


