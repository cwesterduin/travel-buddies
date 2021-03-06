"""empty message

Revision ID: aafaf9e60725
Revises: 8ad3abe1ec11
Create Date: 2021-05-17 06:43:26.626364

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'aafaf9e60725'
down_revision = '8ad3abe1ec11'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('holidays', sa.Column('creator', sa.Integer(), nullable=False))
    op.create_foreign_key(None, 'holidays', 'users', ['creator'], ['id'])
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint(None, 'holidays', type_='foreignkey')
    op.drop_column('holidays', 'creator')
    # ### end Alembic commands ###
