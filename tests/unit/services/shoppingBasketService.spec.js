'use strict';

describe('Service: ShoppingBasketService', function() {

  beforeEach(module('FashionRetailer'));

  var shoppingBasketService,
      item = {
              "name":"Gold Button Cardigan",
              "category": "Casual",
              "gender": "Female",
              "colour": "Black",
              "price": 167,
              "stockQuantity": 6,
              "quantity": 1,
              "img": "https://cdnb.lystit.com/photos/3452-2014/09/12/versace-black-gold-button-cardigan-product-1-23517747-1-790845754-normal.jpeg" 
            },
      discountCode =  {
                       "code": "5OFF",
                       "discount": 5
                      },
      userCode = "5OFF";


  beforeEach(inject(function(ShoppingBasketService) {
    shoppingBasketService = ShoppingBasketService;
  }));

  describe('On initialize', function() {
    it('assigns empty array to variabe basket', function() {
      expect(shoppingBasketService.basket).toEqual([]);
    });
  });

  describe('Function: addNewItem', function() {
    it('add an item to the basket', function() {
      shoppingBasketService.addNewItem(item);
      expect(shoppingBasketService.basket).toEqual([item]);
    });
  });

  describe('Function: calculateLineTotal', function() {
    it('calculates an items line price', function() {
      expect(shoppingBasketService.calculateLineTotal(item)).toEqual((item.quantity * item.price));
    });
  });

  describe('Function: addOne', function() {
    it('increases items quantity by one', function() {
      shoppingBasketService.addNewItem(item);
      shoppingBasketService.addOne(item);
      expect(shoppingBasketService.basket[0].quantity).toEqual((2));
    });
  });

  describe('Function: minusOne', function() {
    it('decreases items quantity by one', function() {
      shoppingBasketService.addNewItem(item);
      shoppingBasketService.addOne(item);
      shoppingBasketService.minusOne(item);
      expect(shoppingBasketService.basket[0].quantity).toEqual((1));
    });
    it('removes the item if 0 quantity', function() {
      shoppingBasketService.addNewItem(item);
      shoppingBasketService.minusOne(item);
      expect(shoppingBasketService.basket).toEqual([]);
    });
  });  

  describe('Function: removeItem', function() {
    it('removes items from basket', function() {
      shoppingBasketService.addNewItem(item);
      shoppingBasketService.removeItem(item);
      expect(shoppingBasketService.basket).toEqual([]);
    });
  }); 

  describe('Function: addPrice', function() {
    it('totals the value of the basket', function() {
      shoppingBasketService.addNewItem(item);
      shoppingBasketService.addOne(item);
      shoppingBasketService.addOne(item);
      shoppingBasketService.addPrice()
      expect(shoppingBasketService.basketInfo.price).toEqual(item.price * 3);
    });
  }); 

  describe('Function: addDiscount', function() {
    it('totals the value of the basket', function() {
      shoppingBasketService.addDiscount(userCode, discountCode);
      expect(shoppingBasketService.basketInfo.discount).toEqual(discountCode.discount);
    });
  }); 

  describe('Function: calcTotalPrice', function() {
    it('totals the value of the basket', function() {
      shoppingBasketService.addNewItem(item);
      shoppingBasketService.addPrice()
      shoppingBasketService.addDiscount(userCode, discountCode);
      shoppingBasketService.calcTotalPrice()
      expect(shoppingBasketService.basketInfo.totalPrice).toEqual(item.price - discountCode.discount);
    });
  }); 

});




