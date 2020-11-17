import { createWrapper } from 'next-redux-wrapper';
import initStore from '../store';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-toastify/dist/ReactToastify.css';
import '../public/fonts/stylesheet.css'
import './index.css';



const MyApp = ({ Component, pageProps }) => {

    let content = (
            <Component {...pageProps} />
    );

    return  content;
}

export const wrapper = createWrapper(initStore, { debug: true });


export default wrapper.withRedux(MyApp);