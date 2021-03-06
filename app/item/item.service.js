"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ItemService = /** @class */ (function () {
    function ItemService() {
        this.items = new Array({ id: 1, name: "List 1", subitems: [{ id: 1, name: "Item 1", selected: false }, { id: 2, name: "Item 2", selected: false }] }, { id: 2, name: "List 2", subitems: [{ id: 1, name: "Item 3", selected: false }, { id: 2, name: "Item 4", selected: false }] });
    }
    ItemService.prototype.getItems = function () {
        return this.items;
    };
    ItemService.prototype.getItem = function (id) {
        return this.items.filter(function (item) { return item.id === id; })[0];
    };
    ItemService.prototype.Add = function (id, newItem) {
        var item = this.getItem(id);
        var index = item.subitems.length - 1;
        if (index < 0)
            index == 0;
        item.subitems.push({
            id: index,
            name: newItem,
            selected: false
        });
    };
    ItemService = __decorate([
        core_1.Injectable()
    ], ItemService);
    return ItemService;
}());
exports.ItemService = ItemService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBSzNDO0lBREE7UUFFWSxVQUFLLEdBQUcsSUFBSSxLQUFLLENBQ3JCLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxDQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFDLENBQUUsRUFBQyxFQUM1SCxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsQ0FBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBQyxDQUFFLEVBQUMsQ0FFL0gsQ0FBQztJQWdDTixDQUFDO0lBOUJHLDhCQUFRLEdBQVI7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztJQUN0QixDQUFDO0lBRUQsNkJBQU8sR0FBUCxVQUFRLEVBQVU7UUFDZCxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBZCxDQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUV4RCxDQUFDO0lBR0QseUJBQUcsR0FBSCxVQUFJLEVBQVUsRUFBRSxPQUFnQjtRQUU1QixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBRTVCLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFDLENBQUMsQ0FBQztRQUVuQyxFQUFFLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1lBQ1YsS0FBSyxJQUFJLENBQUMsQ0FBQztRQUVmLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNkO1lBQ0ksRUFBRSxFQUFDLEtBQUs7WUFDUixJQUFJLEVBQUUsT0FBTztZQUNiLFFBQVEsRUFBRSxLQUFLO1NBQ2xCLENBQ0osQ0FBQztJQUlOLENBQUM7SUFwQ1EsV0FBVztRQUR2QixpQkFBVSxFQUFFO09BQ0EsV0FBVyxDQXFDdkI7SUFBRCxrQkFBQztDQUFBLEFBckNELElBcUNDO0FBckNZLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCB7IEl0ZW0gfSBmcm9tIFwiLi9pdGVtXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBJdGVtU2VydmljZSB7XG4gICAgcHJpdmF0ZSBpdGVtcyA9IG5ldyBBcnJheTxJdGVtPihcbiAgICAgICAgeyBpZDogMSwgbmFtZTogXCJMaXN0IDFcIiwgc3ViaXRlbXM6IFsgeyBpZDogMSwgbmFtZTogXCJJdGVtIDFcIiwgc2VsZWN0ZWQ6IGZhbHNlfSwgeyBpZDogMiwgbmFtZTogXCJJdGVtIDJcIiwgc2VsZWN0ZWQ6IGZhbHNlfSBdfSxcbiAgICAgICAgeyBpZDogMiwgbmFtZTogXCJMaXN0IDJcIiwgc3ViaXRlbXM6IFsgeyBpZDogMSwgbmFtZTogXCJJdGVtIDNcIiwgc2VsZWN0ZWQ6IGZhbHNlfSwgeyBpZDogMiwgbmFtZTogXCJJdGVtIDRcIiwgc2VsZWN0ZWQ6IGZhbHNlfSBdfSxcbiAgICAgICAgXG4gICAgKTtcblxuICAgIGdldEl0ZW1zKCk6IEl0ZW1bXSB7XG4gICAgICAgIHJldHVybiB0aGlzLml0ZW1zO1xuICAgIH1cblxuICAgIGdldEl0ZW0oaWQ6IG51bWJlcik6IEl0ZW0ge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtcy5maWx0ZXIoaXRlbSA9PiBpdGVtLmlkID09PSBpZClbMF07XG5cbiAgICB9XG5cblxuICAgIEFkZChpZDogbnVtYmVyLCBuZXdJdGVtIDogc3RyaW5nKVxuICAgIHtcbiAgICAgICAgdmFyIGl0ZW0gPSB0aGlzLmdldEl0ZW0oaWQpO1xuXG4gICAgICAgIHZhciBpbmRleCA9IGl0ZW0uc3ViaXRlbXMubGVuZ3RoLTE7XG5cbiAgICAgICAgaWYgKGluZGV4IDwgMClcbiAgICAgICAgICAgIGluZGV4ID09IDA7XG5cbiAgICAgICAgaXRlbS5zdWJpdGVtcy5wdXNoKFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlkOmluZGV4LFxuICAgICAgICAgICAgICAgIG5hbWU6IG5ld0l0ZW0sXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWQ6IGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIFxuXG5cbiAgICB9XG59XG4iXX0=