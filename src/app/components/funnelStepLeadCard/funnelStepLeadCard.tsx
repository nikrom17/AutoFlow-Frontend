import * as React from 'react';
import { Card } from 'antd';
import timeDelta from '@utils/timeDelta';
import getTagColor from '@utils/getStatusColor';
import './funnelStepLeadCard.less';

interface Props {
  lastComm: Date;
  leadName: string;
  onClick(): void;
  opportunityInfo?: any;
  status: string;
}

const FunnelStepLeadCard: React.FC<Props> = ({
  lastComm,
  leadName,
  onClick,
  opportunityInfo,
  status,
}) => (
  <Card title={leadName} onClick={onClick} className={`leadCard-${getTagColor(status)}`}>
    {Boolean(opportunityInfo) && <p>{`Quoted Price: $${opportunityInfo.quotedPrice}`}</p>}
    <p>{`Last Contact: ${timeDelta(lastComm)}`}</p>
    <p>{`Status: ${status}`}</p>
  </Card>
);

export default FunnelStepLeadCard;
