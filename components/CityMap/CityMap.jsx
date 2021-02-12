import GoogleMapReact from 'google-map-react';
import styles from './CityMap.module.scss';
import slots from '../../db/slots';
import InitMap from '../../UTILS/MapLabel';

import PlanImg from '../../assets/plan.png';


const CityMap = ({slotState, setIsPopup }) => {

    const handlerSlotsStroke = (slotID) =>{
        const slot = slotState.find(s => s.id === slotID);
        let colorStroke = '';

        if(slot.type === 'homes'){
            slot.active ? colorStroke = '#25D1A0' : colorStroke = '#a3a0a0';
        }
        if(slot.type === 'model_homes'){
            slot.active ? colorStroke = '#ac000e' : colorStroke = '#ac000e'; 
        }

        return  colorStroke;
    }

    const handlerFillColor = (slotID) => {
        const slot = slotState.find(s => s.id === slotID);
        let fillColor = '';

        if(slot.type === 'homes'){
            slot.active ? fillColor = "#ffffff" : fillColor = "#aaaaaa";
        }
        if(slot.type === 'model_homes'){
            slot.active ? fillColor = "#aaaaaa" : fillColor = "#ffffff"; 
        }

      return fillColor;
    }

    const handlerListener = (slotID) => {
        const slot = slotState.find(s => s.id === slotID);
        return slot.active ? true : false
    }

    const onGoogleApiLoaded = (map, maps) => {

        const MapLabel = InitMap();
        slots.forEach(s => {
            console.log(s.id)
            const miamiArea = new maps.Polygon({
                paths: [s.coordinates],
                strokeColor: handlerSlotsStroke(s.id),  //обводка
                // strokeOpacity: 0.1,
                strokeWeight: 2,
                fillColor: handlerFillColor(s.id), //заливка
                fillOpacity: 1,
                geodesic: true,
                zIndex: 50,
                //mapTypeId: 'satellite'
            });
            const centerLat = (s.coordinates[0].lat + s.coordinates[2].lat) / 2;
            const centerLng = (s.coordinates[0].lng + s.coordinates[2].lng) / 2;
            var mapLabel = new MapLabel({
                text: s.id,
                position: new maps.LatLng(centerLat, centerLng),
                map: map,
                fontSize: 16,
                align: 'center',
                zIndex: 100,
            });

            miamiArea.addListener("click", () => handlerListener(s.id) && setIsPopup(s.id));
            // miamiArea.addListener("mouseover", () => {
            //     marker.setPosition(event.latLng);
            //     marker.setVisible(true);
            // });
            // miamiArea.addListener("mouseout", () => {
            //     marker.setVisible(false);
            // });
            miamiArea.setMap(map);


        });




        const imageBounds = {
            north: 39.1815335975796,
            south: 39.18037443581315,
            east: -85.57239297142786,
            west: -85.5756373925328,
        };
        const historicalOverlay = new maps.GroundOverlay(
            PlanImg,
            imageBounds
        );
        historicalOverlay.setOpacity(1)
        historicalOverlay.setMap(map);

        // const drawingManager = new maps.drawing.DrawingManager({
        //     drawingMode: google.maps.drawing.OverlayType.MARKER,
        //     drawingControl: true,
        //     drawingControlOptions: {
        //         position: google.maps.ControlPosition.TOP_CENTER,
        //         drawingModes: [

        //             google.maps.drawing.OverlayType.POLYGON,

        //         ],
        //     },
        //     markerOptions: {
        //         icon:
        //             "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
        //     },
        //     polygonOptions: {
        //         fillColor: "#ffff00",
        //         fillOpacity: 1,
        //         strokeWeight: 5,
        //         clickable: false,
        //         editable: true,
        //         // zIndex: 1,
        //     },
        // });
        // drawingManager.setMap(map);

        // maps.event.addListener(drawingManager, 'polygoncomplete', function (polygon) {
        //     // var radius = circle.getRadius();
        //     const cords = polygon.getPath().getArray();
        //     const formatedCords = cords.map(c => {
        //         return {
        //             lng: c.lng(),
        //             lat: c.lat(),
        //         }
        //     });

        //     // console.log(formatedCords);
        //     let stringCords = '';
        //     formatedCords.forEach(c => {
        //         stringCords += `{lng: ${c.lng}, lat: ${c.lat}},\n`;
        //     });

        //     console.log(stringCords);


        // });

        // map.setMapTypeId('terrain');
    };




    return (
        <>

            <div className={styles.googleMap}>
                <GoogleMapReact
                    defaultCenter={{ lat: 39.180891, lng: -85.574046 }}
                    // defaultCenter={{ lat: 62.323907, lng: -150.109291 }}
                    defaultZoom={15}
                    options={{
                        restriction: {
                            latLngBounds: {
                                north: 39.181524,
                                south: 39.180390,
                                west: -85.575638,
                                east: -85.572498,
                            },
                            strictBounds: false,
                        },
                        styles: [
                            {
                                "featureType": "administrative",
                                "elementType": "geometry",
                                "stylers": [
                                    {
                                        "visibility": "off"
                                    }
                                ]
                            },
                            {
                                "featureType": "landscape.man_made",
                                "elementType": "geometry.fill",
                                "stylers": [
                                    {
                                        "visibility": "off"
                                    }
                                ]
                            },
                            {
                                "featureType": "landscape.man_made",
                                "elementType": "geometry.stroke",
                                "stylers": [
                                    {
                                        "visibility": "off"
                                    }
                                ]
                            },
                            {
                                "featureType": "poi",
                                "stylers": [
                                    {
                                        "visibility": "off"
                                    }
                                ]
                            },
                            {
                                "featureType": "road",
                                "elementType": "labels.icon",
                                "stylers": [
                                    {
                                        "visibility": "off"
                                    }
                                ]
                            },
                            {
                                "featureType": "transit",
                                "stylers": [
                                    {
                                        "visibility": "off"
                                    }
                                ]
                            }
                        ]




                        //   
                    }
                    }
                    // restriction={{

                    // }}
                    yesIWantToUseGoogleMapApiInternals
                    bootstrapURLKeys={{ key: "AIzaSyBBSfAH534TTMRHC2XRgaTjYiRhKpV2Crg", /*libraries: "drawing"*/ }}
                    onGoogleApiLoaded={({ map, maps }) => onGoogleApiLoaded(map, maps)}

                />
            </div>
        </>
    )
}

export default CityMap;