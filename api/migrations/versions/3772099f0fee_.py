"""empty message

Revision ID: 3772099f0fee
Revises: aafaf9e60725
Create Date: 2021-05-17 07:54:34.986546

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '3772099f0fee'
down_revision = 'aafaf9e60725'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('holiday_members',
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('holiday_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['holiday_id'], ['holidays.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('user_id', 'holiday_id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('holiday_members')
    # ### end Alembic commands ###
