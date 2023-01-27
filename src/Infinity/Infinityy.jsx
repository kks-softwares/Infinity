import React, { useEffect } from 'react';
import Slider from "react-slick";
import ocean from '../assets/ocean.jpg'

const Infinityy = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };


    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, zIndex: '99', marginLeft: '4vw', backgroundColor: 'gray' }}
                onClick={onClick}
            />
        );
    }

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, zIndex: '99', marginRight: '4vw', backgroundColor: 'gray' }}
                onClick={onClick}
            />
        );
    }

    useEffect(() => {
        setInterval(() => {
            document.getElementById('btn_boxtwo').style.height = '0px'
        }, 3000);

        setInterval(() => {
            document.getElementById('btn_boxtwo').style.height = '81%'
        }, 4000);

        setInterval(() => {
            document.getElementById('box_ulone').style.width = '0px'
        }, 3000);

        setInterval(() => {
            document.getElementById('box_ulone').style.width = '9%'
        }, 4000);

        setInterval(() => {
            document.getElementById('box_ultwo').style.width = '0px'
        }, 3000);

        setInterval(() => {
            document.getElementById('box_ultwo').style.width = '20.5%'
        }, 4000);
        
        // return () => clearTimeout(timer);
      }, []);
    

    return (
        <div className='container mt-2' style={{ border: '1px solid gray', height: 'auto', paddingBottom: '5vw', boxShadow: '1px 0px 15px 10px #706666' }}>
            <div className='row' style={{ padding: '5vw' }}>
                <div className='col-md-6'>
                    <h1 className='header_lorem'>Lorem Ipsum</h1>
                    <h6>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        It has survived not only five centuries, but also the leap into electronic typesetting,
                        remaining essentially unchanged.</h6>
                </div>
                <div className='col-md-6'>
                    <span><img src={ocean} className="image_oc" /></span>
                </div>
            </div>
            <div className='row' style={{ background: 'cornflowerblue' }}>
                <div className='col-md-6' style={{ marginTop: '2vw',padding:'5vw' }}>
                    <h1 className='header_lorem2'>Lorem Ipsum</h1>
                    <h6>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        It has survived not only five centuries.</h6>
                    <button type="button" className="btn btn-outline-light mt-4" style={{ marginLeft: '4vw' }}>Learn More</button>
                </div>
                <div className='col-md-6'>
                    <Slider {...settings} style={{ marginTop: '0.5vw',paddingTop: '3vw' }}>
                        <div>
                            <img src='https://picsum.photos/200' className='corousel_pc' />
                        </div>
                        <div>
                            <img src='https://picsum.photos/201' className='corousel_pc' />
                        </div>
                        <div>
                            <img src='https://picsum.photos/202' className='corousel_pc' />
                        </div>
                        <div>
                            <img src='https://picsum.photos/203' className='corousel_pc' />
                        </div>
                        <div>
                            <img src='https://picsum.photos/204' className='corousel_pc' />
                        </div>
                        <div>
                            <img src='https://picsum.photos/205' className='corousel_pc' />
                        </div>
                    </Slider>
                </div>
            </div>
            <div className='btn_boxone'>
                <div id='btn_boxtwo'></div>
                <ul>
                    <li className='mt-5 box_li'>
                        <label id='box_ulone'></label>
                        <button style={{ height: '6vw', width: '12vw',marginLeft: '6vw' }} type="button" className="btn btn-primary box_btn_one">BOX 1</button>
                    </li>
                    <li className='mt-5 box_li'>
                        <label id='box_ultwo'></label>
                        <button style={{ height: '6vw', width: '12vw', marginLeft: '15vw' }} type="button" className="btn btn-primary box_btn_two">BOX 2</button>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Infinityy;