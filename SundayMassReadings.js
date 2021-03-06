var baseUrl = "http://www.usccb.org/bible/readings/";

var sundayMassReadingData =
{
    "January 5, 2014":{title:"Solemnity of the Epiphany of the Lord",url:"010514",first:"is 60:1-6",psalm:"Ps 72:1-2, 7-8, 10-11, 12-13",second:"Eph 3:2-3a, 5-6",gospel:"Mt 2:1-12"},
    "January 12, 2014":{title:"Feast of the Baptism of the Lord",url:"011214",first:"Is 42:1-4, 6-7",psalm:"Ps 29:1-2, 3-4, 3, 9-10",second:"acts 10:34-38",gospel:"Mt 3:13-17"},
    "January 19, 2014":{title:"Second Sunday in Ordinary Time",url:"011914",first:"Is 49:3, 5-6",psalm:"ps 40:2, 4, 7-8, 8-9, 10",second:"1 Cor 1:1-3",gospel:"Jn 1:29-34"},
    "January 26, 2014":{title:"Third Sunday in Ordinary Time",url:"012614",first:"Is 8:23-9:3",psalm:"Ps 27:1, 4, 13-14",second:"1 Cor 1:10-13, 17",gospel:"Mt 4:12-23"},
    "February 2, 2014":{title:"Feast of the Presentation of the Lord",url:"020214",first:"MAl 3:1-4",psalm:"Ps 24:7, 8, 9, 10",second:"Heb 2:14-18",gospel:"Lk 2:22-40"},
    "February 9, 2014":{title:"Fifth Sunday in Ordinary Time",url:"020914",first:"Is 58:7-10",psalm:"Ps 112:4-5, 6-7, 8-9",second:"1 Cor 2:1-5",gospel:"Mt 5:13-16"},
    "February 16, 2014":{title:"Sixth Sunday in Ordinary Time",url:"021614",first:"Sir 15:15-20",psalm:"Ps 119:1-2, 4-5, 17-18, 33-34",second:"1 Cor 2:6-10",gospel:"Mt 5:17-37"},
    "February 23, 2014":{title:"Seventh Sunday in Ordinary Time",url:"022314",first:"Lv 19:1-2, 17-18",psalm:"ps 103:1-2, 3-4, 8, 10, 12-13",second:"1 Cor 3:16-23",gospel:"Mt 5:38-48"},
    "March 2, 2014":{title:"Eighth Sunday in Ordinary Time",url:"030214",first:"Is 49:14-15",psalm:"Ps 62:2-3, 6-7, 8-9",second:"1 Cor 4:1-5",gospel:"Mt 6:24-34"},
    "March 9, 2014":{title:"First Sunday of Lent",url:"030914",first:"Gn 2:7-9; 3:1-7",psalm:"Ps 51:3-4, 5-6, 12-13, 17",second:"Rom 5:12-19",gospel:"Mt 4:1-11"},
    "March 16, 2014":{title:"Second Sunday of Lent",url:"031614",first:"Gn 12:1-4a",psalm:"Ps 33:4-5, 18-19, 20, 22",second:"2 Tim 1:8b-10",gospel:"Mt 17:1-9"},
    "March 23, 2014":{title:"Third Sunday of Lent",url:"032314",first:"Ex 17:3-7",psalm:"Ps 95:1-2, 6-7, 8-9",second:"Rom 5:1-2, 5-8",gospel:"Jn 4:5-42"},
    "March 30, 2014":{title:"Fourth Sunday of Lent",url:"033014",first:"1 Sm 16:1b, 6-7, 10-13a",psalm:"Ps 23:1-3a, 3b-4, 5, 6",second:"Eph 5:8-14",gospel:"Jn 9:1-41"},
    "April 6, 2014":{title:"Fifth Sunday of Lent",url:"040614",first:"Ez 37:12-14",psalm:"ps 130:1-2, 3-4, 5-6, 7-8",second:"Rom 8:8-11",gospel:"Jn 11:1-45"},
    "April 13, 2014":{title:"Palm Sunday of the Lord's Passion",url:"041314",first:"is 50:4-7",psalm:"Ps 22:8-9, 17-18, 19-20, 23-24",second:"Phil 2:6-11",gospel:"Mt 26:14-27:66"},
    "April 20, 2014":{title:"The Resurrection of the Lord",url:"042014",first:"acts 10:34a, 37-43",psalm:"Ps 118:1-2, 16-17, 22-23",second:"Col 3:1-4",gospel:"jn 20:1-9"},
    "April 27, 2014":{title:"Sunday of Divine Mercy",url:"042714",first:"Acts 2:42-47",psalm:"Ps 118:2-4, 13-15, 22-24",second:"1 Pt 1:3-9",gospel:"jn 20:19-31"},
    "May 4, 2014":{title:"Third Sunday of Easter",url:"050414",first:"Acts 2:14, 22-33",psalm:"Ps 16:1-2, 5, 7-8, 9-10, 11",second:"1 Pt 1:17-21",gospel:"Lk 24:13-35"},
    "May 11, 2014":{title:"Fourth Sunday of Easter",url:"051114",first:"Acts 2:14a, 36-41",psalm:"Ps 23:1-2a, 3b-4, 5, 6",second:"1 Pt 2:20b-25",gospel:"jn 10:1-10"},
    "May 18, 2014":{title:"Fifth Sunday of Easter",url:"051814",first:"Acts 6:1-7",psalm:"Ps 33:1-2, 4-5, 18-19",second:"1 Pt 2:4-9",gospel:"Jn 14:1-12"},
    "May 25, 2014":{title:"Sixth Sunday of Easter",url:"052514",first:"Acts 8:5-8, 14-17",psalm:"Ps 66:1-3, 4-5, 6-7, 16, 20",second:"1 Pt 3:15-18",gospel:"Jn 14:15-21"},
    "June 1, 2014":{title:"The Ascension of the Lord",url:"060114",first:"Acts 1:1-11",psalm:"Ps 47:2-3, 6-7, 8-9",second:"Eph 1:17-23",gospel:"Mt 28:16-20"},
    "June 8, 2014":{title:"Pentecost Sunday",url:"060814",first:"Acts 2:1-11",psalm:"ps 104:1, 24, 29-30, 31, 34",second:"1 Cor 12:3b-7, 12-13",gospel:"jn 20:19-23"},
    "June 15, 2014":{title:"The Solemnity of the Most Holy Trinity",url:"061514",first:"Ex 34:4b-6, 8-9",psalm:"DN 3:52, 53, 54, 55, 56",second:"2 Cor 13:11-13",gospel:"Jn 3:16-18"},
    "June 22, 2014":{title:"Solemnity of the Most Holy Body and Blood of Christ (Corpus Christi)",url:"062214",first:"Dt 8:2-3, 14b-16a",psalm:"Ps 147:12-13, 14-15, 19-20",second:"1 cor 10:16-17",gospel:"Jn 6:51-58"},
    "June 29, 2014":{title:"Solemnity of Saints Peter and Paul, Apostles",url:"062914",first:"Acts 12:1-11",psalm:"Ps 34:2-3, 4-5, 6-7, 8-9",second:"2 Tm 4:6-8, 17-18",gospel:"Mt 16:13-19"},
    "July 6, 2014":{title:"Fourteenth Sunday in Ordinary Time",url:"070614",first:"Zec 9:9-10",psalm:"Ps 145:1-2, 8-9, 10-11, 13-14",second:"Rom 8:9, 11-13",gospel:"Mt 11:25-30"},
    "July 13, 2014":{title:"Fifteenth Sunday in Ordinary Time",url:"071314",first:"Is 55:10-11",psalm:"Ps 65:10, 11, 12-13, 14",second:"Rom 8:18-23",gospel:"Mt 13:1-23"},
    "July 20, 2014":{title:"Sixteenth Sunday in Ordinary Time",url:"072014",first:"Wis 12:13, 16-19",psalm:"Ps 86:5-6, 9-10, 15-16",second:"Rom 8:26-27",gospel:"Mt 13:24-43"},
    "July 27, 2014":{title:"Seventeenth Sunday in Ordinary Time",url:"072714",first:"1 Kgs 3:5, 7-12",psalm:"Ps 119:57, 72, 76-77, 127-128, 129-130",second:"Rom 8:28-30",gospel:"Mt 13:44-52"},
    "August 3, 2014":{title:"Eighteenth Sunday in Ordinary Time",url:"080314",first:"Is 55:1-3",psalm:"Ps 145:8-9, 15-16, 17-18",second:"Rom 8:35, 37-39",gospel:"Mt 14:13-21"},
    "August 10, 2014":{title:"Nineteenth Sunday in Ordinary Time",url:"081014",first:"1 Kgs 19:9a, 11-13a",psalm:"Ps 85:9, 10, 11-12, 13-14",second:"Rom 9:1-5",gospel:"Mt 14:22-33"},
    "August 17, 2014":{title:"Twentieth Sunday in Ordinary Time",url:"081714",first:"Is 56:1, 6-7",psalm:"Ps 67:2-3, 5, 6, 8",second:"Rom 11:13-15, 29-32",gospel:"Mt 15:21-28"},
    "August 24, 2014":{title:"Twenty-first Sunday in Ordinary Time",url:"082414",first:"Is 22:19-23",psalm:"Ps 138:1-2, 2-3, 6, 8",second:"Rom 11:33-36",gospel:"Mt 16:13-20"},
    "August 31, 2014":{title:"Twenty-second Sunday in Ordinary Time",url:"083114",first:"jer 20:7-9",psalm:"Ps 63:2, 3-4, 5-6, 8-9",second:"Rom 12:1-2",gospel:"Mt 16:21-27"},
    "September 7, 2014":{title:"Twenty-third Sunday in Ordinary Time",url:"090714",first:"Ez 33:7-9",psalm:"Ps 95:1-2, 6-7, 8-9",second:"Rom 13:8-10",gospel:"Mt 18:15-20"},
    "September 14, 2014":{title:"Feast of the Exaltation of the Holy Cross",url:"091414",first:"Nm 21:4b-9",psalm:"Ps 78:1bc-2, 34-35, 36-37, 38",second:"Phil 2:6-11",gospel:"Jn 3:13-17"},
    "September 21, 2014":{title:"Twenty-fifth Sunday in Ordinary Time",url:"092114",first:"Is 55:6-9",psalm:"Ps 145:2-3, 8-9, 17-18",second:"Phil 1:20c-24, 27a",gospel:"mt 20:1-16a"},
    "September 28, 2014":{title:"Twenty-sixth Sunday in Ordinary Time",url:"092814",first:"Ez 18:25-28",psalm:"Ps 25:4-5, 8-9, 10, 14",second:"Phil 2:1-11",gospel:"Mt 21:28-32"},
    "October 5, 2014":{title:"Twenty-seventh Sunday in Ordinary Time",url:"100514",first:"Is 5:1-7",psalm:"ps 80:9, 12, 13-14, 15-16, 19-20",second:"Phil 4:6-9",gospel:"Mt 21:33-43"},
    "October 12, 2014":{title:"Twenty-eighth Sunday in Ordinary Time",url:"101214",first:"Is 25:6-10a",psalm:"Ps 23:1-3a, 3b-4, 5, 6",second:"Phil 4:12-14, 19-20",gospel:"Mt 22:1-14"},
    "October 19, 2014":{title:"Twenty-ninth Sunday in Ordinary Time",url:"101914",first:"Is 45:1, 4-6",psalm:"Ps 96:1, 3, 4-5, 7-8, 9-10",second:"1 Thes 1:1-5b",gospel:"Mt 22:15-21"},
    "October 26, 2014":{title:"Thirtieth Sunday in Ordinary Time",url:"102614",first:"Ex 22:20-26",psalm:"Ps 18:2-3, 3-4, 47, 51",second:"1 Thes 1:5c-10",gospel:"Mt 22:34-40"},
    "November 2, 2014":{title:"The Commemoration of All the Faithful Departed (All Souls)",url:"110214",first:"Wis 3:1-9",psalm:"Ps 23:1-3a, 3b-4, 5, 6",second:"Rom 5:5-11",gospel:"Jn 6:37-40"},
    "November 9, 2014":{title:"Feast of the Dedication of the Lateran Basilica in Rome",url:"110914",first:"Ez 47:1-2, 8-9, 12",psalm:"Ps 46:2-3, 5-6, 8-9",second:"1 Cor 3:9c-11, 16-17",gospel:"Jn 2:13-22"},
    "November 16, 2014":{title:"Thirty-third Sunday in Ordinary Time",url:"111614",first:"Prv 31:10-13, 19-20, 30-31",psalm:"Ps 128:1-2, 3, 4-5",second:"1 Thes 5:1-6",gospel:"Mt 25:14-30"},
    "November 23, 2014":{title:"The Solemnity of Our Lord Jesus Christ, King of the Universe",url:"112314",first:"Ez 34:11-12, 15-17",psalm:"Ps 23:1-2, 2-3, 5-6",second:"1 Cor 15:20-26, 28",gospel:"Mt 25:31-46"},
    "November 30, 2014":{title:"First Sunday of Advent",url:"113014",first:"Is 63:16b-17, 19b; 64:2-7",psalm:"ps 80:2-3, 15-16, 18-19",second:"1 Cor 1:3-9",gospel:"Mk 13:33-37"},
    "December 7, 2014":{title:"Second Sunday of Advent",url:"120714",first:"is 40:1-5, 9-11",psalm:"Ps 85:9-10, 11-12, 13-14",second:"2 Pt 3:8-14",gospel:"Mk 1:1-8"},
    "December 14, 2014":{title:"Third Sunday of Advent",url:"121414",first:"Is 61:1-2a, 10-11",psalm:"Lk 1:46-48, 49-50, 53-54",second:"1 Thes 5:16-24",gospel:"Jn 1:6-8, 19-28"},
    "December 21, 2014":{title:"Fourth Sunday of Advent",url:"122114",first:"2 Sm 7:1-5, 8b-12, 14a, 16",psalm:"Ps 89:2-3, 4-5, 27-29",second:"Rom 16:25-27",gospel:"Lk 1:26-38"},
    "December 28, 2014":{title:"The Holy Family of Jesus, Mary and Joseph",url:"122814",first:"Sir 3:2-6, 12-14",psalm:"Gn 15:1-6; 21:1-3",second:"Col 3:12-21",gospel:"Lk 2:22-40"},
    "January 4, 2015":{title:"The Epiphany of the Lord",url:"010415",first:"Is 60:1-6",psalm:"Ps 72:1-2, 7-8, 10-11, 12-13.",second:"Eph 3:2-3a, 5-6",gospel:"Mt 2:1-12"},
    "January 11, 2015":{title:"The Baptism of the Lord",url:"011115",first:"Is 42:1-4, 6-7",psalm:"Ps 29:1-2, 3-4, 3, 9-10",second:"Acts 10:34-38",gospel:"Mk 1:7-11"},
    "January 18, 2015":{title:"Second Sunday of Ordinary Time",url:"011815",first:"1 Sm 3:3b-10, 19",psalm:"Ps 40:2, 4, 7-8, 8-9, 10",second:"1 Cor 6:13c-15a, 17-20",gospel:"Jn 1:35-42"},
    "January 25, 2015":{title:"Third Sunday in Ordinary Time",url:"012515",first:"Jon 3:1-5, 10",psalm:"Ps 25:4-5, 6-7, 8-9",second:"1 Cor 7:29-31",gospel:"Mk 1:14-20"},
    "February 1, 2015":{title:"Fourth Sunday in Ordinary Time",url:"020115",first:"Dt 18:15-20",psalm:"Ps 95:1-2, 6-7, 7-9",second:"1 Cor 7:32-35",gospel:"Mk 1:21-28"},
    "February 8, 2015":{title:"Fifth Sunday in Ordinary Time",url:"020815",first:"Jb 7:1-4, 6-7",psalm:"Ps 147:1-2, 3-4, 5-6",second:"1 Cor 9:16-19, 22-23",gospel:"Mk 1:29-39"},
    "February 15, 2015":{title:"Sixth Sunday in Ordinary Time",url:"021515",first:"Lv 13:1-2, 44-46",psalm:"Ps 32:1-2, 5, 11",second:"1 Cor 10:31-11:1",gospel:"Mk 1:40-45"},
    "February 22, 2015":{title:"First Sunday of Lent",url:"022215",first:"Gn 9:8-15",psalm:"Ps 25:4-5, 6-7, 8-9.",second:"1 Pt 3:18-22",gospel:"Mk 1:12-15"},
    "March 1, 2015":{title:"Second Sunday of Lent",url:"030115",first:"Gn 22:1-2, 9a, 10-13, 15-18",psalm:"Ps 116:10, 15, 16-17, 18-19",second:"Rom 8:31b-34",gospel:"Mk 9:2-10"},
    "March 8, 2015":{title:"Third Sunday of Lent",url:"030815",first:"Ex 20:1-17",psalm:"Ps 19:8-11",second:"1 Cor 1:22-25",gospel:"Jn 2:13-25"},
    "March 15, 2015":{title:"Fourth Sunday of Lent",url:"031515",first:"2 Chr 36:14-16, 19-23",psalm:"Ps 137:1-6",second:"Eph 2:4-10",gospel:"Jn 3:14-21"},
    "March 22, 2015":{title:"Fifth Sunday of Lent",url:"032215",first:"Jer 31:31-34",psalm:"Ps 51:3-4, 12-15",second:"Heb 5:7-9",gospel:"Jn 12:20-33"},
    "March 29, 2015":{title:"Palm Sunday of the Lord�s Passion",url:"032915",first:"Is 50:4-7",psalm:"Ps 22:8-9, 17-18, 19-20, 23-24",second:"Phil 2:6-11",gospel:"Mk 14:1-15:47"},
    "April 5, 2015":{title:"The Resurrection of the Lord",url:"040515",first:"Acts 10:34a, 37-43",psalm:"Ps 118:1-2, 16-17, 22-23",second:"Col 3:1-4",gospel:"Jn 20:1-9"},
    "April 12, 2015":{title:"Second Sunday of Easter - Sunday of Divine Mercy",url:"041215",first:"Acts 4:32-35",psalm:"Ps 118:2-4, 13-15, 22-24",second:"1 Jn 5:1-6",gospel:"Jn 20:19-31"},
    "April 19, 2015":{title:"Third Sunday of Easter",url:"041915",first:"Acts 3:13-15, 17-19",psalm:"Ps 4:2, 4, 7-8, 9",second:"1 Jn 2:1-5a",gospel:"Lk 24:35-48"},
    "April 26, 2015":{title:"Fourth Sunday of Easter",url:"042615",first:"Acts 4:8-12",psalm:"Ps 118:1, 8-9, 21-23, 26, 28, 29",second:"1 Jn 3:1-2",gospel:"Jn 10:11-18"},
    "May 3, 2015":{title:" Fifth Sunday of Easter",url:"050315",first:"Acts 9:26-31",psalm:"Ps 22:26-27, 28, 30, 31-32",second:"1 Jn 3:18-24",gospel:"Jn 15:1-8"},
    "May 10, 2015":{title:"Sixth Sunday of Easter",url:"051015",first:"Acts 10:25-26, 34-35, 44-48",psalm:"Ps 98:1, 2-3, 3-4",second:"1 Jn 4:7-10",gospel:"Jn 15:9-17"},
    "May 17, 2015":{title:"Solemnity of the Ascension of the Lord",url:"051715",first:"Acts 1:1-11",psalm:"Ps 47:2-3, 6-9",second:"Eph 1:17-23",gospel:"Mk 16:15-20"},
    "May 24, 2015":{title:"Pentecost Sunday",url:"052415",first:"Acts 2:1-11",psalm:"Ps 104:1, 24, 29-31, 34",second:"1 Cor 12:3b-7, 12-13",gospel:"Jn 20:19-23"},
    "May 31, 2015":{title:"The Solemnity of the Most Holy Trinity",url:"053115",first:"Dt 4:32-34, 39-40",psalm:"Ps 33:4-5, 6, 9, 18-19, 20, 22",second:"Rom 8:14-17",gospel:"Mt 28:16-20"},
    "June 7, 2015":{title:"The Solemnity of the Most Holy Body and Blood of Christ (Corpus Christi)",url:"060715",first:"Ex 24:3-8",psalm:"Ps 116:12-13, 15-16, 17-18",second:"Heb 9:11-15",gospel:"Mk 14:12-16, 22-26"},
    "June 14, 2015":{title:"Eleventh Sunday in Ordinary Time",url:"061415",first:"Ez 17:22-24",psalm:"Ps 92:2-3, 13-14, 15-16",second:"2 Cor 5:6-10",gospel:"Mk 4:26-34"},
    "June 21, 2015":{title:"Twelfth Sunday in Ordinary Time",url:"062115",first:"Jb 38:1, 8-11",psalm:"Ps 107:23-24, 25-26, 28-29, 30-31",second:"2 Cor 5:14-17",gospel:"Mk 4:35-41"},
    "June 28, 2015":{title:"Thirteenth Sunday in Ordinary Time",url:"062815",first:"Wis 1:13-15; 2:23-24",psalm:"Ps 30:2, 4, 5-6, 11, 12, 13",second:"2 Cor 8:7, 9, 13-15",gospel:"Mk 5:21-43"},
    "July 5, 2015":{title:"Fourteenth Sunday in Ordinary Time",url:"070515",first:"Ez 2:2-5",psalm:"Ps 123:1-2, 2, 3-4",second:"2 Cor 12:7-10",gospel:"Mk 6:1-6"},
    "July 12, 2015":{title:"Fifteenth Sunday in Ordinary Time",url:"071215",first:"Am 7:12-15",psalm:"Ps 85:9-10, 11-12, 13-14",second:"Eph 1:3-14",gospel:"Mk 6:7-13"},
    "July 19, 2015":{title:"Sixteenth Sunday in Ordinary Time",url:"071915",first:"Jer 23:1-6",psalm:"Ps 23:1-3, 3-4, 5, 6",second:"Eph 2:13-18",gospel:"Mk 6:30-34"},
    "July 26, 2015":{title:"Seventeenth Sunday in Ordinary Time",url:"072615",first:"2 Kgs 4:42-44",psalm:"Ps 145:10-11, 15-16, 17-18",second:"Eph 4:1-6",gospel:"Jn 6:1-15"},
    "August 2, 2015":{title:"Eighteenth Sunday in Ordinary Time",url:"080215",first:"Ex 16:2-4, 12-15",psalm:"Ps 78:3-4, 23-24, 25, 54",second:"Eph 4:17, 20-24",gospel:"Jn 6:24-35"},
    "August 9, 2015":{title:"Nineteenth Sunday in Ordinary Time",url:"080915",first:"1 Kgs 19:4-8",psalm:"Ps 34:2-9,second:",second:"Eph 4:30-5:2",gospel:"Jn 6:41-51"},
    "August 16, 2015":{title:"Twentieth Sunday in Ordinary Time",url:"081615",first:"Prv 9:1-6",psalm:"Ps 34:2-3, 4-5, 6-7",second:"Eph 5:15-20",gospel:"Jn 6:51-58"},
    "August 23, 2015":{title:"Twenty-first Sunday in Ordinary Time",url:"082315",first:"Jos 24:1-2a, 15-17, 18b",psalm:"Ps 34:2-3, 16-17, 18-19, 20-21",second:"Eph 5:21-32",gospel:"Jn 6:60-69"},
    "August 30, 2015":{title:"Twenty-second Sunday in Ordinary Time",url:"083015",first:"Dt 4:1-2, 6-8",psalm:"Ps 15:2-3, 3-4, 4-5",second:"Jas 1:17-18, 21b-22, 27",gospel:"Mk 7:1-8, 14-15, 21-23"},
    "September 6, 2015":{title:"Twenty-third Sunday in Ordinary Time",url:"090615",first:"Is 35:4-7a",psalm:"Ps 146:7, 8-9, 9-10",second:"Jas 2:1-5",gospel:"Mk 7:31-37"},
    "September 13, 2015":{title:"Twenty-fourth Sunday in Ordinary Time",url:"091315",first:"Is 50:5-9a",psalm:"Ps 114:1-2, 3-4, 5-6, 8-9",second:"Jas 2:14-18",gospel:"Mk 8:27-35"},
    "September 20, 2015":{title:"Twenty-fifth Sunday in Ordinary Time",url:"092015",first:"Wis 2:12, 17-20",psalm:"Ps 54:3-6, 8",second:"Jas 3:16-4:3",gospel:"Mk 9:30-37"},
    "September 27, 2015":{title:"Twenty-sixth Sunday in Ordinary Time",url:"092715",first:"Nm 11:25-29",psalm:"Ps 19:8, 10, 12-13, 14",second:"Jas 5:1-6",gospel:"Mk 9:38-43, 45, 47-48"},
    "October 4, 2015":{title:"Twenty-seventh Sunday in Ordinary Time",url:"100415",first:"Gn 2:18-24",psalm:"Ps 128:1-2, 3, 4-5, 6",second:"Heb 2:9-11",gospel:"Mk 10:2-16"},
    "October 11, 2015":{title:"Twenty-eighth Sunday in Ordinary Time",url:"101115",first:"Wis 7:7-11",psalm:"Ps 90:12-13, 14-15, 16-17",second:"Heb 4:12-13",gospel:"Mk 10:17-27"},
    "October 18, 2015":{title:"Twenty-ninth Sunday in Ordinary Time",url:"101815",first:"Is 53:10-11",psalm:"Ps 33:4-5, 18-19, 20, 22",second:"Heb 4:14-16",gospel:"Mk 10:42-45"},
    "October 25, 2015":{title:"Thirtieth Sunday in Ordinary Time",url:"102515",first:"Jer 31:7-9",psalm:"Ps 126:1-2, 2-3, 4-5, 6",second:"Heb 5:1-6",gospel:"Mk 10:46-52"},
    "November 1, 2015":{title:"Solemnity of All Saints",url:"110115",first:"Rv 7:2-4, 9-14",psalm:"PS 24:1bc-2, 3-4ab, 5-6",second:"1 Jn 3:1-3",gospel:"Mt 5:1-12a"},
    "November 8, 2015":{title:"Thirty-second Sunday in Ordinary Time",url:"110815",first:"1 Kgs 17:10-16",psalm:"Ps 146:7, 8-9, 9-10",second:"Heb 9:24-28",gospel:"Mk 12:41-44"},
    "November 15, 2015":{title:"Thirty-third Sunday in Ordinary Time",url:"111515",first:"Dn 12:1-3",psalm:"Ps 16:5, 8, 9-10, 11",second:"Heb 10:11-14, 18",gospel:"Mk 13:24-32"},
    "November 22, 2015":{title:"The Solemnity Our Lord Jesus Christ, King of the Universe",url:"112215",first:"Dn 7:13-14",psalm:"Ps 93:1, 1-2, 5",second:"Rv 1:5-8",gospel:"Jn 18:33b-37"},
    "November 29, 2015":{title:"First Sunday of Advent",url:"112915",first:"Jer 33:14-16",psalm:"Ps 25:4-5, 8-10, 14",second:"1 Thes 3:12-4:2",gospel:"Lk 21:25-28, 34-36"},
    "December 6, 2015":{title:"Second Sunday of Advent",url:"120615",first:"Bar 5:1-9",psalm:"Ps 126:1-2, 2-3, 4-5, 6",second:"Phil 1:4-6, 8-11",gospel:"Lk 3:1-6"},
    "December 13, 2015":{title:"Third Sunday of Advent",url:"121315",first:"Zep 3:14-18a",psalm:"Is 12:2-3, 4, 5-6",second:"Phil 4:4-7",gospel:"Lk 3:10-18"},
    "December 20, 2015":{title:"Fourth Sunday of Advent",url:"122015",first:"Mi 5:1-4a",psalm:"Ps 80:2-3, 15-16, 18-19",second:"Heb 10:5-10",gospel:"Lk 1:39-45"},
    "December 27, 2015":{title:"The Holy Family of Jesus, Mary and Joseph",url:"122715",first:"Sir 3:2-6, 12-14",psalm:"Ps 128:1-5",second:"Col 3:12-21",gospel:"Lk 2:41-52"},
    "January 3, 2016":{title:"The Epiphany of the Lord",url:"010316",first:"Is 60:1-6",psalm:"Ps 72:1-2, 7-8, 10-11, 12-13",second:"Eph 3:2-3a, 5-6",gospel:"Mt 2:1-12"},
    "January 10, 2016":{title:"The Baptism of the Lord",url:"011016",first:"Is 42:1-4, 6-7",psalm:"Ps 29:1-2, 3-4, 3, 9-10",second:"Acts 10:34-38",gospel:"Lk 3:15-16, 21-22"},
    "January 17, 2016":{title:"Second Sunday in Ordinary Time",url:"011716",first:"Is 62:1-5",psalm:"Ps 96:1-2, 2-3, 7-8, 9-10",second:"1 Cor 12:4-11",gospel:"Jn 2:1-11"},
    "January 24, 2016":{title:"Third Sunday in Ordinary Time",url:"012416",first:"Neh 8:2-4a, 5-6, 8-10",psalm:"Ps 19:8, 9, 10, 15",second:"1 Cor 12:12-30",gospel:"Lk 1:1-4; 4:14-21"},
    "January 31, 2016":{title:"Fourth Sunday in Ordinary Time",url:"013116",first:"Jer 1:4-5, 17-19",psalm:"Ps 71:1-2, 3-4, 5-6, 15-17",second:"1 Cor 12:31-13:13",gospel:"Lk 4:21-30"},
    "February 7, 2016":{title:"Fifth Sunday in Ordinary Time",url:"020716",first:"Is 6:1-2a, 3-8",psalm:"Ps 138:1-2, 2-3, 4-5, 7-8",second:"1 Cor 15:1-11",gospel:"Lk 5:1-11"},
    "February 14, 2016":{title:"First Sunday of Lent",url:"021416",first:"Dt 26:4-10",psalm:"Ps 91:1-2, 10-11, 12-13, 14-15",second:"Rom 10:8-13",gospel:"Lk 4:1-13"},
    "February 21, 2016":{title:"Second Sunday of Lent",url:"022116",first:"Gn 15:5-12, 17-18",psalm:"Ps 27:1, 7-8, 8-9, 13-14",second:"Phil 3:17-4:1",gospel:"Lk 9:28b-36"},
    "February 28, 2016":{title:"Third Sunday of Lent",url:"022816",first:"Ex 3:1-8A, 13-15",psalm:"Ps 103: 1-2, 3-4, 6-7, 8, 11",second:"1 Cor 10:1-6, 10-12",gospel:"Lk 13:1-9"},
    "March 6, 2016":{title:"Fourth Sunday of Lent",url:"030616",first:"Jos 5:9A, 10-12",psalm:"Ps 34:2-3, 4-5, 6-7",second:"2 Cor 5:17-21",gospel:"Lk 15:1-3, 11-32"},
    "March 13, 2016":{title:"Fifth Sunday of Lent",url:"031316",first:"Is 43:16-21",psalm:"Ps 126:1-2, 2-3, 4-5, 6",second:"Phil 3:8-14",gospel:"Jn 8:1-11"},
    "March 20, 2016":{title:"Palm Sunday of the Lord's Passion",url:"032016",first:"Is 50:4-7",psalm:"Ps 22:8-9, 17-18, 19-20, 23-24",second:"Phil 2:6-11",gospel:"Lk 22:14-23:56"},
    "March 27, 2016":{title:"The Resurrection of the LordThe Mass of Easter Day",url:"032716",first:"Acts 10:34a, 37-43",psalm:"Ps 118:1-2, 16-17, 22-23",second:"Col 3:1-4",gospel:"Jn 20:1-9"},
    "April 3, 2016":{title:"Second Sunday of Easter (or Sunday of Divine Mercy)",url:"040316",first:"Acts 5:12-16",psalm:"Ps 118:2-4, 13-15, 22-24",second:"Rev 1:9-11a, 12-13, 17-19",gospel:"Jn 20:19-31"},
    "April 10, 2016":{title:"Third Sunday of Easter",url:"041016",first:"Acts 5:27-32, 40b-41",psalm:"Ps 30:2, 4, 5-6, 11-12, 13",second:"Rev 5:11-14",gospel:"Jn 21:1-19"},
    "April 17, 2016":{title:"Fourth Sunday of Easter",url:"041716",first:"Acts 13:14, 43-52",psalm:"Ps 100:1-2, 3, 5",second:"Rev 7:9, 14b-17",gospel:"Jn 10:27-30"},
    "April 24, 2016":{title:"Fifth Sunday of Easter",url:"042416",first:"Acts 14:21-27",psalm:"Ps 145:8-9, 10-11, 12-13",second:"Rev 21:1-5a",gospel:"Jn 13:31-33a, 34-35"},
    "May 1, 2016":{title:"Sixth Sunday of Easter",url:"050116",first:"Acts 15:1-2, 22-29",psalm:"Ps 67:2-3, 5, 6, 8",second:"Rev 21:10-14, 22-23",gospel:"Jn 14:23-29"},
    "May 8, 2016":{title:"Seventh Sunday of Easter",url:"050816",first:"Acts 7:55-60",psalm:"Ps 97:1-2, 6-7, 9",second:"Rev 22:12-14, 16-17, 20",gospel:"Jn 17:20-26"},
    "May 15, 2016":{title:"Pentecost Sunday",url:"051516",first:"Acts 2:1-11",psalm:"Ps 104:1, 24, 29-30, 31, 34",second:"1 Cor 12:3b-7, 12-13",gospel:"Jn 20:19-23"},
    "May 22, 2016":{title:"The Solemnity of the Most Holy Trinity",url:"052216",first:"Prv 8:22-31",psalm:"Ps 8:4-5, 6-7, 8-9",second:"Rom 5:1-5",gospel:"Jn 16:12-15"},
    "May 29, 2016":{title:"The Solemnity of the Most Holy Body and Blood of Christ",url:"052916",first:"Gn 14:18-20",psalm:"Ps 110:1, 2, 3, 4",second:"1 Cor 11:23-26",gospel:" Lk 9:11b-17"},
    "June 5, 2016":{title:"Tenth Sunday in Ordinary Time",url:"060516",first:"1 Kgs 17:17-24",psalm:"Ps 30:5-6, 11, 12, 13",second:"Gal 1:11-14a, 15ac, 16a, 17, 19",gospel:"Lk 7:11-17"},
    "June 12, 2016":{title:"Eleventh Sunday in Ordinary Time",url:"061216",first:"2 Sm 12:7-10, 13",psalm:"Ps 32: 5, 7, 11",second:"Gal 2:16a, 19b-20",gospel:"Lk 7:36-50"},
    "June 19, 2016":{title:"Twelfth Sunday in Ordinary Time",url:"061916",first:"Zec 12:10; 13:1",psalm:"Ps 63:3-4, 5-6, 8-9",second:"Gal 3:26-29",gospel:"Lk 9:18-24"},
    "June 26, 2016":{title:"Thirteenth Sunday in Ordinary Time",url:"062616",first:"1 Kgs 19:16b, 19-21",psalm:"Ps 16:1-2 and 5, 7-8, 11",second:"Gal 5:1a, 13-14, 16a, 18",gospel:"Lk 9:51, 57-62"},
    "July 3, 2016":{title:"Fourteenth Sunday in Ordinary Time",url:"070316",first:"Is 66:10a, 12b-13",psalm:"Ps 66:1-3, 4-5, 6-7",second:"Gal 6:14, 16-18",gospel:"Lk 10:1-9"},
    "July 10, 2016":{title:"Fifteenth Sunday in Ordinary Time",url:"071016",first:"Dt 30:10-14",psalm:"Ps 19:8, 9, 11",second:"Col 1:15, 16abd,17-18a",gospel:"Lk 10:25-37"},
    "July 17, 2016":{title:"Sixteenth Sunday in Ordinary Time",url:"071716",first:"Gn 18:1-10a",psalm:"Ps 15:2-3, 5",second:"Col 1:24-28",gospel:"Lk 10:38-42"},
    "July 24, 2016":{title:"Seventeenth Sunday in Ordinary Time",url:"072416",first:"Gn 18:20-32",psalm:"Ps 138:1-2, 2-3, 7-8",second:"Col 2:12-14",gospel:"Lk 11:1-8"},
    "July 31, 2016":{title:"Eighteenth Sunday in Ordinary Time",url:"073116",first:"Ecc 1:2; 2:21-23",psalm:"Ps 90:3-4, 5-6, 12-13, 14, 17",second:"Col 3:1-5, 9-11",gospel:"Lk 12:13-21"},
    "August 7, 2016":{title:"Nineteenth Sunday in Ordinary Time",url:"080716",first:"Wis 18:6-9",psalm:"Ps 33:1, 12, 18-19, 20-22",second:"Heb 11:1-2, 8-19 ",gospel:"Lk 12:32-48"},
    "August 14, 2016":{title:"Twentieth Sunday in Ordinary Time",url:"081416",first:"Jer 38:4-6, 8-10",psalm:"Ps 40:2, 3, 4, 18",second:"Heb 12:1-4",gospel:"Lk 12:49-53"},
    "August 21, 2016":{title:"Twenty-first Sunday in Ordinary Time",url:"082116",first:"Is 66:18-21",psalm:"Ps 117:1, 2",second:"Heb 12:5-7, 11-13",gospel:"Lk 13:22-30"},
    "August 28, 2016":{title:"Twenty-second Sunday in Ordinary Time",url:"082816",first:"Sir 3:17-18, 20, 28-29",psalm:"Ps 68:4-5, 6-7, 10-11",second:"Heb 12:18-19, 22-24a",gospel:"Lk 14:1, 7-14"},
    "September 4, 2016":{title:"Twenty-third Sunday in Ordinary Time",url:"090416",first:"Wis 9:13-18b",psalm:"Ps 90:3-4, 5-6, 12-13, 14-17",second:"Phmn 9-10, 12-17",gospel:"Lk 14:25-33"},
    "September 11, 2016":{title:"Twenty-fourth Sunday in Ordinary Time",url:"091116",first:"Ex 32:7-11, 13-14",psalm:"Ps 51:3-4, 12-13, 17, 19",second:"1 Tm 1:12-17",gospel:"Lk 15:1-32"},
    "September 18, 2016":{title:"Twenty-fifth Sunday in Ordinary Time",url:"091816",first:"Am 8:4-7",psalm:"Ps 113:1-2, 4-6, 7-8",second:"1 Tm 2:1-8",gospel:"Lk 16:1-13"},
    "September 25, 2016":{title:"Twenty-sixth Sunday in Ordinary Time",url:"092516",first:"Am 6:1a, 4-7",psalm:"Ps 146:7, 8-9, 9-10",second:"1 Tm 6:11-16",gospel:"Lk 16:19-31"},
    "October 2, 2016":{title:"Twenty-seventh Sunday in Ordinary Time",url:"100216",first:"Hab 1:2-3; 2:2-4",psalm:"Ps 95:1-2, 6-7, 8-9",second:"2 Tm 1:6-8, 13-14",gospel:"Lk 17:5-10"},
    "October 9, 2016":{title:"Twenty-eighth Sunday in Ordinary Time",url:"100916",first:"2 Kgs 5:14-17",psalm:"Ps 98:1, 2-3, 3-4",second:"2 Tm 2:8-13",gospel:"Lk 17:11-19"},
    "October 16, 2016":{title:"Twenty-ninth Sunday in Ordinary Time",url:"101616",first:"Ex 17:8-13",psalm:"Ps 121:1-2, 3-4, 5-6, 7-8",second:"2 Tm 3:14-4:2",gospel:"Lk 18:1-8"},
    "October 23, 2016":{title:"Thirtieth Sunday in Ordinary Time",url:"102316",first:"Sir 35:12-14, 16-18",psalm:"Ps 34:2-3, 17-18, 19, 23",second:"2 Tm 4:6-8, 16-18",gospel:"Lk 18:9-14"},
    "October 30, 2016":{title:"Thirty-first Sunday in Ordinary Time",url:"103016",first:"Wis 11:22-12:2",psalm:"Ps 145:1-2, 8-9, 10-11, 13, 14",second:"2 Thes 1:11-2:2",gospel:"Lk 19:1-10"},
    "November 6, 2016":{title:"Thirty-second Sunday in Ordinary Time",url:"110616",first:"2 Mc 7:1-2, 9-14",psalm:"Ps 17:1, 5-6, 8, 15",second:"2 Thes 2:16-3:5",gospel:"Lk 20:27-38"},
    "November 13, 2016":{title:"Thirty-third Sunday in Ordinary Time",url:"111316",first:"Mal 3:19-20a",psalm:"Ps 98:5-6, 7-8, 9",second:"2 Thes 3:7-12",gospel:"Lk 21:5-19"},
    "November 20, 2016":{title:"The Solemnity of Our Lord Jesus Christ, King of the Universe",url:"112016",first:"2 Sm 5:1-3",psalm:"Ps 122:1-2, 3-4, 4-5",second:"Col 1:12-20",gospel:"Lk 23:35-43"},
    "November 27, 2016":{title:"First Sunday of Advent",url:"112716",first:"Is 2:1-5",psalm:"Ps 122: 1-2, 3-4, 4-5, 6-7, 8-9",second:"Rom 13:11-14",gospel:"Mt 24:37-44"},
    "December 4, 2016":{title:"Second Sunday of Advent",url:"120416",first:"Is 11:1-10",psalm:"Ps 72:1-2, 7-8, 12-13, 17",second:"Rom 15:4-9",gospel:"Mt 3:1-12"},
    "December 11, 2016":{title:"Third Sunday of Advent",url:"121116",first:"Is 35:1-6a, 10",psalm:"Ps 146:6-7, 8-9, 9-10",second:"Jas 5:7-10",gospel:"Mt 11:2-11"},
    "December 18, 2016":{title:"Fourth Sunday of Advent",url:"121816",first:"Is 7:10-14",psalm:"Ps 24:1-2, 3-4, 5-6",second:"Rom 1:1-7",gospel:"Mt 1:18-24"},
    "December 25, 2016":{title:"The Nativity Of The Lord ",url:"122516",first:"Is 62:11-12",psalm:"Ps 97:1, 6, 11-12",second:"Ti 3:4-7",gospel:"Lk 2:15-20"},
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
    link.setAttribute("href", baseUrl + massReadingData.url + ".cfm");
    link.innerText = massReadingData.title;
    headerContainer.appendChild(link);

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
