import './assets/css/modal.scss';
import 'aos/dist/aos.css';

import React , { useState } from 'react'
import Aos from 'aos';


function Modal({ setmodal }) {
    Aos.init()
    return (
        <>
            <div style={{ transform: 'translateZ(0) scale(1.2)' }} className="modal" data-aos="zoom-in">
                <div className='modal_close'>
                    <button className='modal_close_button' onClick={() => setmodal(false)}>
                        x
                            </button>
                </div>
                <div className='modal_div'>
                    <div className="modal_div_title">
                        <span>제목입니다.</span>
                    </div>
                    <div className="closebtnbox">
                    </div>
                    <div className="body_div">
                        <div className='img_div'>
                            <div className='img_div_box'>
                                이미지칸입니다
                                </div>
                            <div className='img_div_button'>
                                <button className='img_div_arrow'>
                                    왼쪽
                                    </button>
                                <div className='img_div_page'>
                                    1/10
                                    </div>
                                <button className='img_div_arrow'>
                                    왼쪽
                                    </button>
                            </div>
                        </div>
                        <div className='text_div'>
                            설명칸입니다.
                            </div>
                    </div>
                    <div className='footer_div'>
                        부가설명
                        </div>
                </div>
            </div>
        </>
    );
}

export default Modal;
