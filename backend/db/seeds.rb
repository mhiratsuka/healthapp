tables = %w(
  users
  sexes
  pets
)

tables.each do |table|
  load %(./db/seeds/development/#{table}.rb)
end
