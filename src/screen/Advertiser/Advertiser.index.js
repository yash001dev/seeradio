import React, { useReducer } from 'react'
import Stepper from 'react-stepper-horizontal';
import { useState } from 'react';
import AdvertiserForm from '../AdvertiserForm/AdvertiserForm.index';
import AddOrderForm from './../AddOrderForm/AddOrderForm.index';
import {StepperReducer,initialState} from './stepper.reducer';

function Advertiser() {

    function functionForwaredStepper(e){
        console.log("sds");
        dispatch({type:'increment'});
    }


    function functionPreviousStepper(){
        dispatch({type:'decrement'})
    }

    const [state,dispatch]=useReducer(StepperReducer,initialState);
    return (
        <div>
             <Stepper steps={ [{title: 'Step One'}, {title: 'Step Two',href: 'www.google.com'}, {title: 'Step Three'}, {title: 'Step Four'}] } activeStep={ state.step} />
            {console.log("STATE:",state.step)}
            
            {state.step===0?<AdvertiserForm forward={functionForwaredStepper} backward={functionPreviousStepper}/>:null}
            {state.step===1?<AddOrderForm/>:null}


        </div>
    )
}

export default Advertiser