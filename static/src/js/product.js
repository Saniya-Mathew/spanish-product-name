import { registry } from "@web/core/registry";
import { Orderline } from "@point_of_sale/app/generic_components/orderline/orderline";
import { patch } from "@web/core/utils/patch";
import { usePos } from "@point_of_sale/app/store/pos_hook";


patch(Orderline.prototype, {
    setup() {
        super.setup();
        this.pos = usePos();
    },
    get spanishName() {
        console.log("hello san")
        const orderedLine = this.props.line;
        const currentOrder = this.pos.get_order()
        const realOrderLine = currentOrder.get_orderlines().find(
                (product) => product.get_product().display_name === orderedLine.productName);
        const product = realOrderLine.get_product();
        console.log(product.spanish_translation)
        return product.spanish_translation
    },
});








