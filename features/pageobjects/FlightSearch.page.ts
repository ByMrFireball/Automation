import Page from "./page"; // Importar la clase Page

class FlightSearch extends Page { // Crear la clase FlightSearch heredando de Page
    // Seleccionar la casilla de origen e ingresar Medellín
    public get FlightOrigin() { // Origen del vuelo
        return $('.//button[@id="originBtn"]');
    }
    // Seleccionar la casilla del destino e ingresar Orlando
    public get FlightDestination() { // Destino del vuelo
        return $('(.//input[@class="control_field_input"])[2]');
    }
    // Seleccionar la casilla del calendario (Opcional)
    public get CalendarFlight() { // Calendario de ida
        return $('(.//button[@class="control_field_button"])[3]');
    }
    // Seleccionar el siguiente mes y simular click
    public get NextMounthOutboundFlight() { // Mes siguiente (2 veces)
        return $('.//button[@class="date-picker_controls_button date-picker_controls_button--next"]');
    }
    // Seleccionar el día del vuelo y simular click
    public get OutboundFlight() { // Día de vuelo
        return $('(.//span[@class="custom-day ng-star-inserted price-range--medium"])[17]');
    }
    // Cambiar la clase del día de vuelo (Opcional)
    public get SelectedOutboundFlight() { // Día de vuelo seleccionado
        return $('.//span[@class="custom-day ng-star-inserted price-range--medium arrival range departure"]');
    }
    // Seleccionar el día de regreso y simular click
    public get ReturnFlight() { // Día de vuelo
        return $('(.//span[@class="custom-day ng-star-inserted price-range--medium"])[5]');
    }
    // Cambiar la clase del día de regreso (Opcional)
    public get SelectedReturnFlight() { // Día de vuelo seleccionado
        return $('.//span[@class="custom-day range arrival ng-star-inserted price-range--medium"]');
    }
    // Seleccionar la casilla de pasajeros (Opcional)
    public get FlyingFlight() { // Casilla de pasajeros
        return $('(.//button[@class="control_field_button"])[5]');
    }
    // Seleccionar el botón de añadir adulto y simular click
    public get AddFlightAdult() { // Añadir adulto (2 veces)
        return $('(.//button[@class="ui-num-ud_button plus"])[1]');
    }
    // Seleccionar el botón para remover adulto
    public get RemoveFlightAdult() { // Opcional
        return $('(.//button[@class="ui-num-ud_button minus"])[1]');
    }
    // Seleccionar el botón de añadir niño y simular click
    public get AddFlightChild() { // Añadir niño (2 veces)
        return $('(.//button[@class="ui-num-ud_button plus"])[2]');
    }
    // Seleccionar el botón para remover niño
    public get RemoveFlightChild() { // Opcional
        return $('(.//button[@class="ui-num-ud_button minus"])[2]');
    }
    // Seleccionar el botón de añadir bebe y simular click
    public get AddFlightBaby() { // Añadir bebe (1 vez)
        return $('(.//button[@class="ui-num-ud_button plus"])[3]');
    }
    // Seleccionar el botón para remover bebé
    public get RemoveFlightBaby() { // Opcional
        return $('(.//button[@class="ui-num-ud_button minus"])[3]');
    }
    // Seleccionar la casilla de confirmar y simular click
    public get ConfirmFlight() { // Confirmar pasajeros
        return $('.//button[@class="button control_options_selector_action_button"]');
    }
    // Seleccionar la casilla de buscar y simular click
    public get SearchFlight() { // Simular click para buscar
        return $('.//button[@id="searchButton"]');
    }
}