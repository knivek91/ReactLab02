const domain = '/';
const layout = 'layout/';

/**
 * Constains the Routes for the Router Objet with parameters
 */
export const Router = {
    Characters: `${domain}character/`,
    CharacterDetail: `${domain}character-detail/:id/`,
    Planets: `${domain}planet/`,
    PlanetDetail: `${domain}planet-detail/:id/`,
    Home: `${domain}`,
    Layout: `${domain}${layout}`
};

/**
 * Constains the Routes for redirecting in the app
 */
export const Routes = {
    Characters: `${domain}character/`,
    CharacterDetail: `${domain}character-detail/`,
    Planets: `${domain}planet/`,
    PlanetDetail: `${domain}planet-detail/`,
    Home: `${domain}`,
    Layout: `${domain}${layout}`
};