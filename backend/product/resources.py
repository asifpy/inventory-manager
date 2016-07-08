from flask import Blueprint
from flask_restful import(
    Api,
    Resource,
    fields,
    marshal_with,
    reqparse
)

from product.models import Product

product_bp = Blueprint('product', __name__)
product_api = Api(product_bp)

product_fields = {
    'id': fields.String,
    'code': fields.String,
    'name': fields.String,
    'price': fields.Float,
    'packing': fields.String,
    'description': fields.String,
    'created_at': fields.DateTime(dt_format='rfc822'),
    'updated_at': fields.DateTime(dt_format='rfc822'),
}

product_list_fields = {
    'products': fields.List(fields.Nested(product_fields))
}


parser = reqparse.RequestParser()
parser.add_argument('code')
parser.add_argument('name')
parser.add_argument('price')
parser.add_argument('packing')
parser.add_argument('description')


class ProductListResource(Resource):
    @marshal_with(product_list_fields)
    def get(self):
        products = Product.objects.all()
        # return jsonify(products)
        return {'products': products}


class ProductDetailResource(Resource):
    @marshal_with(product_fields)
    def get(self, id):
        product = Product.objects.get(id=id)
        return product


class ProductCreateResource(Resource):
    @marshal_with(product_fields)
    def post(self):
        args = parser.parse_args()
        Product.objects.create(
            code=args.code,
            name=args.name,
            price=args.price,
            packing=args.packing,
            description=args.description
        )


product_api.add_resource(ProductListResource, '/products')
product_api.add_resource(ProductCreateResource, '/products/create')
product_api.add_resource(ProductDetailResource, '/products/<id>')


