import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 500,
      width: 300
    },
  });
  

function Leader(props) {
    const classes = useStyles();

    return (
      <Card className={classes.root}>
        <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" align="center" component="h2">
            {props.title}
          </Typography>
        </CardContent>
          <CardMedia
            className={classes.media}
            image={props.img}
            title={props.title + "of Germany"}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" align="center" component="h2">
              {props.name}
            </Typography>
            <Typography gutterBottom variant="h6" align="center" component="h2">
              Party: {props.party}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
}

export default Leader;