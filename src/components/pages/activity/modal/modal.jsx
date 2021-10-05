import './assets/css/modal.scss';
import './assets/css/modal_mobile.scss';
import 'aos/dist/aos.css';

import { useParams } from 'react-router-dom';
import React , { useState,useEffect } from 'react'
import Aos from 'aos';
import Axios from 'axios';
import { func } from 'prop-types';


function Modal({ setmodal , detail_id }) {
    useEffect(()=>{
        console.log('모달',detail_id)
    },[detail_id])
    const id = useParams().id
    const [data , setdata] = useState()
    const baseurl = 'http://3.35.43.53/'

    useEffect(()=>{
        detail_id !=undefined ?  get_modal_data() : 0
    },[detail_id])

    const get_modal_data = async () => {
        console.log('실행')
        await Axios.get(baseurl+'api/v1/activity/detail/' +detail_id +'/', {
        }).then((response) => {
            console.log(response.data)
            setdata(response.data)
        })
            .catch((error) => {
                console.log(error)
            });
    }

    Aos.init()
    return (
        <div  className="modal" >
            {data != undefined ? 
            
                <div className="modal_div">
                <div className='modal_close'>
                    <button className='modal_close_button' onClick={() => setmodal(false)}>
                        x
                            </button>
                </div>
                <div className='modal_div_des'>
                    <div className="modal_div_title">
                        <span>제목입니다.</span>
                    </div>
                    <Showimg detail_id={detail_id} data={data}></Showimg>
                    <div className="closebtnbox">
                    </div>
                    <div className='footer_div' dangerouslySetInnerHTML={{ __html: data.description }} >
                        </div>
                </div>
                </div>
             :''}
        </div>
    );
}

function Showimg({data,detail_id}){
    const [img_index,set_img_index] = useState(0)
    const baseurl = 'http://3.35.43.53/'
    const change_img_index = (check) => {
        if (check=='plus') {
            if (img_index < data.images.length-1)
            set_img_index(img_index+1)
        }
        if (check=='minus') {
            if (img_index >0 )
            set_img_index(img_index-1)
        }
    }
    const Img_box = ()=>{
        Aos.init()
            return(
            <div className='img_div_box'>
                <img data-aos="fade-right" className='img_div_img' src={baseurl + data.images[img_index]}></img>
            </div>
            )
    }
    Aos.init()
    return(
            <div className="body_div" >
                <div className='img_div'>
                    <Img_box></Img_box>
                    <div   className='img_div_button'>
                        <button onClick={()=>change_img_index('minus')} className='img_div_arrow'>
                            왼쪽
                        </button>
                        <div  className='img_div_page'>
                            {img_index+1} / {data.images.length}
                        </div>
                        <button onClick={()=>change_img_index('plus')} className='img_div_arrow'>
                            오른쪽
                        </button>
                        <button className='img_div_arrow' onClick={() => window.open(baseurl+'api/v1/activity/file/'+ detail_id, '_blank')}>PDF 열기
                        </button>
                    </div>
                </div>
                <div className='text_div'>
                    설명칸입니다.
                    </div>
            </div>
    )
}

export default React.memo(Modal);
