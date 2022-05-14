import './style.css';

type OptionsType = {
    id: number;
    answer: string;
    question_id: number;
};

type QuestionProps = {
    _handleRadio: (event: React.MouseEvent<HTMLLabelElement>) => void;
    check: number | null;
    title: string;
    options: OptionsType[];
    questionId: number;
};

const Question: React.FC<QuestionProps> = ({ _handleRadio, check, title, options, questionId }) => {
    return (
        <div className="container-questions">
            <h1>{title}</h1>

            {options.map((option: OptionsType) => (
                <div className="response">
                    <label htmlFor={option.id.toString()} onClick={_handleRadio}>
                        <input type="radio" id={option.id.toString()} value={option.id} placeholder="Options" checked={check ? check === option.id : false} name={option.question_id.toString()} />
                        <span />

                        {option.answer}
                    </label>
                </div>
            ))}
        </div>
    );
};

export default Question;
