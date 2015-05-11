class DecksController < ApplicationController
  def index
    @deck = Deck.first || Deck.new
    @deck.card_collection
    respond_to do |format|
      format.json
    end
  end
end
