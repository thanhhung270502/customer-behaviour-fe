export const FREQUENCY = {
  FORTNIGHTLY: 'Fortnightly',
  WEEKLY: 'Weekly',
  ANNUALLY: 'Annually',
  QUARTERLY: 'Quarterly',
  BI_WEEKLY: 'Bi-Weekly',
  MONTHLY: 'Monthly',
  EVERY_3_MONTHS: 'Every 3 Months',
};

export const FREQUENCY_INFO = {
  [FREQUENCY.ANNUALLY]: {
    label: 'Annually',
    value: '0',
    bgcolor: '#FFCC00',
    color: '#000',
  },
  [FREQUENCY.EVERY_3_MONTHS]: {
    label: 'Every 3 Months',
    value: '1',
    bgcolor: '#FFCCFF',
    color: '#000',
  },
  [FREQUENCY.QUARTERLY]: {
    label: 'Quarterly',
    value: '1',
    bgcolor: '#33CC66',
    color: '#000',
  },
  [FREQUENCY.MONTHLY]: {
    label: 'Monthly',
    value: '2',
    bgcolor: '#33CCFF',
    color: '#000',
  },
  [FREQUENCY.BI_WEEKLY]: {
    label: 'Bi-Weekly',
    value: '3',
    bgcolor: '#1F3D99',
    color: '#fff',
  },
  [FREQUENCY.FORTNIGHTLY]: {
    label: 'Fortnightly',
    value: '3',
    bgcolor: '#99CCFF',
    color: '#000',
  },
  [FREQUENCY.WEEKLY]: {
    label: 'Weekly',
    value: '4',
    bgcolor: '#00FFFF',
    color: '#000',
  },
};

export const CATEGORY = {
  CLOTHING: 'Clothing',
  FOOTWEAR: 'Footwear',
  ACCESSORIES: 'Accessories',
  OUTERWEAR: 'Outerwear',
};

export const CATEGORY_INFO = {
  [CATEGORY.CLOTHING]: {
    label: 'Clothing',
    value: '1',
    bgcolor: '#FFCC00',
    color: '#000',
  },
  [CATEGORY.FOOTWEAR]: {
    label: 'Footwear',
    value: '2',
    bgcolor: '#1F3D99',
    color: '#fff',
  },
  [CATEGORY.ACCESSORIES]: {
    label: 'Accessories',
    value: '3',
    bgcolor: '#FFCCFF',
    color: '#000',
  },
  [CATEGORY.OUTERWEAR]: {
    label: 'Outerwear',
    value: '4',
    bgcolor: '#99CCFF',
    color: '#000',
  },
};

export const SHORT_QUESTION = {
  YES: 'Yes',
  NO: 'No',
};

export const SHORT_QUESTION_INFO = {
  [SHORT_QUESTION.YES]: {
    label: 'Yes',
    value: '1',
    bgcolor: '#FFCC00',
    color: '#000',
  },
  [SHORT_QUESTION.NO]: {
    label: 'No',
    value: '0',
    bgcolor: '#1F3D99',
    color: '#fff',
  },
};

export const SEASON = {
  SUMMER: 'Summer',
  FALL: 'Fall',
  WINTER: 'Winter',
  SPRING: 'Spring',
};

export const SEASON_INFO = {
  [SEASON.SUMMER]: {
    label: 'Summer',
    value: '1',
    bgcolor: '#FFCC00',
    color: '#000',
  },
  [SEASON.FALL]: {
    label: 'Fall',
    value: '2',
    bgcolor: '#FFCCFF',
    color: '#000',
  },
  [SEASON.WINTER]: {
    label: 'Winter',
    value: '3',
    bgcolor: '#1F3D99',
    color: '#fff',
  },
  [SEASON.SPRING]: {
    label: 'Spring',
    value: '4',
    bgcolor: '#33CC66',
    color: '#000',
  },
};
