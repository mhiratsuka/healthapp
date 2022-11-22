Dir[File.expand_path('./db/seeds/development' << '/*.rb')].each do |file|
  require file
end
# table_names = %w(
#   sexes
# )

# table_names.each do |table_name|
#   path = Rails.root.join("db/seeds/#{Rails.env}/#{table_name}.rb")

#   path = path.sub(Rails.env, "development") unless File.exist?(path)

#   puts "#{table_name}..."
#   require path
# end