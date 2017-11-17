# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Book.create([{name: "A hitchhiker's guide to the galaxy", author: "Douglas Adams", available: false},
             {name: "Does robots dream of electric sheeps", author: "Philip K. Dick", available: "true"},
             {name: "Siddhartha", author: "Herman Hesse", available: false},
             {name: "Ready Player One!", author: "Ernest Cline", available:true},
             {name: "Ready Player Two!", author: "Ernest Cline Two", available:true},
             {name: "Ready Player Three!", author: "Ernest Cline Three", available:true}])

User.create([{name: "Juan", email: "juan.dw.ft@gmail.com"},
            {name: "Pedro", email: "pedro@asd.com"},
            {name: "Siddhartha", email: "siddhartha@asd.com"},
            {name: "Mike", email: "mike@asd.com"},
            {name: "Aldo", email: "aldo@asd.com"},
              {name: "Isaac", email: "isaac@asd.com"}])

Category.create([{name: "Nihilism", description: "Lorem ipsum dolor sit amet"},
            {name: "Fiction", description: "Lorem ipsum dolor sit amet"},
            {name: "Romance", description: "Lorem ipsum dolor sit amet"},
            {name: "Drama", description: "Lorem ipsum dolor sit amet"},
            {name: "Thriller", description: "Lorem ipsum dolor sit amet"},
              {name: "Sci-Fi", description: "Lorem ipsum dolor sit amet"}])
