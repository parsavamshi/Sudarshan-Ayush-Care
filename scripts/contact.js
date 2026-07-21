document.addEventListener('DOMContentLoaded', () => {
    const overlay = document.getElementById('popupOverlay');
    const closeBtn = document.getElementById('closePopupBtn');
    const whatsappOption = document.getElementById('whatsappOption');
    const messageOption = document.getElementById('messageOption');
    const copyOption = document.getElementById('copyOption');
    const copiedMessageDiv = document.getElementById('copiedText');
    const previewSpan = document.getElementById('previewLinkShort');
    const shareButtons = document.querySelectorAll('.share-location-btn');

    let activeMapLink = '';
    let activeLocationName = 'Google Maps Location';
    let copyTimeout = null;

    function updatePopupContent(mapLink, locationName) {
        activeMapLink = mapLink || activeMapLink;
        activeLocationName = locationName || activeLocationName;

        if (previewSpan) {
            previewSpan.textContent = activeLocationName;
            previewSpan.title = activeMapLink;
        }
    }

    function openPopup() {
        if (!overlay) return;
        overlay.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        setTimeout(() => {
            if (whatsappOption) whatsappOption.focus();
        }, 30);
    }

    function closePopup() {
        if (!overlay) return;
        overlay.style.display = 'none';
        document.body.style.overflow = '';
        if (copiedMessageDiv) {
            copiedMessageDiv.style.display = 'none';
            copiedMessageDiv.style.animation = 'none';
        }
    }

    function showCopyFeedback() {
        if (!copiedMessageDiv) return;
        if (copyTimeout) {
            clearTimeout(copyTimeout);
        }
        copiedMessageDiv.style.display = 'inline-flex';
        copiedMessageDiv.style.animation = 'none';
        void copiedMessageDiv.offsetWidth;
        copiedMessageDiv.style.animation = 'fadeInOut 2s ease forwards';
        copyTimeout = setTimeout(() => {
            if (copiedMessageDiv) {
                copiedMessageDiv.style.display = 'none';
                copiedMessageDiv.style.animation = '';
            }
            copyTimeout = null;
        }, 1800);
    }

    async function copyToClipboard(text) {
        if (!text) return false;

        try {
            if (navigator.clipboard && window.isSecureContext) {
                await navigator.clipboard.writeText(text);
                showCopyFeedback();
                return true;
            }
        } catch (err) {
            console.warn('Async clipboard failed:', err);
        }

        try {
            const textarea = document.createElement('textarea');
            textarea.value = text;
            textarea.style.position = 'fixed';
            textarea.style.opacity = '0';
            textarea.style.left = '-9999px';
            document.body.appendChild(textarea);
            textarea.focus();
            textarea.select();
            textarea.setSelectionRange(0, 99999);
            const success = document.execCommand('copy');
            document.body.removeChild(textarea);
            if (success) {
                showCopyFeedback();
                return true;
            }
        } catch (err) {
            console.warn('Fallback copy failed:', err);
        }

        alert('Unable to copy automatically. Please copy this link manually:\n' + text);
        return false;
    }

    function redirectToWhatsapp() {
        if (!activeMapLink) return;
        const encodedLink = encodeURIComponent(activeMapLink);
        window.location.href = `https://wa.me/?text=${encodedLink}`;
    }

    function redirectToMessage() {
        if (!activeMapLink) return;
        const encodedLink = encodeURIComponent(activeMapLink);
        window.location.href = `sms:?body=${encodedLink}`;
    }

    async function handleShareButtonClick(event) {
        event.preventDefault();
        event.stopPropagation();
        const button = event.currentTarget;
        const mapLink = button.dataset.mapLink;
        const locationName = button.dataset.location || 'Google Maps Location';
        if (!mapLink) return;
        updatePopupContent(mapLink, locationName);
        openPopup();
    }

    if (shareButtons.length) {
        shareButtons.forEach((button) => {
            button.addEventListener('click', handleShareButtonClick);
            button.removeAttribute('onclick');
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', closePopup);
        closeBtn.removeAttribute('onclick');
    }

    if (overlay) {
        overlay.addEventListener('click', (event) => {
            if (event.target === overlay) {
                closePopup();
            }
        });
    }

    if (whatsappOption) {
        whatsappOption.addEventListener('click', async (event) => {
            event.stopPropagation();
            const copied = await copyToClipboard(activeMapLink);
            if (copied) redirectToWhatsapp();
        });
        whatsappOption.addEventListener('keydown', (event) => {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                whatsappOption.click();
            }
        });
        whatsappOption.removeAttribute('onclick');
    }

    if (messageOption) {
        messageOption.addEventListener('click', async (event) => {
            event.stopPropagation();
            const copied = await copyToClipboard(activeMapLink);
            if (copied) redirectToMessage();
        });
        messageOption.addEventListener('keydown', (event) => {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                messageOption.click();
            }
        });
        messageOption.removeAttribute('onclick');
    }

    if (copyOption) {
        copyOption.addEventListener('click', async (event) => {
            event.stopPropagation();
            await copyToClipboard(activeMapLink);
        });
        copyOption.addEventListener('keydown', (event) => {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                copyOption.click();
            }
        });
        copyOption.removeAttribute('onclick');
    }

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && overlay && overlay.style.display === 'flex') {
            closePopup();
        }
    });

    if (copiedMessageDiv) {
        copiedMessageDiv.style.display = 'none';
        copiedMessageDiv.style.animation = '';
    }

    if (previewSpan) {
        previewSpan.textContent = activeLocationName;
        previewSpan.title = activeMapLink;
    }
});
