(function() {
  var app = angular.module('card_dealer', ["ngResource", 'ngRoute']);

  app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
          templateUrl: '/index.html'
        })
        .when('/games/:id', {
          templateUrl: '/gameview.html'
        })
        ;
  });

  app.controller("HomeController", function($scope, $resource, $routeParams, $location) {
    var Deck = $resource("/decks/index.json", {}, {});
    $scope.deck = "";
    $scope.hearts_url = "http://www.clker.com/cliparts/8/f/f/a/119498481648610229card_figures_-_heart_01.svg.hi.png"
    $scope.clubs_url = "https://cdn2.iconfinder.com/data/icons/windows-8-metro-style/512/clubs.png"
    $scope.diamonds_url = "http://www.wpclipart.com/recreation/games/card_icons/card_icon_diamond.png"
    $scope.spades_url = "http://megaicons.net/static/img/icons_sizes/8/178/512/gamble-spades-icon.png"
    $scope.first_card_dealt = false;
    $scope.random_card_dealt = false;
    $scope.random_card = {};

    $scope.get_deck = function(){
      Deck.get().$promise.then(
        function(value){
          $scope.deck = value.deck;
        },
        function(error){
          alert("There has been an error");
        });
    };
    $scope.get_deck();

    $scope.get_suit_url = function(suit){
      var suit_url = "";
      switch(suit) {
        case "hearts":
          suit_url = $scope.hearts_url;
          break;
        case "diamonds":
          suit_url = $scope.diamonds_url;
          break;
        case "spades":
          suit_url = $scope.spades_url;
          break;
        case "clubs":
          suit_url = $scope.clubs_url;
          break;
      };
      return suit_url;
    };

    $scope.shuffle_deck = function(deck){
      $scope.shuffle(deck.cards);
    };

    $scope.get_random_card = function(cards){
      $scope.random_card = cards[Math.floor(Math.random()*cards.length)];
    };

    $scope.shuffle = function(array) {
      var currentIndex = array.length, temporaryValue, randomIndex ;
      while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }

      return array;
    };
  });
})();
