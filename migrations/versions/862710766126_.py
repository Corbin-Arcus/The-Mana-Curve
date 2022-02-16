"""empty message

Revision ID: 862710766126
Revises: 0fb4fa983d60
Create Date: 2022-01-26 19:17:08.739171

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '862710766126'
down_revision = '0fb4fa983d60'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_unique_constraint(None, 'cards', ['card_name'])
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint(None, 'cards', type_='unique')
    # ### end Alembic commands ###