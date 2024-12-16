// header
// function toggleMenu() {
//     const menu = document.getElementById('menu');
//     if (menu.style.display === 'flex') {
//         menu.style.display = 'none';
//     } else {
//         menu.style.display = 'flex';
//     }
// }

function toggleMenu() {
    var menu = document.getElementById('menu');
    if (menu.style.display === 'flex') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'flex';
    }
}

// 控制 header 顯示/隱藏
let lastScrollTop = 0;
window.addEventListener('scroll', function() {
    let header = document.getElementById('header');
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    if (currentScroll > lastScrollTop) {
        header.style.top = '-100px'; // 向下滑動時隱藏 header
    } else {
        header.style.top = '0'; // 向上滑動時顯示 header
        header.style.position = 'sticky';
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});

// 日期選擇器
document.addEventListener("DOMContentLoaded", () => {
    const dateDisplay = document.getElementById("date-display"); // 日期顯示區
    const datePicker = document.getElementById("date-picker"); // 日期選擇器區塊
    const togglePicker = document.getElementById("toggle-picker"); // 點擊的按鈕圖示
    const dateInput = document.getElementById("date-input"); // 日期選擇器 input 元素

    // 取得今天的日期 (GMT+8)
    const today = new Date();
    const gmt8Date = new Date(today.getTime() + 8 * 60 * 60 * 1000); // 將時間調整到 GMT+8
    const formattedToday = gmt8Date.toISOString().split("T")[0]; // 格式化為 yyyy-MM-dd
    const displayToday = gmt8Date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
    });

    // 設定預設日期顯示為今天
    dateDisplay.textContent = displayToday + " ";
    dateInput.value = formattedToday;

    // 禁止選擇未來日期
    dateInput.max = formattedToday; // 設定 max 屬性為今天

    // 點擊圖標顯示/隱藏日期選擇器
    togglePicker.addEventListener("click", () => {
        datePicker.style.display =
            datePicker.style.display === "block" ? "none" : "block";
    });

    // 更新選擇的日期到顯示文字
    dateInput.addEventListener("change", () => {
        const selectedDate = new Date(dateInput.value);
        const formattedDate = selectedDate.toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
        });
        dateDisplay.textContent = formattedDate + " ";
        datePicker.style.display = "none"; // 選擇日期後隱藏日期選擇器
    });
});
