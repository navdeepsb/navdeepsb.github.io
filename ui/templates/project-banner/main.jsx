import React from "react";

import "./style.scss";


export default class ProjectBannerTpl extends React.Component {
    render() {
        let data        = this.props.data;
        let isImgBanner = !!data.imgSrc;

        let imgEle      = isImgBanner ? <img src={ data.imgSrc } alt={ data.projName + " banner" } /> : null;
        let creditEle   = data.imgCredit ? <ImageCreditEle data={ data.imgCredit } /> : null;
        let badgeEle    = data.inProgress ? <span className="badge">In Progress</span> : null;

        return (
            <div className="banner__outer">
                <div className={ "banner img-wrapper" + ( isImgBanner ? "" : " banner--no-img" ) }>
                    { imgEle }
                    <div className={ "banner__overlay" + ( !isImgBanner || data.noOverlayOnImgWanted ? " banner__overlay--no-bkg" : "" ) }>
                        <div className="banner__text-container">
                            <h3>{ data.projName } { badgeEle }</h3>
                            <p>Roles: { data.roles } | { data.duration }</p>
                        </div>
                    </div>
                </div>
                { creditEle }
            </div>
        );
    }
}


class ImageCreditEle extends React.Component {
    render() {
        let data = this.props.data;

        return (
            <p className="img-credit">Photo by <a href={ data.link } rel="nofollow" target="_blank" tabIndex="-1" title={ data.author }>{ data.author }</a></p>
        );
    }
}