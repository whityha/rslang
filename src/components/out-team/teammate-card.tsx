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
           maxWidth: '600px',
           minWidth: { md: '500px', xs: '320px' },
           width: '90%',
           flexDirection: { xs: 'column', sm: 'row' },
         }}
       >
         <CardMedia
           component="img"
           image={photoSrc}
           sx={{
             height: 'auto',
             minWidth: '150px',
             width: { xs: '100%', sm: '50%' },
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
