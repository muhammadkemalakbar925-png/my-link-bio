document.addEventListener('DOMContentLoaded', (event) => {
    // 1. FUNGSI SIMULASI VIEWER COUNT (MATA)
    
    // Cari elemen di HTML dengan kelas 'viewer-count'
    const viewerCountElement = document.querySelector('.viewer-count');

    if (viewerCountElement) {
        // Ambil nilai awal dari elemen (misal: "👁️ 12")
        const currentText = viewerCountElement.textContent.trim();
        // Coba ekstrak angka dari teks (misal: 12)
        let initialCount = parseInt(currentText.replace('👁️', '').trim());
        
        // Tambahkan jumlah acak (simulasi view baru)
        // Jumlah view akan bertambah 1 hingga 5 setiap kali halaman dimuat
        const addedViews = Math.floor(Math.random() * 5) + 1; 
        
        let newCount = initialCount + addedViews;
        
        // Perbarui tampilan di halaman
        viewerCountElement.textContent = `👁️ ${newCount}`;
    }

    // 2. FUNGSI MENYALIN TAUTAN (Opsional, untuk tombol tertentu)
    
    // Anda dapat menggunakan fungsi ini pada tombol khusus 'Copy Link'
    function copyLink(linkToCopy) {
        navigator.clipboard.writeText(linkToCopy).then(() => {
            alert("Tautan berhasil disalin!");
        }).catch(err => {
            console.error('Gagal menyalin tautan: ', err);
            alert("Gagal menyalin. Silakan salin manual.");
        });
    }
    
    // Contoh penggunaan (Anda perlu menambahkan tombol 'Copy' di HTML)
    // const copyButton = document.getElementById('copy-link-btn');
    // if (copyButton) {
    //     copyButton.addEventListener('click', () => {
    //         copyLink("https://link-bio-anda.com");
    //     });
    // }
});