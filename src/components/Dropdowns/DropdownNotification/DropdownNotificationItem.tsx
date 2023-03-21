import React from 'react';
import { Col, ListGroupItem, Row } from 'react-bootstrap';
import * as RFIcon from 'react-feather';
import { FeatherIconNames } from 'feather-icons';
import { ThemeTypes } from '@utils/types';
import themeConfigs from '@configs/themeConfigs';
import { formatDistance } from 'date-fns';

type Props = {
  title: string;
  content?: string | React.ReactNode | null;
  timestamp?: string;
  icon: FeatherIconNames;
  iconVariant?: ThemeTypes;
};

function DropdownNotificationItem({
  title,
  icon,
  timestamp,
  content,
  iconVariant,
}: Props) {
  // eslint-disable-next-line @typescript-eslint/no-shadow
  const [Icon, setIcon] =
    React.useState<React.ElementType<RFIcon.IconProps> | null>(null);

  const initIcon = React.useCallback(async () => {
    try {
      const reactFeatherIcon = await import(
        `react-feather/dist/icons/${icon}.js`
      );
      if (reactFeatherIcon) setIcon(reactFeatherIcon?.default);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
    }
  }, [icon]);

  React.useEffect(() => {
    initIcon();
  }, [initIcon]);

  const iconColor =
    (themeConfigs[iconVariant as ThemeTypes] as string) ?? themeConfigs.primary;

  let timeAgo = '';
  if (timestamp) {
    const timePeriod = formatDistance(new Date(timestamp), new Date(), {
      addSuffix: true,
    });
    //  formatDistanceToNow(date);
    timeAgo = `${timePeriod} ago`;
  }

  return (
    <ListGroupItem as="a" href="/#">
      <Row className=" g-0 align-items-center">
        <Col xs={2}>
          {Icon ? (
            <Icon className="text-danger" color={iconColor} size={18} />
          ) : null}
        </Col>
        <Col xs={10}>
          <div className="text-dark">{title}</div>
          <div className="text-muted small mt-1">{content}</div>
          <div className="text-muted small mt-1">{timeAgo}</div>
        </Col>
      </Row>
    </ListGroupItem>
  );
}

DropdownNotificationItem.defaultProps = {
  content: null,
  title: 'Notif Title',
  timestamp: '30m ago',
  icon: 'bell',
  iconVariant: 'primary',
} as Partial<Props>;

export default DropdownNotificationItem;
