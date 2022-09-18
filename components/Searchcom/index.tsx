
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { useRouter } from 'next/router';
import { useState } from "react";
import { searchApi } from '../../services/api.service';

export default function FreeSolo() {
  const router = useRouter()
  // const searchValue: any = useRef("");
  // console.log(searchValue.current.value, "searchvalue");
  const [searchValue, setSearchValue] = useState()
  const [searchData, setSearchData] = useState([])
  console.log(searchValue);
  console.log(searchData);

  const SearchApiCall = async () => {
    const datakey = { searchValue };
    const url = "/core/search-media-content/";
    try {
      const data = await searchApi(url, datakey);
      console.log("dataforsearch", data);
      setSearchData(data)
    } catch (err) {
      console.log(err);
    }
  };
  const handlesearchkey = (event: any) => {
    setSearchValue(event.target.value)
  }

  const redirect = async (event) => {
    router.push(`search/${event}`)
    console.log(event, "event");

  }
  return (
    <div className='  '>
      {/* <div className=' absolute z-50  top-3 left-0 text-gray-300 '>
        <SearchIcon />
      </div> */}

      <Autocomplete
        // className=' ml-8'
        freeSolo
        id="free-solo-2-demo"
        disableClearable={true}
        clearIcon={false}
        selectOnFocus
        // clearOnBlur
        handleHomeEndKeys
        // onChange={(event: any) => { handlesearchkey(event); SearchApiCall(); }}
        style={{ color: "#FFFFFF", backgroundColor: "#FFFFFF", borderRadius: "10px" }
        }
        options={searchData.map((option) => option.title)}
        // onChange={redirect}
        onChange={(e, value) => redirect(value)}
        // onChange={(value: any) => { redirect(value.id); }}
        renderInput={(params) => (

          <TextField
            // onClick={redirect}
            {...params}
            // ref={searchValue}
            // onClick={(event) => { func1(event); func2();}}
            onChange={(event: any) => { handlesearchkey(event); SearchApiCall(); }}
            // label="Search input"
            placeholder="Search What You Want"
            InputProps={{
              ...params.InputProps,
              type: 'search',
            }}
          />


        )}
      />
    </div>




  );
}

