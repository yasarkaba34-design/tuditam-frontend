let currentLang = "tr";

function loadLanguage(lang) {
    fetch(`../assets/lang/${lang}.json`)
        .then(response => response.json())
        .then(data => {
            document.querySelector("[data-lang='title']").innerText = data.title;
            document.querySelector("[data-lang='subtitle']").innerText = data.subtitle;
            document.querySelector("[data-lang='search']").placeholder = data.search;

            document.querySelector("[data-lang='countries']").innerText = data.countries;
            document.querySelector("[data-lang='research']").innerText = data.research;
            document.querySelector("[data-lang='atlas']").innerText = data.atlas;
            document.querySelector("[data-lang='archive']").innerText = data.archive;

            document.querySelector("[data-lang='matrices']").innerText = data.matrices;
            document.querySelector("[data-lang='cultureMaps']").innerText = data.cultureMaps;
            document.querySelector("[data-lang='languageModule']").innerText = data.languageModule;
            document.querySelector("[data-lang='researchCenter']").innerText = data.researchCenter;
        });
}
let currentLang = "tr";

function loadLanguage(lang) {
    fetch(`../assets/lang/${lang}.json`)
        .then(response => response.json())
        .then(data => {
            document.querySelector("[data-lang='title']").innerText = data.title;
            document.querySelector("[data-lang='subtitle']").innerText = data.subtitle;
            document.querySelector("[data-lang='search']").placeholder = data.search;

            document.querySelector("[data-lang='countries']").innerText = data.countries;
            document.querySelector("[data-lang='research']").innerText = data.research;
            document.querySelector("[data-lang='atlas']").innerText = data.atlas;
            document.querySelector("[data-lang='archive']").innerText = data.archive;

            document.querySelector("[data-lang='matrices']").innerText = data.matrices;
            document.querySelector("[data-lang='cultureMaps']").innerText = data.cultureMaps;
            document.querySelector("[data-lang='languageModule']").innerText = data.languageModule;
            document.querySelector("[data-lang='researchCenter']").innerText = data.researchCenter;
        });
}
function loadLanguage(lang) {
    fetch(`../assets/lang/${lang}.json`)
        .then(response => response.json())
        .then(data => {

            // Başlıklar
            document.querySelector("[data-lang='matrices_title']").innerText = data.matrices_title;
            document.querySelector("[data-lang='matrices_sub']").innerText = data.matrices_sub;

            // Liste
            const list = document.getElementById("matrices-list");
            if (list) {
                list.innerHTML = "";
                data.matrices_list.forEach(item => {
                    const li = document.createElement("li");
                    li.innerText = item;
                    list.appendChild(li);
                });
            }

            // Diğer modüller aynı şekilde eklenir
        });
}
let currentLang = "tr";

function loadLanguage(lang) {
    fetch(`assets/lang/${lang}.json`)
        .then(res => res.json())
        .then(data => {
            document.querySelector("[data-lang='title']").innerText = data.title;
            document.querySelector("[data-lang='subtitle']").innerText = data.subtitle;
            document.querySelector("[data-lang='search']").placeholder = data.search;

            document.querySelector("[data-lang='matrices']").innerText = data.matrices;
            document.querySelector("[data-lang='atlas']").innerText = data.atlas;
            document.querySelector("[data-lang='archive']").innerText = data.archive;
            document.querySelector("[data-lang='cultureMaps']").innerText = data.cultureMaps;
            document.querySelector("[data-lang='languageModule']").innerText = data.languageModule;
            document.querySelector("[data-lang='researchCenter']").innerText = data.researchCenter;
        });
}

document.getElementById("language").addEventListener("change", function() {
    currentLang = this.value;
    loadLanguage(currentLang);
});

window.onload = () => loadLanguage(currentLang);

document.getElementById("language").addEventListener("change", function() {
    currentLang = this.value;
    loadLanguage(currentLang);
});

window.onload = () => loadLanguage(currentLang);

document.getElementById("language").addEventListener("change", function() {
    currentLang = this.value;
    loadLanguage(currentLang);
});

window.onload = () => loadLanguage(currentLang);
