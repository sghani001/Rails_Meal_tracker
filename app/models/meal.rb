class Meal < ApplicationRecord
  validates :meal, presence: true, length: { in: 3..15 }
  validates :date, presence: true
end
