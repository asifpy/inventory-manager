from flask import Flask

from flask.ext.mongoengine import MongoEngine

# flask mongoengine
db = MongoEngine()


# application factory, see: http://flask.pocoo.org/docs/patterns/appfactories/
def create_app(config_filename):
    app = Flask(__name__)
    app.config.from_object(config_filename)

    # flask mongoengine init
    db.init_app(app)

    # import blueprints
    from product.resources import product_bp

    # register blueprints
    app.register_blueprint(product_bp)
    return app

# if __name__ == '__main__':
#     app.run()
