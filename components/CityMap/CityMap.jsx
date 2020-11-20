import GoogleMapReact from 'google-map-react';
import  styles from'./CityMap.module.scss';
import slots from '../../db/slots';



const CityMap = ({setIsPopup}) => {

    const onGoogleApiLoaded = (map, maps) => {


        slots.forEach(s => {
            const miamiArea = new maps.Polygon({
                paths: [s.coordinates],
                strokeColor: " #f8bf02",
                strokeOpacity: 0.1,
                //strokeWeight: 2,
                fillColor: " #f8bf02",
                fillOpacity: 0.7,
                // mapTypeId: 'satellite'
            });
            miamiArea.addListener("click", () => setIsPopup(s.id));
            miamiArea.setMap(map);
        });

    
        
        
        map.setMapTypeId('satellite');
    };




    return (
        <>

            <div className={styles.googleMap}>
                <GoogleMapReact
                    defaultCenter={{ lat: 43.59176, lng: -110.8261967 }}
                    defaultZoom={21}
                    yesIWantToUseGoogleMapApiInternals
                    bootstrapURLKeys={{ key: "AIzaSyBBSfAH534TTMRHC2XRgaTjYiRhKpV2Crg" }}
                    onGoogleApiLoaded={({ map, maps }) => onGoogleApiLoaded(map, maps)}

                />
            </div>
        </>
    )
}

export default CityMap;