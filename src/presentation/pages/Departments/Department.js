import { Box } from '@mui/material';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
const Department = () => {


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
        flexDirection:'column'
    }

    const containerTextCard = {
        display:'flex',
        flexDirection:'column',
        gap:'2px'
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

    return (
        <Box sx={{ padding: '20px', backgroundColor: '#f0f0f0' }}>
            <div style={containerDepartments}>
                <div style={columnTitleStyle} >
                    <FormatListNumberedIcon sx={{ fontSize: 20}} />
                    <h5>Lista de departamentos</h5>
                </div>
                <div style={columnContainerList}>
                    <div style={cardStyleList}>
                        <div style={containerTextCard}>
                            <strong>Titulo</strong>
                            <span>descripcuon scripcuon scripcuon scripcuon scripcuon scripcuon scripcuon  scripcuon scripcuon scripcuon  scripcuon scripcuon scripcuon  scripcuon scripcuon scripcuon  scripcuon scripcuon scripcuon  </span>
                        </div>
                        <div style={containerDetailsCard}>
                                <div style={flexStyle}>
                                    <strong>Region:</strong>
                                    <span>central</span>
                                </div>
                                <div style={flexStyle}>
                                    <strong>Region:</strong>
                                    <span>central</span>
                                </div>
                                <div style={flexStyle}>
                                    <strong>Region:</strong>
                                    <span>central</span>
                                </div>
                        </div>
                    </div>
                    <div style={cardStyleList}>
                        <div style={containerTextCard}>
                            <strong>Titulo</strong>
                            <span>descripcuon scripcuon scripcuon scripcuon scripcuon scripcuon scripcuon  scripcuon scripcuon scripcuon  scripcuon scripcuon scripcuon  scripcuon scripcuon scripcuon  scripcuon scripcuon scripcuon  </span>
                        </div>
                        <div style={containerDetailsCard}>
                                <div style={flexStyle}>
                                    <strong>Region:</strong>
                                    <span>central</span>
                                </div>
                                <div style={flexStyle}>
                                    <strong>Region:</strong>
                                    <span>central</span>
                                </div>
                                <div style={flexStyle}>
                                    <strong>Region:</strong>
                                    <span>central</span>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </Box>
    )
}

export default Department;