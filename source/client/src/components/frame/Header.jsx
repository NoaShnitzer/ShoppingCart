import { Button, Grid, Typography} from '@mui/material'
import { totalItems} from '../../state/slice/ShoppingCartSlice';
import {selectIsOpen, toggleIsOpen} from '../../state/slice/PersonalDetailsSlice'
import { useAppDispatch, useAppSelector } from '../../state/store';


export default function Header(){

    const dispatch = useAppDispatch();
    const isOpen = useAppSelector(selectIsOpen)
    const basketTotalItems = useAppSelector(totalItems)
  
   
    return (
        <div>
            <Grid container direction={"row-reverse"} style={{ overflow:"auto", backgroundColor: "#e3f2fd", paddingBottom: "10px", height:"120px"}}>
                <Grid style={{margin:"37px", position:"absolute", right:"190px"}}>
                    <Typography
                        variant="h4"
                        style={{fontFamily: "monospace", fontWeight: 700,
                        letterSpacing: '.2rem',}}   
                        component="span">
                        עגלת הקניות שלי
                    </Typography>      
                </Grid>


                <Grid style={{margin:"37px", position:"absolute", left:"0"}}>
                    <Typography
                        variant="h7"
                        style={{fontFamily: "monospace", fontWeight: 700,
                        letterSpacing: '.2rem',}}   
                        component="span">
                        {basketTotalItems}:סך פריטים
                    </Typography>      
                </Grid>


                <Grid style={{ width:"20%", margin:"37px", position:"absolute", left:"0", top:"50px"}}>
                    <Button
                        variant="outlined"
                        color="success"
                        onClick={() => dispatch(toggleIsOpen())}
                        style={{fontFamily: "monospace", fontWeight: 700, letterSpacing: '.2rem',}}   
                        component="span">
                         {isOpen? "חזרה להמשך רכישה":"לתשלום"}
                    </Button>  
                </Grid>
            </Grid>
        </div>
    )
}