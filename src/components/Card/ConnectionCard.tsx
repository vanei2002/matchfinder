  import React from 'react';
import { Affinity, Card } from './style';

type Props = {
  name: string;
  description: string;
  affinity: number;
};

const ConnectionCard: React.FC<Props> = ({ name, description, affinity }) => (
  <Card>
    <h2>{name}</h2>
    <p>{description}</p>
    <Affinity value={affinity}>Afinidade: {affinity}%</Affinity>
  </Card>
);

export default ConnectionCard;
