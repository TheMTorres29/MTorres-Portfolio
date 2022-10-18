import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap, faUserNinja, faBriefcase} from "@fortawesome/free-solid-svg-icons";

let school = [<FontAwesomeIcon icon={faGraduationCap} style={{color: "#fff"}}/>, {background: '#0588f5'}];
let work = [<FontAwesomeIcon icon={faBriefcase} style={{color: "#fff"}}/>, {background: '#4e82ad'}];
let ninja = [<FontAwesomeIcon icon={faUserNinja} style={{color: "#fff"}}/>, {background: '#d19945'}];


let timelineData = [
    {
        key: 1,
        title: "Corona High School",
        location: "Corona, CA",
        description: "Graduated High School with the plan to study Computer Science already",
        date: "2014",
        icon: school[0],
        color: school[1]
    },
    {
        key: 2,
        title: "Superior Grocers",
        location: "Corona, CA",
        description: "Cart Pusher then promoted to Dairy/Deli/Frozen Dept Sales Associate",
        date: "2014 - 2015",
        icon: work[0],
        color: work[1]
    },
    {
        key: 3,
        title: "CBC",
        location: "Los Angeles, CA",
        description: "IT Technician",
        date: "2015 - Present",
        icon: work[0],
        color: work[1]
    },
    {
        key: 4,
        title: "Chunin Exams",
        location: "Norco College West End Quad",
        description: "I took a Karate class and won the tournament on form at the end",
        date: "2018",
        icon: ninja[0],
        color: ninja[1]
    },
    {
        key: 5,
        title: "Norco Community College",
        location: "Norco, CA",
        description: "Associates of Math & Science",
        date: "2014 - 2018",
        icon: school[0],
        color: school[1]
    },
    {
        key: 6,
        title: "GameStop",
        location: "Corona & Norco, CA",
        description: "Senior Game Advisor",
        date: "2020 - 2021",
        icon: work[0],
        color: work[1]
    },
    {
        key: 7,
        title: "California State University San Bernardino",
        location: "San Bernardino, CA",
        description: "Bachelor of Science in Computer Science w/ Cumulative GPA of 3.135",
        date: "2018 - 2022",
        icon: school[0],
        color: school[1]
    },
    {
        key: 8,
        title: "Zumiez Warehouse",
        location: "Corona, CA",
        description: "DTG Operator",
        date: "2022 - Present",
        icon: work[0],
        color: work[1]
    }
]

export default timelineData;