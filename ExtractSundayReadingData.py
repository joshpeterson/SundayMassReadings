# This software is licensed under the MIT License http://www.opensource.org/licenses/mit-license.php.
# See https://github.com/joshpeterson/SundayMassReadings for more details.

from bs4 import BeautifulSoup
import glob
import re
import sys

def BuildSundayMassReadingJson(html_string, url_string):
    soup = BeautifulSoup(html_string)

    date = soup.find_all("h1")[0].text
    title = soup.title.text

    readings = soup.find_all("a", { "class" : "book" })
    if len(readings) == 0:
        readings = readings = soup.find_all("div", {"class":"bibleReadingsWrapper"})
        sub_soup = BeautifulSoup(str(readings))
        sub_readings = sub_soup.find_all("a", {"href":re.compile(".*bible.*")})

        if len(sub_readings) == 0:
            print "Problem parsing " + url_string
            return
        readings = sub_readings

    if len(readings) != 4:
        print "Check readings for " + date + " too may readings found."

    firstReading = readings[0].text
    psalm = readings[1].text
    secondReading = readings[2].text
    gospelReading = readings[3].text

    json_entry = "\"" + date + "\"" + ":{title:\"" + title + "\",url:\"" + url_string + "\",first:\"" + firstReading + "\",psalm:\"" + psalm + "\",second:\"" + secondReading + "\",gospel:\"" + gospelReading + "\"},"
    print json_entry

for file_name in glob.glob("*.cfm"):
    f = open(file_name);
    try:
        BuildSundayMassReadingJson(f.read(), file_name[:6])
    except:
        print "Exception parsing " + file_name + "\n" + str(sys.exc_info()[0])

