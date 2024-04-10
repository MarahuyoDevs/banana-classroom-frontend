
export interface User {
    id:string
    name:string
    email:string
    password:string
    role:string
    classrooms:string[]
    quizzes:string[]
    quizzesResults:string[]
    createAt:string
    updatedAt:string
}

export interface Classroom {
    id:string
    name:string
    description:string
    instructor:string
    students:string[]
    quizzes:string[]
    createdAt:string
    updatedAt:string
}

export interface Question {
    id:string
    type:string
    text:string
    index:string
    options:string[]
    answer:string
    createdAt:string
    updatedAt:string
}

export interface Quiz {
    id:string
    classroomId:string
    name:string
    description:string
    questions:Question[]
    createdAt:string
    updatedAt:string
}

export interface QuizAnswer {
    index:number
    answer:string
    correctAnswer:string
}

export interface QuizResult {
    id:string
    userEmail:string
    quiz_id:string
    score:string
    answers:QuizAnswer[]
    createdAt:string
    updatedAt:string
}