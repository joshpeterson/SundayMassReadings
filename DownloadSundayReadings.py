# This software is licensed under the MIT License http://www.opensource.org/licenses/mit-license.php.
# See https://github.com/joshpeterson/SundayMassReadings for more details.

# Based on the code from here: http://stackoverflow.com/questions/2003870/how-can-i-select-all-of-the-sundays-for-a-year-using-python
import urllib
from datetime import date, timedelta

def allsundays(year):
   d = date(year, 1, 1)                    # January 1st
   d += timedelta(days = 6 - d.weekday())  # First Sunday
   while d.year == year:
      yield d
      d += timedelta(days = 7)

base_url = "http://www.usccb.org/bible/readings/"

for d in allsundays(2013):
   date_parts = str(d).split("-")
   date_string = date_parts[1] + date_parts[2] + date_parts[0][2:4]
   url = base_url + date_string + ".cfm"
   print "Getting " + url
   urllib.urlretrieve(url, r"raw\\" + date_string + ".cfm")

