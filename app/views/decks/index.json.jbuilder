json.deck do
  json.id @deck.id
  json.card_count @deck.cards.count
  json.cards @deck.cards.each do |card|
    json.id card.id
    json.suit card.suit
    json.value card.value
    json.deck_id card.deck_id
  end
end
