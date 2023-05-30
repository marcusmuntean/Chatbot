const express = require("express");
const router = express.Router();

const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

router.get("/send/:prompt", async (req, res, next) => {
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: req.params.prompt,
    max_tokens: 7,
    temperature: 0,
  });
  res.json({ result: response });
});

module.exports = router;
