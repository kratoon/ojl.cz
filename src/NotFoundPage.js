function navigateMain() {
    window.location.href = window.location.origin;
}

function NotFoundPage() {
    navigateMain();
    return null;
}

export default NotFoundPage;
