import React, {useState} from 'react';
import {EditorState, ContentState} from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import {Editor} from "react-draft-wysiwyg";
import axios from 'axios';
import './Addtest.css';
import {Link, useHistory} from "react-router-dom";
import {logSelectionStateFailure} from "draft-js/lib/DraftJsDebugLogging";

function AddTest() {
    const [questions, setQuestions] = useState([
        {
            question: EditorState.createWithContent(ContentState.createFromText('')),
            answers: [
                {
                    editorState: EditorState.createWithContent(ContentState.createFromText('')),
                    open: false,
                    correct: false,
                },
            ],
        },
    ])

    const [err, setErr] = useState(null)

    const navitgate = useHistory()

    console.log(questions)

    const handleAddQuestion = () => {
        setQuestions([...questions, {
            question: EditorState.createWithContent(ContentState.createFromText('')),
            answers: [
                {
                    editorState: EditorState.createWithContent(ContentState.createFromText('')),
                    open: false,
                    correct: false,
                },
            ],
        }]);
    };

    const handleAddAnswer = (questionIndex) => {
        const newQuestions = [...questions];
        newQuestions[questionIndex].answers.push({
            editorState: EditorState.createWithContent(ContentState.createFromText('')),
            open: false,
            correct: false,
        });
        setQuestions(newQuestions);
    };

    const handleQuestionChange = (questionIndex, newState) => {
        const newQuestions = [...questions];
        newQuestions[questionIndex].question = newState;
        setQuestions(newQuestions);
    };

    const handleAnswerChange = (questionIndex, answerIndex, newState) => {
        const newQuestions = [...questions];
        newQuestions[questionIndex].answers[answerIndex].editorState = newState;
        setQuestions(newQuestions);
    };

    const handleRemove = (questionIndex, answerIndex) => {
        const newQuestions = [...questions];
        newQuestions[questionIndex].answers.splice(answerIndex, 1);
        setQuestions(newQuestions);
    };

    const handleRemoveQuestion = (questionIndex) => {
        const newQuestions = [...questions];
        newQuestions.splice(questionIndex, 1);
        setQuestions(newQuestions);
    };

    const setCorrectAnswerFor = (questionIndex, answerIndex) => {
        const newQuestions = questions.map((question, qIndex) => {
            if (qIndex === questionIndex) {
                return {
                    ...question,
                    answers: question.answers.map((answer, aIndex) => {
                        if (aIndex === answerIndex) {
                            return {
                                ...answer,
                                correct: !answer.correct,
                            };
                        }
                        return {
                            ...answer,
                            correct: false,
                        };
                    }),
                };
            }
            return question;
        });
        setQuestions(newQuestions);
    };

    const handleSaveTest = () => {
        const testData = {
            questions: questions.map(({question, answers}) => ({
                question: question.getCurrentContent().getPlainText(),
                answers: answers.map(({editorState}) => editorState.getCurrentContent().getPlainText())
            }))
        };

        // Send data to backend
        axios.post('YOUR_BACKEND_API_ENDPOINT', testData)
            .then(response => {
                // Handle successful response
                if (res) {
                    setErr(null)
                    console.log('Test saved successfully:', response.data);
                    navitgate.push('/PreviewTest')
                }

            })
            .catch(error => {
                if (err) {
                    setErr(err.message)
                }
            });
    };

    return (
        <div className="add-test-screen">
            <div className="title-bar">
                <h2>Add Test</h2>
                <Link to="/PreviewTest"><button>Preview test</button></Link>
            </div>

            <div className="test-inside">
                <div className="test-inside-in">
                    <div className="question-type">
                        <label>Type question</label><br/>
                        <input
                            type="text"
                            placeholder="With one right answer"
                            style={{
                                borderRadius: '1px',
                                width: '20%',
                                marginTop: '1rem',
                                backgroundColor: '#F9F9F9',
                                height: '52.68px'
                            }}/>
                    </div>

                    {questions.map(({question, answers}, questionIndex) => (
                        <div key={questionIndex}>
                            <div className="question-text-editor">
                                <label>Question {questionIndex + 1}</label>
                                <Editor
                                    editorState={question}
                                    toolbarClassName="toolbarClassName"
                                    wrapperClassName="wrapperClassName"
                                    editorClassName="editorClassName"
                                    onEditorStateChange={(state) => handleQuestionChange(questionIndex, state)}
                                    role="textbox"
                                    aria-label={`Content editing for question ${questionIndex + 1}`}
                                    aria-roledescription="text editor"
                                />

                                <button
                                    onClick={() => handleAddAnswer(questionIndex)}
                                    className='addAns'
                                    role="button"
                                    aria-label={`Add answer for question ${questionIndex + 1}`}
                                >
                                    Add answer
                                </button>
                                <button
                                    onClick={() => handleRemoveQuestion(questionIndex)}
                                    className='removeQuestion'
                                    role="button"
                                    aria-label={`Remove question ${questionIndex + 1}`}
                                >
                                    Remove question
                                </button>
                            </div>

                            <div className='answer-test-editor'>
                                {answers.map(({editorState, correct}, answerIndex) => (
                                    <div key={answerIndex} className={correct ? 'correct-answer' : ''}>
                                        <Editor
                                            editorState={editorState}
                                            toolbarClassName="toolbarClassName"
                                            wrapperClassName="wrapperClassName"
                                            editorClassName="editorClassName"
                                            onEditorStateChange={(state) => handleAnswerChange(questionIndex, answerIndex, state)}
                                            role="textbox"
                                            aria-label={`Content editing for answer ${answerIndex + 1} of question ${questionIndex + 1}`}
                                            aria-roledescription="text editor"
                                        />
                                          <button
                                            onClick={() => setCorrectAnswerFor(questionIndex, answerIndex)}
                                            role="button"
                                            aria-label={`Mark as correct answer`}
                                        >
                                            {correct ? 'Correct' : 'Ping Correct'}
                                        </button>

                                        <button
                                            onClick={() => handleRemove(questionIndex, answerIndex)}
                                            role="button"
                                            aria-label={`Remove answer ${answerIndex + 1} for question ${questionIndex + 1}`}
                                        >
                                            Remove
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}

                    <div className="Test-button-addVar">
                        <button onClick={handleAddQuestion}>
                            Add Question
                        </button>
                    </div>

                    <div className="Test-button">
                        <button
                            className="cancel"
                            role="button"
                            aria-label={`Cancel test`}
                        >
                            Cancel
                        </button>
                        <button
                            className="save"
                            role="button"
                            aria-label={`Save test`}
                            onClick={handleSaveTest}
                        >
                            Save
                        </button>

                        {err && <div>{err}</div>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddTest;
