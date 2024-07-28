import { Box, Stack } from '@mui/material';
import MapIcon from '@mui/icons-material/Map';
import { useContext } from 'react';
import { TouristPlaceContext } from '../../context/TouristPlaceContext';
import CircularProgress from '@mui/material/CircularProgress';

import './TouristPlace.css';

const TouristPlace = () => {

    const {state} = useContext(TouristPlaceContext);
    const {touristPlaces, isLoading, error} = state;


    if(isLoading){
        return (
            <Stack sx={{ color: 'grey.500', display:'flex',justifyContent:'center'  }} spacing={2} direction="row">
                <CircularProgress color="secondary" />
            </Stack>
        );
    }

    if(error){
        return <div>Error :{error.message}</div>;
    }
    
    const containerDepartments={
        display:'flex',
        flexDirection:'column',
        gap:'5px'
     }
 
     const columnTitleStyle = {
         display:'flex',
         flexDirection:'row',
         alignItems:'center',
         gap : '5px',
         height:'20px'
     }
 
     const columnContainerList = {
         display:'flex',
         flexDirection:'column',
         gap:'6px'
     }
 
     const cardStyleList = {
         backgroundColor:'white',
         padding:'10px',
         borderRadius:'10px',
         display:'flex',
         flexDirection:'column',
         gap:'5px'
     }
 
     const containerTextCard = {
         display:'grid',
         gridTemplateColumns:'30% 69%',
         gap:'10px'
     }
 
     const containerDetailsCard = {
         display:'inline-flex',
         gap:'5px',
         flexWrap:'wrap'
     }
     const flexStyle ={
         display:'flex',
         gap:'5px',
         backgroundColor:'#F0F0F0',
         borderRadius:'10px',
         padding:'4px',
         fontSize:'13px'
     }

     const containerImgStyle = {
        borderRadius:'15px'
    }

    const styleDescriptionText = {
        textAlign:'justify'
    }
    return (
        <Box sx={{ padding: '20px', backgroundColor: '#f0f0f0' }}>
            <div style={containerDepartments}>
                <div style={columnTitleStyle} >
                    <MapIcon sx={{ fontSize: 20 }} />
                    <h5>Lista de lugares turisticos</h5>
                </div>
                <div style={columnContainerList}>
                    {
                        touristPlaces && touristPlaces.map((place, index) => (
                            <div style={cardStyleList} key={index}>
                                <div className='container-text-card'>
                                    <div style={columnContainerList}>                                
                                        <strong>{place.name}</strong>
                                        <img height={200} style={containerImgStyle}  src={place.image} alt='flag icon' 
                                        ></img>
                                    </div>
                                    <div style={styleDescriptionText}>
                                        {place.description}
                                    </div>
                                </div>
                                <div style={containerDetailsCard}>
                                    <div style={flexStyle}>
                                        <strong>Ciudad:</strong>
                                        <span></span>
                                    </div>
                                    <div style={flexStyle}>
                                        <strong>Ubicacion en el mapa:</strong>
                                        <span></span>
                                    </div>
                                </div>
                        </div>
                        ))
                    }
                </div>
            </div>
        </Box>
    )
}


export default TouristPlace;