'use strict';

portfolio.controller('AboutController', [ 'ResourceFactory', function(ResourceFactory) {
	var self = this;
  self.resourceFactory = ResourceFactory;


    self.resourceFactory.query('about/intro')
      .then(function(response) {
        self.intro = response.data;
      });

    self.resourceFactory.query('about/skills')
      .then(function(response) {
        self.skills = response.data;
      });

    self.resourceFactory.query("about/education")
      .then(function(response) {
        self.education = response.data;
      });

    self.resourceFactory.query("about/employment")
      .then(function(response) {
        self.employment = response.data;
      });
}]);

