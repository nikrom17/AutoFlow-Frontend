import React from 'react';
import { Card } from 'antd';

interface Props {
  lastComm: Date;
  leadName: string;
  onClick(): void;
  quotedPrice: string;
  status: string;
}

const FunnelStepLeadCard: React.FC<Props> = ({
  lastComm,
  leadName,
  onClick,
  quotedPrice,
  status,
}) => (
  <Card
    title={leadName}
    onClick={onClick}
    style={{ cursor: 'pointer', minWidth: '275px' }}
  >
    <p>{`Price Estimate: ${quotedPrice}`}</p>
    <p>{`Last Comm.: ${lastComm}`}</p>
    <p>{`Status: ${status}`}</p>
  </Card>
);

export default FunnelStepLeadCard;
