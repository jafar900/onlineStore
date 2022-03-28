import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public searchTerm :string='';
  public totalItem : number= 0;
  constructor(private cartservic :CartService) { }

  ngOnInit(): void {

    this.cartservic.getproduct().subscribe(res=>{
      this.totalItem =res.length;

    })

  }
search(event:any){
this.searchTerm =(event.target as HTMLInputElement).value;
console.log(this.searchTerm)
this.cartservic.search.next(this.searchTerm);
}
}