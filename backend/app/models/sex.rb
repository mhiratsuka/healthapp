class Sex < ApplicationRecord
  has_many :pet_sexes,
    dependent: :destroy,
    foreign_key: 'sex_id'
  has_many :pets,
    through: :pet_sexes
end
