export const FREQUENCY = {
  FORTNIGHTLY: 'Fortnightly',
  WEEKLY: 'Weekly',
  ANNUALY: 'Annually',
  QUARTERLY: 'Quarterly',
  BI_WEEKLY: 'Bi-Weekly',
  MONTHLY: 'Monthly',
  EVERY_3_MONTHS: 'Every 3 Months',
};

export const FREQUENCY_INFO = {
  [FREQUENCY.ANNUALY]: {
    bgcolor: '#FFCC00',
    color: '#000',
  },
  [FREQUENCY.BI_WEEKLY]: {
    bgcolor: '#1F3D99',
    color: '#fff',
  },
  [FREQUENCY.EVERY_3_MONTHS]: {
    bgcolor: '#FFCCFF',
    color: '#000',
  },
  [FREQUENCY.FORTNIGHTLY]: {
    bgcolor: '#99CCFF',
    color: '#000',
  },
  [FREQUENCY.MONTHLY]: {
    bgcolor: '#33CCFF',
    color: '#000',
  },
  [FREQUENCY.QUARTERLY]: {
    bgcolor: '#33CC66',
    color: '#000',
  },
  [FREQUENCY.WEEKLY]: {
    bgcolor: '#00FFFF',
    color: '#000',
  },
};
