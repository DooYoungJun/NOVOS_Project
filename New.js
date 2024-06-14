document.addEventListener("DOMContentLoaded", function() {
    const API_KEY = 'YOUR_API_KEY'; // 여기에 본인의 API 키를 입력해주세요.
    const API_URL = `https://news.yahoo.co.jp/rss/topics/it.xml`;

    fetch(API_URL)
        .then(response => response.text())
        .then(data => {
            const parser = new DOMParser();
            const xml = parser.parseFromString(data, 'application/xml');
            const items = xml.querySelectorAll('item');

            const newsContainer = document.getElementById('it-news'); // HTML에서 뉴스를 표시할 요소의 ID를 지정해주세요.

            items.forEach(item => {
                const title = item.querySelector('title').textContent;
                const link = item.querySelector('link').textContent;

                const newsItem = document.createElement('div');
                newsItem.classList.add('news-item');

                const newsTitle = document.createElement('a');
                newsTitle.textContent = title;
                newsTitle.href = link;
                newsTitle.target = '_blank'; // 새 탭에서 열도록 설정

                newsItem.appendChild(newsTitle);
                newsContainer.appendChild(newsItem);
            });
        })
        .catch(error => {
            console.error('Error fetching IT news:', error);
        });
});
