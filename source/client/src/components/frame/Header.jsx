import { Grid, Typography} from '@mui/material'

export default function Header(){
    return (
        <div>
            <Grid container direction={"row-reverse"} style={{top:"0", right:0, left:"0", overflow:"hidden", backgroundColor: "#e3f2fd",width:"100%", paddingBottom: "10px", minHeight:"120px"}}>
                <Grid style={{margin:"37px", position:"absolute", right:"190px"}}>
                    <Typography
                        variant="h4"
                        style={{fontFamily: "monospace", fontWeight: 700,
                        letterSpacing: '.2rem',}}   
                        noWrap
                        component="span">
                        סופרנועה
                    </Typography>      
                </Grid>


                <Grid style={{margin:"37px", position:"absolute", left:"100px"}}>
                    <Typography
                        variant="h7"
                        style={{fontFamily: "monospace", fontWeight: 700,
                        letterSpacing: '.2rem',}}   
                        noWrap
                        component="span">
                        :סך פריטים
                    </Typography>      
                </Grid>
            </Grid>

        </div>
    )
}