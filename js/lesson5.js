document.querySelector("#generate").addEventListener("click",() => {
    generate();
});
const click = document.querySelector("#click");
const click2 = document.querySelector("#click2");

let current = 0;

generate = () => {
    let quotes;
    quotes = {
        "- Уолт Дисней": '" Трудности преодолены."',
        "-Уинстон Чарчил": '" Я люблю Javascript"',
        "-Уил Рогерс": '" Учите Javascript"',
        "-Альберт Эйнштейн": '"Стремитесь не к успеху, а к ценностям, которые он дает"',
        "-Федор Достоевский": '"Надо любить жизнь больше, чем смысл жизни."',
        "-Амелия Эрхарт": '"Сложнее всего начать действовать, все остальное зависит только от упорства."',
        "-Джон Леннон": '"Жизнь - это то, что с тобой происходит, пока ты строишь планы."',
        "-Сократ": '"Неосмысленная жизнь не стоит того, чтобы жить."',
        "-Стив Джобс": '"Ваше время ограничено, не тратьте его, живя чужой жизнью"',
        "-Вуди Аллен": '"80% успеха - это появиться в нужном месте в нужное время."',
        "-Джим Рон": '"Либо вы управляете вашим днем, либо день управляет вами."',
        "-Теодор Рузвельт": '"Стоит только поверить, что вы можете – и вы уже на полпути к цели."',
        "-Лев Толстой": '"Каждый хочет изменить человечество, но никто не задумывается о том, как изменить себя."',
        "-Винсент Ван Гог": '"Если внутренний голос говорит вам, что вы не можете рисовать – рисуйте как можно больше, тогда этот голос затихнет."',
        "-Генри Форд": '"Неудача – это просто возможность начать снова, но уже более мудро."',
    };
    let authors = Object.keys(quotes);
    // let author = authors[Math.floor(Math.random() * authors.length)];
    // let quote = quotes[author];
    let author = authors[current];
    let quote = quotes[author];
    document.querySelector("#quote").textContent = quote;
    document.querySelector("#author").textContent = author;
};

click.addEventListener("click",() => {
    current +=1;
    if(current > 15) {
        return false;
    }
    generate();
});
click2.addEventListener("click",() => {
    current -=1;
    if(current < 0) {
        return false;
    }
    generate();
});

// document.querySelector("#click").addEventListener("click",() => {
//     generate();
// });
// document.querySelector("#click2").addEventListener("click",() => {
//     generate();
// });


