/**
 * Boracay Island Travel & Tours - Client-side Database & Interactive Engine
 * Uses localStorage to store bookings and inquiries (100% serverless, ideal for GitHub Pages)
 */

// Initial Seed Data for Demo & Testing
const DEFAULT_BOOKINGS_KEY = 'boracay_bookings_db';
const DEFAULT_INQUIRIES_KEY = 'boracay_inquiries_db';

// Initialize LocalStorage Data if not present
function initializeDatabase() {
  if (!localStorage.getItem(DEFAULT_BOOKINGS_KEY)) {
    const seedBookings = [
      {
        id: 'BK-2026-8812',
        fullName: 'Maria Santos',
        email: 'maria.santos@gmail.com',
        phone: '+63 917 123 4567',
        package: '3 Days 2 Nights Boracay Getaway (Coast Boracay)',
        guestCount: 2,
        checkIn: '2026-11-15',
        totalPrice: '₱13,998',
        status: 'Confirmed',
        dateCreated: '2026-10-05 14:30'
      },
      {
        id: 'BK-2026-9041',
        fullName: 'John Alexander Miller',
        email: 'j.miller@traveler.com',
        phone: '+1 415 555 2671',
        package: '4 Days 3 Nights Luxury Sunset & Watersports Escape',
        guestCount: 1,
        checkIn: '2026-12-01',
        totalPrice: '₱11,499',
        status: 'Pending Review',
        dateCreated: '2026-10-07 09:15'
      }
    ];
    localStorage.setItem(DEFAULT_BOOKINGS_KEY, JSON.stringify(seedBookings));
  }

  if (!localStorage.getItem(DEFAULT_INQUIRIES_KEY)) {
    const seedInquiries = [
      {
        id: 'INQ-1042',
        fullName: 'Carlos Reyes',
        email: 'carlos.reyes@yahoo.com',
        phone: '+63 920 987 6543',
        subject: 'Custom Island Hopping Private Banca Inquiry',
        message: 'Can we book a private boat for a family of 10 including Puka Shell Beach and Crocodile Island?',
        dateCreated: '2026-10-06 16:45',
        status: 'Responded'
      }
    ];
    localStorage.setItem(DEFAULT_INQUIRIES_KEY, JSON.stringify(seedInquiries));
  }
}

// Get Bookings
function getBookings() {
  return JSON.parse(localStorage.getItem(DEFAULT_BOOKINGS_KEY) || '[]');
}

// Save Booking
function saveBooking(booking) {
  const bookings = getBookings();
  bookings.unshift(booking);
  localStorage.setItem(DEFAULT_BOOKINGS_KEY, JSON.stringify(bookings));
}

// Get Inquiries
function getInquiries() {
  return JSON.parse(localStorage.getItem(DEFAULT_INQUIRIES_KEY) || '[]');
}

// Save Inquiry
function saveInquiry(inquiry) {
  const inquiries = getInquiries();
  inquiries.unshift(inquiry);
  localStorage.setItem(DEFAULT_INQUIRIES_KEY, JSON.stringify(inquiries));
}

// Delete Booking
function deleteBooking(id) {
  let bookings = getBookings();
  bookings = bookings.filter(b => b.id !== id);
  localStorage.setItem(DEFAULT_BOOKINGS_KEY, JSON.stringify(bookings));
  renderBookingsTable();
}

// Delete Inquiry
function deleteInquiry(id) {
  let inquiries = getInquiries();
  inquiries = inquiries.filter(i => i.id !== id);
  localStorage.setItem(DEFAULT_INQUIRIES_KEY, JSON.stringify(inquiries));
  renderInquiriesTable();
}

// Clear all local records
function resetDatabase() {
  if (confirm('Are you sure you want to reset all stored records to defaults?')) {
    localStorage.removeItem(DEFAULT_BOOKINGS_KEY);
    localStorage.removeItem(DEFAULT_INQUIRIES_KEY);
    initializeDatabase();
    renderBookingsTable();
    renderInquiriesTable();
    alert('Local Database successfully reset!');
  }
}

// Render Bookings in Management Table
function renderBookingsTable() {
  const container = document.getElementById('bookingsTableBody');
  const countBadge = document.getElementById('totalBookingsCount');
  if (!container) return;

  const bookings = getBookings();
  if (countBadge) countBadge.textContent = bookings.length;

  if (bookings.length === 0) {
    container.innerHTML = `<tr><td colspan="7" class="text-center py-4 text-muted"><i class="bi bi-inbox fs-2 d-block mb-2"></i>No bookings saved yet in localStorage.</td></tr>`;
    return;
  }

  container.innerHTML = bookings.map(b => `
    <tr>
      <td><strong>${b.id}</strong><div class="small text-muted">${b.dateCreated}</div></td>
      <td>
        <div class="fw-bold">${b.fullName}</div>
        <small class="text-muted">${b.email} | ${b.phone}</small>
      </td>
      <td><span class="badge bg-light text-dark border">${b.package}</span></td>
      <td>${b.guestCount} pax</td>
      <td>${b.checkIn}</td>
      <td><span class="fw-bold text-primary">${b.totalPrice}</span></td>
      <td>
        <span class="badge ${b.status === 'Confirmed' ? 'bg-success' : 'bg-warning text-dark'}">${b.status}</span>
        <button class="btn btn-sm btn-outline-danger ms-2" onclick="deleteBooking('${b.id}')" title="Delete from localStorage">
          <i class="bi bi-trash"></i>
        </button>
      </td>
    </tr>
  `).join('');
}

// Render Inquiries in Management Table
function renderInquiriesTable() {
  const container = document.getElementById('inquiriesTableBody');
  const countBadge = document.getElementById('totalInquiriesCount');
  if (!container) return;

  const inquiries = getInquiries();
  if (countBadge) countBadge.textContent = inquiries.length;

  if (inquiries.length === 0) {
    container.innerHTML = `<tr><td colspan="6" class="text-center py-4 text-muted"><i class="bi bi-inbox fs-2 d-block mb-2"></i>No inquiries saved in localStorage.</td></tr>`;
    return;
  }

  container.innerHTML = inquiries.map(item => `
    <tr>
      <td><strong>${item.id}</strong><div class="small text-muted">${item.dateCreated}</div></td>
      <td><strong>${item.fullName}</strong><div class="small text-muted">${item.email}</div></td>
      <td>${item.phone || 'N/A'}</td>
      <td><strong>${item.subject}</strong><p class="small text-muted mb-0">${item.message}</p></td>
      <td><span class="badge bg-info text-dark">${item.status}</span></td>
      <td>
        <button class="btn btn-sm btn-outline-danger" onclick="deleteInquiry('${item.id}')" title="Delete">
          <i class="bi bi-trash"></i>
        </button>
      </td>
    </tr>
  `).join('');
}

// Export database records to downloadable JSON file
function exportDataAsJSON() {
  const data = {
    bookings: getBookings(),
    inquiries: getInquiries(),
    exportDate: new Date().toISOString()
  };
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `boracay_database_backup_${new Date().toISOString().slice(0, 10)}.json`;
  a.click();
  URL.revokeObjectURL(url);
}

// Package Pricing Map for dynamic calculation
const PACKAGE_PRICES = {
  '3d2n-featured': 6999,
  '4d3n-luxury': 11499,
  '3d2n-adventure': 7499,
  '5d4n-honeymoon': 18999
};

// Interactive Trip Cost Estimator
function calculateTripEstimate() {
  const packageSelect = document.getElementById('calcPackage');
  const guestsInput = document.getElementById('calcGuests');
  const seasonSelect = document.getElementById('calcSeason');
  const resultDisplay = document.getElementById('calcResult');
  const breakdownDisplay = document.getElementById('calcBreakdown');

  if (!packageSelect || !guestsInput || !seasonSelect || !resultDisplay) return;

  const basePrice = PACKAGE_PRICES[packageSelect.value] || 6999;
  const guests = parseInt(guestsInput.value, 10) || 1;
  const seasonMultiplier = parseFloat(seasonSelect.value) || 1.0;

  const environmentalFee = 300 * guests;
  const subtotal = basePrice * guests * seasonMultiplier;
  const grandTotal = Math.round(subtotal + environmentalFee);

  resultDisplay.textContent = `₱${grandTotal.toLocaleString()}`;
  if (breakdownDisplay) {
    breakdownDisplay.textContent = `Includes base rate (₱${(Math.round(basePrice * seasonMultiplier)).toLocaleString()}/pax) × ${guests} guests + ₱${environmentalFee.toLocaleString()} Aklan LGU environmental & terminal fees.`;
  }
}

// Initialize on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  initializeDatabase();
  renderBookingsTable();
  renderInquiriesTable();

  // Booking Form Submission Handler
  const bookingForm = document.getElementById('boracayBookingForm');
  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const fullName = document.getElementById('bookFullName').value.trim();
      const email = document.getElementById('bookEmail').value.trim();
      const phone = document.getElementById('bookPhone').value.trim();
      const packageSelect = document.getElementById('bookPackage');
      const packageName = packageSelect.options[packageSelect.selectedIndex].text;
      const packageKey = packageSelect.value;
      const guestCount = parseInt(document.getElementById('bookGuests').value, 10) || 1;
      const checkIn = document.getElementById('bookDate').value;
      const hotelOption = document.getElementById('bookHotel').value;
      const notes = document.getElementById('bookNotes') ? document.getElementById('bookNotes').value.trim() : '';

      const baseRate = PACKAGE_PRICES[packageKey] || 6999;
      const calculatedTotal = `₱${(baseRate * guestCount).toLocaleString()}`;
      const bookingId = 'BK-' + new Date().getFullYear() + '-' + Math.floor(1000 + Math.random() * 9000);

      const newBooking = {
        id: bookingId,
        fullName,
        email,
        phone,
        package: `${packageName} (${hotelOption})`,
        guestCount,
        checkIn,
        totalPrice: calculatedTotal,
        notes,
        status: 'Confirmed',
        dateCreated: new Date().toLocaleString()
      };

      saveBooking(newBooking);
      renderBookingsTable();

      // Show success modal or alert
      const modalElement = document.getElementById('bookingSuccessModal');
      if (modalElement && window.bootstrap) {
        document.getElementById('modalBookingId').textContent = bookingId;
        document.getElementById('modalBookingName').textContent = fullName;
        document.getElementById('modalBookingPackage').textContent = packageName;
        document.getElementById('modalBookingTotal').textContent = calculatedTotal;
        const bsModal = new bootstrap.Modal(modalElement);
        bsModal.show();
      } else {
        alert(`🎉 Booking Successful!\nReference ID: ${bookingId}\nName: ${fullName}\nTotal: ${calculatedTotal}\nYour reservation is safely saved in local storage!`);
      }

      bookingForm.reset();
    });
  }

  // Inquiry Form Handler
  const inquiryForm = document.getElementById('boracayInquiryForm');
  if (inquiryForm) {
    inquiryForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const fullName = document.getElementById('inqFullName').value.trim();
      const email = document.getElementById('inqEmail').value.trim();
      const phone = document.getElementById('inqPhone') ? document.getElementById('inqPhone').value.trim() : '';
      const subject = document.getElementById('inqSubject').value.trim();
      const message = document.getElementById('inqMessage').value.trim();

      const inqId = 'INQ-' + Math.floor(1000 + Math.random() * 9000);

      const newInquiry = {
        id: inqId,
        fullName,
        email,
        phone,
        subject,
        message,
        status: 'Pending',
        dateCreated: new Date().toLocaleString()
      };

      saveInquiry(newInquiry);
      renderInquiriesTable();

      alert(`✅ Inquiry Sent Successfully!\nReference ID: ${inqId}\nThank you, ${fullName}! Our Boracay Travel Desk will get back to you shortly.`);
      inquiryForm.reset();
    });
  }

  // Cost Calculator Listeners
  const calcPkg = document.getElementById('calcPackage');
  const calcGst = document.getElementById('calcGuests');
  const calcSea = document.getElementById('calcSeason');
  if (calcPkg && calcGst && calcSea) {
    calcPkg.addEventListener('change', calculateTripEstimate);
    calcGst.addEventListener('input', calculateTripEstimate);
    calcSea.addEventListener('change', calculateTripEstimate);
    calculateTripEstimate();
  }

  // Gallery Filter Handler
  const filterButtons = document.querySelectorAll('.filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');
      galleryItems.forEach(item => {
        if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  // Lightbox Modal for Gallery Images
  const galleryCards = document.querySelectorAll('.gallery-card');
  const lightboxModal = document.getElementById('lightboxModal');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCaption = document.getElementById('lightboxCaption');

  if (lightboxModal && lightboxImg && lightboxCaption) {
    galleryCards.forEach(card => {
      card.addEventListener('click', () => {
        const img = card.querySelector('img');
        const title = card.querySelector('h5')?.innerText || 'Boracay Island View';
        const desc = card.querySelector('p')?.innerText || '';
        lightboxImg.src = img.src;
        lightboxCaption.innerHTML = `<strong>${title}</strong><div class="text-muted small">${desc}</div>`;
        const modal = new bootstrap.Modal(lightboxModal);
        modal.show();
      });
    });
  }

  // Pre-fill booking package if user clicks "Book Now" on a specific package card
  const packageBookBtns = document.querySelectorAll('.btn-select-package');
  packageBookBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const targetPackage = btn.getAttribute('data-package-val');
      const bookSelect = document.getElementById('bookPackage');
      if (bookSelect && targetPackage) {
        bookSelect.value = targetPackage;
      }
    });
  });
});
