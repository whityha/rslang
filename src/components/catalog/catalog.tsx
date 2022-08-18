import { FC } from 'react';
import { Grid } from '@mui/material';
import CatalogCard from '../catalog-card/catalog-card';
import catalogCardData from '../catalog-card/catalog-card-data';

const Catalog: FC = () => (
  <Grid container spacing={3}>
    {catalogCardData.map((card) => <CatalogCard key={card.id} {...card} />)}
  </Grid>
);

export default Catalog;
