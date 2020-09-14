
import React from 'react';

import Tour from 'reactour'


function TourView(props) {

  const { isOpen, setIsOpen, steps} = props

  function handleChange(event){
    setIsOpen(event)
  }

  return (
    <div >
      <Tour
        steps={steps}
        isOpen={isOpen}
        value={isOpen}
        onRequestClose={() => handleChange(false)}
         />
    </div>

)
}
export default TourView;
