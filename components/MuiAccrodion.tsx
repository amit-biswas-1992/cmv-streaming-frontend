import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function SimpleAccordion() {
  return (
    <div>
        <div className='mb-4 font-body'>
                <Accordion className=' bg-slate-700 p-3 mx-4 rounded-2xl'>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon className='text-black' />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                className='rounded-2xl'>
                <Typography className='text-black'>What is CMV?</Typography>
                </AccordionSummary>
                <AccordionDetails className=''>
                <Typography className='text-black'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
        <div className='mb-4'>
                <Accordion className=' bg-slate-700 p-3 mx-4 rounded-2xl'>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon className='text-black' />}
                aria-controls="panel2a-content"
                id="panel2a-header"
                className='rounded-2xl'>
                <Typography className='text-black'>How to subscribe?</Typography>
                </AccordionSummary>
                <AccordionDetails className=''>
                <Typography className='text-black'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
        <div className='mb-4'>
                <Accordion className=' bg-slate-700 p-3 mx-4 rounded-2xl'>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon className='text-black ml-auto' />}
                aria-controls="panel3a-content"
                id="panel3a-header"
                className='rounded-2xl'>
                <Typography className='text-black'>Questions Here</Typography>
                </AccordionSummary>
                <AccordionDetails className=''>
                <Typography className='text-black'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
                </AccordionDetails>
            </Accordion>
        </div>     
    </div>
  );
}
