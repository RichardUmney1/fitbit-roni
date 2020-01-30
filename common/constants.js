export const APP_NAME = 'Roni';

export const DATE_FORMAT_MM_DD_YYYY = '1/28/2000';
export const DATE_FORMAT_DD_MM_YYYY = '28/1/2000';
export const DATE_FORMAT_MON_DD = 'JAN 28';

// Note: don't reorder these as settings are saved based on array index.
// If this is needed you should migrate or at least rotate the settings key.
// See https://dev.fitbit.com/build/reference/settings-api/#select
export const DATE_FORMATS = [
  DATE_FORMAT_MM_DD_YYYY,
  DATE_FORMAT_DD_MM_YYYY,
  DATE_FORMAT_MON_DD,
];


export const CLOCK_SIZE_NORMAL = 'Normal';
export const CLOCK_SIZE_LARGE = 'Large';

export const CLOCK_SIZES = [
  CLOCK_SIZE_NORMAL,
  CLOCK_SIZE_LARGE,
];