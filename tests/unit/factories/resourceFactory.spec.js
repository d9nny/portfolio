describe('factory: ResourceFactory', function() {
  beforeEach(module('FashionRetailer'));

  var search,
      items = [
        {
          "name":"Almond Toe Court Shoes",
          "category": "Women's Footwear",
          "colour": "Patent Black",
          "price": 99,
          "quantity": 5  
        },
        {
          "name":"Suede Shoes",
          "category": "Women's Footwear",
          "colour": "Blue",
          "price": 42,
          "quantity": 4 
        }
      ];

  beforeEach(inject(function(ResourceFactory) {
    search = ResourceFactory;
  }));

  describe('API call', function() {
    beforeEach(inject(function($httpBackend) {
      httpBackend = $httpBackend
      httpBackend
        .when("GET", "./assets/resources/featuredProducts.json")
        .respond(
          { items: items }
        );
    }));

    it('responds to query', function() {
      expect(search.query).toBeDefined();
    });

    it('returns search results', function() {
      search.query('featuredProducts')
        .then(function(response) {
          expect(response.data.items).toEqual(items)
        })
      httpBackend.flush();
    });

  });
});