import { Injectable } from "@angular/core";

import { Item } from "./item";

@Injectable()
export class ItemService {
    private items = new Array<Item>(
        { id: 1, name: "List 1", subitems: [ { id: 1, name: "Item 1", selected: false}, { id: 2, name: "Item 2", selected: false} ]},
        { id: 2, name: "List 2", subitems: [ { id: 1, name: "Item 3", selected: false}, { id: 2, name: "Item 4", selected: false} ]},
        
    );

    getItems(): Item[] {
        return this.items;
    }

    getItem(id: number): Item {
        return this.items.filter(item => item.id === id)[0];

    }


    Add(id: number, newItem : string)
    {
        var item = this.getItem(id);

        var index = item.subitems.length-1;

        if (index < 0)
            index == 0;

        item.subitems.push(
            {
                id:index,
                name: newItem,
                selected: false
            }
        );
        


    }
}
