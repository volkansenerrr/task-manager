🚀 Task Manager - ReactJS Web Geliştirme Projesi
📌 Proje Amacı

Bu proje, modern JavaScript kütüphanelerinden biri olan ReactJS kullanılarak geliştirilmiş bir görev yönetim (Task Manager / Todo App) uygulamasıdır.

Amaç; HTML, CSS ve JavaScript temellerini React yapısı içerisinde kullanarak modern frontend geliştirme sürecini deneyimlemek ve CRUD işlemlerini uygulamaktır.

🛠️ Kullanılan Teknolojiler

⚛ ReactJS (Vite ile kurulum)

🎨 Tailwind CSS

💻 JavaScript (ES6+)

💾 LocalStorage

🌐 Netlify (Deploy)

🐙 Git & GitHub

📂 Proje Kurulum Süreci

Vite kullanılarak React projesi oluşturuldu.

Proje klasör yapısı oluşturuldu:

components

pages

Tailwind CSS projeye entegre edildi.

CRUD işlemleri geliştirildi.

LocalStorage ile veri kalıcılığı sağlandı.

Proje GitHub’a yüklendi.

Netlify üzerinden canlıya alındı.

📁 Proje Dosya Yapısı
src/
 ├── components/
 │    ├── TaskForm.jsx
 │    ├── TaskList.jsx
 │
 ├── pages/
 │    └── Home.jsx
 │
 ├── App.jsx
 ├── main.jsx
 └── index.css

⚙️ Uygulama Özellikleri

✔ Görev Ekleme
✔ Görev Listeleme
✔ Görev Güncelleme
✔ Görev Silme
✔ Görev Tamamlama (Checkbox sistemi)
✔ Tamamlanan görev sayacı
✔ LocalStorage ile veri saklama
✔ Responsive tasarım

🧠 Kullanılan React Kavramları

useState

useEffect

Props

Component yapısı

Event handling

Map ile liste render

Conditional rendering

💾 LocalStorage Kullanımı

Görevler tarayıcı yenilendiğinde kaybolmaması için localStorage kullanılmıştır.

useEffect(() => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}, [tasks]);

🚀 Projeyi Çalıştırma

Projeyi lokal ortamda çalıştırmak için:

git clone https://github.com/volkansenerrr/task-manager.git
cd task-manager
npm install
npm run dev

🌍 Canlı Demo

👉 https://my-task-manager-todo-app.netlify.app/

📷 Proje Ekran Görüntüsü
Dosyalar içinde png formatında 4 ekran görüntüsü dosyası mevcut.

🎯 Proje Kazanımları

Modern React yapısını öğrenme

Component tabanlı mimari

State yönetimi

Veri kalıcılığı

Gerçek bir frontend uygulamasını canlıya alma deneyimi
