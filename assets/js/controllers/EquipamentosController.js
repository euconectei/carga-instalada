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
    "FPonta"     : "Fora de Ponta",
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

        if (eqpSize === 0) {
          eqpSize = 1;
        } else {
          eqpSize = eqp[eqp.length - 1].id + 1;
        }

        return eqpSize;
      },
      nome      = $scope.inputNome,
      potUnit   = $scope.inputPotUnit,
      qtde      = $scope.inputQtde,
      potTotal  = potUnit * qtde,
      hduPonta  = $scope.inputHduPonta,
      hduFPonta = $scope.inputHduFPonta,
      hduTotal  = hduPonta * hduFPonta,
      cdPonta   = potUnit * hduPonta,
      cdFPonta  = potUnit * hduFPonta,
      cdTotal   = cdPonta + cdFPonta;

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

    $scope.potUnitTotal = calculaTotal($scope.equipamentos, 'potTotal');
    $scope.hduTotal     = calculaTotal($scope.equipamentos, 'hduTotal');
    $scope.cdPonta      = calculaTotal($scope.equipamentos, 'cdPonta');
    $scope.cdFPonta      = calculaTotal($scope.equipamentos, 'cdFPonta');
    $scope.cdTotal      = calculaTotal($scope.equipamentos, 'cdTotal');

  };

  $scope.apagaEquipamento = function (index) {

    $scope.equipamentos.splice(index, 1);

  };

});
