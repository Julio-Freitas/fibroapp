import { BASE_URL } from '../config/config';

export const GET_QUESTIONS = async () => {
    const request = await fetch(`${BASE_URL}/questions`);
    const { questions } = await request.json();
    return questions;
};

export const POST_RESULT = async (body: any) => {
    const request = await fetch(`${BASE_URL}/result`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
    const { restult } = await request.json();
    return restult;
};
