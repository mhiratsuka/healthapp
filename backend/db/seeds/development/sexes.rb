# initial data for sex of pets
if Sex.count == 0
  Sex.create!(
    [
      {
        name: "male",
        code: 0,
      },
      {
        name: "female",
        code: 1,
      },
      {
        name: "neutered male",
        code: 2,
      },
      {
        name: "spayed female",
        code: 3,
      }
    ]
  )
else
  puts "sexes table is already available"
end
