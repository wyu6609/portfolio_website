# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
puts 'seeding user'
User.create(
  first_name: 'john',
  last_name: 'smith',
  username: 'admin',
  password_digest: BCrypt::Password.create('admin'),
)
puts 'done seeding'
