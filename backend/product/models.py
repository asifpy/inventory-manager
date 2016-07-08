import datetime
from application import db


class Product(db.Document):
    code = db.StringField(max_length=60)
    name = db.StringField(max_length=60)
    price = db.FloatField()
    packing = db.StringField(max_length=60)
    description = db.StringField()
    created_at = db.DateTimeField(
        verbose_name=u'Created At',
        required=True
    )
    updated_at = db.DateTimeField(
        verbose_name=u'Updated At',
        required=True
    )

    def save(self, *args, **kwargs):
        if not self.created_at:
            self.created_at = datetime.datetime.now()
        self.updated_at = datetime.datetime.now()
        return super(Product, self).save(*args, **kwargs)
