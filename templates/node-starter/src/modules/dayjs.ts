import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import buddhistEra from "dayjs/plugin/buddhistEra";
dayjs.extend(utc);
dayjs.extend(buddhistEra);
export default dayjs;
