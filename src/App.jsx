import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import './App.css'
import Stack from '@mui/material/Stack';
import me from '/me.jpg'
import { useEffect, useState } from 'react';
import Loading from './components/loader/Loading';
import { useTranslation } from 'react-i18next';
function App() {
  const {t , i18n} = useTranslation();
  const [lang, setLang] = useState("en");
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    let lang = localStorage.getItem('lang');
    if (lang) {
      i18n.changeLanguage(lang);
      setLang(lang);
    }
  }, [])

  function handleLang(e) {
    setLang(e.target.value);
    i18n.changeLanguage(e.target.value)
    localStorage.setItem('lang', e.target.value)
  }
    
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  }, []);

  if (isLoading) {
    return <Loading />;
  }
  
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
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>{t("web")}
          </Typography>
          <Button color="inherit">{t('about')}</Button>
          <Button color="inherit">{t('skills')}</Button>
          <Button color="inherit">{t('project')}</Button>

          <nav>
            <ul>
              <li>
                <select value={lang} onChange={handleLang} className='typr'>
                  <option value="en">English</option>
                  <option value="uz">Uzbek</option>
                  <option value="ru">Russian</option>
                </select>
                </li>
            </ul>
          </nav>

        </Toolbar>
      </AppBar>
    </Box>
    <main className='wrapper'>
      <div>
      <h2 className='hero'>{t('hero')}</h2>
      <img className='img' src={me} alt="" />
      <p className='footer'>{t('footer')}</p>

      
      <Stack direction="row" spacing={2}>
      <Button variant="contained">{t('button1')}</Button>
      <Button variant="contained" href="#">{t('button2')}
      </Button>
    </Stack>

      <div className='butoon'>
      </div>
      </div>
      
    </main>
    </>
  )
}

export default App
