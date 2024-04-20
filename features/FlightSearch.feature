Feature: FlightSearch

  Scenario Outline: El usuario está planeando vuelo

    Given El usuario ingresa a la plataforma
    When El usuario selecciona el lugar de origen con el dato "<origin>" y hace click en el primer resultado
    And El usuario selecciona el lugar de destino con el dato "<destino>" y hace click en el primer resultado
    And El usuario selecciona el calendario de ida y busca el dato "<ida>"
    And El usuario selecciona una fecha de ida en el calendario que coincida con los datos de "<ida>" y los selecciona haciendo click
    And El usuario selecciona una fecha de vuelta en el calendario que coincida con los datos de "<vuelta>" y los selecciona haciendo click
    And El usuario selecciona la cantidad de adultos que viajan incrementando la cantidad hasta que coincidan con el valor de "<adult>"
    And El usuario selecciona la cantidad de niños que viajan incrementando la cantidad hasta que coincidan con el valor de "<children>"
    And El usuario selecciona la cantidad de bebés que viajan incrementando la cantidad hasta que coincidan con el valor de "<baby>"
    And El usuario confirma la cantidad de personas que viajan 
    And El usuario selecciona el botón de busqueda para buscar vuelos que coincidan
    Then El usuario tiene los datos de "<origin>", "<destino>", "<ida>", "<vuelta>", "<adult>", "<children>" y "<baby>" y está listo para buscar un vuelo y pasar a seleccionar el horario

    Examples:
      | origin   | destino | ida        | vuelta     | adult | children | baby | message                             |
      | Medellin | Orlando | 25/07/2024 | 02/08/2024 | 3     | 2        | 1    | Viajas desde Medellin hasta Orlando |
      | Medellín | Orlando | 25/07/2024 | 02/08/2024 | 3     | 2        | 1    | Viajas desde Medellin hasta Orlando |
      | medellin | Orlando | 25/07/2024 | 02/08/2024 | 3     | 2        | 1    | Viajas desde Medellin hasta Orlando |
      | medellín | Orlando | 25/07/2024 | 02/08/2024 | 3     | 2        | 1    | Viajas desde Medellin hasta Orlando |