from flask import Blueprint
from flask_restful import(
    Api,
    Resource,
    fields,
    marshal_with,
    reqparse
)
from flask_restful.utils import cors

from product.models import Product

product_bp = Blueprint('product', __name__)
product_api = Api(product_bp, decorators=[cors.crossdomain(origin='*')])


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


class BaseProductResource(Resource):
    def product(self, id):
        return Product.objects.get(id=id)

    @property
    def field_values(self):
        args = self.parser.parse_args()
        return dict(
            code=args.code,
            name=args.name,
            price=args.price,
            packing=args.packing,
            description=args.description
        )

    @property
    def parser(self):
        parser = reqparse.RequestParser()
        parser.add_argument('code')
        parser.add_argument('name')
        parser.add_argument('price')
        parser.add_argument('packing')
        parser.add_argument('description')
        return parser


class ProductListResource(BaseProductResource):
    '''Gives a list of all products, and allows user to POST new product'''

    @marshal_with(product_list_fields)
    def get(self):
        products = Product.objects.all()
        # return jsonify(products)
        return {'products': products}

    @marshal_with(product_fields)
    def post(self):
        product = Product.objects.create(**self.field_values)
        return product


class ProductResource(BaseProductResource):
    '''Gives a single product and allows user to
    delete/update product instance
    '''
    @marshal_with(product_fields)
    def get(self, id):
        return self.product(id)

    @marshal_with(product_fields)
    def put(self, id):
        return self.product(id).update(**self.field_values)

    def delete(self, id):
        self.product(id).delete()
        return {'result': True}


product_api.add_resource(ProductListResource, '/products')
product_api.add_resource(ProductResource, '/products/<id>')
