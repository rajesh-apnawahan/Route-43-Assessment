var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Pimpalesaudagar_1 = new ol.format.GeoJSON();
var features_Pimpalesaudagar_1 = format_Pimpalesaudagar_1.readFeatures(json_Pimpalesaudagar_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pimpalesaudagar_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pimpalesaudagar_1.addFeatures(features_Pimpalesaudagar_1);
var lyr_Pimpalesaudagar_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Pimpalesaudagar_1, 
                style: style_Pimpalesaudagar_1,
                popuplayertitle: "Pimpale saudagar",
                interactive: true,
                title: '<img src="styles/legend/Pimpalesaudagar_1.png" /> Pimpale saudagar'
            });
var format_Pimple_2 = new ol.format.GeoJSON();
var features_Pimple_2 = format_Pimple_2.readFeatures(json_Pimple_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pimple_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pimple_2.addFeatures(features_Pimple_2);
var lyr_Pimple_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Pimple_2, 
                style: style_Pimple_2,
                popuplayertitle: "Pimple",
                interactive: true,
                title: '<img src="styles/legend/Pimple_2.png" /> Pimple'
            });
var format_Keshavnagar_3 = new ol.format.GeoJSON();
var features_Keshavnagar_3 = format_Keshavnagar_3.readFeatures(json_Keshavnagar_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Keshavnagar_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Keshavnagar_3.addFeatures(features_Keshavnagar_3);
var lyr_Keshavnagar_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Keshavnagar_3, 
                style: style_Keshavnagar_3,
                popuplayertitle: "Keshavnagar",
                interactive: true,
                title: '<img src="styles/legend/Keshavnagar_3.png" /> Keshavnagar'
            });
var format_Yavatmal_4 = new ol.format.GeoJSON();
var features_Yavatmal_4 = format_Yavatmal_4.readFeatures(json_Yavatmal_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Yavatmal_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Yavatmal_4.addFeatures(features_Yavatmal_4);
var lyr_Yavatmal_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Yavatmal_4, 
                style: style_Yavatmal_4,
                popuplayertitle: "Yavatmal",
                interactive: true,
                title: '<img src="styles/legend/Yavatmal_4.png" /> Yavatmal'
            });
var format_Lahagaon_5 = new ol.format.GeoJSON();
var features_Lahagaon_5 = format_Lahagaon_5.readFeatures(json_Lahagaon_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lahagaon_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lahagaon_5.addFeatures(features_Lahagaon_5);
var lyr_Lahagaon_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Lahagaon_5, 
                style: style_Lahagaon_5,
                popuplayertitle: "Lahagaon",
                interactive: true,
                title: '<img src="styles/legend/Lahagaon_5.png" /> Lahagaon'
            });
var format_KirkeeBoundary_6 = new ol.format.GeoJSON();
var features_KirkeeBoundary_6 = format_KirkeeBoundary_6.readFeatures(json_KirkeeBoundary_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KirkeeBoundary_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KirkeeBoundary_6.addFeatures(features_KirkeeBoundary_6);
var lyr_KirkeeBoundary_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KirkeeBoundary_6, 
                style: style_KirkeeBoundary_6,
                popuplayertitle: "Kirkee Boundary",
                interactive: true,
                title: '<img src="styles/legend/KirkeeBoundary_6.png" /> Kirkee Boundary'
            });
var format_PimpreChinchwadboundary_7 = new ol.format.GeoJSON();
var features_PimpreChinchwadboundary_7 = format_PimpreChinchwadboundary_7.readFeatures(json_PimpreChinchwadboundary_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PimpreChinchwadboundary_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PimpreChinchwadboundary_7.addFeatures(features_PimpreChinchwadboundary_7);
var lyr_PimpreChinchwadboundary_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PimpreChinchwadboundary_7, 
                style: style_PimpreChinchwadboundary_7,
                popuplayertitle: "Pimpre Chinchwad boundary",
                interactive: true,
                title: '<img src="styles/legend/PimpreChinchwadboundary_7.png" /> Pimpre Chinchwad boundary'
            });
var format_PuneGeoBoundary_8 = new ol.format.GeoJSON();
var features_PuneGeoBoundary_8 = format_PuneGeoBoundary_8.readFeatures(json_PuneGeoBoundary_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PuneGeoBoundary_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PuneGeoBoundary_8.addFeatures(features_PuneGeoBoundary_8);
var lyr_PuneGeoBoundary_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PuneGeoBoundary_8, 
                style: style_PuneGeoBoundary_8,
                popuplayertitle: "Pune Geo Boundary",
                interactive: true,
                title: '<img src="styles/legend/PuneGeoBoundary_8.png" /> Pune Geo Boundary'
            });
var format_Route43Pop1000mtrs_9 = new ol.format.GeoJSON();
var features_Route43Pop1000mtrs_9 = format_Route43Pop1000mtrs_9.readFeatures(json_Route43Pop1000mtrs_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Route43Pop1000mtrs_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Route43Pop1000mtrs_9.addFeatures(features_Route43Pop1000mtrs_9);
var lyr_Route43Pop1000mtrs_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Route43Pop1000mtrs_9, 
                style: style_Route43Pop1000mtrs_9,
                popuplayertitle: "Route 43 Pop 1000 mtrs",
                interactive: true,
                title: '<img src="styles/legend/Route43Pop1000mtrs_9.png" /> Route 43 Pop 1000 mtrs'
            });
var format_Route43Pop500mtrs_10 = new ol.format.GeoJSON();
var features_Route43Pop500mtrs_10 = format_Route43Pop500mtrs_10.readFeatures(json_Route43Pop500mtrs_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Route43Pop500mtrs_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Route43Pop500mtrs_10.addFeatures(features_Route43Pop500mtrs_10);
var lyr_Route43Pop500mtrs_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Route43Pop500mtrs_10, 
                style: style_Route43Pop500mtrs_10,
                popuplayertitle: "Route 43 Pop 500 mtrs",
                interactive: true,
                title: '<img src="styles/legend/Route43Pop500mtrs_10.png" /> Route 43 Pop 500 mtrs'
            });
var format_Route43Pop250mtrs_11 = new ol.format.GeoJSON();
var features_Route43Pop250mtrs_11 = format_Route43Pop250mtrs_11.readFeatures(json_Route43Pop250mtrs_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Route43Pop250mtrs_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Route43Pop250mtrs_11.addFeatures(features_Route43Pop250mtrs_11);
var lyr_Route43Pop250mtrs_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Route43Pop250mtrs_11, 
                style: style_Route43Pop250mtrs_11,
                popuplayertitle: "Route 43 Pop 250 mtrs",
                interactive: true,
                title: '<img src="styles/legend/Route43Pop250mtrs_11.png" /> Route 43 Pop 250 mtrs'
            });
var format_Route43Pop100mtrs_12 = new ol.format.GeoJSON();
var features_Route43Pop100mtrs_12 = format_Route43Pop100mtrs_12.readFeatures(json_Route43Pop100mtrs_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Route43Pop100mtrs_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Route43Pop100mtrs_12.addFeatures(features_Route43Pop100mtrs_12);
var lyr_Route43Pop100mtrs_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Route43Pop100mtrs_12, 
                style: style_Route43Pop100mtrs_12,
                popuplayertitle: "Route 43 Pop 100 mtrs",
                interactive: true,
                title: '<img src="styles/legend/Route43Pop100mtrs_12.png" /> Route 43 Pop 100 mtrs'
            });
var format_PunePOI_13 = new ol.format.GeoJSON();
var features_PunePOI_13 = format_PunePOI_13.readFeatures(json_PunePOI_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PunePOI_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PunePOI_13.addFeatures(features_PunePOI_13);
var lyr_PunePOI_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PunePOI_13, 
                style: style_PunePOI_13,
                popuplayertitle: "Pune POI",
                interactive: true,
                title: '<img src="styles/legend/PunePOI_13.png" /> Pune POI'
            });
var format_Route43DMtrs_14 = new ol.format.GeoJSON();
var features_Route43DMtrs_14 = format_Route43DMtrs_14.readFeatures(json_Route43DMtrs_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Route43DMtrs_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Route43DMtrs_14.addFeatures(features_Route43DMtrs_14);
var lyr_Route43DMtrs_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Route43DMtrs_14, 
                style: style_Route43DMtrs_14,
                popuplayertitle: "Route 43D Mtrs",
                interactive: true,
                title: '<img src="styles/legend/Route43DMtrs_14.png" /> Route 43D Mtrs'
            });
var format_43Dstops_15 = new ol.format.GeoJSON();
var features_43Dstops_15 = format_43Dstops_15.readFeatures(json_43Dstops_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_43Dstops_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_43Dstops_15.addFeatures(features_43Dstops_15);
var lyr_43Dstops_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_43Dstops_15, 
                style: style_43Dstops_15,
                popuplayertitle: "43-D stops",
                interactive: true,
    title: '43-D stops<br />\
    <img src="styles/legend/43Dstops_15_0.png" /> 1.0<br />\
    <img src="styles/legend/43Dstops_15_1.png" /> 10.0<br />\
    <img src="styles/legend/43Dstops_15_2.png" /> 11.0<br />\
    <img src="styles/legend/43Dstops_15_3.png" /> 12.0<br />\
    <img src="styles/legend/43Dstops_15_4.png" /> 13.0<br />\
    <img src="styles/legend/43Dstops_15_5.png" /> 14.0<br />\
    <img src="styles/legend/43Dstops_15_6.png" /> 15.0<br />\
    <img src="styles/legend/43Dstops_15_7.png" /> 16.0<br />\
    <img src="styles/legend/43Dstops_15_8.png" /> 17.0<br />\
    <img src="styles/legend/43Dstops_15_9.png" /> 18.0<br />\
    <img src="styles/legend/43Dstops_15_10.png" /> 19.0<br />\
    <img src="styles/legend/43Dstops_15_11.png" /> 2.0<br />\
    <img src="styles/legend/43Dstops_15_12.png" /> 20.0<br />\
    <img src="styles/legend/43Dstops_15_13.png" /> 3.0<br />\
    <img src="styles/legend/43Dstops_15_14.png" /> 4.0<br />\
    <img src="styles/legend/43Dstops_15_15.png" /> 5.0<br />\
    <img src="styles/legend/43Dstops_15_16.png" /> 6.0<br />\
    <img src="styles/legend/43Dstops_15_17.png" /> 7.0<br />\
    <img src="styles/legend/43Dstops_15_18.png" /> 8.0<br />\
    <img src="styles/legend/43Dstops_15_19.png" /> 9.0<br />\
    <img src="styles/legend/43Dstops_15_20.png" /> <br />'
        });
var format_Route43DStats_16 = new ol.format.GeoJSON();
var features_Route43DStats_16 = format_Route43DStats_16.readFeatures(json_Route43DStats_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Route43DStats_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Route43DStats_16.addFeatures(features_Route43DStats_16);
var lyr_Route43DStats_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Route43DStats_16, 
                style: style_Route43DStats_16,
                popuplayertitle: "Route 43D Stats",
                interactive: true,
                title: '<img src="styles/legend/Route43DStats_16.png" /> Route 43D Stats'
            });
var format_Route43UMtrs_17 = new ol.format.GeoJSON();
var features_Route43UMtrs_17 = format_Route43UMtrs_17.readFeatures(json_Route43UMtrs_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Route43UMtrs_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Route43UMtrs_17.addFeatures(features_Route43UMtrs_17);
var lyr_Route43UMtrs_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Route43UMtrs_17, 
                style: style_Route43UMtrs_17,
                popuplayertitle: "Route 43U Mtrs",
                interactive: true,
                title: '<img src="styles/legend/Route43UMtrs_17.png" /> Route 43U Mtrs'
            });
var format_43UStops_18 = new ol.format.GeoJSON();
var features_43UStops_18 = format_43UStops_18.readFeatures(json_43UStops_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_43UStops_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_43UStops_18.addFeatures(features_43UStops_18);
var lyr_43UStops_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_43UStops_18, 
                style: style_43UStops_18,
                popuplayertitle: "43-U Stops",
                interactive: true,
    title: '43-U Stops<br />\
    <img src="styles/legend/43UStops_18_0.png" /> 1.0<br />\
    <img src="styles/legend/43UStops_18_1.png" /> 10.0<br />\
    <img src="styles/legend/43UStops_18_2.png" /> 11.0<br />\
    <img src="styles/legend/43UStops_18_3.png" /> 12.0<br />\
    <img src="styles/legend/43UStops_18_4.png" /> 13.0<br />\
    <img src="styles/legend/43UStops_18_5.png" /> 14.0<br />\
    <img src="styles/legend/43UStops_18_6.png" /> 15.0<br />\
    <img src="styles/legend/43UStops_18_7.png" /> 16.0<br />\
    <img src="styles/legend/43UStops_18_8.png" /> 17.0<br />\
    <img src="styles/legend/43UStops_18_9.png" /> 18.0<br />\
    <img src="styles/legend/43UStops_18_10.png" /> 19.0<br />\
    <img src="styles/legend/43UStops_18_11.png" /> 2.0<br />\
    <img src="styles/legend/43UStops_18_12.png" /> 20.0<br />\
    <img src="styles/legend/43UStops_18_13.png" /> 3.0<br />\
    <img src="styles/legend/43UStops_18_14.png" /> 4.0<br />\
    <img src="styles/legend/43UStops_18_15.png" /> 5.0<br />\
    <img src="styles/legend/43UStops_18_16.png" /> 6.0<br />\
    <img src="styles/legend/43UStops_18_17.png" /> 7.0<br />\
    <img src="styles/legend/43UStops_18_18.png" /> 8.0<br />\
    <img src="styles/legend/43UStops_18_19.png" /> 9.0<br />\
    <img src="styles/legend/43UStops_18_20.png" /> <br />'
        });
var format_Route43UStats_19 = new ol.format.GeoJSON();
var features_Route43UStats_19 = format_Route43UStats_19.readFeatures(json_Route43UStats_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Route43UStats_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Route43UStats_19.addFeatures(features_Route43UStats_19);
var lyr_Route43UStats_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Route43UStats_19, 
                style: style_Route43UStats_19,
                popuplayertitle: "Route 43U Stats",
                interactive: true,
                title: '<img src="styles/legend/Route43UStats_19.png" /> Route 43U Stats'
            });
var format_PuneStoppop510_20 = new ol.format.GeoJSON();
var features_PuneStoppop510_20 = format_PuneStoppop510_20.readFeatures(json_PuneStoppop510_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PuneStoppop510_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PuneStoppop510_20.addFeatures(features_PuneStoppop510_20);
var lyr_PuneStoppop510_20 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PuneStoppop510_20, 
                style: style_PuneStoppop510_20,
                popuplayertitle: "Pune Stop pop 5 10",
                interactive: true,
    title: 'Pune Stop pop 5 10<br />\
    <img src="styles/legend/PuneStoppop510_20_0.png" /> 5 min<br />\
    <img src="styles/legend/PuneStoppop510_20_1.png" /> 10 min<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_Pimpalesaudagar_1.setVisible(true);lyr_Pimple_2.setVisible(true);lyr_Keshavnagar_3.setVisible(true);lyr_Yavatmal_4.setVisible(true);lyr_Lahagaon_5.setVisible(true);lyr_KirkeeBoundary_6.setVisible(true);lyr_PimpreChinchwadboundary_7.setVisible(true);lyr_PuneGeoBoundary_8.setVisible(true);lyr_Route43Pop1000mtrs_9.setVisible(true);lyr_Route43Pop500mtrs_10.setVisible(true);lyr_Route43Pop250mtrs_11.setVisible(true);lyr_Route43Pop100mtrs_12.setVisible(true);lyr_PunePOI_13.setVisible(true);lyr_Route43DMtrs_14.setVisible(true);lyr_43Dstops_15.setVisible(true);lyr_Route43DStats_16.setVisible(true);lyr_Route43UMtrs_17.setVisible(true);lyr_43UStops_18.setVisible(true);lyr_Route43UStats_19.setVisible(true);lyr_PuneStoppop510_20.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Pimpalesaudagar_1,lyr_Pimple_2,lyr_Keshavnagar_3,lyr_Yavatmal_4,lyr_Lahagaon_5,lyr_KirkeeBoundary_6,lyr_PimpreChinchwadboundary_7,lyr_PuneGeoBoundary_8,lyr_Route43Pop1000mtrs_9,lyr_Route43Pop500mtrs_10,lyr_Route43Pop250mtrs_11,lyr_Route43Pop100mtrs_12,lyr_PunePOI_13,lyr_Route43DMtrs_14,lyr_43Dstops_15,lyr_Route43DStats_16,lyr_Route43UMtrs_17,lyr_43UStops_18,lyr_Route43UStats_19,lyr_PuneStoppop510_20];
lyr_Pimpalesaudagar_1.set('fieldAliases', {'shapeName': 'shapeName', 'shapeISO': 'shapeISO', 'shapeID': 'shapeID', 'shapeGroup': 'shapeGroup', 'shapeType': 'shapeType', });
lyr_Pimple_2.set('fieldAliases', {'shapeName': 'shapeName', 'shapeISO': 'shapeISO', 'shapeID': 'shapeID', 'shapeGroup': 'shapeGroup', 'shapeType': 'shapeType', });
lyr_Keshavnagar_3.set('fieldAliases', {'shapeName': 'shapeName', 'shapeISO': 'shapeISO', 'shapeID': 'shapeID', 'shapeGroup': 'shapeGroup', 'shapeType': 'shapeType', });
lyr_Yavatmal_4.set('fieldAliases', {'shapeName': 'shapeName', 'shapeISO': 'shapeISO', 'shapeID': 'shapeID', 'shapeGroup': 'shapeGroup', 'shapeType': 'shapeType', });
lyr_Lahagaon_5.set('fieldAliases', {'shapeName': 'shapeName', 'shapeISO': 'shapeISO', 'shapeID': 'shapeID', 'shapeGroup': 'shapeGroup', 'shapeType': 'shapeType', });
lyr_KirkeeBoundary_6.set('fieldAliases', {'shapeName': 'shapeName', 'shapeISO': 'shapeISO', 'shapeID': 'shapeID', 'shapeGroup': 'shapeGroup', 'shapeType': 'shapeType', });
lyr_PimpreChinchwadboundary_7.set('fieldAliases', {'shapeName': 'shapeName', 'shapeISO': 'shapeISO', 'shapeID': 'shapeID', 'shapeGroup': 'shapeGroup', 'shapeType': 'shapeType', });
lyr_PuneGeoBoundary_8.set('fieldAliases', {'shapeName': 'shapeName', 'shapeISO': 'shapeISO', 'shapeID': 'shapeID', 'shapeGroup': 'shapeGroup', 'shapeType': 'shapeType', });
lyr_Route43Pop1000mtrs_9.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', '_count': '_count', '_sum': '_sum', '_mean': '_mean', 'Pop': 'Pop', });
lyr_Route43Pop500mtrs_10.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', '_count': '_count', '_sum': '_sum', '_mean': '_mean', 'Pop': 'Pop', });
lyr_Route43Pop250mtrs_11.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', '_count': '_count', '_sum': '_sum', '_mean': '_mean', 'Pop': 'Pop', });
lyr_Route43Pop100mtrs_12.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', '_count': '_count', '_sum': '_sum', '_mean': '_mean', 'Pop': 'Pop', });
lyr_PunePOI_13.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', '_count': '_count', '_sum': '_sum', '_mean': '_mean', 'Pop': 'Pop', 'Offices': 'Offices', 'Public Off': 'Public Off', 'Temple': 'Temple', 'Signal': 'Signal', });
lyr_Route43DMtrs_14.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_43Dstops_15.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Route_Name': 'Route_Name', 'Stg': 'Stg', 'RouteCode': 'RouteCode', 'Stop_Code': 'Stop_Code', 'Direction': 'Direction', 'K__M_': 'K__M_', 'Lat': 'Lat', 'Long': 'Long', 'Ticket_Fair': 'Ticket_Fair', });
lyr_Route43DStats_16.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'OPTIONS': 'OPTIONS', 'FROM_ID': 'FROM_ID', 'TO_ID': 'TO_ID', 'Time': 'Time', 'Gas': 'Gas', });
lyr_Route43UMtrs_17.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_43UStops_18.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Route_Name': 'Route_Name', 'Stg': 'Stg', 'RouteCode': 'RouteCode', 'Stop_Code': 'Stop_Code', 'Direction': 'Direction', 'K__M_': 'K__M_', 'Lat': 'Lat', 'Long': 'Long', 'Ticket_Fair': 'Ticket_Fair', });
lyr_Route43UStats_19.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'OPTIONS': 'OPTIONS', 'FROM_ID': 'FROM_ID', 'TO_ID': 'TO_ID', 'Time': 'Time', 'Fuel': 'Fuel', });
lyr_PuneStoppop510_20.set('fieldAliases', {'ID': 'ID', 'CENTER_LON': 'CENTER_LON', 'CENTER_LAT': 'CENTER_LAT', 'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'TOTAL_POP': 'TOTAL_POP', });
lyr_Pimpalesaudagar_1.set('fieldImages', {'shapeName': 'TextEdit', 'shapeISO': 'TextEdit', 'shapeID': 'TextEdit', 'shapeGroup': 'TextEdit', 'shapeType': 'TextEdit', });
lyr_Pimple_2.set('fieldImages', {'shapeName': 'TextEdit', 'shapeISO': 'TextEdit', 'shapeID': 'TextEdit', 'shapeGroup': 'TextEdit', 'shapeType': 'TextEdit', });
lyr_Keshavnagar_3.set('fieldImages', {'shapeName': 'TextEdit', 'shapeISO': 'TextEdit', 'shapeID': 'TextEdit', 'shapeGroup': 'TextEdit', 'shapeType': 'TextEdit', });
lyr_Yavatmal_4.set('fieldImages', {'shapeName': 'TextEdit', 'shapeISO': 'TextEdit', 'shapeID': 'TextEdit', 'shapeGroup': 'TextEdit', 'shapeType': 'TextEdit', });
lyr_Lahagaon_5.set('fieldImages', {'shapeName': 'TextEdit', 'shapeISO': 'TextEdit', 'shapeID': 'TextEdit', 'shapeGroup': 'TextEdit', 'shapeType': 'TextEdit', });
lyr_KirkeeBoundary_6.set('fieldImages', {'shapeName': 'TextEdit', 'shapeISO': 'TextEdit', 'shapeID': 'TextEdit', 'shapeGroup': 'TextEdit', 'shapeType': 'TextEdit', });
lyr_PimpreChinchwadboundary_7.set('fieldImages', {'shapeName': 'TextEdit', 'shapeISO': 'TextEdit', 'shapeID': 'TextEdit', 'shapeGroup': 'TextEdit', 'shapeType': 'TextEdit', });
lyr_PuneGeoBoundary_8.set('fieldImages', {'shapeName': 'TextEdit', 'shapeISO': 'TextEdit', 'shapeID': 'TextEdit', 'shapeGroup': 'TextEdit', 'shapeType': 'TextEdit', });
lyr_Route43Pop1000mtrs_9.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', '_count': 'TextEdit', '_sum': 'TextEdit', '_mean': 'TextEdit', 'Pop': 'TextEdit', });
lyr_Route43Pop500mtrs_10.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', '_count': 'TextEdit', '_sum': 'TextEdit', '_mean': 'TextEdit', 'Pop': 'TextEdit', });
lyr_Route43Pop250mtrs_11.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', '_count': 'TextEdit', '_sum': 'TextEdit', '_mean': 'TextEdit', 'Pop': 'TextEdit', });
lyr_Route43Pop100mtrs_12.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', '_count': 'TextEdit', '_sum': 'TextEdit', '_mean': 'TextEdit', 'Pop': 'TextEdit', });
lyr_PunePOI_13.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', '_count': 'TextEdit', '_sum': 'TextEdit', '_mean': 'TextEdit', 'Pop': 'TextEdit', 'Offices': 'TextEdit', 'Public Off': 'TextEdit', 'Temple': 'TextEdit', 'Signal': 'TextEdit', });
lyr_Route43DMtrs_14.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_43Dstops_15.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Route_Name': 'TextEdit', 'Stg': 'TextEdit', 'RouteCode': 'TextEdit', 'Stop_Code': 'TextEdit', 'Direction': 'TextEdit', 'K__M_': 'TextEdit', 'Lat': 'TextEdit', 'Long': 'TextEdit', 'Ticket_Fair': 'TextEdit', });
lyr_Route43DStats_16.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'OPTIONS': 'TextEdit', 'FROM_ID': 'TextEdit', 'TO_ID': 'TextEdit', 'Time': 'Range', 'Gas': 'Range', });
lyr_Route43UMtrs_17.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_43UStops_18.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Route_Name': 'TextEdit', 'Stg': 'TextEdit', 'RouteCode': 'TextEdit', 'Stop_Code': 'TextEdit', 'Direction': 'TextEdit', 'K__M_': 'TextEdit', 'Lat': 'TextEdit', 'Long': 'TextEdit', 'Ticket_Fair': 'TextEdit', });
lyr_Route43UStats_19.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'OPTIONS': 'TextEdit', 'FROM_ID': 'TextEdit', 'TO_ID': 'TextEdit', 'Time': 'Range', 'Fuel': 'Range', });
lyr_PuneStoppop510_20.set('fieldImages', {'ID': 'TextEdit', 'CENTER_LON': 'TextEdit', 'CENTER_LAT': 'TextEdit', 'AA_MINS': 'TextEdit', 'AA_MODE': 'TextEdit', 'TOTAL_POP': 'TextEdit', });
lyr_Pimpalesaudagar_1.set('fieldLabels', {'shapeName': 'header label - visible with data', 'shapeISO': 'hidden field', 'shapeID': 'hidden field', 'shapeGroup': 'hidden field', 'shapeType': 'hidden field', });
lyr_Pimple_2.set('fieldLabels', {'shapeName': 'header label - visible with data', 'shapeISO': 'hidden field', 'shapeID': 'hidden field', 'shapeGroup': 'hidden field', 'shapeType': 'hidden field', });
lyr_Keshavnagar_3.set('fieldLabels', {'shapeName': 'header label - visible with data', 'shapeISO': 'hidden field', 'shapeID': 'hidden field', 'shapeGroup': 'hidden field', 'shapeType': 'hidden field', });
lyr_Yavatmal_4.set('fieldLabels', {'shapeName': 'header label - visible with data', 'shapeISO': 'hidden field', 'shapeID': 'hidden field', 'shapeGroup': 'hidden field', 'shapeType': 'hidden field', });
lyr_Lahagaon_5.set('fieldLabels', {'shapeName': 'header label - visible with data', 'shapeISO': 'hidden field', 'shapeID': 'hidden field', 'shapeGroup': 'hidden field', 'shapeType': 'hidden field', });
lyr_KirkeeBoundary_6.set('fieldLabels', {'shapeName': 'header label - visible with data', 'shapeISO': 'hidden field', 'shapeID': 'hidden field', 'shapeGroup': 'hidden field', 'shapeType': 'hidden field', });
lyr_PimpreChinchwadboundary_7.set('fieldLabels', {'shapeName': 'header label - visible with data', 'shapeISO': 'hidden field', 'shapeID': 'hidden field', 'shapeGroup': 'hidden field', 'shapeType': 'hidden field', });
lyr_PuneGeoBoundary_8.set('fieldLabels', {'shapeName': 'header label - visible with data', 'shapeISO': 'hidden field', 'shapeID': 'hidden field', 'shapeGroup': 'hidden field', 'shapeType': 'hidden field', });
lyr_Route43Pop1000mtrs_9.set('fieldLabels', {'Name': 'header label - visible with data', 'descriptio': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMo': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', '_count': 'hidden field', '_sum': 'hidden field', '_mean': 'hidden field', 'Pop': 'inline label - visible with data', });
lyr_Route43Pop500mtrs_10.set('fieldLabels', {'Name': 'header label - visible with data', 'descriptio': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMo': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', '_count': 'hidden field', '_sum': 'hidden field', '_mean': 'hidden field', 'Pop': 'inline label - visible with data', });
lyr_Route43Pop250mtrs_11.set('fieldLabels', {'Name': 'header label - visible with data', 'descriptio': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMo': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', '_count': 'hidden field', '_sum': 'hidden field', '_mean': 'hidden field', 'Pop': 'inline label - visible with data', });
lyr_Route43Pop100mtrs_12.set('fieldLabels', {'Name': 'header label - visible with data', 'descriptio': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMo': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', '_count': 'hidden field', '_sum': 'hidden field', '_mean': 'hidden field', 'Pop': 'inline label - visible with data', });
lyr_PunePOI_13.set('fieldLabels', {'Name': 'header label - always visible', 'descriptio': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMo': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', '_count': 'hidden field', '_sum': 'hidden field', '_mean': 'hidden field', 'Pop': 'inline label - visible with data', 'Offices': 'inline label - visible with data', 'Public Off': 'inline label - visible with data', 'Temple': 'inline label - visible with data', 'Signal': 'inline label - visible with data', });
lyr_Route43DMtrs_14.set('fieldLabels', {'Name': 'header label - visible with data', 'descriptio': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMo': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_43Dstops_15.set('fieldLabels', {'Name': 'header label - visible with data', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Route_Name': 'inline label - visible with data', 'Stg': 'inline label - visible with data', 'RouteCode': 'inline label - visible with data', 'Stop_Code': 'inline label - visible with data', 'Direction': 'inline label - visible with data', 'K__M_': 'inline label - visible with data', 'Lat': 'inline label - visible with data', 'Long': 'inline label - visible with data', 'Ticket_Fair': 'inline label - visible with data', });
lyr_Route43DStats_16.set('fieldLabels', {'DIST_KM': 'inline label - visible with data', 'DURATION_H': 'inline label - visible with data', 'PROFILE': 'inline label - visible with data', 'PREF': 'hidden field', 'OPTIONS': 'hidden field', 'FROM_ID': 'hidden field', 'TO_ID': 'hidden field', 'Time': 'inline label - always visible', 'Gas': 'header label - visible with data', });
lyr_Route43UMtrs_17.set('fieldLabels', {'Name': 'header label - visible with data', 'descriptio': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMo': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_43UStops_18.set('fieldLabels', {'Name': 'header label - visible with data', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Route_Name': 'inline label - visible with data', 'Stg': 'inline label - visible with data', 'RouteCode': 'inline label - visible with data', 'Stop_Code': 'inline label - visible with data', 'Direction': 'inline label - visible with data', 'K__M_': 'inline label - visible with data', 'Lat': 'inline label - visible with data', 'Long': 'inline label - visible with data', 'Ticket_Fair': 'inline label - visible with data', });
lyr_Route43UStats_19.set('fieldLabels', {'DIST_KM': 'inline label - visible with data', 'DURATION_H': 'inline label - visible with data', 'PROFILE': 'inline label - visible with data', 'PREF': 'hidden field', 'OPTIONS': 'hidden field', 'FROM_ID': 'hidden field', 'TO_ID': 'hidden field', 'Time': 'inline label - visible with data', 'Fuel': 'header label - visible with data', });
lyr_PuneStoppop510_20.set('fieldLabels', {'ID': 'hidden field', 'CENTER_LON': 'inline label - visible with data', 'CENTER_LAT': 'inline label - visible with data', 'AA_MINS': 'inline label - visible with data', 'AA_MODE': 'inline label - visible with data', 'TOTAL_POP': 'header label - visible with data', });
lyr_PuneStoppop510_20.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});