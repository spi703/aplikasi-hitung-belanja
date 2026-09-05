// Data untuk menyimpan item belanja
let cartItems = [];

// Fungsi untuk format currency ke Rupiah
function formatCurrency(amount) {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(amount);
}

// Fungsi untuk menambah item
function tambahItem() {
    const namaItem = document.getElementById('namaItem').value.trim();
    const hargaItem = parseFloat(document.getElementById('hargaItem').value);
    const jumlahItem = parseInt(document.getElementById('jumlahItem').value);

    // Validasi input
    if (!namaItem) {
        showAlert('Nama item harus diisi!', 'error');
        return;
    }

    if (isNaN(hargaItem) || hargaItem <= 0) {
        showAlert('Harga harus berupa angka positif!', 'error');
        return;
    }

    if (isNaN(jumlahItem) || jumlahItem <= 0) {
        showAlert('Jumlah harus berupa angka positif!', 'error');
        return;
    }

    // Tambah item ke array
    const item = {
        id: Date.now(),
        nama: namaItem,
        harga: hargaItem,
        jumlah: jumlahItem,
        subtotal: hargaItem * jumlahItem
    };

    cartItems.push(item);

    // Clear input
    document.getElementById('namaItem').value = '';
    document.getElementById('hargaItem').value = '';
    document.getElementById('jumlahItem').value = '1';
    document.getElementById('namaItem').focus();

    showAlert('Item berhasil ditambahkan!', 'success');
    tampilkanCart();
    hitungTotal();
}

// Fungsi untuk menampilkan cart
function tampilkanCart() {
    const cartBody = document.getElementById('cartBody');

    if (cartItems.length === 0) {
        cartBody.innerHTML = '<tr class="empty-row"><td colspan="6">Belum ada item. Tambahkan item terlebih dahulu!</td></tr>';
        return;
    }

    let html = '';
    cartItems.forEach((item, index) => {
        html += `
            <tr>
                <td>${index + 1}</td>
                <td>${item.nama}</td>
                <td>${formatCurrency(item.harga)}</td>
                <td style="text-align: center;">
                    <input type="number" min="1" value="${item.jumlah}" onchange="updateJumlah(${item.id}, this.value)" style="width: 60px; text-align: center; padding: 5px; border: 1px solid #ddd; border-radius: 5px;">
                </td>
                <td>${formatCurrency(item.subtotal)}</td>
                <td>
                    <button class="btn-delete" onclick="hapusItem(${item.id})">Hapus</button>
                </td>
            </tr>
        `;
    });

    cartBody.innerHTML = html;
}

// Fungsi untuk update jumlah item
function updateJumlah(id, jumlahBaru) {
    const jumlah = parseInt(jumlahBaru);

    if (isNaN(jumlah) || jumlah <= 0) {
        showAlert('Jumlah harus berupa angka positif!', 'error');
        tampilkanCart();
        return;
    }

    const item = cartItems.find(item => item.id === id);
    if (item) {
        item.jumlah = jumlah;
        item.subtotal = item.harga * jumlah;
        tampilkanCart();
        hitungTotal();
    }
}

// Fungsi untuk hapus item
function hapusItem(id) {
    if (confirm('Apakah Anda yakin ingin menghapus item ini?')) {
        cartItems = cartItems.filter(item => item.id !== id);
        showAlert('Item berhasil dihapus!', 'success');
        tampilkanCart();
        hitungTotal();
    }
}

// Fungsi untuk hitung total belanja
function hitungTotal() {
    if (cartItems.length === 0) {
        document.getElementById('totalItems').textContent = '0';
        document.getElementById('subtotal').textContent = 'Rp 0';
        document.getElementById('potonganDiskon').textContent = 'Rp 0';
        document.getElementById('pajakAmount').textContent = 'Rp 0';
        document.getElementById('totalBelanja').textContent = 'Rp 0';
        return;
    }

    // Hitung subtotal
    const subtotal = cartItems.reduce((total, item) => total + item.subtotal, 0);

    // Hitung diskon
    const persenDiskon = parseFloat(document.getElementById('diskon').value) || 0;
    const potonganDiskon = (subtotal * persenDiskon) / 100;

    // Hitung pajak
    const persenPajak = parseFloat(document.getElementById('pajak').value) || 0;
    const hargaSetelahDiskon = subtotal - potonganDiskon;
    const pajakAmount = (hargaSetelahDiskon * persenPajak) / 100;

    // Hitung biaya kirim
    const biayaKirim = parseFloat(document.getElementById('biayaKirim').value) || 0;

    // Hitung total
    const total = hargaSetelahDiskon + pajakAmount + biayaKirim;

    // Tampilkan hasil
    document.getElementById('totalItems').textContent = cartItems.reduce((total, item) => total + item.jumlah, 0);
    document.getElementById('subtotal').textContent = formatCurrency(subtotal);
    document.getElementById('potonganDiskon').textContent = formatCurrency(potonganDiskon);
    document.getElementById('pajakAmount').textContent = formatCurrency(pajakAmount);
    document.getElementById('totalBelanja').textContent = formatCurrency(total);
}

// Fungsi untuk reset belanja
function resetBelanja() {
    if (confirm('Apakah Anda yakin ingin mereset semua data belanja?')) {
        cartItems = [];
        document.getElementById('namaItem').value = '';
        document.getElementById('hargaItem').value = '';
        document.getElementById('jumlahItem').value = '1';
        document.getElementById('diskon').value = '0';
        document.getElementById('pajak').value = '0';
        document.getElementById('biayaKirim').value = '0';
        tampilkanCart();
        hitungTotal();
        showAlert('Semua data belanja berhasil direset!', 'success');
    }
}

// Fungsi untuk cetak belanja
function cetakBelanja() {
    if (cartItems.length === 0) {
        showAlert('Tidak ada item untuk dicetak!', 'error');
        return;
    }

    window.print();
}

// Fungsi untuk export ke CSV
function exportCSV() {
    if (cartItems.length === 0) {
        showAlert('Tidak ada item untuk diexport!', 'error');
        return;
    }

    let csv = 'No,Nama Item,Harga,Jumlah,Subtotal\n';
    
    cartItems.forEach((item, index) => {
        csv += `${index + 1},"${item.nama}",${item.harga},${item.jumlah},${item.subtotal}\n`;
    });

    // Tambah ringkasan
    const subtotal = cartItems.reduce((total, item) => total + item.subtotal, 0);
    const persenDiskon = parseFloat(document.getElementById('diskon').value) || 0;
    const potonganDiskon = (subtotal * persenDiskon) / 100;
    const persenPajak = parseFloat(document.getElementById('pajak').value) || 0;
    const hargaSetelahDiskon = subtotal - potonganDiskon;
    const pajakAmount = (hargaSetelahDiskon * persenPajak) / 100;
    const biayaKirim = parseFloat(document.getElementById('biayaKirim').value) || 0;
    const total = hargaSetelahDiskon + pajakAmount + biayaKirim;

    csv += '\n\nRINGKASAN BELANJA\n';
    csv += `Subtotal,${subtotal}\n`;
    csv += `Diskon (${persenDiskon}%),${potonganDiskon}\n`;
    csv += `Pajak (${persenPajak}%),${pajakAmount}\n`;
    csv += `Biaya Pengiriman,${biayaKirim}\n`;
    csv += `TOTAL,${total}\n`;

    // Buat file dan download
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `belanja_${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    showAlert('Data belanja berhasil diexport ke CSV!', 'success');
}

// Fungsi untuk menampilkan alert
function showAlert(message, type) {
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert alert-${type}`;
    alertDiv.textContent = message;
    
    const mainContent = document.querySelector('.main-content');
    mainContent.insertBefore(alertDiv, mainContent.firstChild);
    
    // Hapus alert setelah 3 detik
    setTimeout(() => {
        alertDiv.remove();
    }, 3000);
}

// Tambah event listener untuk Enter key
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('namaItem').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            document.getElementById('hargaItem').focus();
        }
    });

    document.getElementById('hargaItem').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            document.getElementById('jumlahItem').focus();
        }
    });

    document.getElementById('jumlahItem').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            tambahItem();
        }
    });

    // Set focus ke nama item
    document.getElementById('namaItem').focus();
});