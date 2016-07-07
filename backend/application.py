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
    # from accounts.views import accounts_app

    # register blueprints
    # app.register_blueprint(accounts_app)
    return app

app = create_app('settings')

if __name__ == '__main__':
    app.run()
