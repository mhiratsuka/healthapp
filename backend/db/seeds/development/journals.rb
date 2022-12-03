# initial data for pets
if Journal.count == 0
  Journal.create!(
    [
      {
        title: "Journal 1",
        from_date: "2022-12-03 03:00:00+00",
        to_date: "2022-12-03 06:00:00+00",
        note: "test text 2",
        category: "test1",
        pet_id: 1
      },
      {
        title: "Journal 2",
        from_date: "2022-12-04 03:00:00+00",
        to_date: "2022-12-04 03:00:00+00",
        note: "test text 2",
        category: "test2",
        pet_id: 2
      },
      {
        title: "Journal 3",
        from_date: "2022-12-03 05:00:00+00",
        to_date: "2022-12-10 03:00:00+00",
        note: "test text 3",
        category: "test1",
        pet_id: 1
      }
    ]
  )
else
  puts "journals table is already available"
end