import React from "react";
 import { useForm,FormProvider } from "react-hook-form";
 import MyForm from './MyForm';
import './App.css';
 const App=()=>{
  const methods=useForm();

  return(
    <FormProvider {...methods}>
      <MyForm/>
    </FormProvider>
  );
 };
 export default App;