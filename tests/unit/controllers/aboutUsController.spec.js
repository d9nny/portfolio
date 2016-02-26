'use strict';
describe('Controller: AboutUsController', function() {
  beforeEach(module('Atlantic'));

  var mockResourceFactory,
      ctrl,
      item = [ {
          "name":"Gold Button Cardigan",
          "category": "Casual",
          "gender": "Female",
          "colour": "Black",
          "price": 167,
          "stockQuantity": 6,
          "img": "https://cdnb.lystit.com/photos/3452-2014/09/12/versace-black-gold-button-cardigan-product-1-23517747-1-790845754-normal.jpeg" 
        }];

  module(function($provide) {
    $provide.factory('ResourceFactory', function() {
      this.query = jasmine.createSpy('query').andCallFake(function(string) {
        if (passPromise) {
          item = [ {
            "name":"Gold Button Cardigan",
            "category": "Casual",
            "gender": "Female",
            "colour": "Black",
            "price": 167,
            "stockQuantity": 6,
            "img": "https://cdnb.lystit.com/photos/3452-2014/09/12/versace-black-gold-button-cardigan-product-1-23517747-1-790845754-normal.jpeg" 
          }];
          return $q.when(item);
        }
        else {
          return $q.reject('something went wrong');
        }
        });
      return  item;
    });
  });

  beforeEach(inject(function($controller, ResourceFactory) {
    ctrl = $controller('PageController');
    mockResourceFactory = ResourceFactory;
  }));


  describe('On initialize', function() {
    it('assigns resouce factory to a variables', function() {
      expect(ctrl.resourceFactory).toEqual(mockResourceFactory);
    });
    it('assigns 0 to variabe basketShow', function() {
      expect(ctrl.basketShow).toEqual(0);
    });
    it('assigns "Female" to variabe activeGender', function() {
      expect(ctrl.activeGender).toEqual("Female");
    });
    it('assigns "Casual" to variabe activeCategory', function() {
      expect(ctrl.activeCategory).toEqual("Casual");
    });
  });

  describe('Function: setGender', function() {
    it('sets the selected gender', function() {
      ctrl.setGender('male');
      expect(ctrl.activeGender).toEqual('male');
    });
  });

  describe('Function: setCategory', function() {
    it('sets the selected gender', function() {
      ctrl.setCategory('Shoes');
      expect(ctrl.activeCategory).toEqual('Shoes');
    });
  });

  describe('Function: setBasketShow', function() {
    it('sets basketShow to 1 if 0', function() {
      ctrl.setBasketShow();
      expect(ctrl.basketShow).toEqual(1);
    });
    it('sets basketShow to 0 if 1', function() {
      ctrl.setBasketShow();
      ctrl.setBasketShow();
      expect(ctrl.basketShow).toEqual(0);
    });
  });

  describe('Function: basketShow', function() {
    it('it returns false if basketShow is equal to 0', function() {
      expect(ctrl.basketSelected()).toEqual(false);
    });
    it('it returns true if basketShow is equal to 1', function() { 
      ctrl.setBasketShow();
      expect(ctrl.basketSelected()).toEqual(true);
    });
  });

  describe('Function: showProducts', function() {
    it('it creates an array of products which meets the variables', function() {
        ctrl.featuredProducts = [ {
          "name":"Gold Button Cardigan",
          "category": "Casual",
          "gender": "Female",
          "colour": "Black",
          "price": 167,
          "stockQuantity": 6,
          "img": "https://cdnb.lystit.com/photos/3452-2014/09/12/versace-black-gold-button-cardigan-product-1-23517747-1-790845754-normal.jpeg" 
        },
        {
          "name":"Cotton Shorts",
          "category": "Casual",
          "gender": "Male",
          "colour": "Medium Red",
          "price": 30,
          "stockQuantity": 5,
          "img": "http://www.baubolondon.com/media/catalog/product/cache/1/small_image/220x220/84ffde2ed9b3fbec1afccd823998b7b9/r/e/red-shorts-front-1.jpg"
        }
      ];
      ctrl.showProducts();
      expect(ctrl.activeProducts).toEqual(item);
    });
  });  

});
