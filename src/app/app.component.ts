import { Component, OnInit } from '@angular/core';
import { ShoppingCartItemModel } from './models/shopping-cart-item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {

    var data = localStorage.getItem('cart');
    if (data) {
      this.items = JSON.parse(data);
    }else{
       this.initCart();
    }
    this.refreshCart();
  }
  title = 'angular-p1';

  items : ShoppingCartItemModel[] = [];
   

  totalPrice: number =0;

  onCountUpdatedEvent($event: ShoppingCartItemModel){
    console.log($event);
    const index = this.items.findIndex(item => item.id === $event.id);
    this.items[index] = $event;
    
    
  }

  refreshCart(){
    let sumPrice :number = 0;
    this.items.forEach (item => {
      const price : number = item.price ?? 0;
      sumPrice += (price * (item.count ?? 0));
    });
    this.totalPrice = sumPrice;


    localStorage.setItem('cart' , JSON.stringify(this.items));

  }

   initCart(){
    this.items =  [
      {id:1 , name:"Iphone13" , desc:"Best Mobile ever" , image:"https://picsum.photos/200/300?random=1" , count:1 , price : 999},
      {id:2 , name:"Sumsung" , desc:"Best Mobile ever" , image:"https://picsum.photos/200/300?random=2", count:2, price : 1210},
      {id:3 , name:"LG" , desc:"Best Mobile ever" , image:"https://picsum.photos/200/300?random=3", count:3, price : 777},
      {id:4 , name:"Nokia" , desc:"Best Mobile ever" , image:"https://picsum.photos/200/300?random=4", count:4, price : 1100}
    ];
    this.refreshCart()
  }

  

  onDeleteEvent($cartItemId : number){
    console.log("onDeleteEvent" + $cartItemId);
    this.items.splice(this.items.findIndex(item => item.id === $cartItemId),1);
    
  }

  onRefreshEvent(){
    console.log("onRefreshEvent");
    this.refreshCart();
  }
}
