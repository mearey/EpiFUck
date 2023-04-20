import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card'
import * as React from 'react';
import PropTypes from 'prop-types';
import DownloadButtonDiseases from './DownloadButtonDiseases';
import DownloadButtonLocation from './DownloadButtonLocation';
import Charts from "./Charts";

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  
  export default function BasicTabs() {
    const [value, setValue] = React.useState(0);
  
    const switchTab = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs name='tabs' value={value} onChange={switchTab} aria-label="basic tabs example">
            <Tab label="Download Datasets" {...a11yProps(0)} />
            <Tab name='tabsCharts' label="View Charts" {...a11yProps(1)} />
            <Tab label="Map" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0} sx={{ width: '100%' }}>
          <Box >
            <Card variant="outlined" sx={{ width: '300px', height: '100px', margin: '10px'}}>
              <DownloadButtonDiseases></DownloadButtonDiseases>
            </Card>
          </Box>
          <Card variant="outlined" sx={{ width: '300px', height: '100px', margin: '10px'}}>
            <DownloadButtonLocation></DownloadButtonLocation>
          </Card>      
        </TabPanel>
        <TabPanel value={value} index={1}>
        <Card variant="outlined" sx={{ margin: '10px'}}>
          <Charts></Charts>
        </Card>
        </TabPanel>
        <TabPanel value={value} index={2}>
          Map
        </TabPanel>
      </Box>
    );
  }