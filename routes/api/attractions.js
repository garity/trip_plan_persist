var Promise = require('bluebird');
var router = require('express').Router();
var Hotel = require('../models/hotel');
var Restaurant = require('../models/restaurant');
var Activity = require('../models/activity');

router.get('/api/hotels', function(req, res, next) {
  	Hotel.findAll()
  });

router.get('/api/restaurants', function(req, res, next) {
    Restaurant.findAll()
  });

router.get('/api/activities', function(req, res, next) {
    Activity.findAll()
  });