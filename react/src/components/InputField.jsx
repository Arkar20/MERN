import React from 'react';

const InputField = ({type,placeholder,fun,message}) => (
       <input
                        type={type}
                    placeholder={placeholder}
                        onClick={()=>fun(message)}
                        />
)
export default InputField