import {
  Card, CardContent, Typography, CardMedia, IconButton,
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import { TTeammate } from './type';

const TeammateCard = ({
  name, photoSrc, role, description, ghLink,
} :
     TTeammate) => (

       <Card
         sx={{
           display: 'flex',
           minHeight: '150px',
           minWidth: '450px',
           width: '40%',
         }}
       >
         <CardMedia
           component="img"
           image={photoSrc}
           sx={{
             height: 'auto',
             width: '25%',
             padding: '1em',
             borderRadius: '20px',
           }}
         />
         <CardContent sx={{
           padding: '1em',
         }}
         >
           <Typography variant="h4" component="div">
             {name}
           </Typography>
           <Typography variant="body2" component="p" color="grey.500">{role}</Typography>
           <Typography variant="body1" component="p" fontWeight="fontWeightRegular" mt={1}>{description}</Typography>
           <IconButton
             color="inherit"
             href={ghLink}
             sx={{
               padding: 0,
               marginTop: '15px',
             }}
           >
             <GitHubIcon />
           </IconButton>
         </CardContent>
       </Card>
);

export default TeammateCard;
