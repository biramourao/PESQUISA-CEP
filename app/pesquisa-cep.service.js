(function () {
    "use strict";

    angular.module('pesquisaCepApp')
        .service('PesquisaCepService', pesquisaCepService);

    pesquisaCepService.$inject = ['$http'];

    function pesquisaCepService($http) {
        // this.name = name;

        // function name(params) {
        //     // implementar
        // }

        return {
            pesquisaPorCep : pesquisaPorCep
        }

        // ======================================
        /*
        function exemplo() {
            return $http.get('http://worldclockapi.com/api/json/est/now')
                .then(function (response) {
                    return response.data;
                })
                .catch(helper.sendError);
        }*/

        function pesquisaPorCep(_cep) {
        return $http.get("https://viacep.com.br/ws/"+_cep+"/json/")
                .then(function (response) {
                    return response.data;
                })
                .catch();
        }
    }


})();