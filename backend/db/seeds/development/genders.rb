# initial data for gender of pets
if Gender.count == 0
  Gender.create!(
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
  puts "genders table is already available"
end
