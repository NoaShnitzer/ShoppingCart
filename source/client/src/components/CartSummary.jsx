import { Grid, TextField } from "@mui/material";


export default function CartSummary(){
    return (
        <div>
            <Grid 
                container 
                spacing={2} 
                rowSpacing={4}
                direction="row-reverse"
                justifyContent="center"
                alignItems="center"
                sx={{
                    margin: 'auto',
                    maxWidth: 1100,
                    flexGrow: 1,
                    }}>
                
                <Grid item xs={12} md={12} >
                    <TextField
                        // className="form-input"
                        type="string"
                        label={"שם פרטי"}
                        value={"שם פרטי"}
                        id='123'
                        // onChange={(e) => dispatch(onchangeInputReducer({type:"UPDATE_TERM", value:e.currentTarget.value}))}
                        sx={{
                            "& label": {
                                left: "unset",
                                right: "1.75rem",
                                transformOrigin: "right",
                                fontSize: "0.8rem",
                            },
                            "& legend": {
                                textAlign: "right",
                                fontSize: "0.6rem",
                            },
                        }}/>
                </Grid>
                <Grid item xs={12} md={12} >
                    <TextField
                        // className="form-input"
                        type="string"
                        label={"שם משפחה"}
                        value={"שם משפחה"}
                        id='123'
                        // onChange={(e) => dispatch(onchangeInputReducer({type:"UPDATE_TERM", value:e.currentTarget.value}))}
                        sx={{
                            "& label": {
                                left: "unset",
                                right: "1.75rem",
                                transformOrigin: "right",
                                fontSize: "0.8rem",
                            },
                            "& legend": {
                                textAlign: "right",
                                fontSize: "0.6rem",
                            },
                        }}/>
                </Grid>
                <Grid item xs={12} md={12} >
                    <TextField
                        // className="form-input"
                        type="string"
                        label={"כתובת"}
                        value={"כתובת"}
                        id='123'
                        // onChange={(e) => dispatch(onchangeInputReducer({type:"UPDATE_TERM", value:e.currentTarget.value}))}
                        sx={{
                            "& label": {
                                left: "unset",
                                right: "1.75rem",
                                transformOrigin: "right",
                                fontSize: "0.8rem",
                            },
                            "& legend": {
                                textAlign: "right",
                                fontSize: "0.6rem",
                            },
                        }}/>
                </Grid>
                <Grid item xs={12} md={12} >
                    <TextField
                        // className="form-input"
                        type="string"
                        label={"אימייל"}
                        value={"אימייל"}
                        id='123'
                        // onChange={(e) => dispatch(onchangeInputReducer({type:"UPDATE_TERM", value:e.currentTarget.value}))}
                        sx={{
                            "& label": {
                                left: "unset",
                                right: "1.75rem",
                                transformOrigin: "right",
                                fontSize: "0.8rem",
                            },
                            "& legend": {
                                textAlign: "right",
                                fontSize: "0.6rem",
                            },
                        }}/>
                </Grid>
                </Grid>
        </div>
    )
}