class Pet < ApplicationRecord
  has_one :pet_sex,
    dependent: :destroy
  has_one :sex,
    through: :pet_sex
  belongs_to :user
end
