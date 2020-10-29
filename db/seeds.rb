# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
user = [
  {
    email: "profoak@test.com",
    password: "123456",
    password_confirmation: "123456",
  }
]
user.each do |attribute|
  User.create attribute
end

apartments = [
  {
    street: "221B Baker St",
    city: "Littleroot Town",
    state: "Hoenn",
    manager: "Mr. Duddlie",
    email: "duddliePoodleLover@email.com",
    price: "1500",
    bedrooms: 3,
    bathrooms: 2,
    pets: "yes",
  },
  {
    street: "742 Evergreen Terrace",
    city: "Springfield",
    state: "Unknown",
    manager: "Homer",
    email: "hs@donut.com",
    price: "500",
    bedrooms: 3,
    bathrooms: 2,
    pets: "yes",
  },
  {
    street: "1640 Riverside Drive",
    city: "Hill Valley",
    state: "California",
    manager: "Emmet Brown",
    email: "julesfan@2015.com",
    price: "2000",
    bedrooms: 6,
    bathrooms: 4,
    pets: "yes",
  }
]

test_user = User.first

apartments.each do |attribute|
  test_user.apartments.create attribute
  puts apartment: "#{attribute}"
end
