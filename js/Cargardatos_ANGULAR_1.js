/* 
var miAplicacion = angular.module('miAplicacion', []);

miAplicacion.controller('mainController', ["$scope", "$http", function($scope, $http) {
        //////////////////////////////////////////////////////////////////////
        //////////////////////////////////////////////////////////////////////
        app.listaARTICULOS = [
            {"id": "1", "nombre": "Boli", "Precio": 2, "StockMinimo": 40, "Stock": 56},
            {"id": "2", "nombre": "Cuaderno", "Precio": 4, "StockMinimo": 50, "Stock": 20},
            {"id": "3", "nombre": "Boli", "Precio": 2, "StockMinimo": 45, "Stock": 56},
            {"id": "4", "nombre": "Goma", "Precio": 2, "StockMinimo": 100, "Stock": 56},
            {"id": "5", "nombre": "Cartulina", "Precio": 1, "StockMinimo": 30, "Stock": 56},
            {"id": "6", "nombre": "Tijeras", "Precio": 6, "StockMinimo": 45, "Stock": 56},
            {"id": "7", "nombre": "Rotulador", "Precio": 3, "StockMinimo": 40, "Stock": 56},
            {"id": "8", "nombre": "Reglas", "Precio": 7, "StockMinimo": 40, "Stock": 60},
            {"id": "9", "nombre": "Compas", "Precio": 9, "StockMinimo": 20, "Stock": 10},
            {"id": "10", "nombre": "Estuche", "Precio": 3, "StockMinimo": 0, "Stock": 0},
            {"id": "11", "nombre": "Mochila", "Precio": 15, "StockMinimo": 40, "Stock": 56}
        ];

        app.listaUSUARIOS = [
            {"idUsuario": '1', "NombreUsuario": 'Kepa', "Tipo": 'VIP'},
            {"idUsuario": '2', "NombreUsuario": 'Miren', "Tipo": 'BASICO'},
            {"idUsuario": '3', "NombreUsuario": 'Aitor', "Tipo": 'ADMIN'}
        ]
   
    }]);
 */


var main = angular.module('main', []);
main.controller('content', function ($scope, $http) {
    // AJUSTES
    var app = $scope;

    // DATOS
    app.divUsuario= false;
    app.divCompra= false;
    app.divAdministrar= false;
    app.administrar = false;
    app.listaARTICULOS = [
        {"id": "1", "nombre": "Boli", "Precio": 2, "StockMinimo": 40, "Stock": 56},
        {"id": "2", "nombre": "Cuaderno", "Precio": 4, "StockMinimo": 50, "Stock": 20},
        {"id": "3", "nombre": "Boli", "Precio": 2, "StockMinimo": 45, "Stock": 56},
        {"id": "4", "nombre": "Goma", "Precio": 2, "StockMinimo": 100, "Stock": 56},
        {"id": "5", "nombre": "Cartulina", "Precio": 1, "StockMinimo": 30, "Stock": 56},
        {"id": "6", "nombre": "Tijeras", "Precio": 6, "StockMinimo": 45, "Stock": 56},
        {"id": "7", "nombre": "Rotulador", "Precio": 3, "StockMinimo": 40, "Stock": 56},
        {"id": "8", "nombre": "Reglas", "Precio": 7, "StockMinimo": 40, "Stock": 60},
        {"id": "9", "nombre": "Compas", "Precio": 9, "StockMinimo": 20, "Stock": 10},
        {"id": "10", "nombre": "Estuche", "Precio": 3, "StockMinimo": 0, "Stock": 0},
        {"id": "11", "nombre": "Mochila", "Precio": 15, "StockMinimo": 40, "Stock": 56}
    ];

    app.listaUSUARIOS = [
        {"idUsuario": '1', "NombreUsuario": 'Kepa', "Tipo": 'VIP'},
        {"idUsuario": '2', "NombreUsuario": 'Miren', "Tipo": 'BASICO'},
        {"idUsuario": '3', "NombreUsuario": 'Aitor', "Tipo": 'ADMIN'}
    ];


    // Funciones
    app.mostrar = function(div){
        app.divUsuario = false;
        app.divCompra = false;
        app.divAdministrar = false;
        app[div] = true;
    }
    app.esPosible = function(){
        var cant = app.cantPosible;
        var mensaje ="Debes intrducir una cantidad mayor a 0";
        if(cant>0){
            if(app.articuloSeleccionado){
                var stock = app.articuloSeleccionado.Stock;
                mensaje = "No hay suficiene stock en el almacen";
                if(cant<=stock){
                    mensaje = "la compra es posible";
                }
            } else {
                mensaje= "Debes seleccionar un articulo primero";
            }
        } 
        alert(mensaje); 

    }

    app.eliminarArticulo = function(pos){
        var cant = app.listaARTICULOS[pos].Stock;
        if(cant==0){
            var comprobacion = confirm("¿Estas seguro de eliminar el producto Estuche?");
            if(comprobacion){
                app.listaARTICULOS.splice(pos,1); 
            }
        } else {
            alert("No se puede eliminar si el stock no es 0");

        }
    }
    app.cambiado = function(){
        alert("Se ha modificado el registro");
    }
});

