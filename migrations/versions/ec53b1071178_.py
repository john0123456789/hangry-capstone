"""empty message

Revision ID: ec53b1071178
Revises: 2efd6d56a398
Create Date: 2022-08-09 09:14:32.748573

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'ec53b1071178'
down_revision = '2efd6d56a398'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('reviews', sa.Column('business_review', sa.String(length=500), nullable=False))
    op.drop_column('reviews', 'review')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('reviews', sa.Column('review', sa.VARCHAR(length=500), autoincrement=False, nullable=False))
    op.drop_column('reviews', 'business_review')
    # ### end Alembic commands ###
