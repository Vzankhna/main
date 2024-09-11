import React, { useContext} from 'react';
import './Service.scss'

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} 
from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import MyContext from '../../Common/Context/Mycontext';

const Service = () => {
    const {service} = useContext(MyContext);
 
return (
    <div className='service'>
        <p>We have got the answers to your questions</p>
        <Accordion allowZeroExpanded>
            {service.map((item) => (
                <>
                <div className="accordian">
                <AccordionItem key={item.id}>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                              {item.heading}
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        {item.content}
                    </AccordionItemPanel>
                </AccordionItem>
                </div>
                </>
            ))}
        </Accordion>
    </div>
    );
}

export default Service;
