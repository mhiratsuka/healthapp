# initial data for gender of pets
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

puts "genders = #{Gender.count}"