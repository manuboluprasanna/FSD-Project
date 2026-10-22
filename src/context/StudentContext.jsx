import {createContext,useContext,useState} from "react";
const StudentContext = createContext();
const initialStudents = [
    {
        id: 1,
        name: "prasa",
        email: "prasa@gmail.com",
        course: "CSM",
        year: 3
    },
    {
        id: 2,
        name: "prasu",
        email: "prasu@gmail.com",
        course: "CSM",
        year: 3
    },
    {
        id: 3,
        name: "kumar",
        email: "kumar@gmail.com",
        course: "CSM",
        year: 3
    },
    {
        id: 4,
        name: "prasanna",
        email: "prasanna@gmail.com",
        course: "CSM",
        year: 3
    }
];
export function StudentProvider({ children }) {
    const [students, setStudents] = useState(initialStudents);
    const addStudent = (student) => {
        const newStudent = {
            id: Date.now(),
            ...student
        };
        setStudents((previousStudents) => [
            ...previousStudents,
            newStudent
        ]);
    };
    const deleteStudent = (id) => {
        setStudents((previousStudents) =>
            previousStudents.filter(
                (student) => student.id !== id
            )
        );
    };
    const updateStudent = (updatedStudent) => {
        setStudents((previousStudents) =>
            previousStudents.map((student) =>
                student.id === updatedStudent.id
                    ? updatedStudent
                    : student
            )
        );
    };
    return (
        <StudentContext.Provider
            value={{
                students,
                addStudent,
                deleteStudent,
                updateStudent
            }}
        >
            {children}
        </StudentContext.Provider>
    );
}
export function useStudents() {
    return useContext(StudentContext);
}