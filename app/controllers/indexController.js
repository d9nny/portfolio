'use strict';

portfolio.controller('IndexController', [ 'ResourceFactory', function(ResourceFactory) {
	var self = this;
  self.activeTab = 0;
  self.resourceFactory = ResourceFactory;

    self.resourceFactory.query("contact")
      .then(function(response) {
        self.contact = response.data;
      });
    
    self.resourceFactory.query("portfolio")
      .then(function(response) {
        self.portfolio = response.data;
      });

    self.resourceFactory.query('intro')
      .then(function(response) {
        self.intro = response.data;
      });

    self.resourceFactory.query('skills')
      .then(function(response) {
        self.skills = response.data;
      });

    self.resourceFactory.query("education")
      .then(function(response) {
        self.education = response.data;
      });

    self.resourceFactory.query("employment")
      .then(function(response) {
        self.employment = response.data;
      });

    self.setTab = function(num) {
      if (self.activeTab === num) {
        self.activeTab = 0;
      } else {
        self.activeTab = num;
      }
    };

    self.isActiveTab = function(num) {
      return (self.activeTab === num);
    };
}]);

