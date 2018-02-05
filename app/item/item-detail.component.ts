import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { Item, Subitems } from "./item";
import { ItemService } from "./item.service";
import { EventData, Observable } from "data/observable";

@Component({
    selector: "ns-details",
    moduleId: module.id,
    templateUrl: "./item-detail.component.html",
    styleUrls: ["../app.css"]
})
export class ItemDetailComponent implements OnInit {
    item: Item;
    clicked: boolean;
    isEditMode : boolean;
    addedItem : string;

    id: number;

    constructor(
        private itemService: ItemService,
        private route: ActivatedRoute
    ) { }

    ngOnInit(): void {
        this.id = +this.route.snapshot.params["id"];
        this.item = this.itemService.getItem(this.id);
        this.isEditMode = false;
        this.addedItem = "";
    }


    toggleClick(subitem: Subitems) : void
    {
        subitem.selected = !subitem.selected;        
    }


    imageSource(subitem: Subitems) : string {
                return  !subitem.selected ?  "res://ic_nonselected" : "res://selected";
      }
      

     onAdd()
      {
          this.isEditMode = !this.isEditMode;          
      }

      onAdded()
      {

        this.itemService.Add(this.id, this.addedItem );  
        this.addedItem = "";     

          this.isEditMode = false;
      }
}

