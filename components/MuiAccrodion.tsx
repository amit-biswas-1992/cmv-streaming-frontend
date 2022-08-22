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
                expandIcon={<ExpandMoreIcon className='text-white' />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                className='rounded-2xl'>
                <Typography className='text-white'>What is CMV?</Typography>
                </AccordionSummary>
                <AccordionDetails className=''>
                <Typography className='text-white'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
        <div className='mb-4'>
                <Accordion className=' bg-slate-700 p-3 mx-4 rounded-2xl'>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon className='text-white' />}
                aria-controls="panel2a-content"
                id="panel2a-header"
                className='rounded-2xl'>
                <Typography className='text-white'>How to subscribe?</Typography>
                </AccordionSummary>
                <AccordionDetails className=''>
                <Typography className='text-white'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
        <div className='mb-4'>
                <Accordion className=' bg-slate-700 p-3 mx-4 rounded-2xl'>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon className='text-white ml-auto' />}
                aria-controls="panel3a-content"
                id="panel3a-header"
                className='rounded-2xl'>
                <Typography className='text-white'>Questions Here</Typography>
                </AccordionSummary>
                <AccordionDetails className=''>
                <Typography className='text-white'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
                </AccordionDetails>
            </Accordion>
        </div>     
    </div>
  );
}
