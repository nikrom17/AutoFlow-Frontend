import React from 'react';
import { Card } from 'antd';
import timeDelta from '@utils/timeDelta';
import getTagColor from '@utils/getStatusColor';
import './funnelStepLeadCard.less';

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
  <Card title={leadName} onClick={onClick} className={`leadCard-${getTagColor(status)}`}>
    <p>{`Quoted Price: $${quotedPrice}`}</p>
    <p>{`Last Contact: ${timeDelta(lastComm)}`}</p>
    <p>{`Status: ${status}`}</p>
  </Card>
);

export default FunnelStepLeadCard;
