# initial data for pets
if Pet.count == 0
  Pet.create!(
    [
      {
        name: "Fido",
        kind: "dog",
        birthday: "2020-06-12",
        sex_id: 1,
        user_id: 1,
      },
      {
        name: "Mittens",
        kind: "cat",
        birthday: "2020-02-09",
        sex_id: 4,
        user_id: 2,
      },
      {
        name: "Peter",
        kind: "dog",
        birthday: "2020-06-01",
        sex_id: 3,
        user_id: 1,
      },
    ]
  )
else
  puts "pets table is already available"
end