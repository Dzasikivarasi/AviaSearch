function formatTime(minutes: number): string {
  const hours = Math.floor(minutes / 60);
  const minutesRest = minutes % 60;

  if (hours > 0) {
    return `${hours} ч ${minutesRest} мин`;
  } else {
    return `${minutesRest} мин`;
  }
};

function formatTransferCount(number: number | null, word: string): string {
  if (number === null) {
    return `Без пересадок`;
  } else if (number === 1) {
    return `${number} ${word}ка`;
  } else if (number > 1 && number < 5) {
    return `${number} ${word}ки`;
  } else {
    return `${number} ${word}ок`;
  }
}

export { formatTime, formatTransferCount };