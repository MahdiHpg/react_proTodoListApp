const ShowTime = ({ isoTime, langSelected }) => {
  let timeAgo;
  const date = new Date(isoTime);
  const now = new Date();
  const timeDiff = now.getTime() - date.getTime();
  const seconds = Math.floor(timeDiff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (langSelected.value === "per") {
    if (seconds < 60) {
      timeAgo = `${seconds} ثانیه قبل`;
    } else if (minutes < 60) {
      timeAgo = `${minutes} دقیقه قبل`;
    } else if (hours < 24) {
      timeAgo = `${hours} ساعت قبل`;
    } else {
      timeAgo = `${days} روز قبل`;
    }
  } else {
    if (seconds < 60) {
      timeAgo = `${seconds} seconds ago`;
    } else if (minutes < 60) {
      timeAgo = `${minutes} minutes ago`;
    } else if (hours < 24) {
      timeAgo = `${hours} hours ago`;
    } else {
      timeAgo = `${days} days ago`;
    }
  }

  return <i className="text-xs">{timeAgo}</i>;
};
export default ShowTime;
