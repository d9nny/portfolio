'use strict';

portfolio.controller('IndexController', [ 'ResourceFactory', function(ResourceFactory) {
	var self = this;
  self.employmentTab = 0;
  self.portfolioTab = 1;
  self.description = 0;
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

    self.setEmploymentTab = function(num) {
      if (self.employmentTab === num) {
        self.employmentTab = 0;
      } else {
        self.employmentTab = num;
      }
    };

    self.isActiveEmploymentTab = function(num) {
      return (self.employmentTab === num);
    };

    self.setPortfolioTab = function(num) {
        self.portfolioTab = num;
    };

    self.isActivePortfolioTab = function(num) {
      return (self.portfolioTab === num);
    };

    self.setShowDescription = function(num) {
      if (self.description === num) {
        self.description = 0;
      } else {
        self.description = num;
      }
    }

    self.descriptionButtonShow = function() {
      return (self.description === 0);
    }

    self.activeShowDescription = function(num) {
      return ((self.description === 1) && (self.portfolioTab === num));
    }
}]);

