import React from "react";
import Head from "next/head";

import Global from "./_global.js";
import styles from "./index.scss";

export default class extends React.Component {
    render() {
        return (
            <Global>
                <Head>
                    <title>همایش بزرگ ReactConf</title>
                </Head>
                <div>
                    <div className="reactConf404Page" data-rtl="ltr">
                        <div className="reactConf404Artwork">
                            <img alt="#" src="/static/ReactConfTehran.svg"/>
                        </div>
                        <div className="reactConf404Content">
                            <h1>همایش بزرگ برنامه نویسان <br/> <b>جاوا اسکریپت</b></h1>
                            <h3>تهران امسال خبر های زیادی هست منتظر باشید <br/> بزودی می آییم.</h3>
                            <p>hi@coderconf.ir</p>
                        </div>
                    </div>
                </div>
                <style jsx>{styles}</style>
            </Global>
        );
    }
}
