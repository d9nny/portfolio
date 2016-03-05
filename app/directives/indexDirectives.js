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

portfolio.directive('perfectParallax', [
  '$window', function ($window) {

    return {
      restrict: 'A',
      scope: {
        parallaxCss: '@',
        parallaxInitVal: '@',
        parallaxRatio: '@'
      },
      link: function(iScope, iElem, iAttr) {
        var cssKey,
          cssValue,
          isSpecialVal,
          parallaxCssVal,
          parallaxOffset,
          parallaxRatio,
          parallaxInitVal,
          cssValArray;

        parallaxCssVal = iScope.parallaxCss ? iScope.parallaxCss : 'top';
        cssValArray = parallaxCssVal.split(':');
        cssKey = cssValArray[0];
        cssValue = cssValArray[1];

        isSpecialVal = cssValue ? true : false;
        if (!cssValue) cssValue = cssKey;

        parallaxRatio = iScope.parallaxRatio ? +iScope.parallaxRatio : 1.1;
        parallaxInitVal = iScope.parallaxInitVal ? +iScope.parallaxInitVal : 0;

        iElem.css(cssKey, parallaxInitVal + 'px');

        function _onScroll() {
          var resultVal;
          var calcVal = $window.pageYOffset * parallaxRatio + parallaxInitVal;

          if (isSpecialVal) {
            resultVal = '' + cssValue + '(' + calcVal + 'px)';
          } else {
            resultVal = calcVal + 'px';
          }
          iElem.css(cssKey, resultVal);
        };

        $window.addEventListener('scroll', _onScroll);

      }
    };
  }
]);

