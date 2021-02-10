import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import team_wand from "./media/wand.png"

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    height: 300,
    textAlign: 'center',
  },
  media: {
    height: 180,
  },
  h5: {
    color: 'black',
  },
  btext: {
    size: '1em',
    textAlign: 'center',
    color: '#fff',
  },
  button: {
    color: 'black',
    display: 'inline-block',
  },
  cardcontent: {
    padding: '0px'
  },
});

export default function MediaCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={team_wand}
          title="Winner"
        />
        <CardContent className={classes.cardcontent}>
          <Typography variant="h6" component="h6" className={classes.h5}>
            {props.placement}
          </Typography>
          <Typography variant="body1" component="h6" className={classes.h5}>
            {props.teamName}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.button}>
        <Button variant="contained" size="small" color="primary" href={props.devpost}>
          <Typography variant="subtitle1" component="buttontext" className={classes.btext}>
            {"See on Devpost"}
          </Typography>
        </Button>
      </CardActions>
    </Card>
  );
}