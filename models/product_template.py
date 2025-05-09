# -*- coding: utf-8 -*-
from odoo import api,fields,models


class ProductTemplate(models.Model):
    _inherit = 'product.template'

    spanish_translation = fields.Char(string="Spanish Name")

    # @api.model
    # def _load_pos_data_fields(self, config_id):
    #     print("hii")
    #     spanish_name = super()._load_pos_data_fields(config_id)
    #     spanish_name.append('spanish_translation')
    #     return spanish_name
