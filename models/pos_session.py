from odoo import models

class PosSessionCustom(models.Model):
        _inherit = 'pos.session'


def _loader_params_pos_session(self):
    result = super()._loader_params_pos_session()

    result['search_params']['fields'].extend(['spanish_translation'])

    return result
