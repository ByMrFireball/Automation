Feature: Avianca busqueda

  Scenario As a user, I can search for a flight in Avianca

    Given i am on the search flight page
    When i enter my city of <origen> and <destino> of flight
    And when will i go <ida> and <vuelta> come
    And i click for select <personas> who flies <adultos> and <niños> and <bebes> and click on the search flight <buscar>
    Then user will be redirected