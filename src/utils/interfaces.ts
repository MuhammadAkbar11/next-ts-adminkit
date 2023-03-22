import { FeatherIconsTypes, ThemeTypes } from './types';

export interface INotification {
  id: string;
  title: string;
  message: string;
  timestamp: Date;
  read: boolean;
  icon?: FeatherIconsTypes;
  iconColor?: ThemeTypes;
}

export interface IProject {
  name: string;
  startDate: string;
  endDate: string;
  status: 'In progress' | 'Done' | 'Cancelled';
  assignedTo: string;
}

export interface IMessage {
  id: string;
  title: string;
  message: string;
  timestamp: Date;
  read: boolean;
  image?: string;
}
