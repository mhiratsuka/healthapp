tables = %w(
  users
  sexes
  pets
  journals
)

tables.each do |table|
  load %(./db/seeds/development/#{table}.rb)
end
