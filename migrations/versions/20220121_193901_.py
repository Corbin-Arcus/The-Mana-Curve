"""empty message

Revision ID: ff1b74a10279
Revises: d2a1d6b896e1
Create Date: 2022-01-21 19:39:01.495306

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'ff1b74a10279'
down_revision = 'd2a1d6b896e1'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint('decks_deck_format_key', 'decks', type_='unique')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_unique_constraint('decks_deck_format_key', 'decks', ['deck_format'])
    # ### end Alembic commands ###
