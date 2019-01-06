import React, { Component } from "react";

export default class HomeBanner extends Component {
  render() {
    return (
        <div class="banner-area mt-30 pb-4 mt-xs-0">
            <div class="container">
                <div class="row">
                    <div class="col-lg-3 col-md-3 col-sm-5 order-1">
                        <div class="img-container img-full fix">
                            <a href="#">
                                <img src="http://demo.hasthemes.com/galio-v6/galio/assets/img/banner/banner_left.jpg" alt=""/>
                            </a>
                        </div>
                    </div>
                    <div class="col-lg-5 col-md-5 order-sm-3 mt-sm-30">
                        <div class="img-container img-full fix mb-30">
                            <a href="#">
                                <img src="http://demo.hasthemes.com/galio-v6/galio/assets/img/banner/banner_static_top1.jpg" alt=""/>
                            </a>
                        </div>
                        <div class="img-container img-full fix mb-30">
                            <a href="#">
                                <img src="http://demo.hasthemes.com/galio-v6/galio/assets/img/banner/banner_static_top2.jpg" alt=""/>
                            </a>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-7 order-2 order-md-3 mt-xs-30">
                        <div class="img-container img-full fix">
                            <a href="#">
                                <img src="http://demo.hasthemes.com/galio-v6/galio/assets/img/banner/banner_static_top3.jpg" alt=""/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
  }
}
