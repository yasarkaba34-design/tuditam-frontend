function searchYKOS(query, lang) {
    fetch(`assets/data/search.json`)
        .then(response => response.json())
        .then(data => {
            const results = data[lang].filter(item =>
                item.title.toLowerCase().includes(query.toLowerCase())
            );

            const container = document.getElementById("search-results");
            container.innerHTML = "";

            results.forEach(r => {
                const div = document.createElement("div");
                div.className = "result-card";
                div.innerHTML = `
                    <h3>${r.title}</h3>
                    <p>${r.module}</p>
                `;
                container.appendChild(div);
            });
        });
}
function searchYKOS(query, lang) {
    fetch("assets/data/search.json")
        .then(res => res.json())
        .then(data => {
            const results = data[lang].filter(item =>
                item.title.toLowerCase().includes(query.toLowerCase())
            );

            const container = document.getElementById("search-results");
            container.innerHTML = "";

            results.forEach(r => {
                const div = document.createElement("div");
                div.className = "result-card";
                div.innerHTML = `
                    <h3>${r.title}</h3>
                    <p>${r.module}</p>
                `;
                container.appendChild(div);
            });
        });
}
vs