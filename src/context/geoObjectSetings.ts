const bollunProperties = [
  {
    balloonContent: '<h2>(Тех.перерыв - 7.00-8.00)<br> ул. Руссиянова 1 - 1</h2>',
    balloonContentHeader: '<h2>Время работы 24/7</h2>',
    hintContent: '<h2>Время работы 24/7  <br> (Тех.перерыв - 7.00-8.00)</h2>',
    iconCaption: 'Адрес: ул. Руссиянова 1 - 1',
  },
  {
    balloonContent: '<h2>(Тех.перерыв - 7.00-8.00)<br> ул. Богдановича 120 Б</h2>',
    balloonContentHeader: '<h2>Время работы 24/7</h2>',
    hintContent: '<h2>Время работы 24/7  <br> (Тех.перерыв - 7.00-8.00)</h2>',
    iconCaption: 'Адрес: ул. Богдановича 120 Б',
  },
  {
    balloonContent: '<h2>(Тех.перерыв - 7.00-8.00)<br> ул. Немига 40</h2>',
    balloonContentHeader: '<h2>Время работы 24/7</h2>',
    hintContent: '<h2>Время работы 24/7  <br> (Тех.перерыв - 7.00-8.00)</h2>',
    iconCaption: ' Адрес: ул. Немига 40',
  }
]

export const mapState = {
  center: [53.902496, 27.561481],
  coordinates: [[53.941675, 27.684289], [53.910256, 27.579699], [53.899509, 27.543101]],
  zoom: 11,
};


export const geoObjectSetings = [
  {
    geometry: {
      coordinates: mapState.coordinates[0],
      type: 'Point', 
    },
    id: 0,
    modules: ['geoObject.addon.balloon', 'geoObject.addon.hint'],
    properties: bollunProperties[0],
  },
  {
    geometry: {
      coordinates: mapState.coordinates[1],
      type: 'Point', 
    },
    id: 1,
    modules: ['geoObject.addon.balloon', 'geoObject.addon.hint'],
    properties: bollunProperties[1],
  },
  {
    geometry: {
      coordinates: mapState.coordinates[2],
      type: 'Point', 
    },
    id: 1,
    modules: ['geoObject.addon.balloon', 'geoObject.addon.hint'],
    properties: bollunProperties[2],
  },
]