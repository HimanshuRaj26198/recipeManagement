import './recipe.scss'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
const Recipe = ({ recipe }) => {
    return <div className='grow-shadow' >
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 140 }}
                image={recipe.image}
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {recipe.name.substring(0, 20) + "..."}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    <ul>
                        <li>Calories: {recipe.caloriesPerServing}</li>
                        <li>Difficulty: {recipe.difficulty}</li>
                        <li>Cuisine: {recipe.cuisine}</li>
                        <li>Rating: {recipe.rating}</li>
                    </ul>
                </Typography>
            </CardContent>
            <CardActions>
                <Link to={`/${recipe._id}`} size="small">Learn More</Link>
            </CardActions>
        </Card>
    </div>
}

export default Recipe;