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
      },
      {
        title: "Journal 4",
        from_date: "2023-12-09 05:00:00+00",
        to_date: "2023-12-10 03:00:00+00",
        note: "test text 4",
        category: "test4",
        pet_id: 1
      },
      {
        title: "Journal 5",
        from_date: "2023-01-02 05:00:00+00",
        to_date: "2023-01-03 03:00:00+00",
        note: "test text 5",
        category: "test5",
        pet_id: 3
      },
      {
        title: "Journal 6",
        from_date: "2023-12-20 05:00:00+00",
        to_date: "2023-12-20 03:00:00+00",
        note: "test text 6",
        category: "test6",
        pet_id: 1
      }
    ]
  )
else
  puts "journals table is already available"
end
