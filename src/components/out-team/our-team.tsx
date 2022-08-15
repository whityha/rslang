import { Box, Stack } from '@mui/material';
import TEAMMATE_INFO from './constant';
import TeammateCard from './teammate-card';

const OurTeam = () => (
  <Box>
    <Stack spacing={2} alignItems="center" p={2}>
      {TEAMMATE_INFO.map((teammate) => (
        <TeammateCard
          key={teammate.name}
          name={teammate.name}
          role={teammate.role}
          description={teammate.description}
          photoSrc={teammate.photoSrc}
          ghLink={teammate.ghLink}
        />
      ))}
    </Stack>
  </Box>
);

export default OurTeam;
