Feature: Avianca fligt select

  Scenario Outline: As a user, I can select who flight i want

    Given User is on the select flight page
    When the user click on the button <btnvuelodirecto> and click on <btnmejorprecio>
    And select the flight whit a best price <mejorprecio> and click on the basic plan <tarifa>
    And user select more expensive return flight <precioalto> and the basic plan <tarifa> 
    Then the user can click on the continue button <continuar>
    
    Examples:
    | btnvuelodirecto | btnmejorprecio | mejorprecio | tarifa | precioalto | continuar |
    | true            | true           | Vuelo 1     | Basico | last vuelo | true      |
    | false           | true           | Vuelo 1     | Basico | last vuelo | true      |
    | true            | false          | Vuelo 1     | Basico | last vuelo | true      |
    | true            | true           | Vuelo 2     | Basico | Vuelo 5    | true      |
    | true            | true           | Vuelo 1     | Basico | last vuelo | false     |
