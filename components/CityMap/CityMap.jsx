import GoogleMapReact from 'google-map-react';
import styles from './CityMap.module.scss';
import slots from '../../db/slots';

import PlanImg from '../../assets/plan.png';


const CityMap = ({ setIsPopup }) => {

    const onGoogleApiLoaded = (map, maps) => {


        slots.forEach(s => {
            const miamiArea = new maps.Polygon({
                paths: [s.coordinates],
                strokeColor: "#f8bf02",
                // strokeOpacity: 0.1,
                strokeWeight: 2,
                // fillColor: "#f2f2f2",
                fillOpacity: 0,
                //mapTypeId: 'satellite'
            });
            miamiArea.addListener("click", () => setIsPopup(s.id));
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

        map.setMapTypeId('terrain');
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
                                "elementType": "geometry",
                                "stylers": [
                                    {
                                        "color": "#ebe3cd"
                                    }
                                ]
                            },
                            {
                                "elementType": "labels.text.fill",
                                "stylers": [
                                    {
                                        "color": "#523735"
                                    }
                                ]
                            },
                            {
                                "elementType": "labels.text.stroke",
                                "stylers": [
                                    {
                                        "color": "#f5f1e6"
                                    }
                                ]
                            },
                            {
                                "featureType": "administrative",
                                "elementType": "geometry.stroke",
                                "stylers": [
                                    {
                                        "color": "#c9b2a6"
                                    }
                                ]
                            },
                            {
                                "featureType": "administrative.land_parcel",
                                "elementType": "geometry.stroke",
                                "stylers": [
                                    {
                                        "color": "#dcd2be"
                                    }
                                ]
                            },
                            {
                                "featureType": "administrative.land_parcel",
                                "elementType": "labels",
                                "stylers": [
                                    {
                                        "visibility": "off"
                                    }
                                ]
                            },
                            {
                                "featureType": "administrative.land_parcel",
                                "elementType": "labels.text.fill",
                                "stylers": [
                                    {
                                        "color": "#ae9e90"
                                    }
                                ]
                            },
                            {
                                "featureType": "landscape.natural",
                                "elementType": "geometry",
                                "stylers": [
                                    {
                                        "color": "#dfd2ae"
                                    }
                                ]
                            },
                            {
                                "featureType": "poi",
                                "elementType": "geometry",
                                "stylers": [
                                    {
                                        "color": "#dfd2ae"
                                    }
                                ]
                            },
                            {
                                "featureType": "poi",
                                "elementType": "labels.text",
                                "stylers": [
                                    {
                                        "visibility": "off"
                                    }
                                ]
                            },
                            {
                                "featureType": "poi",
                                "elementType": "labels.text.fill",
                                "stylers": [
                                    {
                                        "color": "#93817c"
                                    }
                                ]
                            },
                            {
                                "featureType": "poi.park",
                                "elementType": "geometry.fill",
                                "stylers": [
                                    {
                                        "color": "#a5b076"
                                    }
                                ]
                            },
                            {
                                "featureType": "poi.park",
                                "elementType": "labels.text.fill",
                                "stylers": [
                                    {
                                        "color": "#447530"
                                    }
                                ]
                            },
                            {
                                "featureType": "road",
                                "elementType": "geometry",
                                "stylers": [
                                    {
                                        "color": "#f5f1e6"
                                    }
                                ]
                            },
                            {
                                "featureType": "road.arterial",
                                "elementType": "geometry",
                                "stylers": [
                                    {
                                        "color": "#fdfcf8"
                                    }
                                ]
                            },
                            {
                                "featureType": "road.highway",
                                "elementType": "geometry",
                                "stylers": [
                                    {
                                        "color": "#f8c967"
                                    }
                                ]
                            },
                            {
                                "featureType": "road.highway",
                                "elementType": "geometry.stroke",
                                "stylers": [
                                    {
                                        "color": "#e9bc62"
                                    }
                                ]
                            },
                            {
                                "featureType": "road.highway.controlled_access",
                                "elementType": "geometry",
                                "stylers": [
                                    {
                                        "color": "#e98d58"
                                    }
                                ]
                            },
                            {
                                "featureType": "road.highway.controlled_access",
                                "elementType": "geometry.stroke",
                                "stylers": [
                                    {
                                        "color": "#db8555"
                                    }
                                ]
                            },
                            {
                                "featureType": "road.local",
                                "elementType": "labels",
                                "stylers": [
                                    {
                                        "visibility": "off"
                                    }
                                ]
                            },
                            {
                                "featureType": "road.local",
                                "elementType": "labels.text.fill",
                                "stylers": [
                                    {
                                        "color": "#806b63"
                                    }
                                ]
                            },
                            {
                                "featureType": "transit.line",
                                "elementType": "geometry",
                                "stylers": [
                                    {
                                        "color": "#dfd2ae"
                                    }
                                ]
                            },
                            {
                                "featureType": "transit.line",
                                "elementType": "labels.text.fill",
                                "stylers": [
                                    {
                                        "color": "#8f7d77"
                                    }
                                ]
                            },
                            {
                                "featureType": "transit.line",
                                "elementType": "labels.text.stroke",
                                "stylers": [
                                    {
                                        "color": "#ebe3cd"
                                    }
                                ]
                            },
                            {
                                "featureType": "transit.station",
                                "elementType": "geometry",
                                "stylers": [
                                    {
                                        "color": "#dfd2ae"
                                    }
                                ]
                            },
                            {
                                "featureType": "water",
                                "elementType": "geometry.fill",
                                "stylers": [
                                    {
                                        "color": "#b9d3c2"
                                    }
                                ]
                            },
                            {
                                "featureType": "water",
                                "elementType": "labels.text.fill",
                                "stylers": [
                                    {
                                        "color": "#92998d"
                                    }
                                ]
                            }
                        ]
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