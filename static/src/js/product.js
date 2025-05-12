import { registry } from "@web/core/registry";
import { Orderline } from "@point_of_sale/app/generic_components/orderline/orderline";
import { patch } from "@web/core/utils/patch";
import { usePos } from "@point_of_sale/app/store/pos_hook";
import { ProductCard } from "@point_of_sale/app/generic_components/product_card/product_card";


patch(Orderline.prototype, {
    setup() {
        super.setup?.();
        this.pos = usePos();
    },
    get spanishName() {
        console.log("hiii san")
        const renderedLine = this.props.line;
        console.log(renderedLine)
        const currentOrder = this.pos.get_order()
        const realOrderLine = currentOrder.get_orderlines().find(
                (product) => product.get_product().display_name === renderedLine.productName);
        const product = realOrderLine.get_product();
        console.log(product.spanish_translation)
        console.log(product)
        return product.spanish_translation
    },
});

patch(ProductCard.prototype, {
    get SpanishTranslation() {
        console.log("welcome")
        return this.props.product.spanish_translation || "";
    }
});

//odoo.define('spanish_product_name.product.product', function (require) {
//        'use strict';
//        console.log("hiii")
//        const models = require('point_of_sale.models');
//        models.load_fields('', 'nick_name');
//    });




