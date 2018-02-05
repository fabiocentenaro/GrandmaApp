"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var item_service_1 = require("./item.service");
var ItemDetailComponent = /** @class */ (function () {
    function ItemDetailComponent(itemService, route) {
        this.itemService = itemService;
        this.route = route;
    }
    ItemDetailComponent.prototype.ngOnInit = function () {
        this.id = +this.route.snapshot.params["id"];
        this.item = this.itemService.getItem(this.id);
        this.isEditMode = false;
        this.addedItem = "";
    };
    ItemDetailComponent.prototype.toggleClick = function (subitem) {
        subitem.selected = !subitem.selected;
    };
    ItemDetailComponent.prototype.imageSource = function (subitem) {
        return !subitem.selected ? "res://ic_nonselected" : "res://selected";
    };
    ItemDetailComponent.prototype.onAdd = function () {
        this.isEditMode = !this.isEditMode;
    };
    ItemDetailComponent.prototype.onAdded = function () {
        this.itemService.Add(this.id, this.addedItem);
        this.addedItem = "";
        this.isEditMode = false;
    };
    ItemDetailComponent = __decorate([
        core_1.Component({
            selector: "ns-details",
            moduleId: module.id,
            templateUrl: "./item-detail.component.html",
            styleUrls: ["../app.css"]
        }),
        __metadata("design:paramtypes", [item_service_1.ItemService,
            router_1.ActivatedRoute])
    ], ItemDetailComponent);
    return ItemDetailComponent;
}());
exports.ItemDetailComponent = ItemDetailComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS1kZXRhaWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbS1kZXRhaWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELDBDQUFpRDtBQUdqRCwrQ0FBNkM7QUFTN0M7SUFRSSw2QkFDWSxXQUF3QixFQUN4QixLQUFxQjtRQURyQixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixVQUFLLEdBQUwsS0FBSyxDQUFnQjtJQUM3QixDQUFDO0lBRUwsc0NBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDeEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUdELHlDQUFXLEdBQVgsVUFBWSxPQUFpQjtRQUV6QixPQUFPLENBQUMsUUFBUSxHQUFHLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQztJQUN6QyxDQUFDO0lBR0QseUNBQVcsR0FBWCxVQUFZLE9BQWlCO1FBQ2pCLE1BQU0sQ0FBRSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFFLHNCQUFzQixDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQztJQUNqRixDQUFDO0lBR0YsbUNBQUssR0FBTDtRQUVLLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3ZDLENBQUM7SUFFRCxxQ0FBTyxHQUFQO1FBR0UsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFFLENBQUM7UUFDL0MsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7UUFFbEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7SUFDNUIsQ0FBQztJQTVDTSxtQkFBbUI7UUFOL0IsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsOEJBQThCO1lBQzNDLFNBQVMsRUFBRSxDQUFDLFlBQVksQ0FBQztTQUM1QixDQUFDO3lDQVUyQiwwQkFBVztZQUNqQix1QkFBYztPQVZ4QixtQkFBbUIsQ0E2Qy9CO0lBQUQsMEJBQUM7Q0FBQSxBQTdDRCxJQTZDQztBQTdDWSxrREFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcblxuaW1wb3J0IHsgSXRlbSwgU3ViaXRlbXMgfSBmcm9tIFwiLi9pdGVtXCI7XG5pbXBvcnQgeyBJdGVtU2VydmljZSB9IGZyb20gXCIuL2l0ZW0uc2VydmljZVwiO1xuaW1wb3J0IHsgRXZlbnREYXRhLCBPYnNlcnZhYmxlIH0gZnJvbSBcImRhdGEvb2JzZXJ2YWJsZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJucy1kZXRhaWxzXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2l0ZW0tZGV0YWlsLmNvbXBvbmVudC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbXCIuLi9hcHAuY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIEl0ZW1EZXRhaWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIGl0ZW06IEl0ZW07XG4gICAgY2xpY2tlZDogYm9vbGVhbjtcbiAgICBpc0VkaXRNb2RlIDogYm9vbGVhbjtcbiAgICBhZGRlZEl0ZW0gOiBzdHJpbmc7XG5cbiAgICBpZDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgaXRlbVNlcnZpY2U6IEl0ZW1TZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVxuICAgICkgeyB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5pZCA9ICt0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtc1tcImlkXCJdO1xuICAgICAgICB0aGlzLml0ZW0gPSB0aGlzLml0ZW1TZXJ2aWNlLmdldEl0ZW0odGhpcy5pZCk7XG4gICAgICAgIHRoaXMuaXNFZGl0TW9kZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmFkZGVkSXRlbSA9IFwiXCI7XG4gICAgfVxuXG5cbiAgICB0b2dnbGVDbGljayhzdWJpdGVtOiBTdWJpdGVtcykgOiB2b2lkXG4gICAge1xuICAgICAgICBzdWJpdGVtLnNlbGVjdGVkID0gIXN1Yml0ZW0uc2VsZWN0ZWQ7ICAgICAgICBcbiAgICB9XG5cblxuICAgIGltYWdlU291cmNlKHN1Yml0ZW06IFN1Yml0ZW1zKSA6IHN0cmluZyB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICAhc3ViaXRlbS5zZWxlY3RlZCA/ICBcInJlczovL2ljX25vbnNlbGVjdGVkXCIgOiBcInJlczovL3NlbGVjdGVkXCI7XG4gICAgICB9XG4gICAgICBcblxuICAgICBvbkFkZCgpXG4gICAgICB7XG4gICAgICAgICAgdGhpcy5pc0VkaXRNb2RlID0gIXRoaXMuaXNFZGl0TW9kZTsgICAgICAgICAgXG4gICAgICB9XG5cbiAgICAgIG9uQWRkZWQoKVxuICAgICAge1xuXG4gICAgICAgIHRoaXMuaXRlbVNlcnZpY2UuQWRkKHRoaXMuaWQsIHRoaXMuYWRkZWRJdGVtICk7ICBcbiAgICAgICAgdGhpcy5hZGRlZEl0ZW0gPSBcIlwiOyAgICAgXG5cbiAgICAgICAgICB0aGlzLmlzRWRpdE1vZGUgPSBmYWxzZTtcbiAgICAgIH1cbn1cblxuIl19