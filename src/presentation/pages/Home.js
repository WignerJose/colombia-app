import { Box } from '@mui/material';
import React from 'react'
import InfoIcon from '@mui/icons-material/Info';
import DetailsIcon from '@mui/icons-material/Details';
import './Home/Home.css';
const Home = () => {

    const containerFlagStyle = {
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column'
      };
    
    const containerImgStyle = {
        borderRadius:'20px'
    }

    const containerInfoCountryStyle = {
        display:'grid',
        gridTemplateColumns:'50% 50%',
        gap:'5px',
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
        fontFamily:'Roboto',
        letterSpacing:'.1rem'
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

    return (
        <Box sx={{ padding: '20px', backgroundColor: '#f0f0f0' }}>
            <div style={containerFlagStyle}>
                <img height={200} style={containerImgStyle} src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/New-Flag-of-the-President-of-Colombia.svg/1200px-New-Flag-of-the-President-of-Colombia.svg.png'></img>
                <div>
                    <h1>Hello, Welcome to the Colombia page! </h1>
                </div>
            </div>

            <div className="containerInfoCountryStyle">
                <div style={columnStyle}>
                    <div style={columnTitleStyle}>
                        <InfoIcon sx={{ fontSize: 20, color:'#4285F4'}} />
                        <h5>Info</h5>
                    </div>
                    <div style={columnDescriptionStyle}>
                        <div style={columnDataStyle}> Colombia, oficialmente República de Colombia, es un país de América del Sur con regiones insulares en América del Norte, cerca de la costa caribeña de Nicaragua, así como en el Océano Pacífico. El territorio continental de Colombia limita al norte con el Mar Caribe, al este y noreste con Venezuela, al sureste con Brasil, al sur y suroeste con Ecuador y Perú, al oeste con el Océano Pacífico y al noroeste con Panamá. Colombia está dividida en 32 departamentos y el Distrito Capital de Bogotá, la ciudad más grande del país. Cubre un área de 1.141.748 kilómetros cuadrados (440.831 millas cuadradas) y tiene una población de 52 millones. El patrimonio cultural de Colombia, que incluye lengua, religión, cocina y arte, refleja su historia como colonia española, fusionando elementos culturales traídos por la inmigración de Europa y Medio Oriente, con los traídos por africanos esclavizados, así como con los de los diversos Civilizaciones indígenas anteriores a la colonización. El español es el idioma oficial del estado, aunque el inglés y otros 64 idiomas son idiomas regionales reconocidos.</div>
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
                                    <span>Bogotá</span>
                                </div>
                                <div style={flexStyle}>
                                    <strong>Superficie:</strong>
                                    <span>1141748</span>
                                </div>
                                <div style={flexStyle}>
                                    <strong>Población:</strong>
                                    <span>52235050</span>
                                </div>
                                <div style={flexStyle}>
                                    <strong>Moneda:</strong>
                                    <span>Colombian Peso - COP</span>
                                </div>
                                <div style={flexStyle}>
                                    <strong>Subregion:</strong>
                                    <span>South America</span>
                                </div>
                                <div style={flexStyle}>
                                    <strong>Fronteras: </strong>
                                    <span>Brazil, Panamá, Ecuador, Venezuela, Perú</span>
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