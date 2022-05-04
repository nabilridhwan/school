const express = require("express");
const q = require("./quiz");
const app = express();

app.use(express.static("public"));
app.use(express.json());

app.get("/", (req, res) => {
    res.sendFile("index.html");
});

app.get("/api/v1/quiz", (req, res) => {
    res.json({
        success: true,
        data: q,
    });
});

app.post("/api/v1/quiz/verify", (req, res) => {
    if (!req.body.answer || !req.body.questionNumber) {
        res.status(400);
        res.json({
            success: false,
            message: "Missing parameters",
        });
    }

    const question = q[0].questions[req.body.questionNumber];
    if (question.correctAnswer === req.body.answer) {
        return res.json({
            success: true,
            message: "Correct answer",
        });
    } else {
        return res.json({
            success: false,
            message: "Incorrect answer",
        });
    }
});

app.listen(3000);
