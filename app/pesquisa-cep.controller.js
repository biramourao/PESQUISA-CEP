angular.module('pesquisaCepApp')
    .controller('PesquisaCepController', pesquisaCepController);

pesquisaCepController.$inject = ['PesquisaCepService'];

function pesquisaCepController(service) {
    var vm = this;
    /* ***************    INIT VARIÁVEIS    *********************************** */
    vm.cep = "";
    vm.respostaPesquisaPorCep=null;

    /* ***************    FUNÇÕES EXECUTADAS NA VIEW (HMTL)    **************** */

    vm.pesquisaPorCep = pesquisaPorCep;

    // Podemos criar uma função para ser executada assim que a controller for iniciada
    // então colocamos dentro dessa função o 'vm.go', para que assim que acessar
    // a aplicação a partir de qualquer rota, será usuário o acesso e setado a página na qual estiver
    function pesquisaPorCep() {
        return service.pesquisaPorCep(vm.cep)
            .then(salvarItens);
        function salvarItens(_listaItens) {
            vm.respostaPesquisaPorCep = _listaItens;
            console.log(vm.respostaPesquisaPorCep);
        }
    }

}


        // vm.ativo = false; --> EXEMPLO DO NG-CLASS E NG-STYLE

/*
MOVI O 'vm.go' PARA A 'helper.factory' PARA DEMAIS CONTROLLERS USAREM
ESTA FUNCIONALIDADE E CONSEGUIR NAVEGAR ENTRE AS ROTAS, FAZENDO A MESMA
CHECAGEM SE ESTÁ LOGADO E SETANDO A PÁGINA QUE ESTÁ
*/
        // function go(_path) {
        //     var path = _path ? _path : $location.path();
        //     if (path === '/login' || path === '/register') {
        //         $location.path(path);
        //     } else {
        //         isLoggedIn(path);
        //     }
        //     setPage();
        // }

/* ***************    FUNÇÕES INSTERNAS    ******************************** */