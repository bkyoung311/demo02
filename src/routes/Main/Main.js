import React, { Component } from 'react';
import { Header, JourneyMap, Navigate, Info, KeyNote } from '../../components';
import './Main.css';

class Main extends Component {
  render() {
    return (
        <div>
            <JourneyMap/>
            <div>
                <Navigate 
                    question="위암 진단을 받으셨습니까?"
                    button1="예"
                    button2="아니오"
                    link1='/nd3_op'
                    link2='/nd2_scr'
                /> 
                <section>
                <Info 
                    title="위암은 위에서 시작한 암입니다."
                    content="blah blah blah"
                />
                </section>
            </div>
            <KeyNote 
                title="checklist"
                content={["위암은 조기진단...", "영상검사"]}
            /> 
        </div>
    );
  }
}

export default Main;