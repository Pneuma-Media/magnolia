import GoogleMapReact from 'google-map-react';
import  styles from'./CityMap.module.scss';
import slots from '../../db/slots';



const CityMap = ({setIsPopup}) => {

    const onGoogleApiLoaded = (map, maps) => {


        slots.forEach(s => {
            console.log(s);
            const miamiArea = new maps.Polygon({
                paths: [s.coordinates],
                strokeColor: "#FF0000",
                strokeOpacity: 0.8,
                strokeWeight: 2,
                fillColor: "#0000ff",
                fillOpacity: 0.6,
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