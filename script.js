var clearFieldDirective = angular.module('directive.clearField', []);

clearFieldDirective.directive('clearField', function($compile) {
	return {
	  restrict: 'A',
	  scope: {
	    model: '=ngModel'
	  },
	  link: function(scope, element, attr) {
	  	
	    // Add wrapper to the element
	    scope.model = (scope.model == undefined) ? "" : scope.model;

	    element.wrap('<div class="wrapper"></div>')
	    .addClass('pr14')
	    .after('<span class="clear">×</span>');

	    var clearInputElement = angular.element(element.next());

	    clearInputElement.bind('click', function() {
	      scope.$apply(scope.model = "");
	    });

	    scope.$watch('model', function() {
	      if (scope.model.length > 0) {
	        clearInputElement.css("visibility", "visible");
	      } else {
	        clearInputElement.css("visibility", "hidden");
	      }
	    });
	  }
	}
});