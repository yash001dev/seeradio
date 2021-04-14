import React, { Component } from 'react';
import { Input, Label } from 'reactstrap';
import './FloatingInput.styles.css'

const FloatingInput =(props)=> {

        return (

            <div className='mb-3'>
                 <Label for={props.for} className='fw-bold text-black '>
                    {props.label}
                    <span style={{color:'red',fontSize:'17px'}}><sup>*</sup></span>
                </Label>
                <Input
                    type={props.type}
                    className={props.classes+" "+props.error}
                    id={props.id}
                    placeholder={props.placeholder}
                    value={props.value}
                    onChange={props.onChange}
                    name={props.name}
                    autoComplete={props.autoComplete}
                    maxLength={props.maxLength}
                    disabled={props.disabled}
                />
            </div>
        )
}

export default FloatingInput;
