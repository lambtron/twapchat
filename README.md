Twapchat
========

Send your snapchats to twitter. First X people get to view the snap before it self destructs.

## How to use

- send a snap to twapchat
- twapchat will then tweet the snap
- however many seconds the snap was set to will be the max number of views before tweet gets deleted

## How does it work

- web server will poll every 60 seconds to retrieve new snaps related to twapchat account
- save the snap in Mongo
- generate URL and host it on server
- tweet the URL
- listen for views; if X viewed then delete in Mongo, destroy URL, remove tweet

## Running locally

- TODO

## Deploying to Heroku

- TODO