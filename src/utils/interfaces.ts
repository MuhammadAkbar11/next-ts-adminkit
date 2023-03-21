import { FeatherIconNames } from 'feather-icons';
import { ThemeTypes } from './types';

export interface INotification {
  id: string;
  title: string;
  message: string;
  timestamp: Date;
  read: boolean;
  icon?: FeatherIconNames;
  iconColor?: ThemeTypes;
}

export interface IMessage {
  id: string;
  title: string;
  message: string;
  timestamp: Date;
  read: boolean;
  image?: string;
}
