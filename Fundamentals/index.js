student = [
    {
        id: 234,
        name: 'anuj',
        class: 'Bteh'
    },
    {
        id: 6897,
        name: 'Pankaj',
        class: 'Mtech'
    }
]

function getStudnetDetails() {

    setTimeout(function () {
        console.log(student)
    }, 2000);

}

function addStudent(callback) {
    setTimeout(function () {
        student.push({
            id: 68,
            name: 'Abhinav',
            class: 'Phd'
        })
        callback();
    }, 5000)
}

addStudent(getStudnetDetails);