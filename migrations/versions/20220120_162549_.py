"""empty message

Revision ID: 20cf5f97257f
Revises: 5ea55d8f5494
Create Date: 2022-01-20 16:25:49.740855

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '20cf5f97257f'
down_revision = '5ea55d8f5494'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('cards', 'cmc',
               existing_type=sa.INTEGER(),
               nullable=True)
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('cards', 'cmc',
               existing_type=sa.INTEGER(),
               nullable=False)
    # ### end Alembic commands ###