import React, { useEffect, useState } from 'react';
import Question from '../component/Question';

import { GET_QUESTIONS, POST_RESULT } from '../../api/questions';

import './style.css';

type ResponseType = {
    question_id: number;
    answer_id: number;
};
const Questions: React.FC = () => {
    const [check, setCheck] = useState<number | null>(null);
    const [currentStep, setCurrentStep] = useState(0);
    const [response, setResponse] = useState<ResponseType[] | []>([]);
    const [questions, setQuestions] = useState([]);
    const [completed, setCompeted] = useState(false);
    const [result, setResult] = useState('');

    useEffect(() => {
        const requestGet = async () => setQuestions(await GET_QUESTIONS());
        requestGet();
    }, []);

    const _handleRadio = (event: React.MouseEvent<HTMLLabelElement>) => {
        const target = event.target as HTMLInputElement;

        if (target.value) setCheck(Number(target.value));
        if (target.name && !!target.value) {
            const newReponse = [...response, { question_id: Number(target.name), answer_id: Number(target.value) }];
            setResponse(newReponse);
        }
    };

    const _handleSteps = () => {
        setCurrentStep(currentStep + 1);
        if (currentStep >= questions.length - 1) {
            setCompeted(true);
            return;
        }
    };

    const _handleSubmitForm = () => {
        const requesPost = async () => setResult(await POST_RESULT({ answers: response }));
        requesPost();
    };

    return (
        <div className="container">
            <div className="steps-progress">
                {questions.map((item: any, index) => (
                    <div className={`steps step-${index} ${response.some((res) => Number(res.question_id) === item.id) ? 'full' : ''}`} />
                ))}
            </div>
            {
                questions.map((question: any) => {
                    return <Question key={question.id} questionId={question.id} _handleRadio={_handleRadio} check={check} title={question.question_name} options={question['Answers']} />;
                })[currentStep]
            }

            {!result ? (
                completed ? (
                    <>
                        <h2>Enviar respostas</h2>
                        <button type="button" className="button" onClick={_handleSubmitForm}>
                            Enviar Respostas
                        </button>
                    </>
                ) : (
                    <button type="button" className="button" onClick={_handleSteps}>
                        Próxima
                    </button>
                )
            ) : null}

            <p className="result" dangerouslySetInnerHTML={{ __html: result }} />
        </div>
    );
};
export default Questions;
