// メニューの開閉を制御する関数
function toggleMenu() {
    const menuBtn = document.querySelector('.menu-btn');
    const navMenu = document.getElementById('navMenu');

    // メニューの開閉状態を切り替える
    menuBtn.classList.toggle('open');
    navMenu.classList.toggle('active');

// トップに戻る機能
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
