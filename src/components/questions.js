import React from 'react';

import { ModalTitle, ModalContent, Radio} from '@dhis2/ui';


import colors from '../images/colours.png';
const iframe = '<iframe src="https://codesandbox.io/embed/bold-sun-l4upt?fontsize=14&hidenavigation=1&theme=dark" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" title="bold-sun-l4upt" allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking" sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"></iframe>';


function Questions({question, alternatives, image, information, handleSingleCheck, isChecked, frame}) {
 
  return (
    <>
        <div>
              {question ? <h1>{question}</h1> : <></>}
            <div>        
                <>{information ? <p>{information}</p> : <p></p>}
                {alternatives ? alternatives.map((value, index) => {
                    const choice = Object.keys(value)
                    const value_choice = Object.values(value)
                    return <><Radio
                    dataTest="dhis2-uicore-radio"
                    label={value_choice}
                    name={choice}
                    id={index}
                    onChange={handleSingleCheck}
                    checked={isChecked.includes(String(choice))}
                        />
                </>

                    }): <p></p>}
            {image ? <img src={colors} width="100%" alt="" /> : <></>}
            {frame ? <div dangerouslySetInnerHTML={{__html: iframe}} />: <></>}
            </></div>
    </div>
    </>
  );
}

export default Questions;


/**<Checkbox
dataTest="dhis2-uicore-checkbox"
label={value_choice}
name={choice}
onChange={handleSingleCheck}
checked={isChecked.includes(String(choice))}
/>**/
