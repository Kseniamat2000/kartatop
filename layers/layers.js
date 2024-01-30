var wms_layers = [];


        var lyr_YandexSatellite_0 = new ol.layer.Tile({
            'title': 'Yandex Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="">Yandex Satellite</a>',
                url: 'https://core-sat.maps.yandex.net/tiles?l=sat&v=3.1025.0&x={x}&y={y}&z={z}&scale=1&lang=ru_RU'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_lab1_2 = new ol.format.GeoJSON();
var features_lab1_2 = format_lab1_2.readFeatures(json_lab1_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lab1_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lab1_2.addFeatures(features_lab1_2);
var lyr_lab1_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_lab1_2, 
                style: style_lab1_2,
                interactive: true,
                title: '<img src="styles/legend/lab1_2.png" /> lab1'
            });
var format_1lab1_3 = new ol.format.GeoJSON();
var features_1lab1_3 = format_1lab1_3.readFeatures(json_1lab1_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1lab1_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1lab1_3.addFeatures(features_1lab1_3);
var lyr_1lab1_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_1lab1_3, 
                style: style_1lab1_3,
                interactive: true,
                title: '<img src="styles/legend/1lab1_3.png" /> Матвеева Эмекова лаба 1 — lab1'
            });
var format_1gpkg2building_4 = new ol.format.GeoJSON();
var features_1gpkg2building_4 = format_1gpkg2building_4.readFeatures(json_1gpkg2building_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1gpkg2building_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1gpkg2building_4.addFeatures(features_1gpkg2building_4);
var lyr_1gpkg2building_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_1gpkg2building_4, 
                style: style_1gpkg2building_4,
                interactive: true,
                title: '<img src="styles/legend/1gpkg2building_4.png" /> Матвеева Эмекова лаба 1.gpkg 2 — building'
            });
var format_building_5 = new ol.format.GeoJSON();
var features_building_5 = format_building_5.readFeatures(json_building_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building_5.addFeatures(features_building_5);
var lyr_building_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_building_5, 
                style: style_building_5,
                interactive: true,
                title: '<img src="styles/legend/building_5.png" /> building'
            });
var format_building_6 = new ol.format.GeoJSON();
var features_building_6 = format_building_6.readFeatures(json_building_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building_6.addFeatures(features_building_6);
var lyr_building_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_building_6, 
                style: style_building_6,
                interactive: true,
                title: '<img src="styles/legend/building_6.png" /> building'
            });

lyr_YandexSatellite_0.setVisible(true);lyr_OSMStandard_1.setVisible(true);lyr_lab1_2.setVisible(true);lyr_1lab1_3.setVisible(true);lyr_1gpkg2building_4.setVisible(true);lyr_building_5.setVisible(true);lyr_building_6.setVisible(true);
var layersList = [lyr_YandexSatellite_0,lyr_OSMStandard_1,lyr_lab1_2,lyr_1lab1_3,lyr_1gpkg2building_4,lyr_building_5,lyr_building_6];
lyr_lab1_2.set('fieldAliases', {'name': 'name', });
lyr_1lab1_3.set('fieldAliases', {'fid': 'fid', 'name': 'name', });
lyr_1gpkg2building_4.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'entrance': 'entrance', });
lyr_building_5.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'entrance': 'entrance', });
lyr_building_6.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'amenity': 'amenity', 'shop': 'shop', 'operator': 'operator', 'opening_hours': 'opening_hours', 'name:en': 'name:en', 'name': 'name', 'brand:wikidata': 'brand:wikidata', 'brand:en': 'brand:en', 'brand': 'brand', 'height': 'height', 'addr:city': 'addr:city', 'building:levels': 'building:levels', 'addr:postcode': 'addr:postcode', 'addr:street': 'addr:street', 'addr:housenumber': 'addr:housenumber', 'type': 'type', });
lyr_lab1_2.set('fieldImages', {'name': 'TextEdit', });
lyr_1lab1_3.set('fieldImages', {'fid': 'TextEdit', 'name': 'TextEdit', });
lyr_1gpkg2building_4.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'entrance': '', });
lyr_building_5.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'entrance': '', });
lyr_building_6.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'building': '', 'amenity': '', 'shop': '', 'operator': '', 'opening_hours': '', 'name:en': '', 'name': '', 'brand:wikidata': '', 'brand:en': '', 'brand': '', 'height': '', 'addr:city': '', 'building:levels': '', 'addr:postcode': '', 'addr:street': '', 'addr:housenumber': '', 'type': '', });
lyr_lab1_2.set('fieldLabels', {'name': 'no label', });
lyr_1lab1_3.set('fieldLabels', {'fid': 'no label', 'name': 'no label', });
lyr_1gpkg2building_4.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'entrance': 'no label', });
lyr_building_5.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'entrance': 'no label', });
lyr_building_6.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'amenity': 'no label', 'shop': 'no label', 'operator': 'no label', 'opening_hours': 'no label', 'name:en': 'no label', 'name': 'no label', 'brand:wikidata': 'no label', 'brand:en': 'no label', 'brand': 'no label', 'height': 'no label', 'addr:city': 'no label', 'building:levels': 'no label', 'addr:postcode': 'no label', 'addr:street': 'no label', 'addr:housenumber': 'no label', 'type': 'no label', });
lyr_building_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});