# initial data for sex of pets
if PetSex.count == 0
  PetSex.create!(
    [
      {
        sex_id: 1,
        pet_id: 1,
      },
      {
        sex_id: 4,
        pet_id: 2,
      }
    ]
  )
else
  puts "pet_sexes table is already available"
end
