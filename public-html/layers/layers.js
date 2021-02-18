var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://a.tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_SubZonasMicoQuemado_1 = new ol.format.GeoJSON();
var features_SubZonasMicoQuemado_1 = format_SubZonasMicoQuemado_1.readFeatures(json_SubZonasMicoQuemado_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SubZonasMicoQuemado_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SubZonasMicoQuemado_1.addFeatures(features_SubZonasMicoQuemado_1);
var lyr_SubZonasMicoQuemado_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SubZonasMicoQuemado_1, 
                style: style_SubZonasMicoQuemado_1,
                interactive: true,
    title: 'Sub Zonas Mico Quemado<br />\
    <img src="styles/legend/SubZonasMicoQuemado_1_0.png" /> Recuperación<br />\
    <img src="styles/legend/SubZonasMicoQuemado_1_1.png" /> Uso Restringido<br />\
    <img src="styles/legend/SubZonasMicoQuemado_1_2.png" /> Uso Sostenible de Recursos Naturales<br />'
        });
var format_AldeasMicoQuemado_2 = new ol.format.GeoJSON();
var features_AldeasMicoQuemado_2 = format_AldeasMicoQuemado_2.readFeatures(json_AldeasMicoQuemado_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AldeasMicoQuemado_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AldeasMicoQuemado_2.addFeatures(features_AldeasMicoQuemado_2);
var lyr_AldeasMicoQuemado_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AldeasMicoQuemado_2, 
                style: style_AldeasMicoQuemado_2,
                interactive: true,
    title: 'Aldeas Mico Quemado<br />\
    <img src="styles/legend/AldeasMicoQuemado_2_0.png" /> Arenas Blancas<br />\
    <img src="styles/legend/AldeasMicoQuemado_2_1.png" /> Brisas del Norte<br />\
    <img src="styles/legend/AldeasMicoQuemado_2_2.png" /> Buenos Aires del Norte<br />\
    <img src="styles/legend/AldeasMicoQuemado_2_3.png" /> Buenos Aires o Paujiles<br />\
    <img src="styles/legend/AldeasMicoQuemado_2_4.png" /> El Bálsamo<br />\
    <img src="styles/legend/AldeasMicoQuemado_2_5.png" /> El Capulín<br />\
    <img src="styles/legend/AldeasMicoQuemado_2_6.png" /> El Junco<br />\
    <img src="styles/legend/AldeasMicoQuemado_2_7.png" /> El Porvenir del Norte o El Cam<br />\
    <img src="styles/legend/AldeasMicoQuemado_2_8.png" /> El Robledal<br />\
    <img src="styles/legend/AldeasMicoQuemado_2_9.png" /> Guanchías Crique<br />\
    <img src="styles/legend/AldeasMicoQuemado_2_10.png" /> Guaymitas Viejo o El Castaño<br />\
    <img src="styles/legend/AldeasMicoQuemado_2_11.png" /> La Guacamaya<br />\
    <img src="styles/legend/AldeasMicoQuemado_2_12.png" /> La Laguna<br />\
    <img src="styles/legend/AldeasMicoQuemado_2_13.png" /> La Majada<br />\
    <img src="styles/legend/AldeasMicoQuemado_2_14.png" /> La Sarrosa<br />\
    <img src="styles/legend/AldeasMicoQuemado_2_15.png" /> Mico Quemado<br />\
    <img src="styles/legend/AldeasMicoQuemado_2_16.png" /> Ojo de Agua<br />\
    <img src="styles/legend/AldeasMicoQuemado_2_17.png" /> San Antonio<br />\
    <img src="styles/legend/AldeasMicoQuemado_2_18.png" /> San Jerónimo<br />\
    <img src="styles/legend/AldeasMicoQuemado_2_19.png" /> San José del Negrito<br />\
    <img src="styles/legend/AldeasMicoQuemado_2_20.png" /> Santa Elena<br />\
    <img src="styles/legend/AldeasMicoQuemado_2_21.png" /> Santa Rita<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_SubZonasMicoQuemado_1.setVisible(true);lyr_AldeasMicoQuemado_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_SubZonasMicoQuemado_1,lyr_AldeasMicoQuemado_2];
lyr_SubZonasMicoQuemado_1.set('fieldAliases', {'nombre': 'nombre', 'categoria': 'categoria', 'inst_legal': 'inst_legal', 'sub_zona': 'sub_zona', 'sector': 'sector', 'ýrea_ha': 'ýrea_ha', 'zona_1': 'zona_1', 'shape_leng': 'shape_leng', 'shape_area': 'shape_area', });
lyr_AldeasMicoQuemado_2.set('fieldAliases', {'cod_caseri': 'cod_caseri', 'caserio': 'caserio', 'sex_h': 'sex_h', 'sex_m': 'sex_m', 'ed_0a10': 'ed_0a10', 'ed_11a20': 'ed_11a20', 'ed_21a30': 'ed_21a30', 'ed_31a40': 'ed_31a40', 'ed_41a50': 'ed_41a50', 'ed_51a60': 'ed_51a60', 'ed_61a70': 'ed_61a70', 'ed_71a80': 'ed_71a80', 'ed_81a90': 'ed_81a90', 'ed_91a100': 'ed_91a100', 'ed__101': 'ed__101', 'dd_codigo': 'dd_codigo', 'dm_codigo': 'dm_codigo', 'da_codigo': 'da_codigo', 'dc_codigo': 'dc_codigo', 'cod_muni': 'cod_muni', 'cod_aldea': 'cod_aldea', 'pob_total': 'pob_total', 'categoría': 'categoría', 'municipio': 'municipio', 'departamen': 'departamen', 'aldea': 'aldea', 'cod_dpto': 'cod_dpto', 'cod_catego': 'cod_catego', });
lyr_SubZonasMicoQuemado_1.set('fieldImages', {'nombre': 'TextEdit', 'categoria': 'TextEdit', 'inst_legal': 'TextEdit', 'sub_zona': 'TextEdit', 'sector': 'TextEdit', 'ýrea_ha': 'TextEdit', 'zona_1': 'TextEdit', 'shape_leng': 'TextEdit', 'shape_area': 'TextEdit', });
lyr_AldeasMicoQuemado_2.set('fieldImages', {'cod_caseri': 'TextEdit', 'caserio': 'TextEdit', 'sex_h': 'TextEdit', 'sex_m': 'TextEdit', 'ed_0a10': 'TextEdit', 'ed_11a20': 'TextEdit', 'ed_21a30': 'TextEdit', 'ed_31a40': 'TextEdit', 'ed_41a50': 'TextEdit', 'ed_51a60': 'TextEdit', 'ed_61a70': 'TextEdit', 'ed_71a80': 'TextEdit', 'ed_81a90': 'TextEdit', 'ed_91a100': 'TextEdit', 'ed__101': 'TextEdit', 'dd_codigo': 'TextEdit', 'dm_codigo': 'TextEdit', 'da_codigo': 'TextEdit', 'dc_codigo': 'TextEdit', 'cod_muni': 'TextEdit', 'cod_aldea': 'TextEdit', 'pob_total': 'TextEdit', 'categoría': 'TextEdit', 'municipio': 'TextEdit', 'departamen': 'TextEdit', 'aldea': 'TextEdit', 'cod_dpto': 'TextEdit', 'cod_catego': 'Range', });
lyr_SubZonasMicoQuemado_1.set('fieldLabels', {'nombre': 'inline label', 'categoria': 'inline label', 'inst_legal': 'inline label', 'sub_zona': 'inline label', 'sector': 'inline label', 'ýrea_ha': 'inline label', 'zona_1': 'inline label', 'shape_leng': 'inline label', 'shape_area': 'inline label', });
lyr_AldeasMicoQuemado_2.set('fieldLabels', {'cod_caseri': 'inline label', 'caserio': 'inline label', 'sex_h': 'inline label', 'sex_m': 'inline label', 'ed_0a10': 'inline label', 'ed_11a20': 'inline label', 'ed_21a30': 'inline label', 'ed_31a40': 'inline label', 'ed_41a50': 'inline label', 'ed_51a60': 'inline label', 'ed_61a70': 'inline label', 'ed_71a80': 'inline label', 'ed_81a90': 'inline label', 'ed_91a100': 'inline label', 'ed__101': 'inline label', 'dd_codigo': 'inline label', 'dm_codigo': 'inline label', 'da_codigo': 'inline label', 'dc_codigo': 'inline label', 'cod_muni': 'inline label', 'cod_aldea': 'inline label', 'pob_total': 'inline label', 'categoría': 'inline label', 'municipio': 'inline label', 'departamen': 'inline label', 'aldea': 'inline label', 'cod_dpto': 'inline label', 'cod_catego': 'inline label', });
lyr_AldeasMicoQuemado_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});