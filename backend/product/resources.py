from flask import Blueprint
import flask_restful

from product.models import Product

product_bp = Blueprint('product', __name__)
product_api = flask_restful.Api(product_bp)


class Products(flask_restful.Resource):
    def get(self):
        products = Product.objects.all()
        return {'products': products}


product_api.add_resource(Products, '/products')
