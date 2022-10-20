export enum Day {
  monday = 'monday',
  tuesday = 'tuesday',
  wednesday = 'wednesday',
  thursday = 'thursday',
  friday = 'friday',
  saturday = 'saturday',
  sunday = 'sunday'
}

export interface ITiming {
  day: Day;
  open?: string;
  close?: string;
  isClosed?: boolean;
  isToday?: boolean;
} 

export enum OpenType { open = 'open', close = 'close'}

export interface IOpeningHour {
  type?: string;
  value?: number;
}

export interface IStoreTimes {
  monday: IOpeningHour[];
  tuesday: IOpeningHour[];
  wednesday: IOpeningHour[];
  thursday: IOpeningHour[];
  friday: IOpeningHour[];
  saturday: IOpeningHour[];
  sunday: IOpeningHour[];
}