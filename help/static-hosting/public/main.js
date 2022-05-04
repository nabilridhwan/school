fetch("/api/v1/quiz")
    .then((res) => res.json())
    .then((d) => console.log(d));
