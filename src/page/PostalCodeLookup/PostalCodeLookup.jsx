import {useTheme} from "@emotion/react";
import {
    Box,
    Button,
    FormControl,
    InputLabel,
    MenuItem,
    OutlinedInput,
    Select,
    Stack,
    TextField,
    Typography,
} from "@mui/material";
import React, {useEffect, useState} from "react";
import postOffice from "../../images/Rectangle 35.png";
import frame from "../../images/Frame.png";
import axios from '../../API/axios'
import useForm from "../../Hooks/useForm";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

// const postalcodes = {
//   'Akarawita':'10732' ,
//   'Hanwella':'10650' ,
//   'Pannipitiya': '10230',
//   'Angamuwa':'10150' ,
//   'Hewainna':'10714',
//   'Piliyandala':'10300',
//   'Avissawella':'10700' ,
//   'Hiripitya':'10232' ,
//   'Pitipana Homagama':'10206',
//   'Batawala':'10513',
//   'Hokandara':'10118',
//   'Polgasowita':'10320',
//   'Battaramulla':'10120',
//   'Homagama':'10200',
//   'Puwakpitiya':'10712',
//   'Batugampola':'10526',
//   'Horagala':'10502',
//   'Ranala':'10654',
//   'Bope':'10522',
//   'Kaduwela':'10640',
//   'Siddamulla':'10304',
//   'Boralesgamuwa':'10290',
//   'Kahawala':'10508',
//   'Slave Island':'00200',
//   'Borella':'800',
//   'Kalatuwawa':'10718',
//   'Sri Jayawardenapura':'10100',
//   'Dedigamuwa':'10656',
//   'Madapatha':'10306',
//   'Talawatugoda':'10116',
//   'Dehiwala':'10350',
//   'Maharagama':'10280',
//   'Tummodara':'10682',
//   'Deltara':'10302',
//   'Malabe':'10115',
//   'Waga':'10680',
//   'Habarakada':'10204',
//   'Meegoda':'10504',
//   'Watareka':'10511',
//   'Handapangoda':'10524',
//   'Padukka':'10500'
// }

const postalcodes = {

    "Angunakolawewa": "91302", "Ettiliwewa": "91250", "Randeniya": "91204",
    "Ayiwela": "91516", "Galabedda": "91008", "Ruwalwela": "91056",
    "Badalkumbura": "91070", "Hambegamuwa": "91308", "Sella Kataragama ": "91405",
    "Baduluwela": "91058", "Hulandawa": "91004", "Sewanagala": "70250",
    "Bakinigahawela": "91554", "Inginiyagala": "91040", "Siyambalagune": "91202",
    "Balaharuwa": "91295", "Kandaudapanguwa": "91032", "Siyambalanduwa": "91030",
    "Bibile": "91500", "Kandawinna": "91552", "Suriara": "91306",
    "Buddama": "91038", "Mahagama Colony": "70256", "Tanamalwila": "91300",
    "Buttala": "91100", "Marawa": "91006", "Uva Gangodagama": "91054",
    "Dambagalla": "91050", "Mariarawa": "91052", "Uva Kudaoya": "91298",
    "Diyakobala": "91514", "Medagana": "91550", "Uva Pelawatta": "91112",
    "Dombagahawela": "91010", "Obbegoda": "91007", "Warunagama": "91198",
    "Ekamutugama": "70254", "Okkampitiya": "91060", "Wedikumbura": "91005",
    "Ekiriyankumbura": "91502", "Pangura": "91002",
    "Ethimalewewa": "91020", "Pitakumbura": "91505",
}

const Provinces = [
    'Western Province',
    'Central Province',
    'Southern Province',
    'Northern Province',
    'Eastern Province',
    'North Western Province',
    'North Central Province',
    'Uva Province',
    'Sabaragamuwa Province',
];

const names = [
    'Akarawita',
    'Hanwella',
    'Pannipitiya',
    'Angamuwa',
    'Hewainna',
    'Piliyandala',
    'Avissawella',
    'Hiripitya',
    'Pitipana Homagama',
    'Batawala',
    'Hokandara',
    'Polgasowita',
    'Battaramulla',
    'Homagama',
    'Puwakpitiya',
    'Batugampola',
    'Horagala',
    'Ranala',
    'Bope',
    'Kaduwela',
    'Siddamulla',
    'Boralesgamuwa',
    'Kahawala',
    'Slave Island',
    'Borella',
    'Kalatuwawa',
    'Sri Jayawardenapura',
    'Dedigamuwa',
    'Madapatha',
    'Talawatugoda',
    'Dehiwala',
    'Maharagama',
    'Tummodara',
    'Deltara',
    'Malabe',
    'Waga',
    'Habarakada',
    'Meegoda',
    'Watareka',
    'Handapangoda',
    'Padukka',

]

function PostalCodeLookup() {

    const theme = useTheme();
    const [province, setProvince] = useState([]);

    const [selectedCity, setSelectedCity] = useState('');
    const [postalCode, setPostalCode] = useState('');

    const [searchMode, setSearchMode] = useState('postalCode');
    const [searchValue, setSearchValue] = useState('');
    const [postOfficeNames, setPostOfficeNames] = useState('')

    const [postOfficeInfos, setPostOfficeInfos] = useState([]);

    useEffect(() => {
        const fetchPostInfo = async () => {
            console.log("Fetching info")
            try {
                const response = await axios.get("/api/postofficeinfo"); // Using relative path
                setPostOfficeInfos(response.data);
                console.log(postOfficeInfos)

            } catch (error) {
                console.error("Error fetching requests:", error);
            }

        };

        fetchPostInfo();
    }, []);


    const getFreshModel = () => ({
        name: "",
        postalCode: "",
        province: "",
    });

    const {values, setValues, errors, setErrors, handleInputChange} =
        useForm(getFreshModel);

    const handleSearchModeToggle = () => {
        setSearchMode((prevMode) =>
            prevMode === 'postalCode' ? 'city' : 'postalCode'
        );
        setProvince('');
        setSelectedCity('');
        setPostalCode('');
        setSearchValue('');
    };

    const handleSearchInputChange = (event) => {
        setSearchValue(event.target.value);
    };

    const handleSearch = () => {

        if (searchMode === 'postalCode') {
            console.log(searchValue)
            // const postOffice = Object.keys(postalcodes).find(
            //   (code) =>
            //     postalcodes[code].toLowerCase() ===
            //     searchValue.toLowerCase()
            // );
            const postFoundOffice = postOfficeInfos.find(postOffice => postOffice.postalCode === postalCode)
            setSelectedCity(postFoundOffice)

            // if(!selectedCity){
            //   setSelectedCity('Postal Code Not Found in the Database')
            // }
        }
    };


    const handleCityChange = (event) => {
        const selectedValue = event.target.value;
        setSelectedCity(selectedValue);

        if (postalcodes[selectedValue]) {
            setPostalCode(postalcodes[selectedValue]);
        } else {
            setPostalCode('');
        }
    };

    const codeOptions = Object.keys(postalcodes).map((city) => (
        <MenuItem key={city} value={city}>
            {city}
        </MenuItem>
    ));


    const handlePostalCodeChange = (event) => {
        const enteredPostalCode = event.target.value;

        if (postalcodes[enteredPostalCode]) {
            const postOfficeName = postalcodes[enteredPostalCode].city;
            setSelectedCity(postOfficeName);
        } else {
            // Postal code not found in the data
            console.log('Postal Code Not Found');
        }
    };

    // axios.post('/api/postalcodes', postalcodes)
    // .then(response => {
    //   if (response.status === 200) {
    //     console.log(response)
    //   } else {
    //     console.log('Invalid credentials. Please try again.');
    //   }
    //   })
    //   .catch(error => {
    //   console.error('Error during login:', error);
    //   console.log('Something went wrong during login.');
    //   })

    const handleChange = (event) => {
        const {
            target: {value},
        } = event;
        setProvince(
            // On autofill we get a stringified value.
            typeof value === "string" ? value.split(",") : value
        );
        if (selectedCity) {
            setProvince('Uva Province')
        }
    };

    console.log(selectedCity)


    return (
        <>
            <Stack
                direction='column'
                justifyContent='center'
                alignItems='center'
                spacing={2}
            >
                {/* <Stack direction={"column"}> */}
                {/* <Typography
          marginBottom={2}
          padding={1}
          bgcolor={"#D9D9D9"}
          width={"100%"}
          variant='h6'
          color={"#131485"}
          borderRadius={2}
        > */}
                {/* Inquires */}
                {/* </Typography> */}
                <Typography
                    marginBottom={2}
                    bgcolor={"#D9D9D9"}
                    paddingLeft={50}
                    paddingRight={50}
                    paddingTop={2}
                    paddingBottom={2}
                    borderRadius={2}
                    color={"#131485"} variant='h4'>
                    Postal Code Lookup
                </Typography>
                <Typography>
                    This allows users to find the postal code of any post office in Sri
                    Lanka, simplifying the process of addressing mail accurately and
                    ensuring smooth and efficient mail delivery.
                </Typography>
                <Stack direction={"row"}>
                    <Stack spacing={2} direction={"column"}>
                        <Typography
                            cursor='pointer'
                            onClick={handleSearchModeToggle} color={"#131485"} variant='h7'>
                            {searchMode !== 'postalCode' ? 'Do You Want to Search By Post Office Name?' : 'Do You Want to Search By Postal Code?'}
                        </Typography>
                        {searchMode !== 'postalCode' ? (
                            <Stack
                                borderRadius={2}
                                borderColor={"#131485"}
                                border={2}
                                padding={2}
                                spacing={2}
                                direction={"column"}
                            >
                                <Typography color={"#131485"} variant='h7'>
                                    {searchMode === 'postalCode' ? 'Search By Postal Code' : 'Search By Post Office Name'}
                                </Typography>
                                <FormControl sx={{m: 1, width: 300}}>
                                    <InputLabel id='demo-multiple-name-label'>
                                        Select Post office Name
                                    </InputLabel>
                                    <Select
                                        labelId='demo-multiple-name-label'
                                        id='demo-multiple-name'
                                        value={selectedCity}
                                        // onChange={handleChange}
                                        onChange={handleCityChange}
                                        input={<OutlinedInput label='Select Post office Name'/>}
                                        MenuProps={MenuProps}
                                    >
                                        {/* {cityOptions.map((city) => (
                    <MenuItem key={city} value={city}>
                      {city}
                    </MenuItem>
                  ))} */}
                                        {/*
                  <MenuItem ></MenuItem>
                  {codeOptions}
                   */}

                                        {postOfficeInfos.map((info) => (
                                            <MenuItem key={info.id} value={info}>
                                                {info.name}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>

                                <TextField
                                    id='outlined-basic'
                                    InputLabelProps={{shrink: selectedCity}}
                                    disabled
                                    label="Province"
                                    name="Province"
                                    variant='outlined'
                                    value={selectedCity.province}
                                    onChange={handleInputChange}
                                />
                                <Button variant='contained'
                                        onClick={handleChange}
                                >OK</Button>
                            </Stack>) : (
                            <Stack
                                borderRadius={2}
                                borderColor={"#131485"}
                                border={2}
                                padding={2}
                                spacing={2}
                                direction={"column"}
                            >
                                <Typography color={"#131485"} variant='h7'>
                                    Search By Postal Code
                                </Typography>
                                <TextField
                                    id='outlined-basic'
                                    label='Enter the postal code'
                                    variant='outlined'
                                    value={postalCode}
                                    // onChange={handleSearchInputChange}
                                    // onKeyUpCapture={handleSearchInputChange}
                                    onChange={e => setPostalCode(e.target.value)}
                                />
                                <Button variant='contained' onClick={handleSearch}>OK</Button>
                            </Stack>
                        )}

                        <Stack
                            borderRadius={2}
                            borderColor={"#131485"}
                            border={2}
                            padding={2}
                            spacing={2}
                            direction={"column"}
                        >
                            <Typography color={"#131485"} variant='h7'>
                                {searchMode === 'postalCode' ? 'Your Post Office Name' : 'Your Postal Code'}
                            </Typography>
                            <TextField
                                id='outlined-basic'
                                InputLabelProps={{shrink: selectedCity}}
                                disabled
                                label={searchMode === 'postalCode' ? 'Post Office Name' : 'Postal Code'}
                                variant='outlined'
                                value={searchMode === 'postalCode' ? selectedCity?.name ?? "Not found" : selectedCity?.postalCode}
                                onChange={handlePostalCodeChange}
                            />
                        </Stack>

                    </Stack>
                    <img width={500} src={postOffice}/>
                </Stack>
                <img src={frame}/>
            </Stack>
            <Box marginBottom={6} height={20} bgcolor={"#131485"}></Box>
        </>
    );
}

export default PostalCodeLookup;
