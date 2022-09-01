import {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAngleUp} from '@fortawesome/free-solid-svg-icons'

export default function App() {
  const [isShown, setIsShown] = useState(false);

  const handleClick = event => {
    
    setIsShown(current => !current);

   
  };

  return (
    <div className='grid place-items-center font-body'>
      <button className='text-xl text-white mt-2'onClick={handleClick}>
      <FontAwesomeIcon icon={faAngleUp}/>
      </button>

      
      {isShown && (
        <div className='text-white mx-4'>
        <p className='text-sm'>Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley</p>
        <h1 className='font-bold text-lg my-4'>Cast</h1>
        <p className='text-sm'>Tasnuva Tisha, Syed Zaman Shaon, Nayan Babu, Kajal Suborno</p>
        <h1 className='font-bold text-lg my-4'>Script Director</h1>
        <p className='text-sm'>Biddut Roy, Animesh Iche</p>
    </div>
      )}

    </div>
  );
}


