// Add zero in front of numbers < 10
export function zeroPad(i)
{
	if (i < 10)
	{
		i = "0" + i;
	}
	return i;
}

// Convert the day of week to human readable
export function dayOfWeek(i)
{
	switch(i)
	{
		case 0:
			return "SUN";
		case 1:
			return "MON";
		case 2:
			return "TUE";
		case 3:
			return "WED";
		case 4:
			return "THU";
		case 5:
			return "FRI";
		case 6:
			return "SAT";
		}
}

// Convert day of month to human readable
export function nameOfMonth(i)
{
	switch(i)
	{
		case 0:
			return "JAN";
		case 1:
			return "FEB";
		case 2:
			return "MAR";
		case 3:
			return "APR";
		case 4:
			return "MAY";
		case 5:
			return "JUN";
		case 6:
			return "JUL";
		case 7:
			return "AUG";
		case 8:
			return "SEP";
		case 9:
			return "OCT";
		case 10:
			return "NOV";
		case 11:
			return "DEC";
		}
}

/**
 * Maps value from one range to another
 * @param value
 * @param istart
 * @param istop
 * @param ostart
 * @param ostop
 * @returns {*}
 */
export function mapNumber(value, istart, istop, ostart, ostop)
{
	return ostart + (ostop - ostart) * ((value - istart) / (istop - istart));
}