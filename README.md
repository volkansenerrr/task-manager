🚀 Task Manager - ReactJS Web Geliştirme Projesi
📌 Proje Amacı

Bu proje, ReactJS kullanılarak geliştirilmiş bir görev yönetim (Task Manager / Todo App) uygulamasıdır.
Amaç; HTML, CSS ve JavaScript temellerini React yapısı içerisinde kullanarak modern frontend geliştirme sürecini deneyimlemek ve CRUD işlemlerini uygulamaktır.

🛠️ Kullanılan Teknolojiler

ReactJS (Vite ile kurulum)

Tailwind CSS

JavaScript (ES6+)

LocalStorage

Git & GitHub

Netlify (Deploy)

📂 Proje Kurulum Süreci

Vite ile React projesi oluşturuldu.

Component tabanlı klasör yapısı oluşturuldu.

Tailwind CSS projeye entegre edildi.

CRUD işlemleri geliştirildi.

LocalStorage ile veri kalıcılığı sağlandı.

Proje GitHub’a yüklendi.

Netlify ile canlıya alındı.

📁 Proje Dosya Yapısı
src/
│
├── components/
│   ├── TaskForm.jsx
│   └── TaskList.jsx
│
├── pages/
│   └── Home.jsx
│
├── App.jsx
├── main.jsx
└── index.css

⚙️ Uygulama Özellikleri

Görev ekleme

Görev listeleme

Görev güncelleme

Görev silme

Görev tamamlama (Checkbox)

Tamamlanan görev sayacı

LocalStorage ile veri saklama

Responsive tasarım

🧠 Kullanılan React Kavramları

useState

useEffect

Props

Component yapısı

Event handling

Map ile liste render

Conditional rendering

💾 LocalStorage Kullanımı

Görevlerin sayfa yenilendiğinde kaybolmaması için LocalStorage kullanılmıştır:

useEffect(() => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}, [tasks]);

🚀 Projeyi Çalıştırma
git clone https://github.com/volkansenerrr/task-manager.git
cd task-manager
npm install
npm run dev

🌍 Canlı Demo

👉 https://my-task-manager-todo-app.netlify.app/

📷 Proje Ekran Görüntüleri

Proje klasörü içerisinde PNG formatında ekran görüntüleri bulunmaktadır.

🎯 Proje Kazanımları

Modern React yapısını öğrenme

Component tabanlı mimari

State yönetimi

Veri kalıcılığı

Gerçek bir frontend uygulamasını canlıya alma deneyimi

🎓 Değerlendirme Notu

Bu proje, temel React konseptlerini ve frontend geliştirme süreçlerini başarıyla uygulayan bir görev yönetim uygulamasıdır.
