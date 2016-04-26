'use strict';

angular
  .module ( 'ui.swiper' )
  .directive ( 'slides', SlidesDirective );

/* @ngInject */
function SlidesDirective () {
  restrict : 'AE',
  transcludes : true,
  replace : true,
  require : '^^swiper',
  template : '<div class="swiper-wrapper" ng-transclude></div>'
}
