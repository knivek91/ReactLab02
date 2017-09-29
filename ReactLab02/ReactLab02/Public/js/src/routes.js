const domain = '/';
const layout = 'layout/';

/**
 * Constains the Routes for the Router Objet with parameters
 */
export const Router = {
    Characters: `${domain}character/`,
    CharacterDetail: `${domain}character-detail/:id/`,
    LayoutCharacters: `${domain}${layout}character/`,
    Planets: `${domain}planet/`,
    PlanetDetail: `${domain}planet-detail/:id/`,
    LayoutPlanet: `${domain}${layout}planet/`,
    Home: `${domain}`,
    Layout: `${domain}${layout}`
};

/**
 * Constains the Routes for redirecting in the app
 */
export const Routes = {
    Characters: `${domain}character/`,
    CharacterDetail: `${domain}character-detail/`,
    LayoutCharacters: `${domain}${layout}character/`,
    Planets: `${domain}planet/`,
    PlanetDetail: `${domain}planet-detail/`,
    LayoutPlanets: `${domain}${layout}planet/`,
    Home: `${domain}`,
    Layout: `${domain}${layout}`
};