import React, { useEffect } from 'react';
import { createWrapper } from 'next-redux-wrapper';
import initStore from '../store';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-toastify/dist/ReactToastify.css';
import "react-multi-carousel/lib/styles.css";
import '../public/fonts/stylesheet.css'
import './index.css';
import Head from 'next/head';
import {useRouter} from 'next/router';


const MyApp = ({ Component, pageProps }) => {

    const router = useRouter();

    let content = (
        <>
            {/* <Head>
                <meta name="viewport" content="viewport-fit=cover" />           
             </Head> */}
            <Component {...pageProps} />
        </>
    );

    useEffect(() => {
        if(router.pathname !== '/') router.replace('/');
        router.prefetch('/choose_your_spot');
        router.prefetch('/select_floorplan');
        router.prefetch('/detailed_floorplan');
        router.prefetch('/customize_lnterior');
        router.prefetch('/apply');
    },[]);

    return content;
}

export const wrapper = createWrapper(initStore, { debug: true });


export default wrapper.withRedux(MyApp);