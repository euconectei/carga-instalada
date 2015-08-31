app.controller('EquipamentosController', function ($scope) { //, $http, $resource
  'use strict';

  $scope.label = {
    "equipamento": "Equipamento",
    "nome"       : "Nome",
    "potUnit"    : "Potência Unitária",
    "qtde"       : "Quantidade",
    "potTotal"   : "Potência Total",
    "hdu"        : "Horas de Utilização Diária",
    "Ponta"      : "Ponta",
    "FPonta"     : "F Ponta",
    "Total"      : "Total",
    "cd"         : "Carga Diária"
  };

  $scope.equipamentos = [];

  function Equipamento() {
    this.id        = "";
    this.nome      = "";
    this.potUnit   = "";
    this.qtde      = "";
    this.potTotal  = "";
    this.hduPonta  = "";
    this.hduFPonta = "";
    this.hduTotal  = "";
    this.cdPonta   = "";
    this.cdFPonta  = "";
    this.cdTotal   = "";
  }

  function calculaTotal(arr, campo) {
    var i,
      total = 0;
    for (i = 0; i < arr.length; i++) {
      total += arr[i][campo];
    }
    return total;
  }

  $scope.adicionaEquipamento = function () {

    var equip = new Equipamento(),
      id = function () {
        var eqp   = $scope.equipamentos,
          eqpSize = $scope.equipamentos.length;

        return eqpSize;
      },
      nome      = $scope.inputNome,
      potUnit   = $scope.inputPotUnit,
      qtde      = $scope.inputQtde,
      potTotal  = $scope.inputPotTotal,
      hduPonta  = $scope.inputHduPonta,
      hduFPonta = $scope.inputHduFPonta,
      hduTotal  = $scope.inputHduTotal,
      cdPonta   = $scope.inputCdPonta,
      cdFPonta  = $scope.inputCdFPonta,
      cdTotal   = $scope.inputCdTotal;

    equip.id        = id();
    equip.nome      = nome;
    equip.potUnit   = potUnit;
    equip.qtde      = qtde;
    equip.potTotal  = potTotal;
    equip.hduPonta  = hduPonta;
    equip.hduFPonta = hduFPonta;
    equip.hduTotal  = hduTotal;
    equip.cdPonta   = cdPonta;
    equip.cdFPonta  = cdFPonta;
    equip.cdTotal   = cdTotal;

    $scope.equipamentos.push(equip);

    $scope.potUnitTotal = calculaTotal($scope.equipamentos, 'potUnit');

  };



});
