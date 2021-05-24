import React, { useState } from 'react';

const Counter = () => {
  const [num,setNum]=useState(0);
  const incNum = () =>{
    setNum( num +1)
    num > 0 ? <div className="green" />: <div className="red"/>;
  };
const decNum = () =>{
  if (num>0){
    setNum (num -1 )
  }else {
    setNum(0)
    alert('sorry cant find ');
  }
};


  return(
    <>
        <div className='main_div'>
          <div className='center_div'>
              <h1> {num} </h1>
              <div className='btn_div'>
                <button onClick={incNum}>increase</button>
                <button onClick={decNum}>Decrease</button>
                
            </div>
          </div>
      </div>
    </>
  )
}
export default Counter;