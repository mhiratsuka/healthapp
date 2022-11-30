class User < ApplicationRecord
  has_many :pet
  accepts_nested_attributes_for :pet
end
