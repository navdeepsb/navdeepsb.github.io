import React from "react";

import "./style.scss";


export default class ProjectBannerTpl extends React.Component {
    render() {
        let data        = this.props.data;
        let isImgBanner = !!data.imgSrc;

        let imgEle      = isImgBanner ? <img src={ data.imgSrc } alt={ data.projName + " banner" } /> : null;
        let badgeEle    = data.inProgress ? <span className="badge">In Progress</span> : null;

        return (
            <div className={ "banner img-wrapper" + ( isImgBanner ? "" : " banner--no-img" ) }>
                { imgEle }
                <div className={ "banner__overlay" + ( isImgBanner ? "" : " banner__overlay--no-bkg" ) }>
                    <div className="banner__text-container">
                        <h3>{ data.projName } { badgeEle }</h3>
                        <p>Roles: { data.roles } | { data.duration }</p>
                    </div>
                </div>
            </div>
        );
    }
}