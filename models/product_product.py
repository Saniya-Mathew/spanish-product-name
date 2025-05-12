# -*- coding: utf-8 -*-
from odoo import fields, models, api


class PosSessionCustom(models.Model):
    _inherit = 'product.product'


    spanish_translation = fields.Char(related='product_tmpl_id.spanish_translation',string="Spanish Name")

    @api.model
    def _load_pos_data_fields(self, config_id):
        spanish_name = super()._load_pos_data_fields(config_id)
        spanish_name += ['spanish_translation']
        return spanish_name
