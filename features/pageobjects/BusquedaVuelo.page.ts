import Page from "./page";

class BusquedaVuelo extends Page{
    //boton
    public get idayvuelta () {
        return $('#journeytypeId_0'); //- .//input[@id='journeytypeId_0']
    }
    // boton
    public get soloida () {
        return $('#journeytypeId_1');//- .//input[@id='journeytypeId_1']
    }

    public get origen () {
        return $(".//input[@placeholder='Origen']");
        //.//*[@class='station-control-list_item_link-city ng-star-inserted']//strong[contains(text(),'Mede')]
        // este texto encuentra a medellin
        // .//*[@class='station-control-list_item_link']//ancestor::span[1][contains(text(), 'MDE')]
    }

    // destino
    public get hacia () {
        return $(".//input[@placeholder='Hacia']");
        // Encuentra a Orlando
        // .//*[@class='station-control-list_item_link-code ng-star-inserted']//ancestor::span[1][contains(text(), 'MCO')]
        // .//span[@class='station-control-list_item_link-code ng-star-inserted' and text()='MCO']
    }


    public get ida () { // Fecha
        return $(".//div[@id='departureDateInputLabel']");
        // Obtener la casilla de la fecha exacta
        //.//*[@class='ngb-dp-week ng-star-inserted'][4]//div[@aria-label='25-7-2024'] 

    }

    public get flechaDerecha () {
        return $(".date-picker_controls_button date-picker_controls_button--next")
    }

    
    public get vuelta () { // Fecha
        return $(".//div[@id='arrivalDateInputLabel']"); 
    }


    public get personas () {
        return $(".//div[@class='control_field']");
    }

    
    public get adultos () {
        return $('(.//button[@class="ui-num-ud_button plus"])[1]');
    }

    
    public get niños () {
        return $('(.//button[@class="ui-num-ud_button plus"])[2]');
    }
    
    public get bebes () {
        return $('(.//button[@class="ui-num-ud_button plus"])[3]');
    }
    
    public get buscar () {
        return $('#searchButton'); //- .//button[@id='searchButton']
    }

}