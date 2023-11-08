import { format, getDate, getDaysInMonth, startOfMonth } from 'date-fns';
import { memo } from 'react';
import { Text } from '../../../ui/components/Text';

type Props = {
  date: Date;
};

const WEEKDAYS = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

const _Calendar = ({ date }: Props) => {
  const title = format(date, 'MMM yyyy'); // e.g. `Jan 2023`

  const firstDateOfMonth = startOfMonth(date);
  const firstDayColumnStart = firstDateOfMonth.getDay() + 1;

  const daysInMonth = getDaysInMonth(date);
  const days = Array.from({ length: daysInMonth }, (v, i) => i + 1); // If `daysInMonth` is 28, then [1, 2, 3, ..., 28]

  return (
    <div className="mx-auto my-2 w-fit">
      <div className="mb-2 flex items-end justify-center gap-1">
        <Text style={{ margin: 0 }} h6 className="text-center text-default-600">
          {title}
        </Text>
        <Text style={{ fontSize: 10 }} className="text-center text-default-400">
          ({format(date, 'OOOO')}) {/* e.g. `(GMT+09:00)` */}
        </Text>
      </div>

      <ul className="grid grid-cols-7">
        {WEEKDAYS.map((weekday) => (
          <li key={weekday} className="text-center text-xs text-default-500">
            {weekday}
          </li>
        ))}
      </ul>

      <ul className="grid grid-cols-7">
        {days.map((day) => {
          const isGivenDate = day === getDate(date);

          return (
            <li
              key={day}
              className={isGivenDate ? 'calendar-day bg-primary-200' : 'calendar-day'}
              style={{ gridColumnStart: day === 1 ? firstDayColumnStart : undefined }}
            >
              {day}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export const Calendar = memo(_Calendar);
