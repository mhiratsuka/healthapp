# initial data for sex of pets
if Sex.count == 0
  Sex.create!(
    [
      {
        name: "male",
      },
      {
        name: "female",
      },
      {
        name: "neutered male",
      },
      {
        name: "spayed female",
      }
    ]
  )
else
  puts "sexes table is already available"
end
