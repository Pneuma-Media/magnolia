import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { isPopup } from '../store/actions/popup';



const useTimeout = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        const timeoutBody = () => {
            console.log('start')
            dispatch(isPopup(true));
        }

        let timer = null;
        timer = setTimeout(timeoutBody, 600000);

        const mouseListener = () => {
            clearTimeout(timer);
            console.log('start - event')
            timer = setTimeout(timeoutBody, 600000);
        }

        window.addEventListener('mousemove', mouseListener);

        return () => {
            clearTimeout(timer);
            removeEventListener('mousemove', mouseListener);
        }

    }, []);
}

export default useTimeout;