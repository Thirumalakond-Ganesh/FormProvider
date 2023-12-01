import React from "react";
import { useFormContext } from "react-hook-form";
import InputA from './InputA';
import InputB from "./InputB";



const MyForm=()=>{
    const {handleSubmit}=useFormContext();

    const onSubmit=(data)=>{
        console.log(data);
    };

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <h2>FormProvider Example</h2>
            <InputA name="inputA"/>
            <InputB name="inputB"/>
            <button type="submit">Submit</button>
        </form>
    );
};
export default MyForm;