import Avatar from '@mui/material/Avatar';
import './App.css'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useState } from 'react';
import Slider from '@mui/material/Slider';


function App() {
  const [tab, setTab] = useState('0')

  const handleTabChange = (e, newvalue) => {
    setTab(newvalue)
  }
  return (
    <>
      <Box
        sx={{
          maxWidth: 360,
          mx: 'auto',
          mt: 4,
          borderRadius: 6,
          overflow: 'hidden',
          boxShadow: 3,
          bgcolor: 'white',
          fontFamily: 'Inter, sans-serif',
        }}
      >
        {/* Header Gradient */}
        <Box
          sx={{
            height: 180,
            background: 'linear-gradient(to bottom, #dff1ff, #f9eaff)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-end',
            pt: 4,
            pb: 2,
          }}
        >
          <Avatar sx={{ width: 64, height: 64, bgcolor: '#fff', mb: 1 }} />
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            Aisosa Oghagbon
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Software Developer
          </Typography>
          {/* Tabs */}
          <Tabs value={tab} onChange={handleTabChange} centered sx={{ mt: 2 }}>
            <Tab label="About" />
            <Tab label="Bio" />
            <Tab label="Contact" />
          </Tabs>
        </Box>

        {/* Tab Content */}
        <Box sx={{ p: 3 }}>
          <Typography variant="subtitle1" fontWeight="bold">Superpower</Typography>
          <Typography variant="body2" color="text.secondary" mb={2}>
            What are your design superpowers?
          </Typography>

          <Typography variant="subtitle1" fontWeight="bold">Weakness</Typography>
          <Typography variant="body2" color="text.secondary" mb={2}>
            Where can you grow?
          </Typography>

          <Typography variant="subtitle1" fontWeight="bold">Tools of the trade</Typography>
          <Typography variant="body2" color="text.secondary" mb={2}>
            What tools are you proficient in?
          </Typography>

          <Typography variant="subtitle1" fontWeight="bold">Guilty pleasures</Typography>
          <Typography variant="body2" color="text.secondary" mb={2}>
            3 guilty pleasures.
          </Typography>

          {/* Slider */}
          <Box sx={{ mt: 4 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
              <Typography fontWeight="medium">Introvert</Typography>
              <Typography fontWeight="medium">Extrovert</Typography>
            </Box>
            <Slider
              defaultValue={75}
              sx={{
                color: 'transparent',
                height: 8,
                background: 'linear-gradient(to right, #a3d8ff, #f9c4f9)',
                '& .MuiSlider-thumb': {
                  width: 20,
                  height: 20,
                  backgroundColor: '#fff',
                  border: '4px solid #f9c4f9',
                  boxShadow: '0 0 6px rgba(0,0,0,0.2)',
                },
              }}
            />
          </Box>
        </Box>
      </Box>

    </>
  )
}

export default App
