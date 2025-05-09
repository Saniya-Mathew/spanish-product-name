{
        'name': "Spanish Product Name",
        'version': '1.0',
        'type': 'module',
        'depends': ['base','product',],
        'author': "San",
        'category': 'Category',
        'description': """showing the product name also in spanish language""",

        # data files always loaded at installation
    'data': [
        'views/product_template.xml'
    ],
    'license': 'LGPL-3',
    'installable': True,
    'auto_install': False,
    'application': False,

    'assets': {
        'point_of_sale._assets_pos': [
            'spanish_product_name/static/src/js/product.js',
            'spanish_product_name/static/src/xml/OrderReceipt.xml'
        ],
    },
}