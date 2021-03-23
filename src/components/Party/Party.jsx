import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


function Party(props) {
    return (
      <Box>
        <Typography varient="h5">{props.name}</Typography>
        <Typography varient="h5">{props.leader}</Typography>
        <Typography varient="h5">{props.eu}</Typography>
        <Typography varient="h5">{props.color}</Typography>
      </Box>
    );
}

export default Party;