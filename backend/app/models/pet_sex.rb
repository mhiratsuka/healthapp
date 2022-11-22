class PetSex < ApplicationRecord
  # One pet_sex is related to one pet
  belongs_to :pet

  # pet_sex is related to one sex
  belongs_to :sex

  validates :pet_id,
    presence: true

  validates :sex_id,
    presence: true
end
