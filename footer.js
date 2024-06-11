/* var imageUrl = 'C:\Private Coding\Javascript\NOVOS_PROJECT\NOVOS_Project\NOOVS mainLogo.png'; // 불러올 이미지 경로
var img = document.createElement('NOOVS mainLogo.png');
img.src = imageUrl;
img.alt = 'Dynamic Image';
document.getElementById('dynamicImage').appendChild(img); */

document.addEventListener("DOMContentLoaded", function() {
    var footerContent = `
        <div>
            <img src="C:\Private Coding\Javascript\NOVOS_PROJECT\NOVOS_Project\NOOVS mainLogo.png" alt="address">
            <p>회사 주소: 서울시 강남구 테헤란로 123</p>
            <p>전화: 02-123-4567</p>
            <p>이메일: contact@company.com</p>
        </div>
    `;
    document.getElementsByTagName('footer')[0].innerHTML = footerContent;
});
