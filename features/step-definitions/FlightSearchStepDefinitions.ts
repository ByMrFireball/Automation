import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals';
import FlightSearch from '../pageobjects/FlightSearch.page';

let Navegador = new FlightSearch();

Given("El usuario ingresa a la plataforma", async () => {
    await Navegador.open();
});
