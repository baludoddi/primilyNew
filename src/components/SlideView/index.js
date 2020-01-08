import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import "../../styles/slideview.css";


const Wrapper = styled.div`
    width: 100%;
`;

const Page = styled.div`
    width: 100%;
`;



const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
};

export default class SlideView extends React.Component {
    render() {
        return (
            <Wrapper>
                <Slider {...settings}>
                    <Page><img src="/img/call-overview-sm.png"/></Page>
                    <Page><img src="/img/call-overview-9.png"/></Page>
                    <Page><img src="/img/call-overview-9.png"/></Page>
                </Slider>
            </Wrapper>
        );
    }
}
