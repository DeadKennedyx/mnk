# Library Manager

## Stack: 
Rails 5 API Only and React with Bootstrap

## Setup Development:

1. `git pull https://github.com/DeadKennedyx/mnk.git`
2. `bundle install`
3. `rails db:create db:migrate db:seed` run seeds 3 or 4 times to check pagination
4. `cd client` -> `npm install` -> `cd ..`
5. To boot the server and client theres a Procfile.dev for development and Procfile for Heroku,
   to run development use foreman -> `foreman start -f Procfile.dev`, this will run rails in 3001 and the client in 3000

## Setup Production
1. add node builder `heroku buildpacks:add heroku/nodejs --index 1`
2. add ruby builder `heroku buildpacks:add heroku/ruby --index 2`
3. tell heroku to not ignore devdependencies in package.json `heroku config:set NPM_CONFIG_PRODUCTION=false`
4. push to heroku
5. `heroku run rails db:migrate db:seed`

## Schema
1. Theres 4 Models `Book, Category, User and BookCategory(handles m to m between book and category)`

## MessageSender
2. When a book passes from Unavailable to Available the class 'MessageSenderService' sends an email to a test user

## Mandatory fields
1. Be able to change the status from available to not available
   - this is done automaticly, if you assign a user to a book it automaticly updates to not available, if you unassign that user it automaticly updates to available
2. Be able to know if a user borrowed a book or if it's still available
   - To know if a user borrowed a book you just use a scope I created:
  `@user.has_book?("Lord of the Rings") => #true or false`

## Conditions & Validations
1. Book must have at least one category  
2. User must have a valid email
3. Book, User and Category doesn't accept names/author with numbers

link to already built app in Heroku: https://maniak-react-rails.herokuapp.com/
