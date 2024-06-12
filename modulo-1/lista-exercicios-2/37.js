let characters = ['a', 'b', 'c', 'd'];
let G = Array();
let students = Array();

for (let i = 0; i < 20; i++) {
    let random = Math.round(Math.random() * 3);
    G.push(characters[random]);
}

for (let i = 0; i < 50; i++) {
    let answers = Array();
    for (let u = 0; u < 20; u++) {
        let random = Math.round(Math.random() * 3);
        answers.push(characters[random]);
    }

    let student = {
        number: i+1,
        R: answers
    }
    
    students.push(student);
}

for (let i = 0; i < 50; i++) {
    let grade = gradeStudent(students[i].R);
    console.log(`Student ${students[i].number} have gotten ${grade} questions right.`);
    if (grade >= 12) {
        console.log("Approved\n");
    } else {
        console.log("Disapproved\n");
    }
}

function gradeStudent (answers) {
    let rightAnswers = 0;
    for (let a = 0; a < answers.length; a++) {
        if (answers[a] === G[a]) {
            rightAnswers++;
        }
    }
    return rightAnswers;
}
