import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import LearnMoreBtn from '../LearnMoreBtn/LearnMoreBtn';
import { Details, Link } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';



const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});



const Post =(props) => {

    let history = useHistory();
    const {id,title,body}=props.post;

    function handleClick(id) {

      
      history.push("/details/"+id.toString());
      console.log(id.toString());
    }
  
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    
  
    return (
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
           Id : {id}
          </Typography>
          <Typography variant="h5" component="h2">
           {title}
          </Typography>
       
          <Typography variant="body2" component="p">
            {body}
            <br />
         
          </Typography>
        </CardContent>
        <CardActions>
         
        
         <LearnMoreBtn handleClick={()=>handleClick(props.post.id)} >

         

         </LearnMoreBtn>

        
         

        
        </CardActions>
      </Card>
    );
};

export default Post;