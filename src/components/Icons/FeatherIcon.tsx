import React from 'react';
import * as RFIcon from 'react-feather';
import { FeatherIconsTypes } from '@utils/types';

type Props = {
  name: FeatherIconsTypes;
} & RFIcon.IconProps;

function FeatherIcon({ name, ...props }: Props) {
  const Icon = RFIcon[
    `${name}` as FeatherIconsTypes
  ] as React.ElementType<RFIcon.IconProps>;

  return <Icon {...props} />;
}

export default FeatherIcon;
