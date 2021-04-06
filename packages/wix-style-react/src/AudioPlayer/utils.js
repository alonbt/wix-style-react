const ISOFormatHoursIndex = 11;
const ISOFormatMinutesIndex = 14;
const ISOFormatMinutesSingleDigitIndex = 15;
const ISOFormatHoursLength = 8;
const ISOFormatMinutesLength = 5;
const ISOFormatMinutesSingleDigitLength = 4;

export const secondsToISO = (seconds, isLoaded, duration) => {
  if (!isLoaded) {
    return '--:--';
  }

  const durationMinutes = Math.floor(duration / 60);
  const durationHours = Math.floor(durationMinutes / 60);
  const secondsInISOFormat = new Date(seconds * 1000).toISOString();

  if (durationHours > 0) {
    return secondsInISOFormat.substr(ISOFormatHoursIndex, ISOFormatHoursLength);
  }

  if (durationMinutes > 9) {
    return secondsInISOFormat.substr(
      ISOFormatMinutesIndex,
      ISOFormatMinutesLength,
    );
  }

  return secondsInISOFormat.substr(
    ISOFormatMinutesSingleDigitIndex,
    ISOFormatMinutesSingleDigitLength,
  );
};

export const positionToSeconds = (positionInPercentage, durationInSeconds) =>
  (positionInPercentage / 100) * durationInSeconds;

export const secondsToPosition = (seekInSeconds, durationInSeconds) =>
  (seekInSeconds / durationInSeconds) * 100;
