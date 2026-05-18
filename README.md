#  RT02 Online Marketplace

Aplikasi web e-commerce *Full-Stack* modern yang dirancang untuk katalog produk dan sistem keranjang belanja.

---

##  Demo Live
* **Frontend Web:** [https://online-marketplace02-bwri.vercel.app](https://online-marketplace02-bwri.vercel.app)
* **Backend API:** [https://online-marketplace02.vercel.app/api/products](https://online-marketplace02.vercel.app/api/products)

---

## Fitur Utama
* **Autentikasi Pengguna:** Sistem registrasi dan login aman yang dilindungi menggunakan *JSON Web Token* (JWT).
* **Katalog Produk Dinamis:** Menampilkan daftar produk secara real-time.
* **Halaman Detail Produk:** Menggunakan *dynamic routing* untuk menyajikan deskripsi lengkap, harga, dan sisa stok produk secara akurat.
* **Keranjang Belanja:** Manajemen *state* keranjang menggunakan React Context API yang terintegrasi dan tersinkronisasi otomatis dengan database pengguna.

---

##  Teknologi yang Digunakan

### **Frontend**
* **React.js**
* **React Router DOM** 
* **Axios** 

### **Backend & Database**
* **Node.js** & **Express.js**
* **MongoDB Atlas** 
* **Mongoose**
* **JSON Web Token (JWT)** 

---

## Struktur Folder 

Proyek ini menggunakan arsitektur Monorepo yang memisahkan antara sistem *backend* (API) dan *frontend* (User Interface) dengan struktur direktori sebagai berikut:

```text
online-marketplace-app/
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middlewares/
│   ├── models/
│   ├── public/
│   ├── routes/
│   ├── utils/
│   ├── seeder.js
│   └── server.js
│
└── frontend/
    ├── public/
    ├── src/
    │   ├── assets/
    │   ├── components/
    │   ├── context/
    │   ├── pages/
    │   ├── services/
    │   ├── style/
    │   ├── App.jsx
    │   └── main.jsx
    └── index.html
