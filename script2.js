// script.js



const starsContainer = document.getElementById('stars');

// สร้างดาวหลายขนาด
const starSizes = [1, 2, 4, 6];
const totalStars = 80;

for (let i = 0; i < totalStars; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    const size = starSizes[Math.floor(Math.random() * starSizes.length)];
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.left = `${Math.random() * 100}%`;
    star.style.animationDuration = `${Math.random() * 6 + 4}s`;
    star.style.animationDelay = `${Math.random() * 5}s`;
    starsContainer.appendChild(star);
}


// Shooting star
function createShootingStar() {
    const shooting = document.createElement('div');
    shooting.classList.add('shooting-star');
    shooting.style.left = `${Math.random() * window.innerWidth}px`;
    shooting.style.top = `${Math.random() * window.innerHeight / 2}px`;
    shooting.style.animationDuration = `${Math.random() * 1 + 1.5}s`;
    starsContainer.appendChild(shooting);
    setTimeout(() => shooting.remove(), 2000);
}
setInterval(createShootingStar, 2000);

document.querySelector(".btn").addEventListener("click", () => {
    const birthDate = document.querySelector(".date-input").value;

    if (!birthDate) {
        alert("กรุณากรอกวันเกิดก่อนดำเนินการต่อ");
        return; // ❗ ไม่เปลี่ยนหน้า อยู่หน้าเดิม
    }
    // ⭐ ใส่ตรงนี้
    localStorage.setItem("birthDate", birthDate);
     // หรือแบบอื่นถ้าคุณมีระบบเลือกวัน/เดือน/ปี
    localStorage.setItem("birthDate", birthDate);

    // ⭐ แล้วค่อยเปลี่ยนหน้า
    window.location.href = "index3.html";
    // ถ้ากรอกแล้ว (จะไปหน้าใหม่ หรือทำอย่างอื่น)

    window.location.href = "index3.html"; // เปลี่ยนตามที่ต้องการ
});
