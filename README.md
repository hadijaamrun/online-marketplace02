# online-marketplace02
# 🛒 RT02 Online Marketplace

Aplikasi web e-commerce *Full-Stack* modern yang dirancang untuk katalog produk dan sistem keranjang belanja. Proyek ini dibangun menggunakan arsitektur Monorepo yang memisahkan layanan Backend API dan Frontend secara rapi, serta di-deploy secara penuh di cloud menggunakan platform Vercel dan MongoDB Atlas.

---

## 🚀 Demo Live
* **Frontend Web:** [https://online-marketplace02-bwri.vercel.app](https://online-marketplace02-bwri.vercel.app)
* **Backend API:** [https://online-marketplace02.vercel.app](https://online-marketplace02.vercel.app)

---

## ✨ Fitur Utama
* **Autentikasi Pengguna:** Sistem Registrasi dan Login aman menggunakan *JSON Web Token* (JWT).
* **Katalog Produk Dinamis:** Menampilkan daftar produk estetik yang ditarik langsung dari database cloud MongoDB dengan performa *loading state* (spinner) yang halus.
* **Halaman Detail Produk:** Menggunakan *dynamic routing* untuk menyajikan deskripsi lengkap, harga, dan sisa stok produk secara real-time.
* **Keranjang Belanja:** Manajemen *state* keranjang menggunakan React Context API yang tersinkronisasi langsung dengan database pengguna.
* **Layout Responsif:** Tampilan katalog menggunakan sistem **CSS Grid modern** dengan proteksi rasio gambar (`object-fit: cover`) sehingga rapi di layar HP maupun laptop.

---

## 🛠️ Teknologi yang Digunakan

### **Frontend**
* **React.js** (ditopang oleh **Vite** sebagai *build tool* yang super cepat)
* **React Router DOM** (Manajemen rute halaman *Single Page Application*)
* **Axios** (Pustaka HTTP Client untuk menjembatani komunikasi ke API backend)
* **CSS3** (Kustomisasi desain grid, transisi kartu, dan animasi spinner)

### **Backend & Database**
* **Node.js** & **Express.js** (RESTful API Server)
* **MongoDB Atlas** (Cloud NoSQL Database)
* **Mongoose** (Object Data Modeling untuk skema basis data)
* **JSON Web Token (JWT)** (Keamanan token login)

---

## 📂 Struktur Folder Proyek (Monorepo)
```text
online-marketplace-app/
├── backend/
│   ├── config/          # Konfigurasi koneksi MongoDB
│   ├── controllers/     # Logika bisnis (Auth, Cart, Product)
│   ├── models/          # Skema Mongoose (User, Product, Cart)
│   ├── routes/          # Endpoint REST API
│   ├── vercel.json      # Konfigurasi serverless backend Vercel
│   ├── seeder.js        # Skrip injeksi data produk awal
│   └── server.js        # Titik masuk utama server Express
├── frontend/
│   ├── public/uploads/  # Penyimpanan file gambar produk statis
│   ├── src/
│   │   ├── components/  # Komponen UI global
│   │   ├── context/     # Global state management (Cart)
│   │   ├── pages/       # Komponen halaman (ProductList, ProductDetail)
│   │   └── services/    # Konfigurasi Axios API client
│   └── vercel.json      # Aturan rewrites React Router untuk Vercel
└── .gitignore           

