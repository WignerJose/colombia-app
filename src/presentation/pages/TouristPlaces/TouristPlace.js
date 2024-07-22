import { Box, Stack } from '@mui/material';
import MapIcon from '@mui/icons-material/Map';

import './TouristPlace.css';

const TouristPlace = () => {

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
                        <div style={cardStyleList}>
                            <div className='container-text-card'>
                                <div style={columnContainerList}>                                
                                    <strong>Hacienda napoles </strong>
                                    <img height={200} style={containerImgStyle}  src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/P%C3%B3rtico_Hacienda_N%C3%A1poles.JPG/800px-P%C3%B3rtico_Hacienda_N%C3%A1poles.JPG" alt='flag icon' ></img>
                                </div>
                                <div style={styleDescriptionText}>
                                    La Hacienda Nápoles es el nombre que tuviera en el pasado lo que hoy se conoce y reconoce como el Parque Temático Hacienda Nápoles, definido como un centro de entretenimiento familiar a espacio abierto, ubicado en Colombia, Puerto Triunfo, Antioquia, cuyo eje central es un enorme santuario para la protección de fauna en peligro o amenazada, grandes atracciones de agua, contenidos culturales, lúdicos y ambientales, y una política constante en rescate y conservación de fauna y flora. A pesar de la asociación que su nombre produce con algunos hechos sombríos del pasado reciente de la historia colombiana, el Parque Temático Hacienda Nápoles se ha construido desde cero, a partir de 2007 cuando se propuso su creación. Desde esa época se le considera como el proyecto líder de una de las más grandes transformaciones regionales que ha tenido Colombia luego de la desarticulación del Cartel de Medellín que lideraba Pablo Escobar. Hoy en día la propiedad está en cabeza del Estado colombiano, en tanto sus contenidos son desarrollados por la empresa privada.
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
                </div>
            </div>
        </Box>
    )
}


export default TouristPlace;