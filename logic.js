//this line ensures following functions are exported
module.exports = { checkNumberofDays };

function checkNumberofDays(year)
{
    const daysofLeapYear = 366;
    const daysofnonLeapYear = 365;

    if (year%4 == 0)
    {
        days = daysofLeapYear;
    }
    else
    {
        days = daysofnonLeapYear;
    }
    console.log(`There are ${days} number of days within year ${year}.`);
    return days;
}

