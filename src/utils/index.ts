import dayjs from 'dayjs';

export const isSystemDarkMode = () => {
  return (
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
  );
};

export const formatDateAndTime = (date: string): string => {
  return date ? dayjs(date).format('YYYY-MM-DD HH:mm') : '-';
};
