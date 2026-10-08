# Boracay Island Travel & Tours - Final Examination Project

**Applied Business Tools and Technologies in Tourism**  
*Academic Project: Destination Marketing & Online Booking Portal*  
*Deployment: GitHub Pages Compatible (Static HTML5, CSS3, Bootstrap 5.3, Client-side LocalStorage DB)*

---

## 🌴 Project Overview
This website is a complete, responsive digital tourism platform for **Boracay Island, Malay, Aklan, Philippines**. It transforms promotional brochure materials and travel agency operations into an interactive web portal designed to inspire, inform, and convert tourists into bookings.

All required exam specifications and rubric items have been met.

---

## 📋 Comprehensive Requirements & Feature Matrix

| Exam Requirement | Component / Section | Implementation Details |
| :--- | :--- | :--- |
| **1. Home Page** | `#top` / Hero Header | Professional branding (`BORACAY TRAVEL`), tagline *"Discover Paradise in Every Moment"*, high-res panorama, sticky glassmorphic navigation, trust badges, and calls-to-action (*Explore Packages*, *View 3D2N Special*). |
| **2. Featured Brochure Package** | `#featured-brochure` | Highlights the exact brochure details: **3 Days 2 Nights Boracay Getaway Package**, **₱6,999/person**, Standard/Superior room, Coast Boracay partner hotel, roundtrip airport transfer, island hopping tour, and amenities. |
| **3. About Us / Destination** | `#about` | Destination history, geographical context, Mission & Vision statements, tourism significance, unique characteristics (Station 1-3 & coves), and target market profile. |
| **4. Products & Attractions** | `#attractions` | 6 major attractions: White Beach Station 1, D'Mall de Boracay (Station 2), Bulabog Beach, Willy's Rock Landmark, Cagban Port, and Puka Shell Beach. |
| **5. Tour Packages & Itineraries** | `#packages` | 3 comprehensive packages: (1) 3D2N Getaway Special (₱6,999), (2) 4D3N Luxury Sunset & Watersports (₱11,499), (3) 3D2N Eco-Thrill & Diving Expedition (₱7,499). Includes day-by-day itineraries, inclusions, and exclusions. |
| **6. Digital Business Tool** | `#packages` (Calculator) | **Interactive Trip Cost Estimator**: Computes subtotal and grand total based on number of guests, chosen package, and travel season with LGU environmental & terminal fees. |
| **7. Location & Transit Info** | `#location` | Step-by-step transit guide (Caticlan Airport MPH &rarr; Caticlan Jetty Port &rarr; Cagban Port &rarr; Inland E-Trike), LGU environmental fee schedule, and an interactive **embedded Google Map**. |
| **8. Photo Gallery** | `#gallery` | 12 high-resolution Boracay photographs featuring beaches, water activities, and resort lifestyle. Includes **interactive category filter pills** and a **clickable Lightbox modal**. |
| **9. Travel Guide & Tips** | `#guide` | 6 tourist guidance cards: Amihan vs Habagat weather seasons, packing essentials, strict Malay LGU environmental ordinances (no eating/smoking on sand), currency/ATMs, e-trike transport, and emergency hotlines. |
| **10. FAQ & Social Proof** | `#faq` & Testimonials | Accordion FAQ answering DOT voucher requirements, package values, plus verified tourist customer reviews with 5-star ratings. |
| **11. Booking & Reservation** | `#booking` | Interactive reservation form collecting lead guest name, email, phone, guest count, check-in date, package, hotel choice, and notes. Emits instant confirmation modal with reference ID. |
| **12. Local Database (Zero SQL)** | `#admin-database` | **100% Client-Side LocalStorage Database Manager**: Stores bookings and inquiries locally. Features live record viewing, record deletion, database reset, and **JSON data export**. |
| **13. Contact Us** | `#contact` | Official phone (`+63 912 345 6789`), email (`boracaytravel@gmail.com`), Station 1 address, opening hours, and direct inquiry submission form. |
| **14. Footer** | `footer` | Consistent footer with branding, quick links, social media links, academic accreditation notice, and disclaimer. |

---

## 🚀 How to Host on GitHub Pages

1. **Create a new GitHub repository** (e.g., `boracay-tourism-website`).
2. **Push the project files** to the repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of Boracay Tourism Website"
   git branch -M main
   git remote add origin https://github.com/<YOUR-USERNAME>/boracay-tourism-website.git
   git push -u origin main
   ```
3. **Enable GitHub Pages**:
   - Go to your repository **Settings** &rarr; **Pages**.
   - Under **Build and deployment** &gt; **Source**, select `Deploy from a branch`.
   - Select branch `main` and folder `/ (root)`, then click **Save**.
4. In 1–2 minutes, your website will be live at:  
   `https://<YOUR-USERNAME>.github.io/boracay-tourism-website/`

---

## 📱 QR Code Generation (For Final Submission)
Once your GitHub Pages link is live, generate a free QR code using [qr-code-generator.com](https://www.qr-code-generator.com/) or [qrcode-monkey.com](https://www.qrcode-monkey.com/) linking to your GitHub Pages URL, and upload it to Google Classroom.
