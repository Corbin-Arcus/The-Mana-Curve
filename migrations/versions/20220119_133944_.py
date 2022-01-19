"""empty message

Revision ID: a9b977a262e4
Revises: ffdc0a98111c
Create Date: 2022-01-19 13:39:44.563257

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'a9b977a262e4'
down_revision = 'ffdc0a98111c'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('cards',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('card_name', sa.String(length=100), nullable=False),
    sa.Column('card_image', sa.String(length=255), nullable=False),
    sa.Column('mana_cost', sa.String(length=100), nullable=False),
    sa.Column('cmc', sa.Integer(), nullable=False),
    sa.Column('type_line', sa.String(length=100), nullable=False),
    sa.Column('oracle_text', sa.String(length=100), nullable=False),
    sa.Column('power', sa.Integer(), nullable=True),
    sa.Column('toughness', sa.Integer(), nullable=True),
    sa.Column('colors', sa.String(length=100), nullable=False),
    sa.Column('color_identity', sa.String(length=100), nullable=False),
    sa.Column('legalities', sa.String(length=256), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('card_name'),
    sa.UniqueConstraint('mana_cost'),
    sa.UniqueConstraint('oracle_text')
    )
    op.create_table('decks',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('deck_name', sa.String(length=100), nullable=False),
    sa.Column('deck_format', sa.String(length=100), nullable=False),
    sa.Column('created_at', sa.DateTime(timezone=True), nullable=True),
    sa.Column('updated_at', sa.DateTime(timezone=True), nullable=True),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('deck_format'),
    sa.UniqueConstraint('deck_name')
    )
    op.create_table('deck_cards',
    sa.Column('card_id', sa.Integer(), nullable=False),
    sa.Column('deck_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['card_id'], ['cards.id'], ),
    sa.ForeignKeyConstraint(['deck_id'], ['decks.id'], ),
    sa.PrimaryKeyConstraint('card_id', 'deck_id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('deck_cards')
    op.drop_table('decks')
    op.drop_table('cards')
    # ### end Alembic commands ###
