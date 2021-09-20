import dayjs from "dayjs";

const relativeTime = require("dayjs/plugin/relativeTime");
dayjs.extend(relativeTime);

export const displayDate = (date) => {
  return dayjs(new Date(1000 * date)).fromNow();
};
