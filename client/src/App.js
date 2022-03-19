import React, { useState } from 'react';
import Tesseract from 'tesseract.js';
import Button from '@material-ui/core/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ButtonBase from '@mui/material/ButtonBase';
import { styled } from '@mui/material/styles';




import CircularProgress from '@mui/material/CircularProgress';
import Image from './b.png'; // Import using relative path

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@mui/material/IconButton';

//lang
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
//user
import AccountCircle from '@mui/icons-material/AccountCircle';
//import IconButton from '@mui/material/IconButton';
//icons-material/AccountCircle';
/* eslint-disable jsx-a11y/anchor-is-valid */

import Tooltip from '@mui/material/Tooltip';
import Avatar from '@mui/material/Avatar';




import Link from '@mui/material/Link';


//import CloudUploadIcon from '@mui/material/CloudUpload';
//import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';





const useStyles = makeStyles((theme) => ({
  navlinks : {
    marginLeft: theme.spacing(10),
    display: "flex",
  },
 logo : {
    flexGrow: "1",
    cursor: "pointer",
  },
  link : {
    textDecoration: "none",
    color: "black",
    fontSize: "14px",
    fontWeight:"bold" ,
    
    "&:hover": {
      textDecoration: "none",
      borderBottom: "1px solid black",
    },
  },
  bspan : {
    color: "#FF8D8D",
    fontSize:"2.5rem",
    fontWeight:"bold" ,
  },

  more : {
  marginLeft: "950px",
    display: "flex",
  },
  
}));

//styling background

const styles = {
  paperContainer: {
      backgroundImage: `url(${Image})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover"
    
  }
  
};


export default function ContainedButtons() {

    const [imageq, setImageq] = useState({ preview: '', data: '' })
    const [status, setStatus] = useState('')
    const handleSubmit = async (e) => {
        e.preventDefault()
        let formData = new FormData()
        formData.append('file', imageq.data)
        const response = await fetch('http://localhost:8080/image', {
            method: 'POST',
            body: formData,
        })
        if (response) setStatus(response.statusText)
    }

    const handleFileChange = (e) => {
        const img = {
            preview: URL.createObjectURL(e.target.files[0]),
            data: e.target.files[0],
        }
        setImageq(img)
    }




    const mobileMenuId = 'primary-search-account-menu-mobile';
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);


  const classes = useStyles();
  //const classes = useStyles();
  //by default is false cuz  we're not in the logique of extracting yet
  const [isLoading, setIsLoading] = useState(false);
  const [text, setText] = useState("");
  const [textEmail, setTextEmail] = useState("");
  const [textPhone, setTextPhone] = useState("");
  const [textAddress, setTextAddress] = useState("");
  const [textURL, setTextURL] = useState("");
  const [textState, setTextState] = useState("");
  const [image, setImage] = useState("");
  const [progress, setProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(true)

//for the user menu
  const [anchorEl, setAnchorEl] = React.useState(null);
  const settings = ['Fr', 'En'];
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  //image of the shop
  function onLoad() {
    // delay for demo only
    setTimeout(() => setIsUploading(false), 1000);

   // setIsLoading(false)
  }




/*lang
  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';*/

// user  icone 
const handleMenu = (event) => {
  setAnchorEl(event.currentTarget);
};

  const handleClick = () => {
    //start the loading 
    setIsLoading(true);
    Tesseract.recognize(image, "fr",
      {
        logger: m => {
          console.log(m);
          if (m.status === "recognizing text") {
            setProgress(parseInt(m.progress * 100))
          }
        },
        //once the text is extracted the loading desapears
      }).then(({ data: { text } }) => {
        setText(text);
        setIsLoading(false);
      });
    //   Tesseract.recognize(
    //       image,"fr",
    //       {
    //           logger: m => console.log(m)
    //       }
    //   )
    //       .catch (err => {
    //           console.error(err);
    //       })
    //       .then(result => {
    //           console.log(result);
    //       })



  };

  //Start POST

  const register = () => {
   // Example POST method implementation:
async function postData(url = '', data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return response; // parses JSON response into native JavaScript objects
}

// postData('https://tpi-backend.herokuapp.com/enseignes/',
      postData('http://localhost:8080/enseignes',
  {name:text,
      email:textEmail,
      phone:textPhone,
      address:textAddress,
      imageURL:textURL,
      state:textState
  })
  .then(data => {
    console.log(data); // JSON data parsed by `data.json()` call
  });
  }

  //END POST

  const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  });
 

  return (
    
    <Box>
      <div>
      <AppBar position="static" color='default'>
      <Container maxWidth="xl">
      <Toolbar disableGutters>
      <Box
        component="img"
        sx={{
          height: 50,
          width: 100,
         
        }}
        
        src="https://www.super-responsable.org/assets/images/icons/Super-responsable-logo.png"/>
            <div className={classes.navlinks} >
          <Link className={classes.link}  m={2} color="#212121" href='https://www.super-responsable.org/vendors'>DÉCOUVRIR</Link>
            
            
          <Link  className={classes.link} m={2}  color="#212121" href='https://www.super-responsable.org/act'>AGIR</Link>
           
            
          <Link  className={classes.link} m={2} color="#212121" href='https://www.super-responsable.org/products'>SHOPPER</Link>
          
      </div>
        <div className={classes.more} >
          <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
             
              <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="langues">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 1.4 }}>
                <Avatar className={classes.langav}  sx={{  width: 24, height: 24 }}  src="https://www.super-responsable.org/assets/images/icons/fr-flag.png" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu} className={classes.iuser}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
            
          </Box>
        </div>
        </Toolbar>
      </Container>
    
    </AppBar>
      </div>
    <Paper sx={{ maxWidth: 1700, height: 800, my: 1, mx: 'auto', p: 2 }} style={styles.paperContainer}>
    <div>
   {  /*!isLoading &&

        <div>

          <Box
            display="flex"
            justifyContent="center"
            alignItems="center">

            <Typography variant="h4" component="div" gutterBottom>
              Partagez avec nous vos adresses coup de coeur
            </Typography>
          </Box>

        </div>}

      {/* form */}
      
      {!isLoading && !text && (
        
       
          <Box sx={{ flexGrow: 1, overflow: 'hidden', px: 20 }}>
            <Paper sx={{ maxWidth: 600, height: 500, my: 1, mx: 'auto', p: 2 }} >
            <div>



         <Box
           display="flex"
           justifyContent="center"
           alignItems="center">

           <Typography variant="h1" component="div" gutterBottom sx={{ fontSize:"2.5rem",fontWeight:"bold" , }}>
             Partagez avec nous vos adresses <span className={classes.bspan} > coup de coeur</span> 
           </Typography>
         </Box>

       </div>
              <Grid container wrap="nowrap" spacing={2} direction="column" alignItems="center">
                


                <Grid item>
                  <ButtonBase sx={{ width: 200, height: 200, }}>
                    {/*<Img alt="logo" src={image} />*/}
                    <img
                      alt="ad-img"
                      width={300}
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAElBMVEXy8vL////6+vr19fX4+Pj8/Px/aeudAAACoklEQVR4nO3c227bMBBF0cgk//+XGwu6kRxeRnFaVGevt8a2AG3QQ0kN8vUFAAAAAAAAAAAAAAAAAAAAAACAv2j5Ba9/fVK/hVgOxHL4Prf0+qD08FgfPbfw8Fjpk8cjlgOxHIjlQCwHYjlIxgoh3DqeXqyQbl+Ky8VK551L9B5PLFb40X2eWKyf3RVrxUpFrMU36KVihbKV88pCKtarfjzlWlpSsepWvh1RPZbr3JVi1SPLObSUYlkri1g7ZpZDGau6zGI3PJWxjKHV+3gqv6NSsXxX8KkqoxWrXFq98R7rkaYVq6jVaxWMpScWK6vVPW9rqKnF2r5e71e6G6G5+vRifZ9zjHFwyZDM9acYayx7PHEOeWIZ4pI5ViGxatW16/UFYlUfsy/HiFUx7iC3oxCrZDx73oc8sQrRarUNeWLlrKepx5AnVqbZaq0lHytmd3/tVu8jqccK2VuMjfA65NVjLdf3mBvhKYjHStuaWTU2wkst6Vj71+64MBiTjXV+7cL2dmK1XJdS+W9i5bI2qfoJsYpXy1rDEa8aq7ymitYPibWqr6nWIT+spRjL+sJNbYmCsexR3n5FOpYdYmZL1IvVmkxrif6WKBerPcXHW6JarN7SGW6JYrH6Q2m0JYrF6rYabolasQatRluiVKzJG5rmXFOKNXhyvOpuiUKxJh4rLP0tUSfW3JPj7ddm1GNNtuptiTKxxsN9194SVWLNDPesifUBkVhzw33X2hI1Ys0O911jS9SI5WzVukuUiDU/3A/vj1XrUSHWjVb2/44JxPJshEWYl/GzJzpieYf7ztgSHx/rbitrS3x8rDsDa7MeJ+0UYn2K9i+zOT09Fn8ueNbCH6Ked3+utxGLWMQCAAAAAAAAAAAAAAAAAAAAAAD4//0BUyATTom0AxcAAAAASUVORK5CYII="
                      style={{ display: isUploading ? "block" : "none" }}
                          />
                      <img
                        alt="ad-img"
                        width={300}
                        src={image}
                        style={{ display: isUploading ? "none" : "block" }}
                        onLoad={onLoad}
                      />
                  </ButtonBase>
                </Grid>


                  <div className="App">
                  <label htmlFor="upload-photo">
                    <input
                      style={{ display: "none" }}
                      id="upload-photo"
                      name="upload-photo"
                      type="file"
                      onChange={(e) => setImage(URL.createObjectURL(e.target.files[0]))}/>

                    <Button color="secondary" variant="contained" component="span">
                    
                    <CloudUploadIcon/> Charger le logo
                    </Button>{" "}
                  </label>
                </div>



                <Grid item sx={{ marginTop: 10 }} >
                  <Button variant="contained" color="primary" component="label" onClick={handleClick}>

                   Convertir  <ArrowCircleRightIcon fontSize="small" />
                  </Button>
                  
                </Grid>
              </Grid>
            </Paper>





          </Box>
         
      


      )}

      {/* progress bar showed once the logo is uploaded and the conversion started*/}
      {
        isLoading && (

          <Box sx={{ flexGrow: 1, overflow: 'hidden', px: 20 }}>
          <Paper sx={{ maxWidth: 600, height: 500, my: 1, mx: 'auto', p: 2 }}>
            <Grid container wrap="nowrap" spacing={2} direction="column" alignItems="center">
          <Box
          component="form"
          display="flex"
          justifyContent="center"
          alignItems="center" 
          noValidate
          autoComplete="off">
            <p>Conversion :- {progress}%</p>
          </Box>
          <CircularProgress disableShrink />
          </Grid>
          </Paper>
          </Box>
        )

      }
      {/* show the extracted text once it's not loading anymore*/}
      {
        !isLoading && text && (
          <div>
             <Box sx={{ flexGrow: 1, overflow: 'hidden', px: 20 }}>
            <Paper sx={{ maxWidth: 600, height: 500, my: 1, mx: 'auto', p: 2 }}>
              <Grid container wrap="nowrap" spacing={2} direction="column" alignItems="center">
            <Box
              component="form"
              display="flex"
              justifyContent="center"
              alignItems="center" 
              noValidate>



              <TextField id="outlined-basic"  sx={{marginTop: 5  , paddingLeft: 5 }} value={text} variant="standard" onChange={(e) => setText(e.target.value)} />
              {/*<TextField value={textTelephone} variant="standard" onChange={(e) => setTextTelephone(e.target.value)}/>
              <TextField  Svalue={textAdresse} variant="standard" onChange={(e) => setTextAdresse(e.target.value)}/>*/}

                {/*<div className='App'>*/}
                {/*    <h1>Upload to server OUIIII</h1>*/}
                {/*    {imageq.preview && <img src={imageq.preview} width='100' height='100' />}*/}
                {/*    <hr></hr>*/}
                {/*    <form onSubmit={handleSubmit}>*/}
                {/*        <input type='file' name='file' onChange={handleFileChange}></input>*/}
                {/*        <button type='submit'>Submit</button>*/}
                {/*    </form>*/}
                {/*    {status && <h4>{status}</h4>}*/}
                {/*</div>*/}
            </Box>
            <Grid item sx={{ marginTop: 8, paddingLeft: 25}} >
              <Button   variant="contained" color="primary" component="label" onClick={register}>
                    Enregistrer
                  </Button></Grid>
            </Grid>
            </Paper>
            </Box>
          </div>
        )

      }
      
    </div>





    </Paper>
    </Box>

  );
}
