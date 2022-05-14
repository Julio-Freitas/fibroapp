import Questions from "../models/Questions";
import Answers from "../models/Answers";
class QuestionsController {
  async index(req, res) {
    try {
      const questions = await Questions.findAll({
        attributes: ["id", "question_name"],
        include: {
          model: Answers,
          attributes: ["id", "answer", "question_id"],
        },
      });
      return res.status(200).json({ questions });
    } catch (error) {
      return res.status(400).json({ error });
    }
  }

  async create(req, res) {
    try {
      const { questions } = req.body;
      if (!questions || !questions.length)
        throw new Error("Nenuma pergunta foi enviada...");

      questions.forEach(async (question) => {
        await Questions.create({
          question_name: question.name,
        });
      });

      return res.status(200).json({ questions: questions.length });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}

export default new QuestionsController();
