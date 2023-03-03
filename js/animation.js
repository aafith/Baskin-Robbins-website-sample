const text = document.querySelector(".sec-text");

        const textLoad = () => {
            setTimeout(() => {
                text.textContent = "Ice Cream";
            }, 0);
            setTimeout(() => {
                text.textContent = "Chocolate";
            }, 4000);
            setTimeout(() => {
                text.textContent = "Ice-Cake";
            }, 8000); //1s = 1000 milliseconds
        }

        textLoad();
        setInterval(textLoad, 12000);