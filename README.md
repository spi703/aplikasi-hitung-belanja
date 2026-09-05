# 🛒 Aplikasi Hitung Belanja

Aplikasi web interaktif untuk menghitung total belanja dengan fitur lengkap dan interface yang user-friendly.

## ✨ Fitur Utama

- ✅ **Tambah Item Belanja** - Input nama item, harga, dan jumlah dengan mudah
- ✅ **Edit Jumlah** - Ubah jumlah item langsung dari tabel
- ✅ **Hapus Item** - Hapus item yang tidak diinginkan
- ✅ **Kalkulasi Otomatis** - Hitung subtotal, diskon, pajak, dan total secara real-time
- ✅ **Diskon** - Terapkan diskon dalam persen
- ✅ **Pajak/PPN** - Hitung pajak dalam persen
- ✅ **Biaya Pengiriman** - Tambah biaya pengiriman
- ✅ **Cetak Struk** - Print belanja dalam format rapi
- ✅ **Export CSV** - Export data belanja ke file CSV
- ✅ **Responsive Design** - Berfungsi baik di desktop, tablet, dan mobile

## 🚀 Cara Menggunakan

### 1. Buka Aplikasi
Buka file `index.html` di browser favorit Anda.

### 2. Tambah Item Belanja
1. Masukkan nama item di field "Nama Item"
2. Masukkan harga item di field "Harga (Rp)"
3. Masukkan jumlah item di field "Jumlah"
4. Klik tombol "+ Tambah Item"

**Shortcut Keyboard:**
- Tekan `Enter` setelah setiap field untuk pindah ke field berikutnya
- Tekan `Enter` di field Jumlah untuk langsung menambah item

### 3. Kelola Item
- **Edit Jumlah**: Ubah angka di kolom "Jumlah" pada tabel
- **Hapus Item**: Klik tombol "Hapus" di setiap baris

### 4. Kalkulasi Belanja
Aplikasi otomatis menghitung:
- Subtotal dari semua item
- Potongan diskon (jika ada)
- Pajak/PPN (jika ada)
- Total belanja akhir

Anda bisa mengatur:
- **Diskon (%)**: Masukkan persentase diskon
- **Pajak/PPN (%)**: Masukkan persentase pajak
- **Biaya Pengiriman**: Masukkan biaya kirim dalam Rupiah

### 5. Cetak & Export
- **Cetak**: Klik "🖨️ Cetak" untuk print struk belanja
- **Export CSV**: Klik "📥 Export CSV" untuk download file CSV
- **Reset**: Klik "🔄 Reset" untuk menghapus semua data

## 📁 Struktur File

```
aplikasi-hitung-belanja/
├── index.html      # File HTML utama
├── style.css       # File CSS untuk styling
├── script.js       # File JavaScript untuk logika
└── README.md       # Dokumentasi
```

## 🛠️ Teknologi yang Digunakan

- **HTML5** - Struktur aplikasi
- **CSS3** - Styling dan responsive design
- **JavaScript (Vanilla)** - Logika dan interaktivitas
- **Local Storage** - Menyimpan data (opsional)

## 📋 Contoh Penggunaan

### Contoh 1: Belanja Sederhana
```
1. Tambah "Buku" - Harga: 50.000 - Jumlah: 2
2. Tambah "Pulpen" - Harga: 5.000 - Jumlah: 3
3. Tambah "Notebook" - Harga: 25.000 - Jumlah: 1

Hasil:
- Subtotal: Rp 125.000
- Total Belanja: Rp 125.000
```

### Contoh 2: Belanja dengan Diskon & Pajak
```
1. Tambah "Laptop" - Harga: 10.000.000 - Jumlah: 1
2. Diskon: 10% = Rp 1.000.000
3. Pajak: 10% = Rp 900.000
4. Biaya Kirim: Rp 50.000

Hasil:
- Subtotal: Rp 10.000.000
- Diskon: Rp 1.000.000
- Pajak: Rp 900.000
- Biaya Kirim: Rp 50.000
- Total Belanja: Rp 9.950.000
```

## 🎨 Fitur Desain

- **Gradient Background** - Desain modern dengan warna gradien
- **Responsive Layout** - Menyesuaikan dengan ukuran layar
- **Animasi Smooth** - Transisi yang halus dan menarik
- **Color Scheme** - Warna yang konsisten dan eye-pleasing
- **Print-Friendly** - Desain yang optimal saat dicetak

## 📱 Kompatibilitas Browser

- ✅ Google Chrome
- ✅ Mozilla Firefox
- ✅ Safari
- ✅ Microsoft Edge
- ✅ Opera
- ✅ Mobile Browsers (Chrome, Safari, Firefox)

## 🔒 Keamanan & Privasi

- Semua data disimpan di browser lokal (tidak dikirim ke server)
- Tidak ada tracking atau analitik
- Tidak memerlukan login atau password

## 🐛 Troubleshooting

### Aplikasi tidak merespons
- Refresh halaman (F5 atau Ctrl+R)
- Bersihkan cache browser
- Coba browser lain

### Data hilang saat refresh
- Ini adalah perilaku normal karena data tidak disimpan permanen
- Gunakan Export CSV untuk backup data

### Tidak bisa cetak
- Pastikan browser sudah siap untuk print
- Cek pengaturan printer
- Coba gunakan "Save as PDF" di browser

## 📝 Catatan Penting

- Aplikasi ini berjalan sepenuhnya di browser (client-side)
- Data belanja akan hilang saat refresh halaman (bersifat sementara)
- Untuk menjaga data, gunakan fitur Export CSV
- Pastikan JavaScript diaktifkan di browser

## 🎯 Rencana Fitur Ke Depan

- [ ] Penyimpanan data dengan localStorage
- [ ] Riwayat belanja
- [ ] Kategori item
- [ ] Favorit/Wishlist
- [ ] Multi-currency support
- [ ] Dark mode
- [ ] Mobile app version

## 📞 Dukungan & Feedback

Jika Anda menemukan bug atau memiliki saran, silakan buat issue di repository ini.

## 📄 Lisensi

Project ini dibuat dengan tujuan edukatif dan bebas digunakan.

## 👨‍💻 Dibuat oleh

**spi703**

---

**Dibuat dengan ❤️ untuk memudahkan belanja Anda**

Terakhir diupdate: 2026-09-05