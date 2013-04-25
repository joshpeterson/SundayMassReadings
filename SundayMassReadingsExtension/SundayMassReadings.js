// This software is licensed under the MIT License http://www.opensource.org/licenses/mit-license.php.
// See https://github.com/joshpeterson/SundayMassReadings for more details.

var baseUrl = "http://www.usccb.org/bible/readings/";

var sundayMassReadingData =
{
    "January 1, 2012":{title:"The Octave Day of the Nativity of the Lord Solemnity of Mary, the Holy Mother of God",url:"010112",first:"Nm 6:22-27",psalm:"Ps 67:2-3, 5, 6, 8",second:"Gal 4:4-7",gospel:"Lk 2:16-21"},
    "January 8, 2012":{title:"The Epiphany of the Lord",url:"010812",first:"Is 60:1-6",psalm:"Ps 72:1-2, 7-8, 10-11, 12-13",second:"Eph 3:2-3a, 5-6",gospel:"Mt 2:1-12"},
    "January 15, 2012":{title:"Second Sunday In Ordinary Time",url:"011512",first:"1 Sm 3:3b-10, 19",psalm:"Ps 40:2, 4, 7-8, 8-9, 10",second:"1 Cor 6:13c-15a, 17-20",gospel:"Jn 1:35-42"},
    "January 22, 2012":{title:"Third Sunday in Ordinary Time",url:"012212",first:"Jon 3:1-5, 10",psalm:"Ps 25:4-5, 6-7, 8-9",second:"1 Cor 7:29-31",gospel:"Mk 1:14-20"},
    "January 29, 2012":{title:"Fourth Sunday in Ordinary Time",url:"012912",first:"Dt 18:15-20",psalm:"Ps 95:1-2, 6-7, 7-9",second:"1 Cor 7:32-35",gospel:"Mk 1:21-28"},
    "February 5, 2012":{title:"Fifth Sunday in Ordinary Time",url:"020512",first:"Jb 7:1-4, 6-7",psalm:"Ps 147:1-2, 3-4, 5-6",second:"1 Cor 9:16-19, 22-23",gospel:"Mk 1:29-39"},
    "February 12, 2012":{title:"Sixth Sunday in Ordinary Time",url:"021212",first:"Lv 13:1-2, 44-46",psalm:"Ps 32:1-2, 5, 11",second:"1 Cor 10:31-11:1",gospel:"Mk 1:40-45"},
    "February 19, 2012":{title:"Seventh Sunday in Ordinary Time",url:"021912",first:"Is 43:18-19, 21-22, 24b-25",psalm:"Ps 41:2-3, 4-5, 13-14",second:"2 Cor 1:18-22",gospel:"Mk 2:1-12"},
    "February 26, 2012":{title:"First Sunday of Lent",url:"022612",first:"Gn 9:8-15",psalm:"Ps 25:4-5, 6-7, 8-9",second:"1 Pt 3:18-22",gospel:"Mk 1:12-15"},
    "March 4, 2012":{title:"Second Sunday of Lent",url:"030412",first:"Gn 22:1-2, 9a, 10-13, 15-18",psalm:"Ps 116:10, 15, 16-17, 18-19",second:"Rom 8:31b-34",gospel:"Mk 9:2-10"},
    "March 11, 2012":{title:"Third Sunday of Lent",url:"031112",first:"Ex 20:1-17",psalm:"Ps 19:8, 9, 10, 11",second:"1 Cor 1:22-25",gospel:"Jn 2:13-25"},
    "March 18, 2012":{title:"Fourth Sunday of Lent",url:"031812",first:"2 Chr 36:14-16, 19-23",psalm:"Ps 137:1-2, 3, 4-5, 6",second:"Eph 2:4-10",gospel:"Jn 3:14-21"},
    "March 25, 2012":{title:"Fifth Sunday of Lent",url:"032512",first:"Jer 31:31-34",psalm:"Ps 51:3-4, 12-13, 14-15",second:"Heb 5:7-9",gospel:"Jn 12:20-33"},
    "April 1, 2012":{title:"Palm Sunday of the Passion of the Lord",url:"040112",first:"Mk 11:1-10",psalm:"Jn 12:12-16",second:"Is 50:4-7",gospel:"Mk 14:1-15:47"},
    "April 8, 2012":{title:"The Resurrection of the Lord",url:"040812",first:"Acts 10:34a, 37-43",psalm:"Ps 118:1-2, 16-17, 22-23",second:"Col 3:1-4",gospel:"Jn 20:1-9"},
    "April 15, 2012":{title:"Second Sunday of Easter",url:"041512",first:"Acts 4:32-35",psalm:"Ps 118:2-4, 13-15, 22-24",second:"1 Jn 5:1-6",gospel:"Jn 20:19-31"},
    "April 22, 2012":{title:"Third Sunday of Easter",url:"042212",first:"Acts 3:13-15, 17-19",psalm:"Ps 4:2, 4, 7-8, 9",second:"1 Jn 2:1-5a",gospel:"Lk 24:35-48"},
    "April 29, 2012":{title:"Fourth Sunday of Easter",url:"042912",first:"Acts 4:8-12",psalm:"Ps 118:1, 8-9, 21-23, 26, 28, 29",second:"1 Jn 3:1-2",gospel:"Jn 10:11-18"},
    "May 6, 2012":{title:"Fifth Sunday of Easter",url:"050612",first:"Acts 9:26-31",psalm:"Ps 22:26-27, 28, 30, 31-32",second:"1 Jn 3:18-24",gospel:"Jn 15:1-8"},
    "May 13, 2012":{title:"Sixth Sunday of Easter",url:"051312",first:"Acts 10:25-26, 34-35, 44-48",psalm:"Ps 98:1, 2-3, 3-4",second:"1 Jn 4:7-10",gospel:"Jn 15:9-17"},
    "May 20, 2012":{title:"Seventh Sunday of Easter",url:"052012",first:"Acts 1:15-17, 20a, 20c-26",psalm:"Ps 103:1-2, 11-12, 19-20",second:"1 Jn 4:11-16",gospel:"Jn 17:11b-19"},
    "May 27, 2012":{title:"Pentecost Sunday",url:"052712",first:"Acts 2:1-11",psalm:"Ps 104:1, 24, 29-30, 31, 34",second:"1 Cor 12:3b-7, 12-13",gospel:"Jn 20:19-23"},
    "June 3, 2012":{title:"The Solemnity of the Most Holy Trinity",url:"060312",first:"Dt 4:32-34, 39-40",psalm:"Ps 33:4-5, 6, 9, 18-19, 20, 22",second:"Rom 8:14-17",gospel:"Mt 28:16-20"},
    "June 10, 2012":{title:"The Solemnity of the Most Holy Body and Blood of Christ",url:"061012",first:"Ex 24:3-8",psalm:"Ps 116:12-13, 15-16, 17-18",second:"Heb 9:11-15",gospel:"Mk 14:12-16, 22-26"},
    "June 17, 2012":{title:"Eleventh Sunday in Ordinary Time",url:"061712",first:"Ez 17:22-24",psalm:"Ps 92:2-3, 13-14, 15-16",second:"2 Cor 5:6-10",gospel:"Mk 4:26-34"},
    "June 24, 2012":{title:"Solemnity of the Nativity of Saint John the Baptist",url:"062412",first:"Is 49:1-6",psalm:"Ps 139:1b-3, 13-14ab, 14c-15",second:"Acts 13:22-26",gospel:"Lk 1:57-66, 80"},
    "July 1, 2012":{title:"Thirteenth Sunday in Ordinary Time",url:"070112",first:"Wis 1:13-15; 2:23-24",psalm:"Ps 30:2, 4, 5-6, 11, 12, 13",second:"2 Cor 8:7, 9, 13-15",gospel:"Mk 5:21-43"},
    "July 8, 2012":{title:"Fourteenth Sunday in Ordinary Time",url:"070812",first:"Ez 2:2-5",psalm:"Ps 123:1-2, 2, 3-4",second:"2 Cor 12:7-10",gospel:"Mk 6:1-6"},
    "July 15, 2012":{title:"Fifteenth Sunday in Ordinary Time",url:"071512",first:"Am 7:12-15",psalm:"Ps 85:9-10, 11-12, 13-14",second:"Eph 1:3-14",gospel:"Mk 6:7-13"},
    "July 22, 2012":{title:"Sixteenth Sunday in Ordinary Time",url:"072212",first:"Jer 23:1-6",psalm:"Ps 23:1-3, 3-4, 5, 6",second:"Eph 2:13-18",gospel:"Mk 6:30-34"},
    "July 29, 2012":{title:"Seventeenth Sunday in Ordinary Time",url:"072912",first:"2 Kgs 4:42-44",psalm:"Ps 145:10-11, 15-16, 17-18",second:"Eph 4:1-6",gospel:"Jn 6:1-15"},
    "August 5, 2012":{title:"Eighteenth Sunday in Ordinary Time",url:"080512",first:"Ex 16:2-4, 12-15",psalm:"Ps 78:3-4, 23-24, 25, 54",second:"Eph 4:17, 20-24",gospel:"Jn 6:24-35"},
    "August 12, 2012":{title:"Nineteenth Sunday in Ordinary Time",url:"081212",first:"1 Kgs 19:4-8",psalm:"Ps 34:2-3, 4-5, 6-7, 8-9",second:"Eph 4:30-5:2",gospel:"Jn 6:41-51"},
    "August 19, 2012":{title:"Twentieth Sunday in Ordinary Time",url:"081912",first:"Prv 9:1-6",psalm:"Ps 34:2-3, 4-5, 6-7",second:"Eph 5:15-20",gospel:"Jn 6:51-58"},
    "August 26, 2012":{title:"Twenty-first Sunday in Ordinary Time",url:"082612",first:"Jos 24:1-2a, 15-17, 18b",psalm:"Ps 34:2-3, 16-17, 18-19, 20-21",second:"Eph 5:21-32",gospel:"Jn 6:60-69"},
    "September 2, 2012":{title:"Twenty-second Sunday in Ordinary Time",url:"090212",first:"Dt 4:1-2, 6-8",psalm:"Ps 15:2-3, 3-4, 4-5",second:"Jas 1:17-18, 21b-22, 27",gospel:"Mk 7:1-8, 14-15, 21-23"},
    "September 9, 2012":{title:"Twenty-third Sunday in Ordinary Time",url:"090912",first:"Is 35:4-7a",psalm:"Ps 146:7, 8-9, 9-10",second:"Jas 2:1-5",gospel:"Mk 7:31-37"},
    "September 16, 2012":{title:"Twenty-fourth Sunday in Ordinary Time",url:"091612",first:"Is 50:5-9a",psalm:"Ps 114:1-2, 3-4, 5-6, 8-9",second:"Jas 2:14-18",gospel:"Mk 8:27-35"},
    "September 23, 2012":{title:"Memorial of Saint Pio of Pietrelcina, priest",url:"092312",first:"Wis 2:12, 17-20",psalm:"Ps 54:3-4, 5, 6 and 8",second:"Jas 3:16-4:3",gospel:"Mk 9:30-37"},
    "September 30, 2012":{title:"Twenty-sixth Sunday in Ordinary Time",url:"093012",first:"Nm 11:25-29",psalm:"Ps 19:8, 10, 12-13, 14",second:"Jas 5:1-6",gospel:"Mk 9:38-43, 45, 47-48"},
    "October 7, 2012":{title:"Twenty-seventh Sunday in Ordinary Time",url:"100712",first:"Gn 2:18-24",psalm:"Ps 128:1-2, 3, 4-5, 6",second:"Heb 2:9-11",gospel:"Mk 10:2-16"},
    "October 14, 2012":{title:"Twenty-eighth Sunday in Ordinary Time",url:"101412",first:"Wis 7:7-11",psalm:"Ps 90:12-13, 14-15, 16-17",second:"Heb 4:12-13",gospel:"Mk 10:17-30"},
    "October 21, 2012":{title:"Twenty-ninth Sunday in Ordinary Time",url:"102112",first:"Is 53:10-11",psalm:"Ps 33:4-5, 18-19, 20, 22",second:"Heb 4:14-16",gospel:"Mk 10:35-45"},
    "October 28, 2012":{title:"Thirtieth Sunday in Ordinary Time",url:"102812",first:"Jer 31:7-9",psalm:"Ps 126:1-2, 2-3, 4-5, 6",second:"Heb 5:1-6",gospel:"Mk 10:46-52"},
    "November 4, 2012":{title:"Thirty-first Sunday in Ordinary Time",url:"110412",first:"Dt 6:2-6",psalm:"Ps 18:2-3, 3-4, 47, 51",second:"Heb 7:23-28",gospel:"Mk 12:28b-34"},
    "November 11, 2012":{title:"Thirty-second Sunday in Ordinary Time",url:"111112",first:"1 Kgs 17:10-16",psalm:"Ps 146:7, 8-9, 9-10",second:"Heb 9:24-28",gospel:"Mk 12:38-44"},
    "November 18, 2012":{title:"Thirty-third Sunday in Ordinary Time",url:"111812",first:"Dn 12:1-3",psalm:"Ps 16:5, 8, 9-10, 11",second:"Heb 10:11-14, 18",gospel:"Mk 13:24-32"},
    "November 25, 2012":{title:"The Solemnity of Christ the King",url:"112512",first:"Dn 7:13-14",psalm:"Ps 93:1, 1-2, 5",second:"Rv 1:5-8",gospel:"Jn 18:33b-37"},
    "December 2, 2012":{title:"First Sunday of Advent",url:"120212",first:"Jer 33:14-16",psalm:"Ps 25:4-5, 8-9, 10, 14",second:"1 Thes 3:12-4:2",gospel:"Lk 21:25-28, 34-36"},
    "December 9, 2012":{title:"Second Sunday of Advent",url:"120912",first:"Bar 5:1-9",psalm:"Ps 126:1-2, 2-3, 4-5, 6",second:"Phil 1:4-6, 8-11",gospel:"Lk 3:1-6"},
    "December 16, 2012":{title:"Third Sunday of Advent",url:"121612",first:"Zep 3:14-18a",psalm:"Is 12:2-3, 4, 5-6",second:"Phil 4:4-7",gospel:"Lk 3:10-18"},
    "December 23, 2012":{title:"Fourth Sunday of Advent",url:"122312",first:"Mi 5:1-4a",psalm:"Ps 80:2-3, 15-16, 18-19",second:"Heb 10:5-10",gospel:"Lk 1:39-45"},
    "December 30, 2012":{title:"Feast of the Holy Family of Jesus, Mary and Joseph",url:"123012",first:"Sir 3:2-6, 12-14",psalm:"Ps 128:1-2, 3, 4-5",second:"Col 3:12-21",gospel:"Lk 2:41-52"},
    "January 6, 2013":{title:"Solemnity of the Epiphany of the Lord",url:"010613",first:"Is 60:1-6",psalm:"Ps 72:1-2, 7-8, 10-11, 12-13.",second:"Eph 3:2-3a, 5-6",gospel:"Mt 2:1-12"},
    "January 13, 2013":{title:"Feast of the Baptism of the Lord",url:"011313",first:"Is 42:1-4, 6-7",psalm:"Is 40:1-5, 9-11",second:"Acts 10:34-38",gospel:"Lk 3:15-16, 21-22"},
    "January 20, 2013":{title:"Second Sunday in Ordinary Time",url:"012013",first:"Is 62:1-5",psalm:"Ps 96:1-2, 2-3, 7-8, 9-10",second:"1 Cor 12:4-11",gospel:"Jn 2:1-11"},
    "January 27, 2013":{title:"Third Sunday in Ordinary Time",url:"012713",first:"Neh 8:2-4a, 5-6, 8-10",psalm:"Ps 19:8, 9, 10, 15 ",second:"1 Cor 12:12-30",gospel:"Lk 1:1-4; 4:14-21"},
    "February 3, 2013":{title:"Fourth Sunday in Ordinary Time",url:"020313",first:"Jer 1:4-5, 17-19",psalm:"Ps 71:1-2, 3-4, 5-6, 15-17",second:"1 Cor 12:31-13:13 or 13:4-13",gospel:"Lk 4:21-30"},
    "February 10, 2013":{title:"Fifth Sunday in Ordinary Time",url:"021013",first:"Is 6:1-2a, 3-8",psalm:"Ps 138:1-2, 2-3, 4-5, 7-8",second:"1 Cor 15:1-11 or 15:3-8, 11",gospel:"Lk 5:1-11"},
    "February 17, 2013":{title:"First Sunday of Lent",url:"021713",first:"Dt 26:4-10",psalm:"Ps 91:1-2, 10-11, 12-13, 14-15",second:"Rom 10:8-13",gospel:"Lk 4:1-13"},
    "February 24, 2013":{title:"Second Sunday of Lent",url:"022413",first:"Gn 15:5-12, 17-18",psalm:"Ps 27:1, 7-8, 8-9, 13-14",second:"Phil 3:17-4:1",gospel:"Lk 9:28b-36"},
    "March 3, 2013":{title:"Third Sunday of Lent",url:"030313",first:"Ex 3:1-8A, 13-15",psalm:"Ps 103: 1-2, 3-4, 6-7, 8, 11",second:"1 Cor 10:1-6, 10-12",gospel:"Lk 13:1-9"},
    "March 10, 2013":{title:"Fourth Sunday of Lent",url:"031013",first:"Jos 5:9A, 10-12",psalm:"Ps 34:2-3, 4-5, 6-7",second:"2 Cor 5:17-21",gospel:"Lk 15:1-3, 11-32"},
    "March 17, 2013":{title:"Fifth Sunday of Lent",url:"031713",first:"Is 43:16-21",psalm:"Ps 126:1-2, 2-3, 4-5, 6",second:"Phil 3:8-14",gospel:"Jn 8:1-11"},
    "March 24, 2013":{title:"Palm Sunday of the Passion of the Lord",url:"032413",first:"Is 50:4-7",psalm:"Ps 22:8-9, 17-18, 19-20, 23-24",second:"Phil 2:6-11",gospel:"Lk 22:14-23:56"},
    "March 31, 2013":{title:"The Resurrection of the Lord",url:"033113",first:"Acts 10:34a, 37-43",psalm:"Ps 118:1-2, 16-17, 22-23",second:"Col 3:1-4",gospel:"JN 20:1-9"},
    "April 7, 2013":{title:"Second Sunday of Easter (or Sunday of Divine Mercy)",url:"040713",first:"Acts 5:12-16",psalm:"Ps 118:2-4, 13-15, 22-24 ",second:"Rev 1:9-11a, 12-13, 17-19",gospel:"Jn 20:19-31"},
    "April 14, 2013":{title:"Third Sunday of Easter",url:"041413",first:"Acts 5:27-32, 40b-41",psalm:"Ps 30:2, 4, 5-6, 11-12, 13",second:"Rev 5:11-14",gospel:"Jn 21:1-19"},
    "April 21, 2013":{title:"Fourth Sunday of Easter",url:"042113",first:"Acts 13:14, 43-52",psalm:"Ps 100:1-2, 3, 5",second:"Rev 7:9, 14b-17",gospel:"Jn 10:27-30"},
    "April 28, 2013":{title:"Fifth Sunday of Easter",url:"042813",first:"Acts 14:21-27",psalm:"Ps 145:8-9, 10-11, 12-13",second:"Rev 21:1-5a",gospel:"Jn 13:31-33a, 34-35"},
    "May 5, 2013":{title:"Sixth Sunday of Easter",url:"050513",first:"Acts 15:1-2, 22-29",psalm:"Ps 67:2-3, 5, 6, 8",second:"Rev 21:10-14, 22-23",gospel:"Jn 14:23-29"},
    "May 12, 2013":{title:"Seventh Sunday of Easter",url:"051213",first:"Acts 7:55-60",psalm:"Ps 97:1-2, 6-7, 9",second:"Rev 22:12-14, 16-17, 20",gospel:"Jn 17:20-26"},
    "May 19, 2013":{title:"Pentecost",url:"051913",first:"Acts 2:1-11",psalm:"Ps 104:1, 24, 29-30, 31, 34",second:"1 Cor 12:3b-7, 12-13",gospel:"Jn 20:19-23"},
    "May 26, 2013":{title:"The Solemnity of the Most Holy Trinity",url:"052613",first:"Prv 8:22-31",psalm:"Ps 8:4-5, 6-7, 8-9",second:"Rom 5:1-5",gospel:"Jn 16:12-15"},
    "June 2, 2013":{title:"The Solemnity of the Most Holy Body and Blood of Christ",url:"060213",first:"Gn 14:18-20",psalm:"Ps 110:1, 2, 3, 4",second:"1 Cor 11:23-26",gospel:"Lk 9:11b-17"},
    "June 9, 2013":{title:"Tenth Sunday in Ordinary Time",url:"060913",first:"1 Kgs 17:17-24",psalm:"Ps 30:2, 4, 5-6, 11,12, 13",second:"Gal 1:11-19",gospel:"Lk 7:11-17"},
    "June 16, 2013":{title:"Eleventh Sunday in Ordinary Time",url:"061613",first:"2 Sm 12:7-10, 13",psalm:"Ps 32:1-2, 5, 7, 11",second:"Gal 2:16, 19-21",gospel:"Lk 7:36-8:3"},
    "June 23, 2013":{title:"Twelfth Sunday in Ordinary Time",url:"062313",first:"Zec 12:10-11; 13:1",psalm:"Ps 63:2, 3-4, 5-6, 8-9",second:"Gal 3:26-29",gospel:"Lk 9:18-24"},
    "June 30, 2013":{title:"Thirteenth Sunday in Ordinary Time",url:"063013",first:"1 Kgs 19:16b, 19-21",psalm:"Ps 16:1-2, 5, 7-8, 9-10, 11",second:"Gal 5:1, 13-18",gospel:"Lk 9:51-62"},
    "July 7, 2013":{title:"Fourteenth Sunday in Ordinary Time",url:"070713",first:"Is 66:10-14c",psalm:"Ps 66:1-3, 4-5, 6-7, 16, 20",second:"Gal 6:14-18",gospel:"Lk 10:1-12, 17-20"},
    "July 14, 2013":{title:"Fifteenth Sunday in Ordinary Time",url:"071413",first:"Dt 30:10-14",psalm:"Ps 69:14, 17, 30-31, 33-34, 36, 37",second:"Col 1:15-20",gospel:"Lk 10:25-37"},
    "July 21, 2013":{title:"Sixteenth Sunday in Ordinary Time",url:"072113",first:"Gn 18:1-10a",psalm:"Ps 15:2-3, 3-4, 5",second:"Col 1:24-28",gospel:"Lk 10:38-42"},
    "July 28, 2013":{title:"Seventeenth Sunday in Ordinary Time",url:"072813",first:"Gn 18:20-32",psalm:"Ps 138:1-2, 2-3, 6-7, 7-8",second:"Col 2:12-14",gospel:"Lk 11:1-13"},
    "August 4, 2013":{title:"Eighteenth Sunday in Ordinary Time",url:"080413",first:"Ecc 1:2; 2:21-23",psalm:"Ps 90:3-4, 5-6, 12-13, 14, 17",second:"Col 3:1-5, 9-11",gospel:"Lk 12:13-21"},
    "August 11, 2013":{title:"Nineteenth Sunday in Ordinary Time",url:"081113",first:"Wis 18:6-9",psalm:"Ps 33:1, 12, 18-19, 20-22",second:"Heb 11:1-2, 8-19",gospel:"Lk 12:32-48"},
    "August 18, 2013":{title:"Twentieth Sunday in Ordinary Time",url:"081813",first:"Jer 38:4-6, 8-10",psalm:"Ps 40:2, 3, 4, 18",second:"Heb 12:1-4",gospel:"Lk 12:49-53"},
    "August 25, 2013":{title:"Twenty-first Sunday in Ordinary Time",url:"082513",first:"Is 66:18-21",psalm:"Ps 117:1, 2",second:"Heb 12:5-7, 11-13",gospel:"Lk 13:22-30"},
    "September 1, 2013":{title:"Twenty-second Sunday in Ordinary Time",url:"090113",first:"Sir 3:17-18, 20, 28-29",psalm:"Ps 68:4-5, 6-7, 10-11",second:"Heb 12:18-19, 22-24a",gospel:"Lk 14:1, 7-14"},
    "September 8, 2013":{title:"Twenty-third Sunday in Ordinary Time",url:"090813",first:"Wis 9:13-18b",psalm:"Ps 90:3-4, 5-6, 12-13, 14-17",second:"Phmn 9-10, 12-17",gospel:"Lk 14:25-33"},
    "September 15, 2013":{title:"Twenty-fourth Sunday in Ordinary Time",url:"091513",first:"Ex 32:7-11, 13-14",psalm:"Ps 51:3-4, 12-13, 17, 19",second:"1 Tm 1:12-17",gospel:"Lk 15:1-32"},
    "September 22, 2013":{title:"Twenty-fifth Sunday in Ordinary Time",url:"092213",first:"Am 8:4-7",psalm:"Ps 113:1-2, 4-6, 7-8",second:"1 Tm 2:1-8",gospel:"Lk 16:1-13"},
    "September 29, 2013":{title:"Twenty-sixth Sunday in Ordinary Time",url:"092913",first:"Am 6:1a, 4-7",psalm:"Ps 146:7, 8-9, 9-10",second:"1 Tm 6:11-16",gospel:"Lk 16:19-31"},
    "October 6, 2013":{title:"Twenty-seventh Sunday in Ordinary Time",url:"100613",first:"Hb 1:2-3; 2:2-4",psalm:"Ps 95:1-2, 6-7, 8-9",second:"2 Tm 1:6-8, 13-14",gospel:"Lk 17:5-10"},
    "October 13, 2013":{title:"Twenty-eighth Sunday in Ordinary Time",url:"101313",first:"2 Kgs 5:14-17",psalm:"Ps 98:1, 2-3, 3-4",second:"2 Tm 2:8-13",gospel:"Lk 17:11-19"},
    "October 20, 2013":{title:"Twenty-ninth Sunday in Ordinary Time",url:"102013",first:"Ex 17:8-13",psalm:"Ps 121:1-2, 3-4, 5-6, 7-8",second:"2 Tm 3:14-4:2",gospel:"Lk 18:1-8"},
    "October 27, 2013":{title:"Thirtieth Sunday in Ordinary Time",url:"102713",first:"Sir 35:12-14, 16-18",psalm:"Ps 34:2-3, 17-18, 19, 23",second:"2 Tm 4:6-8, 16-18",gospel:"Lk 18:9-14"},
    "November 3, 2013":{title:"Thirty-first Sunday in Ordinary Time",url:"110313",first:"Wis 11:22-12:2",psalm:"Ps 145:1-2, 8-9, 10-11, 13, 14",second:"2 Thes 1:11-2:2",gospel:"Lk 19:1-10"},
    "November 10, 2013":{title:"Thirty-second Sunday in Ordinary Time",url:"111013",first:"2 Mc 7:1-2, 9-14",psalm:"Ps 17:1, 5-6, 8, 15",second:"2 Thes 2:16-3:5",gospel:"Lk 20:27-38"},
    "November 17, 2013":{title:"Thirty-third Sunday in Ordinary Time",url:"111713",first:"Mal 3:19-20a",psalm:"Ps 98:5-6, 7-8, 9",second:"2 Thes 3:7-12",gospel:"Lk 21:5-19"},
    "November 24, 2013":{title:"Our Lord Jesus Christ, King of the Universe",url:"112413",first:"2 Sm 5:1-3",psalm:"Ps 122:1-2, 3-4, 4-5",second:"Col 1:12-20",gospel:"Lk 23:35-43"},
    "December 1, 2013":{title:"First Sunday of Advent",url:"120113",first:"Is 2:1-5",psalm:"Ps 122: 1-2, 3-4, 4-5, 6-7, 8-9",second:"Rom 13:11-14",gospel:"Mt 24:37-44"},
    "December 8, 2013":{title:"Second Sunday of Advent",url:"120813",first:"Is 11:1-10",psalm:"Ps 72:1-2, 7-8, 12-13, 17",second:"Rom 15:4-9",gospel:"Mt 3:1-12"},
    "December 15, 2013":{title:"Third Sunday of Advent",url:"121513",first:"Is 35:1-6a, 10",psalm:"Ps 146:6-7, 8-9, 9-10",second:"Jas 5:7-10",gospel:"Mt 11:2-11"},
    "December 22, 2013":{title:"Fourth Sunday of Advent",url:"122213",first:"Is 7:10-14",psalm:"Ps 24:1-2, 3-4, 5-6",second:"Rom 1:1-7",gospel:"Mt 1:18-24"},
    "December 29, 2013":{title:"The Holy Family of Jesus, Mary and Joseph",url:"122913",first:"Sir 3:2-6, 12-14",psalm:"Ps 128:1-2, 3, 4-5",second:"Col 3:12-21",gospel:"Mt 2:13-15, 19-23"},
};

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("nextButton").addEventListener('click', handleNextButtonClick);
    document.getElementById("previousButton").addEventListener('click', handlePreviousButtonClick);

    setButtonState(currentSundayDate.clone().next().sunday(), document.getElementById("nextButton"));
    setButtonState(currentSundayDate.clone().previous().sunday(), document.getElementById("previousButton"));
});

var currentSundayDate = Date.today().next().sunday();
processDate(currentSundayDate);

function processDate(sundayDate)
{
    var currentSundayDateString = getDateString(sundayDate);
    displayMassReadingData(sundayMassReadingData[currentSundayDateString], currentSundayDateString);
}

function displayMassReadingData(massReadingData, dateString)
{
    var headerContainer = document.getElementById("title");
    removeAllChildren(headerContainer);
    var link = document.createElement("a");
    link.setAttribute("href", "javascript:void(0)");
    link.innerText = massReadingData.title;
    headerContainer.appendChild(link);

    link.addEventListener('click', handleClick);

    var firstReading = document.getElementById("firstReading");
    firstReading.innerText = massReadingData.first;

    var psalm = document.getElementById("psalm");
    psalm.innerText = massReadingData.psalm;

    var secondReading = document.getElementById("secondReading");
    secondReading.innerText = massReadingData.second;

    var gospel = document.getElementById("gospel");
    gospel.innerText = massReadingData.gospel;

    var dateContainer = document.getElementById("date");
    removeAllChildren(dateContainer);
    var date = document.createElement("span");
    date.setAttribute("id", "date");
    date.innerText = dateString;
    dateContainer.appendChild(date);
}

function removeAllChildren(container)
{
    while (container.childNodes[0])
    {
        container.removeChild(container.childNodes[0]);
    }
}

function handleClick(sender)
{
    var massReadingData = sundayMassReadingData[getDateString(currentSundayDate)];
    chrome.tabs.create({
        'url': baseUrl + massReadingData.url + ".cfm",
        'selected':true
    });
}

function handleNextButtonClick(sender)
{
    currentSundayDate.next().sunday();
    processDate(currentSundayDate);
    setButtonState(currentSundayDate.clone().next().sunday(), document.getElementById("nextButton"));
    setButtonState(currentSundayDate.clone().previous().sunday(), document.getElementById("previousButton"));
}

function handlePreviousButtonClick(sender)
{
    currentSundayDate.previous().sunday();
    processDate(currentSundayDate);
    setButtonState(currentSundayDate.clone().next().sunday(), document.getElementById("nextButton"));
    setButtonState(currentSundayDate.clone().previous().sunday(), document.getElementById("previousButton"));
}

function setButtonState(dateToTest, button)
{
    if (!(getDateString(dateToTest) in sundayMassReadingData))
        button.disabled = true;
    else
        button.disabled = false;
}

function getDateString(date)
{
    return date.getMonthName() + " " + date.getDate() + ", " + date.getFullYear();
}
