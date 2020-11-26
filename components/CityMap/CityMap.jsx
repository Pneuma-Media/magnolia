import GoogleMapReact from 'google-map-react';
import styles from './CityMap.module.scss';
import slots from '../../db/slots';

import PlanImg from '../../assets/plan.jpg';


const CityMap = ({ setIsPopup }) => {

    const onGoogleApiLoaded = (map, maps) => {


        slots.forEach(s => {
            const miamiArea = new maps.Polygon({
                paths: [s.coordinates],
                strokeColor: " #f8bf02",
                // strokeOpacity: 0.1,
                strokeWeight: 2,
                fillColor: " #f8bf02",
                fillOpacity: 0.7,
                // mapTypeId: 'satellite'
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
        historicalOverlay.setOpacity(0.5)
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

        map.setMapTypeId('satellite');
    };




    return (
        <>

            <div className={styles.googleMap}>
                <GoogleMapReact
                    defaultCenter={{ lat: 39.180891, lng: -85.574046 }}
                    // defaultCenter={{ lat: 62.323907, lng: -150.109291 }}
                    // options={{r}}
                    defaultZoom={19}
                    options={{
                        restriction: {
                            latLngBounds: {
                                north: 39.181532,
                                south: 39.180382,
                                west: -85.575646,
                                east: -85.572400,
                            },
                            strictBounds: true,
                        }
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