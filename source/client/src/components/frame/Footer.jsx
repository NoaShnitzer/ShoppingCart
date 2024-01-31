import { Grid } from '@mui/material'


export default function Footer(){
    return (
        <div>
            <Grid container 
                sx={{
                    overflow:"hidden",
                    margin:"0",
                    marginTop: 'calc(10% + 60px)',
                    position: 'fixed',
                    bottom: 0,
                    width: '100%',
                    backgroundColor:"#e3f2fd"}}
                >
                <Grid item xs={12} style={{marginRight:"60px", direction:"rtl", color:"white"}}>
                    רמת טעימות המזון אינה באחריות הסופר
                    <br/>
                    ליצירת קשר אנא חייגו למוקד מידע : 03-505050 
                    או שלחו מייל לכתובת
                    supernoa@gmail.com 
                </Grid>
            </Grid>
        </div>
    )
}