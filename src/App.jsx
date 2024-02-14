import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import './App.css'
import Stack from '@mui/material/Stack';
import man from '../public/vite.svg'
function App() {
  
  return (
    <>
   <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            MY-SITE
          </Typography>
          <Button color="inherit">About Me</Button>
          <Button color="inherit">Skills</Button>
          <Button color="inherit">Project</Button>

        </Toolbar>
      </AppBar>
    </Box>
    <main className='container'>
      <div>
      <h2 className='main_divfirst_h2'>
      Hi      ,
I’m Islomjon,
Front-end Developer
      </h2>
      <p className='main_divfirst_p'>
      I design and develop experiences that make people’s lives simpler through Web and Mobile apps.I work with FIgma , HTML5, CSS3, JavaScript, React, ReactNative and Flutter.
      </p>

      
      <Stack direction="row" spacing={2}>
      <Button variant="contained">HIRE ME</Button>
      <Button variant="contained" href="#contained-buttons">
      SEE MY PROJECTS
      </Button>
    </Stack>

      
      </div>

    



      <div>
      <img className='main_divsecond' src={man} alt="" />
      </div>
    </main>
    </>
  )
}

export default App
