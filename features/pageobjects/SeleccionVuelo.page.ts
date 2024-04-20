import Page from "./page";

class BusquedaVuelo extends Page{
    //vuelos 
    public get btnvuelodirecto () {
        return $("//span[contains(text(),'Vuelos directos')]"); //- .//input[@id='journeytypeId_0']
    }

    public get btnmejorprecio () {
        return $("//span[contains(text(),'Mejor precio')]"); //- .//input[@id='journeytypeId_0']
    }

    public get mejorprecio () {
        return $("(.//button[@role='main'])[1]"); //- .//input[@id='journeytypeId_0']
    }

    public get tarifa () {
        return $("//button[@data-testid='ff-price-container-BASIC']"); //- .//input[@id='journeytypeId_0']
    }

    public get precioalto () {
        return $("(.//button[@role='main'])[last()]"); //- .//input[@id='journeytypeId_0']
    }
    public get contiruar () {
        return $("#continue-btn-footer"); //- .//input[@id='journeytypeId_0']
    }


}