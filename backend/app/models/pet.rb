class Pet < ApplicationRecord
  belongs_to :user
  has_many :journal,
    dependent: :destroy
  has_one :pet_sex,
    dependent: :destroy
  has_one :sex,
    through: :pet_sex
end
