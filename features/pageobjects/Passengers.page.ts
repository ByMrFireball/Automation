import Page from "./page"; // Importar la clase Page

class Passengers extends Page { // Crear la clase Passengers heredando de Page
    // Seleccionar la casilla de género del adulto 1
    public get GenderAdult() { // Género del adulto 1
        return $('.//button[@id="originBtn"]');
    }
}