portfolio.directive('contact', function() {
	return {
		templateUrl: 'app/partials/contact.html'
	};
});

portfolio.directive('navbar', function() {
	return {
		templateUrl: 'app/partials/navbar.html'
	};
});

portfolio.directive('socialMediaIcons', function() {
	return {
		templateUrl: 'app/partials/socialMediaIcons.html'
	};
});

portfolio.directive('intro', function() {
	return {
		templateUrl: 'app/partials/intro.html'
	};
});

portfolio.directive('portfolio', function() {
	return {
		templateUrl: 'app/partials/portfolio.html'
	};
});

portfolio.directive('skills', function() {
	return {
		templateUrl: 'app/partials/skills.html'
	};
});

portfolio.directive('education', function() {
	return {
		templateUrl: 'app/partials/education.html'
	};
});

portfolio.directive('employment', function() {
	return {
		templateUrl: 'app/partials/employment.html'
	};
});

portfolio.directive('footer', function() {
	return {
		templateUrl: 'app/partials/footer.html'
	};
});


portfolio.directive('scrollPosition', function($window) {
  return {
    scope: {
      scroll: '=scrollPosition'
    },
    link: function(scope, element, attrs) {
      var windowEl = angular.element($window);
      var handler = function() {
        scope.scroll = windowEl.scrollTop();
      }
      windowEl.on('scroll', scope.$apply.bind(scope, handler));
      handler();
    }
  };
});
