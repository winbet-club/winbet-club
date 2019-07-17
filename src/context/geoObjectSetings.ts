const bollunProperties = [
  {
    balloonContent: '<h2>ул. Руссиянова 1 - 1</h2>',
    balloonContentHeader: '<h2>привет2</h2>',
    hintContent: '<h2>привет3</h2>',
    iconCaption: 'ул. Руссиянова 1 - 1',
  },
  {
    balloonContent: '<h2>ул. Богдановича 120 Б</h2>',
    balloonContentHeader: '<h2>Время работы 24/7</h2>',
    hintContent: '<h2>Игровой клуб</h2>',
    iconCaption: 'Адрес: ул. Богдановича 120 Б',
  },
  {
    balloonContent: '<h2>ул. Немига 40</h2>',
    balloonContentHeader: '<h2>привет</h2>',
    hintContent: '<h2>привет</h2>',
    iconCaption: 'ул. Немига 40',
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