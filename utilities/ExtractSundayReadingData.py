# This software is licensed under the MIT License
# http://www.opensource.org/licenses/mit-license.php.
# See https://github.com/joshpeterson/SundayMassReadings for more details.

from bs4 import BeautifulSoup
import glob
import re
import sys

def BuildSundayMassReadingJson(html_string, url_string):
    soup = BeautifulSoup(html_string, "html.parser")

    date = soup.find_all("h1")[0].text
    title = soup.find_all("h3")[2].text
    title = title[0:title.find("Lectionary")]

    readings = soup.find_all("a", { "class" : "book" })
    if len(readings) == 0:
        readings = soup.find_all("div", {"class":"bibleReadingsWrapper"})
        sub_soup = BeautifulSoup(str(readings), "html.parser")
        sub_readings = sub_soup.find_all("a", {"href":re.compile(".*bible.*")})

        if len(sub_readings) == 0:
            print "Problem parsing " + url_string
            return
        readings = sub_readings

    for i in range(0, len(sub_readings)):
        readingName = sub_readings[i].parent.text
        if readingName.startswith("Reading 1"):
            firstReadingIndex = i
        elif readingName.startswith("Responsorial Psalm"):
            psalmIndex = i
        elif readingName.startswith("Reading 2"):
            secondReadingIndex = i
        elif readingName.startswith("Gospel"):
            gospelIndex = i

    firstReading = readings[firstReadingIndex].text.replace("\\n","").replace("\u2014", "-")
    psalm = readings[psalmIndex].text.replace("\\n","").replace("\u2014", "-")
    secondReading = readings[secondReadingIndex].text.replace("\\n","").replace("\u2014", "-")
    gospelReading = readings[gospelIndex].text.replace("\\n","").replace("\u2014", "-")

    json_entry = "\"" + date + "\"" + ":{title:\"" + title + "\",url:\"" + url_string + "\",first:\"" + firstReading + "\",psalm:\"" + psalm + "\",second:\"" + secondReading + "\",gospel:\"" + gospelReading + "\"},"
    print json_entry

for file_name in sorted(glob.glob("*.cfm")):
    f = open(file_name);
    try:
        BuildSundayMassReadingJson(f.read(), file_name[:6])
    except KeyboardInterrupt:
        raise
    except:
        print "Exception parsing " + file_name + "\n" + str(sys.exc_info()[0])

