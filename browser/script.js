const app = angular.module('app', ['ui.router']);

// ===== INVENTORY STATE ===== //

app.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.when('', '/');
  $stateProvider.state('inventory', {
    url: '/',
    templateUrl: './templates/inventory.html',
    controller: 'InventoryController'
  });
});

app.factory('InventoryFactory', function($http) {
  let factory = {};

  factory.getInventory = () => {
    return $http.get('/api/inventory', (response) => {
      return response.data;
    })
  };

  return factory;
});

app.controller('InventoryController', function($scope, InventoryFactory, $state) {

  // sort array of items by key, stack overflow implementation
  sortByKey = (array, key) => {
    return array.sort((a, b) => {
      let x = a[key]; let y = b[key];
      return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    })
  };

  $scope.toggled = false;
  $scope.columns = ['product_id', 'waist', 'length', 'style', 'count'];
  $scope.inventory = [];

  InventoryFactory.getInventory()
  .then((response) => {
    $scope.inventory = sortByKey(response.data, 'product_id');
  });

  $scope.sortByColumn = (column) => {
    if ($scope.toggled === true) {
      $scope.inventory = sortByKey($scope.inventory, column);
      $scope.toggled = false;
    } else {
      $scope.inventory = sortByKey($scope.inventory, column).reverse();
      $scope.toggled = true;
    }
  }

  $scope.viewProducts = () => {
    $state.go('products');
  }

});

// ===== PRODUCT STATE ===== //

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider.state('products', {
    url: '/products',
    templateUrl: './templates/product.html',
    controller: 'ProductController'
  });
});

app.factory('ProductFactory', function($http) {
  let factory = {};

  factory.getProducts = () => {
    return $http.get('/api/products', (response) => {
      return response.data;
    })
  }
  return factory;
});

app.controller('ProductController', function($scope, $state, ProductFactory) {

  $scope.products = [];

  ProductFactory.getProducts()
  .then((response) => {
    $scope.products = response.data;
  });

  $scope.viewInventory = () => {
    $state.go('inventory');
  }

});
