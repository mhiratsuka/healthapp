# initial data for users
if User.count == 0
  User.create!(
    [
      {
        name: "Bob",
        email: "bob@healthapp.com",
        password: "password"
      },
      {
        name: "Mary",
        email: "mary@healthapp.com",
        password: "password"
      }
    ]
  )
else
  puts "users table is already available"
end