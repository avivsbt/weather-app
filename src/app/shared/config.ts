function getBaseUrl(): string {
    return 'https://dataservice.accuweather.com';
}

export const CONFIG = {
    version: 0,
    appid: 'Weather',
    siteid: 0,
    baseUrl: getBaseUrl(),
    getUrl: function (url: string) {
        return this.baseUrl + url;
    },
    endpoints: {
        geoposition: '/locations/v1/cities/geoposition/search',
        locationKey: '/locations/v1/',
        autocomplete: '/locations/v1/cities/autocomplete',
        currentConditions: `/currentconditions/v1/`,
        forecasts: '/forecasts/v1/daily/5day/',
    },
    APIKey: {
        Weather:
            //'imtikspIs8LTDO1ZqSjGrn4bBu4wEFL4' 
            //'B8XuuxUAXzXOlAXMBk4sXwO7KBle686Y' 
            //'DORzMGZ05GqwG0MF4iawyRl11kWdlefK' 
            'IEGKSVoXjPHVGB2dOOZIzghiHGGmKNzT' 
            //'fg2oLmTVBxIqQl0t7FORAsL6X51MyXR6' //31.5.21 15:16
            //'xpl5xM1XUPfcXQHEC11QyrI9fEukWekR' //31.5.21 10:00
    },
};


