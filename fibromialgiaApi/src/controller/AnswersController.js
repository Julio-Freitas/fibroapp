import Answers from "../models/Answers";
class AnswersController {
  async index(req, res) {
    const answers = await Answers.findAll();

    return res.status(200).json({ answers });
  }

  async create(req, res) {
    try {
      const { answers } = req.body;
      if (!answers || !answers.length)
        throw new Error("Nenhum params foi enviada...");

      answers.forEach(({ question_id, answers }) => {
        if (!question_id) throw new Error("id da pergunta não foi enviada...");

        if (!answers || !answers.length > 0)
          throw new Error("Nenuma respostas  foi enviada...");

        answers.forEach(async (answer) => {
          await Answers.create({
            question_id,
            answer,
          });
        });
      });

      return res.status(200).json({ message: "Repostas salva com sucesso!" });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}

export default new AnswersController();
