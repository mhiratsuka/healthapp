tables = %w(
  users
  sexes
  pets
  pet_sexes
)

tables.each do |table|
  load %(./db/seeds/development/#{table}.rb)
end
