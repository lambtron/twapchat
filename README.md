Twapchat
========

Send snapchats to twitter. First X people get can view the snap before it self destructs.

## How to use

- text a picture to a (240) 565-0664
- @twapchat tweets the picture
- picture only gets 10 views before it self destructs

## How does it work

- Twilio receives picture and sends a POST request to a specified endpoint with picture data
- picture is saved to MongoDB
- URL is generated and hosted on server
- @twapchat tweets the URL
- URL listens for views; if 10 views then delete in Mongo, destroy URL, remove tweet

## Running locally

- TODO

## Deploying to Heroku

- TODO

## TODO

- setup koa server
- setup endpoint for twilio to post MMS
- save MMS to mongo
- host picture
- 
