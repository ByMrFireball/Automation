Feature: Avianca fligt select

  Scenario Outline: As a user, I can select who flight i want

    Given User is on the select flight page
    When the user click on the button <btnvuelodirecto> and click on <btnmejorprecio>
    And select the flight whit a best price <mejorprecio> and click on the basic plan <tarifa>
    And user select more expensive return flight <precioalto> and the basic plan <tarifa> 
    Then the user can click on the continue button <continuar>

    Examples:
      | username | password             | message                        |
      | tomsmith | SuperSecretPassword! | You logged into a secure area! |
      | foobar   | barfoo               | Your username is invalid!      |