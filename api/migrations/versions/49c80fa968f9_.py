"""empty message

Revision ID: 49c80fa968f9
Revises: 2010f7e315a3
Create Date: 2021-05-18 09:38:11.113888

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '49c80fa968f9'
down_revision = '2010f7e315a3'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('users',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('username', sa.String(length=80), nullable=False),
    sa.Column('password', sa.String(length=1000), nullable=False),
    sa.Column('email', sa.String(length=120), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('holidays',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('title', sa.String(length=80), nullable=False),
    sa.Column('creator', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['creator'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('holiday_members',
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('holiday_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['holiday_id'], ['holidays.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('user_id', 'holiday_id')
    )
    op.create_table('markers',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('title', sa.String(length=120), nullable=False),
    sa.Column('desc', sa.String(length=500), nullable=False),
    sa.Column('position_lat', sa.Float(), nullable=False),
    sa.Column('position_long', sa.Float(), nullable=False),
    sa.Column('holiday_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['holiday_id'], ['holidays.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('markers')
    op.drop_table('holiday_members')
    op.drop_table('holidays')
    op.drop_table('users')
    # ### end Alembic commands ###