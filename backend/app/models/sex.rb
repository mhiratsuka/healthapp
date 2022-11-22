class Sex < ApplicationRecord
  has_many :pet_sex,
    dependent: :destroy,
    foreign_key: 'sex_id'
  has_many :pets,
    through: :pet_sex
end
