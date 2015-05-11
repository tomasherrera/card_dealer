class Deck < ActiveRecord::Base
  has_many :cards

  def card_collection
    all_cards = [{value: 'joker', suit: ''}, {value: 'joker', suit: ''}], suits = %w(hearts diamonds clubs spades), values = %w(ace two three four five six seven eight nine ten jack queen king)
    save! unless persisted?
    return unless cards.blank?
    suits.each do |suit|
      values.each do |value|
        @card = cards.create(suit: suit, value: value)
      end
    end
  end
end
