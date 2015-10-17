/**
 * Created by USER on 11.10.2015.
 */
var app = angular.module("Books",['ngResource','ngRoute']);


  app.controller("BooksController",['$scope','$http','$resource',function($scope,$http,$resource){

        $scope.page = { title:"Books",listWidth :12};

        $scope.booksList = new Array();

        $scope.formShow = false;

        var Book = $resource('books/:id',{id:'@id'});

        getList();

        $scope.delete = function(book){
          Book.delete({id:book.id},function(b){
            if(b.$resolved){
              getList();
            }
          })
        };

        $scope.newBook = function(book){
          $scope.form ={};

          $scope.toggleForm(true);
        };

        $scope.edit = function(book){
          Book.get({id:book.id},function(b){
            console.log(b)
                $scope.form = b;
            $scope.toggleForm(true);

          });
        };

        $scope.save = function(book){
          Book.save({id:book.id},book,function(b){
            $scope.form = b;
            getList();
          });
        };



        $scope.toggleForm = function(arg){

          $scope.formShow = arg;

          if(arg){
            $scope.page.listWidth = 6;
            return;
          }

          $scope.page.listWidth = 12;
          return;

        };

    function getList(){
          $http({
            method: 'GET',
            url: '/books'
          }).then(function successCallback(response) {
            $scope.booksList = response.data;
            console.log($scope.booksList);

          }, function errorCallback(response) {

            $scope.booksList = response.data;
            console.log($scope.booksList);

          });
        }

  }]);


