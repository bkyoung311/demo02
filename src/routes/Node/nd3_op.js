import React, { Component } from 'react';
import { Header, JourneyMap, Navigate, Info, KeyNote } from '../../components';

class Nd3_op extends Component {
  render() {
    return (
        <div>
            <JourneyMap/>

            <div className='Navigate'>
                <Navigate 
                    question="의사에게 수술 혹은 내시경적 치료가 가능하다고 들었습니까?"
                    button1="예"
                    button2="아니오"
                    link1='/nd4a_adj'
                    link2='/nd2_scr'
                /> 
            </div>
            <div className='Info'>
                <Info 
                    title="위암의 생존률과 완치율."
                    content="blah blah blah"
                />
            </div>

            <KeyNote 
                title="체크리스트"
                content={["위암의 완치를 위해서는...", "수술적 제거가 가능한지..."]}
            /> 
        </div>
    );
  }
}

export default Nd3_op;