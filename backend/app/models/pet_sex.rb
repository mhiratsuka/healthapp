class PetSex < ApplicationRecord
  belongs_to :pet
  belongs_to :sex
  validates :pet_id,
    presence: true
  validates :sex_id,
    presence: true
end
