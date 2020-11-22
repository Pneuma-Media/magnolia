import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { isPopup } from '../store/actions/popup';



const useTimeout = () => {

    const dispatch = useDispatch();
    
    useEffect(() => {
        const timeoutBody = () => {
            console.log('timer');
            dispatch(isPopup(true));
        }

        let timer = null;
        timer = setTimeout(timeoutBody, 60000);

        const mouseListener = () => {
            clearTimeout(timer);
            timer = setTimeout(timeoutBody, 60000);
            console.log('mouse move');
        }

        window.addEventListener('mousemove', mouseListener);

        return () => {
            clearTimeout(timer);
            removeEventListener('mousemove', mouseListener);
        }

    }, []);
}

export default useTimeout;