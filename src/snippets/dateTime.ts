export function outputDate(pubDate: string) {
  return new Date(pubDate).toLocaleDateString([], {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function outputTime(pubDate: string) {
  return new Date(pubDate).toLocaleTimeString([], {
    timeZoneName: "short",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export function outputTimeDate(pubDate: string) {
  return `${outputDate(pubDate)} @ 
                ${outputTime(pubDate)}`;
}
