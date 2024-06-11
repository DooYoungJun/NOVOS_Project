/* var imageUrl = 'C:\Private Coding\Javascript\NOVOS_PROJECT\NOVOS_Project\NOOVS mainLogo.png'; // 불러올 이미지 경로
var img = document.createElement('NOOVS mainLogo.png');
img.src = imageUrl;
img.alt = 'Dynamic Image';
document.getElementById('dynamicImage').appendChild(img); */

/*document.addEventListener("DOMContentLoaded", function() {
    var footerContent = `
        <div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7707.592281730163!2d139.72002795587827!3d35.6857825974827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188dfbe6442a23%3A0x7f8ee12d5d772a80!2z44Kz44O844Od44Kv44Ot44O844OQ44O8!5e0!3m2!1sko!2sjp!4v1718089997605!5m2!1sko!2sjp" width="100" height="100" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            <p>회사 주소: 서울시 강남구 테헤란로 123</p>
            <p>전화: 02-123-4567</p>
            <p>이메일: contact@company.com</p>
        </div>
    `;
    document.getElementsByTagName('footer')[0].innerHTML = footerContent;
}); */

document.addEventListener("DOMContentLoaded", function() {
    // 회사 정보 설정
    var companyInfo = {
        address: "서울시 강남구 테헤란로 123",
        phone: "02-123-4567"
    };

    // 주소와 전화번호를 footer에 설정
    document.getElementById('address').innerText += ' ' + companyInfo.address;
    document.getElementById('phone').innerText += ' ' + companyInfo.phone;

    // Google 지도를 생성하여 map 요소에 삽입
    var mapFrame = document.createElement('iframe');
    mapFrame.setAttribute('src', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7707.592281730163!2d139.72002795587827!3d35.6857825974827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188dfbe6442a23%3A0x7f8ee12d5d772a80!2z44Kz44O844Od44Kv44Ot44O844OQ44O8!5e0!3m2!1sko!2sjp!4v1718089997605!5m2!1sko!2sjp');
    mapFrame.setAttribute('width', '100%');
    mapFrame.setAttribute('height', '300');
    mapFrame.setAttribute('style', 'border:0;');
    mapFrame.setAttribute('allowfullscreen', '');
    mapFrame.setAttribute('loading', 'lazy');
    mapFrame.setAttribute('referrerpolicy', 'no-referrer-when-downgrade');
    document.getElementById('map').appendChild(mapFrame);
});
