import { Box, Stack } from '@mui/material';
import React, { useContext } from 'react'
import InfoIcon from '@mui/icons-material/Info';
import DetailsIcon from '@mui/icons-material/Details';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import CircularProgress from '@mui/material/CircularProgress';
import './Home.css';
import { AppContext } from '../../context/AppContext';

const seeMoreDescription = (event) => {
    event.target.closest('.button-see-more-description').style.display = 'none';

    const seeLessElement = document.querySelector('.button-see-less-description');
    if (seeLessElement) {
      seeLessElement.style.display = 'flex';
    }

    const containerContry = document.querySelector('.container-description-contry');
    if (containerContry) {
        containerContry.style.maxHeight = 'none';
    }

    const description = document.querySelector('.description-contry');
    if (description) {
        description.style.maxHeight = 'none';
    }
}

const seeLessDescription = (event) => {
    event.target.closest('.button-see-less-description').style.display = 'none';

    const seeLessElement = document.querySelector('.button-see-more-description');
    if (seeLessElement) {
      seeLessElement.style.display = 'flex';
    }

    const containerContry = document.querySelector('.container-description-contry');
    if (containerContry) {
        containerContry.style.maxHeight = '260px';
    }

    const description = document.querySelector('.description-contry');
    if (description) {
        description.style.maxHeight = '226px';
    }
}

const Home = () => {

    const {state} = useContext(AppContext);
    const {info, isLoading, error} = state;


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

    const containerFlagStyle = {
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column'
      };
    
    const containerImgStyle = {
        borderRadius:'20px'
    }

    const columnStyle = {
        display:'flex',
        flexDirection:'column'
    }

    const columnTitleStyle = {
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        gap : '5px',
        height:'20px'
    }

    const columnDescriptionStyle = {
        borderRadius:'20px',
        backgroundColor:'#E0E3E5'
    }

    const columnDataStyle = {
        padding:'10px',
        textAlign: 'justify'
    }

    const detailsDataStyle = {
        display:'flex',
        gap:'15px',
        padding:'10px',
        flexDirection:'column'
    }

    const flexStyle ={
        display:'flex',
        gap:'5px',
        backgroundColor:'#B9BEC2',
        borderRadius:'10px',
        padding:'6px'
    }

    const flexWrapStyle = {
        display:'flex',
        flexWrap: 'wrap',
        gap:'5px'
    }

    const centerContainer = {
        textAlign:'center'
    }

    return (
        <Box sx={{ padding: '20px', backgroundColor: '#f0f0f0' }}>
            <div style={containerFlagStyle}>
                <img height={200} style={containerImgStyle} src={info.flagImg} alt='flag icon' ></img>
                <div style={centerContainer}>
                    <h1>Hello, Welcome to the {info.name} page! </h1>
                </div>
            </div>

            <div className="containerInfoCountryStyle">
                <div style={columnStyle}>
                    <div style={columnTitleStyle}>
                        <InfoIcon sx={{ fontSize: 20, color:'#4285F4'}} />
                        <h5>Info</h5>
                    </div>
                    <div className='container-description-contry'>
                        <div  className='description-contry'>{info.description}</div>
                        <div className='button-see-more-description' onClick={seeMoreDescription}><strong>Ver mas</strong> <ExpandMoreIcon sx={{ fontSize: 20, color:'#4285F4'}}/> </div>
                        <div className='button-see-less-description' onClick={seeLessDescription}><strong>Ver menos</strong> <ExpandLessIcon sx={{ fontSize: 20, color:'#4285F4'}}/> </div>
                    </div>
                </div>
                <div style={columnStyle}>
                    <div style={columnTitleStyle}>
                        <DetailsIcon sx={{ fontSize: 20, color:'#4285F4'}} />
                        <h5>Detalles</h5>
                    </div>
                    <div style={columnDescriptionStyle}>
                        <div style={detailsDataStyle}>
                            <div style={flexWrapStyle}>
                                <div style={flexStyle}>
                                    <strong>Capital:</strong>
                                    <span>{info.stateCapital}</span>
                                </div>
                                <div style={flexStyle}>
                                    <strong>Superficie:</strong>
                                    <span>{info.surface}</span>
                                </div>
                                <div style={flexStyle}>
                                    <strong>Población:</strong>
                                    <span>{info.population}</span>
                                </div>
                                <div style={flexStyle}>
                                    <strong>Moneda:</strong>
                                    <span>{info.currency} - {info.currencyCode}</span>
                                </div>
                                <div style={flexStyle}>
                                    <strong>Subregion:</strong>
                                    <span>{info.subRegion} </span>
                                </div>
                                <div style={flexStyle}>
                                    <strong>Fronteras: </strong>
                                    <span>
                                     {info.borders && info.borders.length > 0? (
                                        info.borders.map((b,key) => (
                                            <span key={key}> {b}, </span>
                                        ))
                                     ) : ('No borders available') }
                                     </span>
                                </div>
                                <div style={flexStyle}>
                                    <strong>Phone Prefix:</strong>
                                    <span>{info.phonePrefix} </span>
                                </div>
                                <div style={flexStyle}>
                                    <strong>timeZone:</strong>
                                    <span>{info.timeZone} </span>
                                </div>
                                <div style={flexStyle}>
                                    <strong>Internet Domain:</strong>
                                    <span>{info.internetDomain} </span>
                                </div>
                                <div style={flexStyle}>
                                    <strong>Region:</strong>
                                    <span>{info.region} </span>
                                </div>
                            </div>
                            <div style={flexWrapStyle}>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Box>
    );
}

export default Home;