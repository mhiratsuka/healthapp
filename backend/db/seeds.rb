tables = %w(
  users
  sexes
  pets
  journals
  petsexes
)

tables.each do |table|
  load %(./db/seeds/development/#{table}.rb)
end
