import { Injectable } from "@angular/core";

import { Item } from "./item";

@Injectable()
export class ItemService {
    private items = new Array<Item>(
        { id: 1, name: "List 1", subitems: [ { id: 1, name: "Item 1"}, { id: 2, name: "Item 2"} ]},
        { id: 2, name: "List 2", subitems: [ { id: 1, name: "Item 3"}, { id: 2, name: "Item 4"} ]},
        
    );

    getItems(): Item[] {
        return this.items;
    }

    getItem(id: number): Item {
        return this.items.filter(item => item.id === id)[0];
    }
}
