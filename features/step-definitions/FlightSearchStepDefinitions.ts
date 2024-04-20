import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals';
import FlightSearch from '../pageobjects/FlightSearch.page';

let Navegador = new FlightSearch();

Given("El usuario ingresa a la plataforma", async () => {
    await Navegador.open();
});

When("El usuario selecciona el lugar de origen con el dato {string} y hace click en el primer resultado", async (origin:string) => {

});

When("El usuario selecciona el lugar de destino con el dato {string} y hace click en el primer resultado", async (destino:string) => {

});

When("El usuario selecciona el calendario de ida y busca el dato {string}", async (going:string) => {

});

When("El usuario selecciona una fecha de ida en el calendario que coincida con los datos de {string} y los selecciona haciendo click", async (going:string) => {

});

When("El usuario selecciona una fecha de vuelta en el calendario que coincida con los datos de {string} y los selecciona haciendo click", async (lap:string) => {

});

When("El usuario selecciona la cantidad de adultos que viajan incrementando la cantidad hasta que coincidan con el valor de {int}", async (adult:BigInt) => {

});

When("El usuario selecciona la cantidad de niños que viajan incrementando la cantidad hasta que coincidan con el valor de {int}", async (children:BigInt) => {

});

When("El usuario selecciona la cantidad de bebés que viajan incrementando la cantidad hasta que coincidan con el valor de {int}", async (baby:BigInt) => {

});

When("El usuario confirma la cantidad de personas que viajan", async () => {
    
});

When("El usuario selecciona el botón de busqueda para buscar vuelos que coincidan", async () => {
    
});