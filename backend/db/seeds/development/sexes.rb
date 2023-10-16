# initial data for sex of pets
if Sex.count == 0
  Sex.create!(
    [
      {
        name: "male",
        code: "1",
        alias: "males"
      },
      {
        name: "female",
        code: "2",
        alias: "females"
      },
      {
        name: "neutered male",
        code: "3",
        alias: "neutered"
      },
      {
        name: "spayed female",
        code: "4",
        alias: "spayed"
      }
    ]
  )
else
  puts "sexes table is already available"
end
