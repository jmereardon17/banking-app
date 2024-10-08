export const sidebarLinks = [
  {
    imgURL: '/icons/home.svg',
    route: '/',
    label: 'Home'
  },
  {
    imgURL: '/icons/dollar-circle.svg',
    route: '/my-banks',
    label: 'My Banks'
  },
  {
    imgURL: '/icons/transaction.svg',
    route: '/transaction-history',
    label: 'Transaction History'
  },
  {
    imgURL: '/icons/money-send.svg',
    route: '/payment-transfer',
    label: 'Transfer Funds'
  }
];

export const ITEMS = [
  {
    id: '6624c02e00367128945e', // appwrite item Id
    accessToken: 'access-sandbox-83fd9200-0165-4ef8-afde-65744b9d1548',
    itemId: 'VPMQJKG5vASvpX8B6JK3HmXkZlAyplhW3r9xm',
    userId: '6627ed3d00267aa6fa3e',
    accountId: 'X7LMJkE5vnskJBxwPeXaUWDBxAyZXwi9DNEWJ'
  },
  {
    id: '6627f07b00348f242ea9', // appwrite item Id
    accessToken: 'access-sandbox-74d49e15-fc3b-4d10-a5e7-be4ddae05b30',
    itemId: 'Wv7P6vNXRXiMkoKWPzeZS9Zm5JGWdXulLRNBq',
    userId: '6627ed3d00267aa6fa3e',
    accountId: 'x1GQb1lDrDHWX4BwkqQbI4qpQP1lL6tJ3VVo9'
  }
];

export const topCategoryStyles = {
  'Food and Drink': {
    circleBg: 'bg-pink-100',
    text: {
      main: 'text-pink-500',
      count: 'text-pink-500'
    },
    progress: {
      bg: 'bg-pink-100',
      indicator: 'bg-pink-500'
    },
    icon: '/icons/monitor.svg'
  },
  Travel: {
    circleBg: 'bg-blue-100',
    text: {
      main: 'text-blue-700',
      count: 'text-blue-700'
    },
    progress: {
      bg: 'bg-blue-100',
      indicator: 'bg-blue-700'
    },
    icon: '/icons/coins.svg'
  },
  Transfer: {
    circleBg: 'bg-red-100',
    text: {
      main: 'text-[#f04438]',
      count: 'text-[#f04438]'
    },
    progress: {
      bg: 'bg-red-100',
      indicator: 'bg-[#f04438]'
    },
    icon: '/icons/coins.svg'
  },
  default: {
    bg: 'bg-inherit',
    circleBg: 'bg-success-100',
    text: {
      main: 'text-success-700',
      count: 'text-success-700'
    },
    progress: {
      bg: 'bg-success-100',
      indicator: 'bg-success-700'
    },
    icon: '/icons/shopping-bag.svg'
  }
};

export const transactionCategoryStyles = {
  'Food and Drink': {
    borderColor: 'border-pink-600',
    backgroundColor: 'bg-pink-500',
    textColor: 'text-pink-500',
    chipBackgroundColor: 'bg-inherit'
  },
  Payment: {
    borderColor: 'border-success-600',
    backgroundColor: 'bg-green-600',
    textColor: 'text-success-700',
    chipBackgroundColor: 'bg-inherit'
  },
  'Bank Fees': {
    borderColor: 'border-success-600',
    backgroundColor: 'bg-green-600',
    textColor: 'text-success-700',
    chipBackgroundColor: 'bg-inherit'
  },
  Transfer: {
    borderColor: 'border-red-700',
    backgroundColor: 'bg-[#f04438]',
    textColor: 'text-[#f04438]',
    chipBackgroundColor: 'bg-inherit'
  },
  Processing: {
    borderColor: 'border-[#F2F4F7]',
    backgroundColor: 'bg-gray-500',
    textColor: 'text-[#344054]',
    chipBackgroundColor: 'bg-[#F2F4F7]'
  },
  Success: {
    borderColor: 'border-[#12B76A]',
    backgroundColor: 'bg-[#12B76A]',
    textColor: 'text-[#25b373]',
    chipBackgroundColor: 'bg-inherit'
  },
  Travel: {
    borderColor: 'border-[#0047AB]',
    backgroundColor: 'bg-blue-500',
    textColor: 'text-blue-700',
    chipBackgroundColor: 'bg-inherit'
  },
  default: {
    borderColor: '',
    backgroundColor: 'bg-blue-500',
    textColor: 'text-blue-700',
    chipBackgroundColor: 'bg-inherit'
  }
};
