import Questions from "../models/Questions";
import Answers from "../models/Answers";
import { TEXTSRESULT } from "../utills/textUtils";
class ResultController {
  async index(req, res) {
    console.log(req.body);
    try {
      const { answers } = req.body;
      const responses = [];

      for (let value of answers) {
        const { question_id, answer_id } = value;
        responses.push(
          await Questions.findAll({
            where: question_id,
            attributes: ["id", "question_name"],
            include: [
              {
                model: Answers,
                attributes: ["id", "answer", "score"],
                where: {
                  id: answer_id,
                },
              },
            ],
          })
        );
      }

      const reponseScores = ResultController.flatMapResponse(responses).map(
        (item) => item["Answers"].filter((item) => item.score)
      );

      const totalScore = ResultController.calcTotalScore(
        reponseScores.flatMap((response) => response)
      );
      const restult = ResultController.feedbackResult(totalScore);

      return res.status(200).json({ restult });
    } catch (error) {
      return res.status(400).json({ error });
    }
  }

  static calcTotalScore(array) {
    return array.reduce((acc, subtotal) => {
      return (subtotal.score += acc);
    }, 0);
  }

  static flatMapResponse(array) {
    return array.flatMap((response) => response);
  }

  static feedbackResult(score) {
    if (score >= 0 && score <= 7) return TEXTSRESULT.median(score);

    if (score > 7 && score < 13) {
      return TEXTSRESULT.median(score);
    }

    if (score >= 13) return TEXTSRESULT.positivo(score);
  }
}

export default new ResultController();
