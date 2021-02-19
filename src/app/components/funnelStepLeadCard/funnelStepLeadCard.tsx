import React from 'react';
import { Card } from 'antd';

interface Props {
  lastComm: string;
  leadName: string;
  quotedPrice: string;
  status: string;
}

const FunnelStepLeadCard: React.FC<Props> = ({
  lastComm,
  leadName,
  quotedPrice,
  status,
}) => (
  <Card title={leadName}>
    <p>{`Price Estimate: ${quotedPrice}`}</p>
    <p>{`Last Comm.: ${lastComm}`}</p>
    <p>{`Status: ${status}`}</p>
  </Card>
);

export default FunnelStepLeadCard;
