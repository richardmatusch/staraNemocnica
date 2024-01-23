const staraNemocnica = "Stará nemocnica"
const vazecka = "Važecká"
const havlickova = "Havlíčkova"
const stanicneNamestie = "Staničné nám."
const sochaJanaPavlaII = "Socha J.P. II"
const botanickaZahrada = "Botanická z."
const sebastovce = "Šebastovce"
const podhradova = "Podhradová"
const ocCassovia = "OC Cassovia"
const exnarova = "Exnárova"

export const zastavky = {
    
[staraNemocnica]: {
        1: {
            [vazecka]: { 
                workDays: [
                    "5:00", "5:20", "5:40",
                    "6:00", "6:18", "6:33", "6:48",
                    "7:03", "7:18", "7:33", "7:48",
                    "8:03", "8:18", "8:33", "8:48",
                    "9:03", "9:18", "9:33", "9:48",
                    "10:03", "10:20", "10:33", "10:48",
                    "11:03", "11:18", "11:33", "11:48",
                    "12:03", "12:18", "12:33", "12:48",
                    "13:03", "13:18", "13:33", "13:48",
                    "14:03", "14:18", "14:33", "14:48",
                    "15:03", "15:18", "15:33", "15:48",
                    "16:03", "16:18", "16:33", "16:48",
                    "17:04", "17:23", "17:43",
                    "18:03", "18:23", "18:43",
                    "19:03", "19:23", "19:43",
                    "20:03", "20:23", "20:43",
                    "21:03", "21:20", "21:40",
                    "22:00", "22:27"
                ], 
                schoolHolidays: [
                    "5:00", "5:20", "5:40",
                    "6:00", "6:18", "6:33", "6:48",
                    "7:03", "7:18", "7:33", "7:48",
                    "8:03", "8:18", "8:33", "8:48",
                    "9:03", "9:18", "9:33", "9:48",
                    "10:03", "10:18", "10:33", "10:48",
                    "11:03", "11:18", "11:33", "11:48",
                    "12:03", "12:18", "12:33", "12:48",
                    "13:03", "13:18", "13:33", "13:48",
                    "14:03", "14:18", "14:33", "14:48",
                    "15:03", "15:18", "15:33", "15:48",
                    "16:03", "16:18", "16:33", "16:48",
                    "17:04", "17:23", "17:43",
                    "18:03", "18:23", "18:43",
                    "19:03", "19:23", "19:43",
                    "20:03", "20:23", "20:43",
                    "21:03", "21:20", "21:40",
                    "22:00", "22:27"
                ], 
                holidays: [
                    "4:57",
                    "5:27", "5:57",
                    "6:20", "6:40",
                    "7:00", "7:20", "7:40",
                    "8:00", "8:23", "8:43",
                    "9:03", "9:23", "9:43",
                    "10:03", "10:23", "10:43",
                    "11:03", "11:23", "11:43",
                    "12:03", "12:23", "12:43",
                    "13:03", "13:23", "13:43",
                    "14:03", "14:23", "14:43",
                    "15:03", "15:23", "15:43",
                    "16:03", "16:23", "16:43",
                    "17:03", "17:23", "17:43",
                    "18:03", "18:23", "18:43",
                    "19:03", "19:23", "19:43",
                    "20:03", "20:23", "20:43",
                    "21:03", "21:20", "21:40",
                    "22:00", "22:27"
                ] },

            [havlickova]: { 
                workDays: [
                    "4:46",
                    "5:06", "5:26", "5:46",
                    "6:06", "6:26", "6:44", "6:59",
                    "7:13", "7:18", "7:28", "7:33", "7:45",
                    "8:00", "8:15", "8:30", "8:45",
                    "9:00", "9:15", "9:30", "9:45",
                    "10:00", "10:15", "10:30", "10:45",
                    "11:00", "11:15", "11:30", "11:45",
                    "12:00", "12:15", "12:30", "12:45",
                    "13:00", "13:15", "13:30", "13:45",
                    "14:00", "14:15", "14:30", "14:45",
                    "15:00", "15:15", "15:30", "15:45",
                    "16:00", "16:15", "16:30", "16:47",
                    "17:07", "17:27", "17:47",
                    "18:07", "18:27", "18:47",
                    "19:06", "19:26", "19:46",
                    "20:06", "20:26", "20:46",
                    "21:06", "21:26", "21:46",
                    "22:06", "22:32"
                ], 
                schoolHolidays: [
                    "4:46",
                    "5:06", "5:26", "5:46",
                    "6:06", "6:26", "6:44", "6:59",
                    "7:15", "7:30", "7:45",
                    "8:00", "8:15", "8:30", "8:45",
                    "9:00", "9:15", "9:30", "9:45",
                    "10:00", "10:15", "10:30", "10:45",
                    "11:00", "11:15", "11:30", "11:45",
                    "12:00", "12:15", "12:30", "12:45",
                    "13:00", "13:15", "13:30", "13:45",
                    "14:00", "14:15", "14:30", "14:45",
                    "15:00", "15:15", "15:30", "15:45",
                    "16:00", "16:15", "16:30", "16:47",
                    "17:07", "17:27", "17:47",
                    "18:07", "18:27", "18:47",
                    "19:06", "19:26", "19:46",
                    "20:06", "20:26", "20:46",
                    "21:06", "21:26", "21:46",
                    "22:06", "22:32"
                ], 
                holidays: [
                    "4:00",
                    "5:02", "5:32",
                    "6:02", "6:26", "6:46",
                    "7:06", "7:26", "7:46",
                    "8:06", "8:26", "8:46",
                    "9:06", "9:26", "9:46",
                    "10:06", "10:26", "10:46",
                    "11:06", "11:26", "11:46",
                    "12:06", "12:26", "12:46",
                    "13:06", "13:26", "13:46",
                    "14:06", "14:26", "14:46",
                    "15:06", "15:26", "15:46",
                    "16:06", "16:26", "16:46",
                    "17:06", "17:26", "17:46",
                    "18:06", "18:26", "18:46",
                    "19:06", "19:26", "19:46",
                    "20:06", "20:26", "20:46",
                    "21:06", "21:26", "21:46",
                    "22:06", "22:32"
                ] }
        },

        3: {
            [vazecka]: { 
                workDays: [
                    "4:50",
                    "5:10", "5:30", "5:50",
                    "6:09", "6:24", "6:39", "6:54",
                    "7:10", "7:25", "7:40", "7:55",
                    "8:10", "8:25", "8:40", "8:55",
                    "9:10", "9:25", "9:40", "9:55",
                    "10:10", "10:25", "10:40", "10:55",
                    "11:10", "11:25", "11:40", "11:55",
                    "12:10", "12:25", "12:40", "12:55",
                    "13:10", "13:25", "13:40", "13:55",
                    "14:10", "14:25", "14:40", "14:55",
                    "15:10", "15:25", "15:40", "15:55",
                    "16:10", "16:25", "16:40", "16:55",
                    "17:13", "17:33", "17:53",
                    "18:13", "18:33", "18:53",
                    "19:13", "19:33", "19:53",
                    "20:13", "20:33", "20:53",
                    "21:10", "21:30", "21:50",
                    "22:12", "22:42",
                    "23:04"
                ], 
                schoolHolidays: [
                    "4:50",
                    "5:10", "5:30", "5:50",
                    "6:09", "6:24", "6:39", "6:54",
                    "7:10", "7:25", "7:40", "7:55",
                    "8:10", "8:25", "8:40", "8:55",
                    "9:10", "9:25", "9:40", "9:55",
                    "10:10", "10:25", "10:40", "10:55",
                    "11:10", "11:25", "11:40", "11:55",
                    "12:10", "12:25", "12:40", "12:55",
                    "13:10", "13:25", "13:40", "13:55",
                    "14:10", "14:25", "14:40", "14:55",
                    "15:10", "15:25", "15:40", "15:55",
                    "16:10", "16:25", "16:40", "16:55",
                    "17:13", "17:33", "17:53",
                    "18:13", "18:33", "18:53",
                    "19:13", "19:33", "19:53",
                    "20:13", "20:33", "20:53",
                    "21:10", "21:30", "21:50",
                    "22:12", "22:42",
                    "23:04"
                ], 
                holidays: [
                    "4:42",
                    "5:12", "5:42",
                    "6:10", "6:30", "6:50",
                    "7:10", "7:30", "7:50",
                    "8:13", "8:33", "8:53",
                    "9:13", "9:33", "9:53",
                    "10:13", "10:33", "10:53",
                    "11:13", "11:33", "11:53",
                    "12:13", "12:33", "12:53",
                    "13:13", "13:33", "13:53",
                    "14:13", "14:33", "14:53",
                    "15:13", "15:33", "15:53",
                    "16:13", "16:33", "16:53",
                    "17:13", "17:33", "17:53",
                    "18:13", "18:33", "18:53",
                    "19:13", "19:33", "19:53",
                    "20:13", "20:33", "20:53",
                    "21:10", "21:30", "21:50",
                    "22:12", "22:42",
                    "23:04"
                ] },

            [stanicneNamestie]: { 
                workDays: [
                    "4:56",
                    "5:16", "5:36", "5:56",
                    "6:16", "6:36", "6:51",
                    "7:07", "7:23", "7:38", "7:52",
                    "8:07", "8:22", "8:37", "8:52",
                    "9:07", "9:22", "9:37", "9:52",
                    "10:07", "10:22", "10:37", "10:52",
                    "11:07", "11:22", "11:37", "11:52",
                    "12:07", "12:22", "12:37", "12:52",
                    "13:07", "13:22", "13:37", "13:52",
                    "14:07", "14:22", "14:37", "14:52",
                    "15:07", "15:22", "15:37", "15:52",
                    "16:07", "16:22", "16:37", "16:57",
                    "17:17", "17:37", "17:57",
                    "18:17", "18:37", "18:57",
                    "19:16", "19:36", "19:56",
                    "20:16", "20:36", "20:56",
                    "21:16", "21:36", "21:56",
                    "22:17", "22:47"
                ], 
                schoolHolidays: [
                    "4:56",
                    "5:16", "5:36", "5:56",
                    "6:16", "6:36", "6:51",
                    "7:07", "7:22", "7:37", "7:52",
                    "8:07", "8:22", "8:37", "8:52",
                    "9:07", "9:22", "9:37", "9:52",
                    "10:07", "10:22", "10:37", "10:52",
                    "11:07", "11:22", "11:37", "11:52",
                    "12:07", "12:22", "12:37", "12:52",
                    "13:07", "13:22", "13:37", "13:52",
                    "14:07", "14:22", "14:37", "14:52",
                    "15:07", "15:22", "15:37", "15:52",
                    "16:07", "16:22", "16:37", "16:57",
                    "17:17", "17:37", "17:57",
                    "18:17", "18:37", "18:57",
                    "19:16", "19:36", "19:56",
                    "20:16", "20:36", "20:56",
                    "21:16", "21:36", "21:56",
                    "22:17", "22:47"
                ], 
                holidays: [
                    "4:47",
                    "5:17", "5:47",
                    "6:16", "6:36", "6:56",
                    "7:16", "7:36", "7:56",
                    "8:16", "8:36", "8:56",
                    "9:16", "9:36", "9:56",
                    "10:16", "10:36", "10:56",
                    "11:16", "11:36", "11:56",
                    "12:16", "12:36", "12:56",
                    "13:16", "13:36", "13:56",
                    "14:16", "14:36", "14:56",
                    "15:16", "15:36", "15:56",
                    "16:16", "16:36", "16:56",
                    "17:16", "17:36", "17:56",
                    "18:16", "18:36", "18:56",
                    "19:16", "19:36", "19:56",
                    "20:16", "20:36", "20:56",
                    "21:16", "21:36", "21:56",
                    "22:17", "22:47"
                ] }
        },

        4: {
            [sochaJanaPavlaII]: { 
                workDays: [
                    "5:15", "5:45", "5:59",
                    "6:13", "6:28", "6:43", "6:58",
                    "7:14", "7:29", "7:44", "7:59",
                    "8:14", "8:29", "8:44", "8:59",
                    "9:14", "9:29", "9:44", "9:59",
                    "10:14", "10:29", "10:44", "10:59",
                    "11:14", "11:29", "11:44", "11:59",
                    "12:14", "12:29", "12:44", "12:59",
                    "13:14", "13:29", "13:44", "13:59",
                    "14:14", "14:29", "14:44", "14:59",
                    "15:14", "15:29", "15:44", "15:59",
                    "16:14", "16:29", "16:44", "16:59",
                    "17:19", "17:39", "17:59",
                    "18:19", "18:39", "18:59",
                    "19:18", "19:38", "19:58",
                    "20:18", "20:48",
                    "21:15", "21:45"
                ], 
                schoolHolidays: [
                    "5:15", "5:45", "5:59",
                    "6:13", "6:28", "6:43", "6:58",
                    "7:14", "7:29", "7:44", "7:59",
                    "8:14", "8:29", "8:44", "8:59",
                    "9:14", "9:29", "9:44", "9:59",
                    "10:14", "10:29", "10:44", "10:59",
                    "11:14", "11:29", "11:44", "11:59",
                    "12:14", "12:29", "12:44", "12:59",
                    "13:14", "13:29", "13:44", "13:59",
                    "14:14", "14:29", "14:44", "14:59",
                    "15:14", "15:29", "15:44", "15:59",
                    "16:14", "16:29", "16:44", "16:59",
                    "17:19", "17:39", "17:59",
                    "18:19", "18:39", "18:59",
                    "19:18", "19:38", "19:58",
                    "20:18", "20:48",
                    "21:15", "21:45"
                ], 
                holidays: [
                    "5:20", "5:50",
                    "6:15", "6:45",
                    "7:15", "7:35", "7:55",
                    "8:18", "8:38", "8:58",
                    "9:18", "9:38", "9:58",
                    "10:18", "10:38", "10:58",
                    "11:18", "11:38", "11:58",
                    "12:18", "12:38", "12:58",
                    "13:18", "13:38", "13:58",
                    "14:18", "14:38", "14:58",
                    "15:18", "15:38", "15:58",
                    "16:18", "16:38", "16:58",
                    "17:18", "17:38", "17:58",
                    "18:18", "18:38", "18:58",
                    "19:18", "19:38", "19:58",
                    "20:18", "20:48",
                    "21:15", "21:45"
                ] }
        },

        7: {
            [botanickaZahrada]: { 
                workDays: [
                    "5:01", "5:31",
                    "6:01", "6:21", "6:40", "6:55",
                    "7:11", "7:26", "7:41", "7:56",
                    "8:11", "8:26", "8:41", "8:56",
                    "9:11", "9:26", "9:41", "9:56",
                    "10:11", "10:26", "10:41", "10:56",
                    "11:11", "11:26", "11:41", "11:56",
                    "12:11", "12:26", "12:41", "12:56",
                    "13:11", "13:26", "13:41", "13:56",
                    "14:11", "14:26", "14:41", "14:56",
                    "15:11", "15:26", "15:41", "15:56",
                    "16:11", "16:26", "16:42",
                    "17:02", "17:22", "17:42",
                    "18:02", "18:22", "18:42",
                    "19:02", "19:22", "19:42",
                    "20:02", "20:22", "20:42",
                    "21:12", "21:31"
                ], 
                schoolHolidays: [
                    "5:01", "5:31",
                    "6:01", "6:21", "6:40", "6:55",
                    "7:11", "7:26", "7:41", "7:56",
                    "8:11", "8:26", "8:41", "8:56",
                    "9:11", "9:26", "9:41", "9:56",
                    "10:11", "10:26", "10:41", "10:56",
                    "11:11", "11:26", "11:41", "11:56",
                    "12:11", "12:26", "12:41", "12:56",
                    "13:11", "13:26", "13:41", "13:56",
                    "14:11", "14:26", "14:41", "14:56",
                    "15:11", "15:26", "15:41", "15:56",
                    "16:11", "16:26", "16:42",
                    "17:02", "17:22", "17:42",
                    "18:02", "18:22", "18:42",
                    "19:02", "19:22", "19:42",
                    "20:02", "20:22", "20:42",
                    "21:12", "21:31"
                ], 
                holidays: [
                    "5:39",
                    "6:09", "6:31",
                    "7:01", "7:31",
                    "8:01", "8:22", "8:42",
                    "9:02", "9:22", "9:42",
                    "10:02", "10:22", "10:42",
                    "11:02", "11:22", "11:42",
                    "12:02", "12:22", "12:42",
                    "13:02", "13:22", "13:42",
                    "14:02", "14:22", "14:42",
                    "15:02", "15:22", "15:42",
                    "16:02", "16:22", "16:42",
                    "17:02", "17:22", "17:42",
                    "18:02", "18:22", "18:42",
                    "19:02", "19:22", "19:42",
                    "20:02", "20:22", "20:42",
                    "21:12", "21:31"
                ] }
        },
     
        12: {
            [sebastovce]: {
                workDays: [
                    "5:00","5:30",
                    "6:00", "6:33",
                    "7:03", "7:35",
                    "8:05", "8:35",
                    "9:05", "9:35",
                    "10:05", "10:35",
                    "11:05", "11:35",
                    "12:05", "12:35",
                    "13:05", "13:35",
                    "14:05", "14:35",
                    "15:05", "15:35",
                    "16:05", "16:35",
                    "17:05", "17:35",
                    "18:05", "18:35",
                    "19:05", "19:33",
                    "20:03", "20:33",
                    "21:03",
                    "22:00", "22:50"
                ],
                schoolHolidays: [
                    "5:00", "5:30",
                    "6:00", "6:33",
                    "7:03", "7:35",
                    "8:05", "8:35",
                    "9:05", "9:35",
                    "10:05", "10:35",
                    "11:05", "11:35",
                    "12:05", "12:35",
                    "13:05", "13:35",
                    "14:05", "14:35",
                    "15:05", "15:35",
                    "16:05", "16:35",
                    "17:05", "17:35",
                    "18:05", "18:35",
                    "19:05", "19:33",
                    "20:03", "20:33",
                    "21:03",
                    "22:00", "22:50"
                ],
                holidays: [
                    "5:00",
                    "6:00", "6:50",
                    "7:30",
                    "8:00", "8:33",
                    "9:03", "9:33",
                    "10:03", "10:33",
                    "11:03", "11:33",
                    "12:03", "12:33",
                    "13:03", "13:33",
                    "14:03", "14:33",
                    "15:03", "15:33",
                    "16:03", "16:33",
                    "17:03", "17:33",
                    "18:03", "18:33",
                    "19:03", "19:33",
                    "20:03", "20:33",
                    "21:03",
                    "22:00", "22:50"
                ] },

            [podhradova]: {
                workDays: [
                    "4:56",
                    "5:37",
                    "6:12", "6:38",
                    "7:13", "7:43",
                    "8:13", "8:43",
                    "9:13", "9:43",
                    "10:13", "10:43",
                    "11:13", "11:43",
                    "12:13", "12:43",
                    "13:13", "13:43",
                    "14:13", "14:43",
                    "15:13", "15:43",
                    "16:13", "16:43",
                    "17:13", "17:43",
                    "18:13", "18:43",
                    "19:13", "19:38",
                    "20:08", "20:58",
                    "21:41",
                    "22:41"
                ],
                schoolHolidays: [
                    "4:56",
                    "5:37",
                    "6:12", "6:38",
                    "7:13", "7:43",
                    "8:13", "8:43",
                    "9:13", "9:43",
                    "10:13", "10:43",
                    "11:13", "11:43",
                    "12:13", "12:43",
                    "13:13", "13:43",
                    "14:13", "14:43",
                    "15:13", "15:43",
                    "16:13", "16:43",
                    "17:13", "17:43",
                    "18:13", "18:43",
                    "19:12", "19:38",
                    "20:08", "20:58",
                    "21:41",
                    "22:41"
                ],
                holidays: [
                    "4:56",
                    "5:31",
                    "6:31",
                    "7:31",
                    "8:08", "8:38",
                    "9:08", "9:38",
                    "10:08", "10:38",
                    "11:08", "11:38",
                    "12:08", "12:38",
                    "13:08", "13:38",
                    "14:08", "14:38",
                    "15:08", "15:38",
                    "16:08", "16:38",
                    "17:08", "17:38",
                    "18:08", "18:38",
                    "19:08", "19:38",
                    "20:08", "20:58",
                    "21:41",
                    "22:41"
                ] }
        },

        15: {
            [ocCassovia]: {
                workDays: [
                    "4:57",
                    "5:27", "5:47",
                    "6:02", "6:18", "6:33", "6:48",
                    "7:00", "7:13", "7:25", "7:37", "7:49",
                    "8:09", "8:29", "8:49",
                    "9:09", "9:29", "9:49",
                    "10:09", "10:29", "10:49",
                    "11:09", "11:29", "11:49",
                    "12:09", "12:29", "12:49",
                    "13:09", "13:29", "13:49",
                    "14:04", "14:19", "14:34", "14:49",
                    "15:04", "15:19", "15:34", "15:49",
                    "16:04", "16:19", "16:34", "16:49",
                    "17:09", "17:29", "17:49",
                    "18:09", "18:29", "18:49",
                    "19:09", "19:28", "19:48",
                    "20:08", "20:28", "20:48",
                    "21:09", "21:39",
                    "22:09", "22:39",
                    "23:09"
                ],
                schoolHolidays: [
                    "4:57",
                    "5:27", "5:47",
                    "6:08", "6:28", "6:48",
                    "7:03", "7:19", "7:34", "7:49",
                    "8:09", "8:29", "8:49",
                    "9:09", "9:29", "9:49",
                    "10:09", "10:29", "10:49",
                    "11:09", "11:29", "11:49",
                    "12:09", "12:29", "12:49",
                    "13:09", "13:29", "13:49",
                    "14:09", "14:29", "14:49",
                    "15:04", "15:19", "15:34", "15:49",
                    "16:09", "16:29", "16:49",
                    "17:09", "17:29", "17:49",
                    "18:09", "18:29", "18:49",
                    "19:09", "19:28", "19:48",
                    "20:08", "20:28", "20:48",
                    "21:09", "21:39",
                    "22:09", "22:39",
                    "23:09"
                ],
                holidays: [
                    "4:59",
                    "5:39",
                    "6:09", "6:29", "6:49",
                    "7:09", "7:27", "7:47",
                    "8:08", "8:28", "8:48",
                    "9:08", "9:28", "9:48",
                    "10:08", "10:28", "10:48",
                    "11:08", "11:28", "11:48",
                    "12:08", "12:28", "12:48",
                    "13:08", "13:28", "13:48",
                    "14:08", "14:28", "14:48",
                    "15:08", "15:28", "15:48",
                    "16:08", "16:28", "16:48",
                    "17:08", "17:28", "17:48",
                    "18:08", "18:28", "18:48",
                    "19:08", "19:28", "19:48",
                    "20:08", "20:28", "20:48",
                    "21:09", "21:39",
                    "22:09", "22:39",
                    "23:09"
                ] },

            [exnarova]: {
                workDays: [
                    "4:53",
                    "5:23", "5:43",
                    "6:04", "6:20", "6:35", "6:50",
                    "7:06", "7:21", "7:36", "7:51",
                    "8:06", "8:25", "8:45",
                    "9:05", "9:25", "9:45",
                    "10:05", "10:25", "10:45",
                    "11:05", "11:25", "11:45",
                    "12:05", "12:25", "12:45",
                    "13:05", "13:21", "13:36", "13:51",
                    "14:06", "14:21", "14:36", "14:51",
                    "15:06", "15:21", "15:36", "15:51",
                    "16:06", "16:21", "16:36", "16:51",
                    "17:06", "17:25", "17:45",
                    "18:05", "18:25", "18:45",
                    "19:04", "19:24", "19:44",
                    "20:04", "20:24", "20:44",
                    "21:03", "21:23", "21:53",
                    "22:23", "22:53"
                ],
                schoolHolidays: [
                    "4:53",
                    "5:23", "5:43",
                    "6:04", "6:24", "6:44",
                    "7:05", "7:21", "7:36", "7:51",
                    "8:06", "8:25", "8:45",
                    "9:05", "9:25", "9:45",
                    "10:05", "10:25", "10:45",
                    "11:05", "11:25", "11:45",
                    "12:05", "12:25", "12:45",
                    "13:05", "13:25", "13:45",
                    "14:05", "14:25", "14:45",
                    "15:05", "15:21", "15:36", "15:51",
                    "16:06", "16:25", "16:45",
                    "17:05", "17:25", "17:45",
                    "18:05", "18:25", "18:45",
                    "19:04", "19:24", "19:44",
                    "20:04", "20:24", "20:44",
                    "21:03", "21:23", "21:53",
                    "22:23", "22:53"
                ],
                holidays: [
                    "4:43",
                    "5:23", "5:53",
                    "6:23", "6:43",
                    "7:03", "7:23", "7:43",
                    "8:04", "8:24", "8:44",
                    "9:04", "9:24", "9:44",
                    "10:04", "10:24", "10:44",
                    "11:04", "11:24", "11:44",
                    "12:04", "12:24", "12:44",
                    "13:04", "13:24", "13:44",
                    "14:04", "14:24", "14:44",
                    "15:04", "15:24", "15:44",
                    "16:04", "16:24", "16:44",
                    "17:04", "17:24", "17:44",
                    "18:04", "18:24", "18:44",
                    "19:04", "19:24", "19:44",
                    "20:04", "20:24", "20:44",
                    "21:03", "21:23", "21:53",
                    "22:23", "22:53"
                ] }
        },

        16: {
            [ocCassovia]: {
                workDays: [
                    "5:12", "5:37", "5:54",
                    "6:10", "6:26", "6:41", "6:54",
                    "7:06", "7:19", "7:31", "7:43", "7:59",
                    "8:19", "8:39", "8:59",
                    "9:19", "9:39", "9:59",
                    "10:19", "10:39", "10:59",
                    "11:19", "11:39", "11:59",
                    "12:19", "12:39", "12:59",
                    "13:19", "13:39", "13:56",
                    "14:11", "14:26", "14:41", "14:56",
                    "15:11", "15:26", "15:41", "15:56",
                    "16:11", "16:26", "16:41", "16:59",
                    "17:19", "17:39", "17:59",
                    "18:19", "18:39", "18:59",
                    "19:18", "19:38", "19:58",
                    "20:18", "20:38"
                ],
                schoolHolidays: [
                    "5:12", "5:37", "5:57",
                    "6:18", "6:38", "6:56",
                    "7:12", "7:26", "7:41", "7:59",
                    "8:19", "8:39", "8:59",
                    "9:19", "9:39", "9:59",
                    "10:19", "10:39", "10:59",
                    "11:19", "11:39", "11:59",
                    "12:19", "12:39", "12:59",
                    "13:19", "13:39", "13:59",
                    "14:19", "14:39", "14:56",
                    "15:11", "15:26", "15:41", "15:59",
                    "16:19", "16:39", "16:59",
                    "17:19", "17:39", "17:59",
                    "18:19", "18:39", "18:59",
                    "19:18", "19:38", "19:58",
                    "20:18", "20:38"
                ],
                holidays: [
                    "7:37", "7:57",
                    "8:18", "8:38", "8:58",
                    "9:18", "9:38", "9:58",
                    "10:18", "10:38", "10:58",
                    "11:18", "11:38", "11:58",
                    "12:18", "12:38", "12:58",
                    "13:18", "13:38", "13:58",
                    "14:18", "14:38", "14:58",
                    "15:18", "15:38", "15:58",
                    "16:18", "16:38", "16:58",
                    "17:18", "17:38", "17:58",
                    "18:18", "18:38", "18:58",
                    "19:18", "19:38", "19:58",
                    "20:18", "20:38"
                ] },
            
            [podhradova]: {
                workDays: [
                    "4:38",
                    "5:08", "5:33", "5:53",
                    "6:13", "6:28", "6:43", "6:58",
                    "7:14", "7:29", "7:44", "7:59",
                    "8:15", "8:35", "8:55",
                    "9:15", "9:35", "9:55",
                    "10:15", "10:35", "10:55",
                    "11:15", "11:35", "11:55",
                    "12:15", "12:35", "12:55",
                    "13:14", "13:29", "13:44", "13:59",
                    "14:14", "14:29", "14:44", "14:59",
                    "15:14", "15:29", "15:44", "15:59",
                    "16:14", "16:29", "16:44", "16:59",
                    "17:15", "17:35", "17:55",
                    "18:15", "18:35", "18:55",
                    "19:14", "19:34", "19:54",
                    "20:14", "20:34"
                ],
                schoolHolidays: [
                    "4:38",
                    "5:08", "5:33", "5:53",
                    "6:14", "6:34", "6:54",
                    "7:14", "7:29", "7:44", "7:59",
                    "8:15", "8:35", "8:55",
                    "9:15", "9:35", "9:55",
                    "10:15", "10:35", "10:55",
                    "11:15", "11:35", "11:55",
                    "12:15", "12:35", "12:55",
                    "13:15", "13:35", "13:55",
                    "14:15", "14:35", "14:55",
                    "15:14", "15:29", "15:44", "15:59",
                    "16:15", "16:35", "16:55",
                    "17:15", "17:35", "17:55",
                    "18:15", "18:35", "18:55",
                    "19:14", "19:34", "19:54",
                    "20:14", "20:34"
                ],
                holidays: [
                    "7:13", "7:33", "7:53",
                    "8:14", "8:34", "8:54",
                    "9:14", "9:34", "9:54",
                    "10:14", "10:34", "10:54",
                    "11:14", "11:34", "11:54",
                    "12:14", "12:34", "12:54",
                    "13:14", "13:34", "13:54",
                    "14:14", "14:34", "14:54",
                    "15:14", "15:34", "15:54",
                    "16:14", "16:34", "16:54",
                    "17:14", "17:34", "17:54",
                    "18:14", "18:34", "18:54",
                    "19:14", "19:34", "19:54",
                    "20:14", "20:34"
                ] }
        }
    } 
}
