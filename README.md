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

Since we're using generators and other features of ECMAScript 6, you'll have to upgrade your node to 0.11.*:

```
$ npm install n -g
$ n 0.11.14
```

You'll need MongoDB (install guide [here](http://docs.mongodb.org/manual/tutorial/install-mongodb-on-os-x/)).

Finally, in your command line:
```
$ git clone git@github.com:lambtron/twapchat.git
$ cd twapchat
```

Start mongod by going into another terminal window and entering:
```
$ mongod
```

Start the local server while in the root directory by entering:
```
$ make
```

You should see this:
```
listening on port 3000
```
