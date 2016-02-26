Portfolio
=============

Installation
------------

Navigate to root directory of the project:

```sh
$ bower install 
$ npm install
```
To run locally:

```sh
$ node server.js
```

Testing
-------

To run unit tests:

```sh
$ karma start tests/unit/karma.conf.js
```


To run feature tests: - not finished yet

In one terminal run:
```sh
$ webdriver-manager update
$ webdriver-manager start
```
In another terminal, run:
```sh
$ node server.js
```
In a third terminal run:
```sh
$ protractor tests/e2e/conf.js
```