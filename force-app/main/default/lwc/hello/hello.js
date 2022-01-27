import { LightningElement } from 'lwc';

export default class Hello extends LightningElement {
    myQuestions = {
        id : "Question1",
        Question : "Which one of the following is not a template loop?",
        answer: {
            a : A,
            b : B,
            c : C
        }
    }
}