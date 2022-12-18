import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ShoppingCartItemModel } from '../models/shopping-cart-item.model';

@Component({
  selector: 'app-shopping-cart-item',
  templateUrl: './shopping-cart-item.component.html',
  styleUrls: ['./shopping-cart-item.component.scss']
})
export class ShoppingCartItemComponent {

  @Input() item?: ShoppingCartItemModel = {};
  @Output() onDelete: EventEmitter<number> = new EventEmitter<number>();
  @Output() onCountUpdated: EventEmitter<ShoppingCartItemModel> = new EventEmitter<ShoppingCartItemModel>();
  @Output() onRefrech = new EventEmitter();


  constructor(){}

  ngOnInit(){}

  add(){
    const currentCount: number = this.item?.count ?? 0;
    if(this.item != null){
      this.item.count = currentCount + 1;
    }
    this.onCountUpdated.emit(this.item);

    console.log("add");
    
    this.onRefrech.emit();
    
  }
  sub(){
    const currentCount: number = this.item?.count ?? 0;
    if(this.item != null){
      this.item.count = currentCount > 0 ? currentCount - 1 : 0;
    }
    this.onCountUpdated.emit(this.item);
    this.onRefrech.emit();
    
  }

  delete(itemId? : number){
    this.onDelete.emit(itemId);
    this.onRefrech.emit();
  }

}
