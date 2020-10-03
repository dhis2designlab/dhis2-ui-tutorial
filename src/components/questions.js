import React, {useState} from 'react';

import { ModalTitle, ModalContent, Checkbox} from '@dhis2/ui';


import colors from '../images/colours.png';


function Questions({question, alternatives, image, information}) {
    const [isChecked, setIsChecked] = useState([]);
    const handleSingleCheck = e => {
        const name = e.name;
        if (isChecked.includes(name[0])) {
           setIsChecked(isChecked.filter(checked_name => checked_name !== name[0]));
          return;
        }
        isChecked.push(name[0]);
        setIsChecked([...isChecked]);
      };
    
  return (
    <>
        <div>
<ModalTitle dataTest="dhis2-uicore-modaltitle">
      {question}
</ModalTitle>
      <ModalContent dataTest="dhis2-uicore-modalcontent">        
          <>{information ? <p>{information}</p> : <p></p>}
          {alternatives ? alternatives.map((value, index) => {
              const choice = Object.keys(value)
              const value_choice = Object.values(value)
              return <><Checkbox
              dataTest="dhis2-uicore-checkbox"
              label={value_choice}
              name={choice}
              onChange={handleSingleCheck}
              checked={isChecked.includes(String(choice))}
          />
          </>
          
              }): <p></p>}
          {image ? <img src={colors} width="100%" alt="image" /> : <></>}
      </></ModalContent>
</div>
    </>
  );
}

export default Questions;


