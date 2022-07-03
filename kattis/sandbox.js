let teachers = [
    {
        no: 1,
        name: "teacher1",
    },

    {
        no: 2,
        name: "teacher2",
    },

    {
        no: 3,
        name: "teacher3",
    },

    {
        no: 4,
        name: "teacher4",
    },

    {
        no: 5,
        name: "teacher5",
    },

    {
        no: 6,
        name: "teacher6",
    },
];

let subjects = [
    {
        name: "subj1",
        number: 2,
    },
    {
        name: "subj2",
        number: 3,
    },
    {
        name: "subj3",
        number: 1,
    },
];

let newSubjectArray = [];
let newTeacherArray = [];

/* Output
  { name: 'subj1' },
  { name: 'subj1' },
  { name: 'subj2' },
  { name: 'subj2' },
  { name: 'subj2' },
  { name: 'subj3' }
]
*/
for (let i = 0; i < subjects.length; i++) {
    let currentSubject = subjects[i];
    let numberOfSubject = currentSubject.number;

    for (let i = 0; i < numberOfSubject; i++) {
        newSubjectArray.push({ name: currentSubject.name });
    }
}

console.log(newSubjectArray);

/*
	Expected Output of newTeacherArray:
	[
	  { name: 'teacher1', subArray: [] },
	  { name: 'teacher2', subArray: [] },
	  { name: 'teacher3', subArray: [] },
	  { name: 'teacher4', subArray: [] },
	  { name: 'teacher5', subArray: [] },
	  { name: 'teacher6', subArray: [] }
	]
*/
for (let x = 0; x < teachers.length; x++) {
    let currentTeacher = teachers[x];
    newTeacherArray.push({ name: currentTeacher.name, subArray: [] });
}

while (newSubjectArray.length > 0) {
    console.log(`======== ${newSubjectArray.length} ========`);
    // Get a random teacher
    let randomTeacherIndex = Math.floor(Math.random() * teachers.length);
    let randomTeacher = teachers[randomTeacherIndex];

    // Get a random subject
    let randomSubjectIndex = Math.floor(Math.random() * newSubjectArray.length);
    let randomSubject = newSubjectArray[randomSubjectIndex];

    // Push the random subject to the random teacher by the name
    const indexOfRandomTeacherInNewTeachersArray = newTeacherArray.findIndex(
        (teacher) => teacher.name === randomTeacher.name
    );
    newTeacherArray[indexOfRandomTeacherInNewTeachersArray].subArray.push(
        randomSubject
    );

    // Make the newSubjectArray have everything except for the current random subject
    newSubjectArray.splice(randomSubjectIndex, 1);

    // Make the teachers have everything except for the current random teacher
    teachers.splice(randomTeacherIndex, 1);
}

console.log(newTeacherArray);
