import React from "react";
import { Controller } from "react-hook-form";

const InputA=({name})=>{
    return(
        <Controller name={name} render={({...field})=>(
            <input {...field} placeholder={'InputA'}/>
        )}
        />
    );

};
export default InputA;