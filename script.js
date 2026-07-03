/* ═══════════════════════════════════════════════════════════
   Kuis Perkalian Seru! — script.js
   50 Soal Bank | Logika Konsep: Perkalian = Penjumlahan Berulang
   ────────────────────────────────────────────────────────────
   Tipe Soal:
     'cerita'  → soal cerita / gambar konteks
     'ke-kali' → ubah penjumlahan berulang → bentuk perkalian
     'ke-juml' → ubah perkalian → penjumlahan berulang
     'logika'  → konteks dunia nyata (obat, jadwal, dll)
═══════════════════════════════════════════════════════════ */

/* ────────────────────────────────────────────────────────────
   BANK SOAL — 50 VARIASI
   Struktur tiap soal:
   {
     type       : 'cerita' | 'ke-kali' | 'ke-juml' | 'logika'
     visual     : string emoji (opsional, tampil di atas soal)
     question   : string teks soal
     hint       : string (opsional, kotak kuning petunjuk konsep)
     options    : [ {letter:'A', text:'...'}, ... ] (4 pilihan)
     answer     : 'A'|'B'|'C'|'D'
     explanation: string penjelasan saat jawaban SALAH
     wrongKeys  : { 'B':'...', 'C':'...', 'D':'...' }
                  penjelasan KHUSUS per pilihan salah (opsional)
   }
──────────────────────────────────────────────────────────── */
const QUESTION_BANK = [

  // ═══ TIPE 1: SOAL CERITA (gambar/konteks) — 15 soal ═══

  {
    type: 'cerita',
    visual: '🛍️🛍️🛍️',
    question: 'Ada 3 kantong belanja. Setiap kantong berisi 5 jeruk. Cara penjumlahan berulang yang TEPAT adalah…',
    hint: '💡 Ingat: 3 × 5 artinya "5 diulang sebanyak 3 kali".',
    options: [
      { letter:'A', text:'3 + 3 + 3 + 3 + 3 = 15' },
      { letter:'B', text:'5 + 5 + 5 = 15 ✓' },
      { letter:'C', text:'3 + 5 = 8' },
      { letter:'D', text:'5 × 5 × 5 = 125' },
    ],
    answer: 'B',
    explanation: 'Yang menjadi <strong>"wadah"</strong> adalah kantong (ada 3). Yang menjadi <strong>"isi"</strong> adalah jeruk (5 per kantong). Karena wadahnya ada 3, kita jumlahkan isi sebanyak 3 kali: <em>5 + 5 + 5 = 15</em>. Jadi 3 × 5 = 5+5+5, bukan 3+3+3+3+3.',
    wrongKeys: {
      'A': 'Jawaban 3+3+3+3+3 adalah cara menghitung 5×3 (5 wadah masing-masing berisi 3). Kasus kita sebaliknya: 3 kantong berisi 5 jeruk, jadi yang dijumlah berulang adalah isinya (5), bukan wadahnya (3).',
      'C': 'Menjumlahkan 3+5 tidak ada maknanya dalam perkalian. Perkalian adalah penjumlahan yang diulang!',
      'D': '5×5×5 adalah perpangkatan, bukan perkalian kantong dan jeruk.',
    }
  },

  {
    type: 'cerita',
    visual: '🚗🚗🚗🚗',
    question: 'Ada 4 mobil. Setiap mobil punya 4 roda. Cara penulisan perkalian yang BENAR adalah…',
    hint: '💡 "4 mobil, masing-masing berisi 4 roda" → 4 × 4.',
    options: [
      { letter:'A', text:'4 + 4 = 8' },
      { letter:'B', text:'4 × 4 = 16 ✓' },
      { letter:'C', text:'4 + 4 + 4 + 4 + 4 = 20' },
      { letter:'D', text:'4 × 4 × 4 = 64' },
    ],
    answer: 'B',
    explanation: 'Ada <strong>4 mobil</strong> (wadah) × <strong>4 roda</strong> tiap mobil (isi) = 4+4+4+4 = 16. Penulisan perkaliannya adalah <em>4 × 4 = 16</em>.',
  },

  {
    type: 'cerita',
    visual: '📦📦📦📦📦',
    question: 'Ada 5 kotak. Tiap kotak berisi 3 bola. Penjumlahan berulang yang BENAR adalah…',
    hint: '💡 5 kotak × 3 bola = 3 diulang 5 kali.',
    options: [
      { letter:'A', text:'5 + 5 + 5 = 15' },
      { letter:'B', text:'3 + 5 = 8' },
      { letter:'C', text:'3 + 3 + 3 + 3 + 3 = 15 ✓' },
      { letter:'D', text:'5 × 3 × 2 = 30' },
    ],
    answer: 'C',
    explanation: 'Wadah ada <strong>5</strong> (kotak), isi tiap wadah adalah <strong>3</strong> bola. Kita jumlahkan isi sebanyak 5 kali: <em>3+3+3+3+3 = 15</em>. Itulah makna 5×3.',
    wrongKeys: {
      'A': '5+5+5 adalah makna dari 3×5 (3 wadah berisi 5 benda). Di soal ini wadahnya ada 5, bukan isinya!',
    }
  },

  {
    type: 'cerita',
    visual: '🌸🌸',
    question: 'Ada 2 vas bunga. Setiap vas berisi 7 bunga. Berapa total bunga dan bagaimana cara penjumlahannya?',
    hint: '💡 2 vas × 7 bunga = 7 dijumlah 2 kali.',
    options: [
      { letter:'A', text:'7 + 7 = 14 ✓' },
      { letter:'B', text:'2 + 7 = 9' },
      { letter:'C', text:'2 + 2 + 2 + 2 + 2 + 2 + 2 = 14' },
      { letter:'D', text:'7 × 7 = 49' },
    ],
    answer: 'A',
    explanation: '<strong>2 vas</strong> × <strong>7 bunga</strong> = 7+7 = 14. Hanya 2 vas, jadi kita jumlahkan 7 sebanyak 2 kali saja.',
    wrongKeys: {
      'C': '2+2+2+2+2+2+2 (tujuh kali) adalah makna 7×2. Di soal ini hanya ada 2 vas, bukan 7!',
    }
  },

  {
    type: 'cerita',
    visual: '🪑🪑🪑🪑🪑🪑',
    question: 'Dalam sebuah kelas ada 6 baris kursi. Tiap baris ada 5 kursi. Perkalian yang tepat adalah…',
    hint: '💡 Baris = wadah, kursi per baris = isi.',
    options: [
      { letter:'A', text:'5 × 6 = 30' },
      { letter:'B', text:'6 + 5 = 11' },
      { letter:'C', text:'6 × 5 = 30 ✓' },
      { letter:'D', text:'6 × 6 = 36' },
    ],
    answer: 'C',
    explanation: '<strong>6 baris</strong> (wadah) × <strong>5 kursi</strong> tiap baris (isi). Penjumlahannya: 5+5+5+5+5+5 = 30. Dituliskan sebagai <em>6 × 5 = 30</em>.',
    wrongKeys: {
      'A': '5×6 dan 6×5 sama hasilnya (30), tapi maknanya beda. 5×6 artinya "5 baris, 6 kursi tiap baris". Karena soal menyebut 6 baris dahulu, yang tepat adalah 6×5.',
    }
  },

  {
    type: 'cerita',
    visual: '🍎🍎🍎',
    question: 'Ibu membeli 3 ikat buah apel. Tiap ikat berisi 8 apel. Penjumlahan berulangnya adalah…',
    options: [
      { letter:'A', text:'3 + 3 + 3 + 3 + 3 + 3 + 3 + 3 = 24' },
      { letter:'B', text:'8 + 3 = 11' },
      { letter:'C', text:'8 + 8 + 8 = 24 ✓' },
      { letter:'D', text:'8 + 8 + 8 + 8 = 32' },
    ],
    answer: 'C',
    explanation: '3 ikat (wadah), isi tiap ikat = 8 apel. Jadi <em>8 + 8 + 8 = 24</em>. Kita jumlahkan 8 sebanyak 3 kali sesuai jumlah ikat.',
  },

  {
    type: 'cerita',
    visual: '🎒🎒🎒🎒🎒🎒🎒',
    question: 'Ada 7 tas siswa. Setiap tas berisi 2 buku. Berapa total buku dan apa penjumlahannya?',
    options: [
      { letter:'A', text:'7 + 7 = 14' },
      { letter:'B', text:'2 + 2 + 2 + 2 + 2 + 2 + 2 = 14 ✓' },
      { letter:'C', text:'7 + 2 = 9' },
      { letter:'D', text:'2 × 2 × 7 = 28' },
    ],
    answer: 'B',
    explanation: '<strong>7 tas</strong> × <strong>2 buku</strong> per tas. Kita jumlahkan isi (2) sebanyak 7 kali: <em>2+2+2+2+2+2+2 = 14</em>.',
    wrongKeys: {
      'A': '7+7 adalah penjumlahan 2×7 (2 kelompok, masing-masing berisi 7). Di sini ada 7 tas berisi 2 buku masing-masing, bukan sebaliknya.',
    }
  },

  {
    type: 'cerita',
    visual: '🏠🏠🏠🏠',
    question: 'Di satu kompleks ada 4 rumah. Setiap rumah ada 3 jendela. Penulisan perkaliannya yang menunjukkan "4 rumah, tiap rumah 3 jendela" adalah…',
    options: [
      { letter:'A', text:'3 × 4 = 12' },
      { letter:'B', text:'4 × 3 = 12 ✓' },
      { letter:'C', text:'4 + 3 = 7' },
      { letter:'D', text:'3 + 4 + 3 = 10' },
    ],
    answer: 'B',
    explanation: 'Yang disebut pertama adalah <strong>4 rumah</strong> (wadah), lalu <strong>3 jendela</strong> tiap rumah (isi). Urutan 4 × 3 lebih tepat karena mengikuti alur cerita: wadah × isi.',
    wrongKeys: {
      'A': '3 × 4 secara matematis sama hasilnya, tapi maknanya "3 kelompok, masing-masing berisi 4". Karena soal menyebut 4 rumah dahulu, maka 4 × 3 lebih akurat merepresentasikan situasinya.',
    }
  },

  {
    type: 'cerita',
    visual: '🧲',
    question: 'Seorang pedagang punya 9 kardus. Tiap kardus berisi 6 mainan. Cara hitung penjumlahan berulangnya adalah…',
    options: [
      { letter:'A', text:'9 + 9 + 9 + 9 + 9 + 9 = 54' },
      { letter:'B', text:'6 + 9 = 15' },
      { letter:'C', text:'6 + 6 + 6 + 6 + 6 + 6 + 6 + 6 + 6 = 54 ✓' },
      { letter:'D', text:'9 × 9 = 81' },
    ],
    answer: 'C',
    explanation: '<strong>9 kardus</strong> × <strong>6 mainan</strong>. Penjumlahannya: <em>6+6+6+6+6+6+6+6+6 = 54</em> (6 diulang 9 kali).',
    wrongKeys: {
      'A': '9+9+9+9+9+9 adalah penjumlahan berulang 9 sebanyak 6 kali, artinya 6×9. Bukan 9×6!',
    }
  },

  {
    type: 'cerita',
    visual: '🍱🍱',
    question: 'Ibu menyiapkan 2 kotak bekal. Tiap kotak berisi 10 bakso. Pernyataan yang BENAR adalah…',
    options: [
      { letter:'A', text:'2 × 10 artinya 2+2+2+2+2+2+2+2+2+2 = 20' },
      { letter:'B', text:'2 × 10 artinya 10 + 10 = 20 ✓' },
      { letter:'C', text:'2 × 10 artinya 10 × 2 = 200' },
      { letter:'D', text:'2 × 10 artinya 2 + 10 = 12' },
    ],
    answer: 'B',
    explanation: '<em>2 × 10</em> artinya <strong>10 diulang 2 kali</strong> = 10+10 = 20. Angka pertama (2) = berapa kali diulang. Angka kedua (10) = yang diulang.',
    wrongKeys: {
      'A': '2+2+2+2+2+2+2+2+2+2 adalah 10×2 (10 kali 2). Karena 2 ada di kiri, maka 2×10 berarti 10 diulang 2 kali, bukan 2 diulang 10 kali.',
    }
  },

  {
    type: 'cerita',
    visual: '🐔🐔🐔🐔🐔🐔',
    question: 'Di kandang ada 6 ekor ayam. Tiap ayam bertelur 4 butir. Cara penjumlahan yang tepat untuk menghitung total telur adalah…',
    options: [
      { letter:'A', text:'4 + 4 + 4 + 4 + 4 + 4 = 24 ✓' },
      { letter:'B', text:'6 + 6 + 6 + 6 = 24' },
      { letter:'C', text:'6 + 4 = 10' },
      { letter:'D', text:'4 × 6 × 2 = 48' },
    ],
    answer: 'A',
    explanation: '<strong>6 ayam</strong> × <strong>4 telur</strong>. Isi tiap wadah = 4. Diulang 6 kali = <em>4+4+4+4+4+4 = 24</em>.',
    wrongKeys: {
      'B': '6+6+6+6 adalah penjumlahan berulang untuk 4×6 (4 wadah, masing-masing 6). Di sini ada 6 ayam berisi 4 telur masing-masing.',
    }
  },

  {
    type: 'cerita',
    visual: '🧁🧁🧁🧁🧁🧁🧁🧁',
    question: 'Toko kue menyusun kue dalam 8 nampan. Tiap nampan ada 5 kue. Perkalian yang TEPAT adalah…',
    options: [
      { letter:'A', text:'5 × 8 = 40' },
      { letter:'B', text:'8 × 5 = 40 ✓' },
      { letter:'C', text:'8 + 5 = 13' },
      { letter:'D', text:'8 × 8 = 64' },
    ],
    answer: 'B',
    explanation: '<strong>8 nampan</strong> (wadah) × <strong>5 kue</strong> (isi). Penjumlahan: 5+5+5+5+5+5+5+5 = 40. Perkaliannya: <em>8 × 5 = 40</em>.',
    wrongKeys: {
      'A': '5×8 hasilnya sama 40, tapi berarti "5 nampan berisi 8 kue". Karena soal menyebut 8 nampan terlebih dahulu, 8×5 lebih akurat.',
    }
  },

  {
    type: 'cerita',
    visual: '🚌🚌🚌',
    question: 'Ada 3 bus. Setiap bus bisa memuat 40 penumpang. Penjumlahan berulangnya adalah…',
    options: [
      { letter:'A', text:'3 + 3 + 3 + ... (40 kali) = 120' },
      { letter:'B', text:'40 + 3 = 43' },
      { letter:'C', text:'40 + 40 + 40 = 120 ✓' },
      { letter:'D', text:'3 × 3 × 40 = 360' },
    ],
    answer: 'C',
    explanation: '<strong>3 bus</strong> (wadah) × <strong>40 penumpang</strong> (isi). Jumlahkan 40 sebanyak 3 kali: <em>40+40+40 = 120</em>.',
    wrongKeys: {
      'A': '3 diulang 40 kali adalah makna dari 40×3. Di sini yang ada 3 adalah busnya (wadah), bukan isinya.',
    }
  },

  {
    type: 'cerita',
    visual: '📚📚📚📚',
    question: 'Perpustakaan punya 4 rak buku. Tiap rak memuat 12 buku. Total buku dan cara menghitungnya adalah…',
    options: [
      { letter:'A', text:'12 + 4 = 16' },
      { letter:'B', text:'4 + 4 + 4 + ... (12 kali) = 48' },
      { letter:'C', text:'12 + 12 + 12 + 12 = 48 ✓' },
      { letter:'D', text:'4 × 12 × 4 = 192' },
    ],
    answer: 'C',
    explanation: '<strong>4 rak</strong> × <strong>12 buku</strong> tiap rak. Penjumlahan: <em>12+12+12+12 = 48</em>. Isi (12) diulang sebanyak wadah (4).',
  },

  {
    type: 'cerita',
    visual: '🎁🎁🎁🎁🎁',
    question: 'Ada 5 paket hadiah. Tiap paket berisi 6 permen. Pernyataan yang SALAH adalah…',
    hint: '💡 Cari yang SALAH!',
    options: [
      { letter:'A', text:'5 × 6 = 6+6+6+6+6 = 30' },
      { letter:'B', text:'5 × 6 = 5+5+5+5+5+5 = 30 ✓ (ini SALAH)' },
      { letter:'C', text:'Total permen = 30' },
      { letter:'D', text:'Penjumlahan benar: 6 dijumlah 5 kali' },
    ],
    answer: 'B',
    explanation: '5 × 6 artinya <strong>6 diulang sebanyak 5 kali</strong> = 6+6+6+6+6. Bukan 5+5+5+5+5+5 (itu makna 6×5). Meski hasilnya sama 30, penjumlahan berulangnya berbeda!',
  },

  // ═══ TIPE 2: UBAH PENJUMLAHAN → PERKALIAN — 12 soal ═══

  {
    type: 'ke-kali',
    question: 'Penjumlahan 4 + 4 + 4 jika ditulis dalam bentuk perkalian adalah…',
    hint: '💡 Hitung berapa kali 4 muncul. Itulah faktor pertama.',
    options: [
      { letter:'A', text:'4 × 4 = 16' },
      { letter:'B', text:'3 × 4 = 12 ✓' },
      { letter:'C', text:'4 × 3 = 12 (maknanya beda)' },
      { letter:'D', text:'4 + 3 = 7' },
    ],
    answer: 'B',
    explanation: '<em>4 + 4 + 4</em> artinya <strong>4 diulang sebanyak 3 kali</strong>. Dalam perkalian: <em>3 × 4 = 12</em>. Angka pertama (3) = berapa kali diulang. Angka kedua (4) = yang diulang.',
    wrongKeys: {
      'C': '4×3 secara matematis sama, tapi artinya "3 diulang 4 kali" (3+3+3+3). Karena yang diulang adalah 4 (bukan 3), bentuk paling tepat adalah 3×4.',
    }
  },

  {
    type: 'ke-kali',
    question: 'Penjumlahan 7 + 7 + 7 + 7 + 7 = 35 jika ditulis perkalian yang PALING TEPAT adalah…',
    options: [
      { letter:'A', text:'7 × 5 = 35' },
      { letter:'B', text:'5 × 7 = 35 ✓' },
      { letter:'C', text:'7 × 7 = 49' },
      { letter:'D', text:'35 × 1 = 35' },
    ],
    answer: 'B',
    explanation: '<em>7+7+7+7+7</em>: angka yang diulang adalah <strong>7</strong>, diulang sebanyak <strong>5 kali</strong>. Jadi: <em>5 × 7 = 35</em>. Faktor pertama = jumlah pengulangan (5), faktor kedua = yang diulang (7).',
    wrongKeys: {
      'A': '7×5 artinya "5 diulang 7 kali" (5+5+5+5+5+5+5). Yang ada di soal adalah 7 diulang 5 kali, sehingga 5×7 lebih tepat.',
    }
  },

  {
    type: 'ke-kali',
    question: '2 + 2 + 2 + 2 + 2 + 2 + 2 + 2 + 2 = 18. Bentuk perkaliannya adalah…',
    options: [
      { letter:'A', text:'2 × 9 = 18' },
      { letter:'B', text:'9 × 2 = 18 ✓' },
      { letter:'C', text:'18 × 1 = 18' },
      { letter:'D', text:'2 × 2 × 2 = 8' },
    ],
    answer: 'B',
    explanation: 'Angka 2 muncul sebanyak <strong>9 kali</strong>. Yang diulang = 2, diulang = 9 kali → <em>9 × 2 = 18</em>.',
    wrongKeys: {
      'A': '2×9 artinya "9 diulang 2 kali" = 9+9. Padahal di soal yang berulang adalah 2, bukan 9.',
    }
  },

  {
    type: 'ke-kali',
    question: '10 + 10 + 10 + 10 = 40. Penulisan perkalian yang benar adalah…',
    options: [
      { letter:'A', text:'10 + 4 = 14' },
      { letter:'B', text:'10 × 4 = 40' },
      { letter:'C', text:'4 × 10 = 40 ✓' },
      { letter:'D', text:'4 × 4 = 16' },
    ],
    answer: 'C',
    explanation: '<strong>10</strong> diulang sebanyak <strong>4 kali</strong>. Jadi: <em>4 × 10 = 40</em>. Posisi angka penting: berapa kali diulang (4) × yang diulang (10).',
  },

  {
    type: 'ke-kali',
    question: '6 + 6 = 12. Bentuk perkalian yang PALING TEPAT adalah…',
    options: [
      { letter:'A', text:'6 × 1 = 6' },
      { letter:'B', text:'2 × 6 = 12 ✓' },
      { letter:'C', text:'6 × 2 = 12 (makna beda)' },
      { letter:'D', text:'12 × 1 = 12' },
    ],
    answer: 'B',
    explanation: '<em>6 + 6</em>: angka 6 diulang sebanyak <strong>2 kali</strong> → <em>2 × 6 = 12</em>.',
  },

  {
    type: 'ke-kali',
    question: '9 + 9 + 9 = 27. Bentuk perkaliannya…',
    options: [
      { letter:'A', text:'9 × 9 = 81' },
      { letter:'B', text:'27 × 1 = 27' },
      { letter:'C', text:'9 × 3 = 27' },
      { letter:'D', text:'3 × 9 = 27 ✓' },
    ],
    answer: 'D',
    explanation: '9 diulang <strong>3 kali</strong> → <em>3 × 9 = 27</em>.',
  },

  {
    type: 'ke-kali',
    question: '5 + 5 + 5 + 5 + 5 + 5 = 30. Bentuk perkalian yang paling tepat adalah…',
    options: [
      { letter:'A', text:'5 × 6 = 30' },
      { letter:'B', text:'6 × 5 = 30 ✓' },
      { letter:'C', text:'30 × 1 = 30' },
      { letter:'D', text:'5 + 6 = 11' },
    ],
    answer: 'B',
    explanation: '5 diulang <strong>6 kali</strong> → <em>6 × 5 = 30</em>.',
    wrongKeys: {
      'A': '5×6 artinya 6 diulang 5 kali (6+6+6+6+6). Tapi di soal yang diulang adalah 5, diulang 6 kali.',
    }
  },

  {
    type: 'ke-kali',
    question: '8 + 8 + 8 + 8 + 8 + 8 + 8 = 56. Penulisan perkaliannya…',
    options: [
      { letter:'A', text:'8 × 8 = 64' },
      { letter:'B', text:'56 × 1' },
      { letter:'C', text:'7 × 8 = 56 ✓' },
      { letter:'D', text:'8 × 7 = 56' },
    ],
    answer: 'C',
    explanation: '8 diulang <strong>7 kali</strong> → <em>7 × 8 = 56</em>.',
  },

  {
    type: 'ke-kali',
    question: '3 + 3 + 3 + 3 + 3 + 3 + 3 + 3 + 3 + 3 = 30. Bentuk perkalian yang benar adalah…',
    options: [
      { letter:'A', text:'3 × 10 = 30' },
      { letter:'B', text:'30 × 3 = 90' },
      { letter:'C', text:'10 × 3 = 30 ✓' },
      { letter:'D', text:'3 × 3 = 9' },
    ],
    answer: 'C',
    explanation: '3 diulang <strong>10 kali</strong> → <em>10 × 3 = 30</em>.',
  },

  {
    type: 'ke-kali',
    question: '12 + 12 + 12 = 36. Bentuk perkaliannya adalah…',
    options: [
      { letter:'A', text:'12 × 12 = 144' },
      { letter:'B', text:'3 × 12 = 36 ✓' },
      { letter:'C', text:'12 × 3 = 36' },
      { letter:'D', text:'36 + 3 = 39' },
    ],
    answer: 'B',
    explanation: '12 diulang <strong>3 kali</strong> → <em>3 × 12 = 36</em>.',
  },

  {
    type: 'ke-kali',
    question: '15 + 15 + 15 + 15 + 15 = 75. Bentuk perkaliannya…',
    options: [
      { letter:'A', text:'15 × 5 = 75' },
      { letter:'B', text:'5 + 15 = 20' },
      { letter:'C', text:'5 × 15 = 75 ✓' },
      { letter:'D', text:'15 × 15 = 225' },
    ],
    answer: 'C',
    explanation: '15 diulang <strong>5 kali</strong> → <em>5 × 15 = 75</em>.',
  },

  {
    type: 'ke-kali',
    question: '20 + 20 = 40. Bentuk perkalian yang paling tepat…',
    options: [
      { letter:'A', text:'20 × 20 = 400' },
      { letter:'B', text:'20 + 2 = 22' },
      { letter:'C', text:'20 × 2 = 40' },
      { letter:'D', text:'2 × 20 = 40 ✓' },
    ],
    answer: 'D',
    explanation: '20 diulang <strong>2 kali</strong> → <em>2 × 20 = 40</em>.',
  },

  // ═══ TIPE 3: UBAH PERKALIAN → PENJUMLAHAN BERULANG — 12 soal ═══

  {
    type: 'ke-juml',
    question: '4 × 6 = 24. Penjumlahan berulang yang TEPAT adalah…',
    hint: '💡 4 × 6 artinya "6 diulang sebanyak 4 kali".',
    options: [
      { letter:'A', text:'4 + 4 + 4 + 4 + 4 + 4 = 24' },
      { letter:'B', text:'6 + 6 + 6 + 6 = 24 ✓' },
      { letter:'C', text:'4 × 4 × 4 = 64' },
      { letter:'D', text:'6 + 4 = 10' },
    ],
    answer: 'B',
    explanation: '<em>4 × 6</em>: angka pertama (4) = jumlah pengulangan. Angka kedua (6) = yang diulang. Jadi: <strong>6+6+6+6 = 24</strong>.',
    wrongKeys: {
      'A': '4+4+4+4+4+4 adalah penjumlahan berulang dari 6×4 (bukan 4×6). Di 4×6, yang diulang adalah angka kedua, yaitu 6.',
    }
  },

  {
    type: 'ke-juml',
    question: '3 × 7 = 21. Penjumlahan berulangnya…',
    hint: '💡 3 × 7 = 7 diulang 3 kali.',
    options: [
      { letter:'A', text:'3 + 3 + 3 + 3 + 3 + 3 + 3 = 21' },
      { letter:'B', text:'7 + 3 = 10' },
      { letter:'C', text:'7 + 7 + 7 = 21 ✓' },
      { letter:'D', text:'3 + 7 + 3 + 7 = 20' },
    ],
    answer: 'C',
    explanation: '3 × 7: 7 diulang 3 kali → <em>7+7+7 = 21</em>.',
    wrongKeys: {
      'A': '3+3+3+3+3+3+3 adalah penjumlahan berulang 3 sebanyak 7 kali → makna 7×3, bukan 3×7.',
    }
  },

  {
    type: 'ke-juml',
    question: '5 × 2 = 10. Penjumlahan berulang yang benar…',
    options: [
      { letter:'A', text:'5 + 5 = 10' },
      { letter:'B', text:'2 + 2 = 4' },
      { letter:'C', text:'2 + 2 + 2 + 2 + 2 = 10' },
      { letter:'D', text:'2 + 2 + 2 + 2 + 2 = 10 ✓' },
    ],
    answer: 'D',
    explanation: '5 × 2: angka kedua (2) diulang sebanyak angka pertama (5) kali → <em>2+2+2+2+2 = 10</em>.',
    wrongKeys: {
      'A': '5+5 = 10, tetapi itu penjumlahan berulang 2×5 (bukan 5×2). 5×2 berarti 2 diulang 5 kali.',
    }
  },

  {
    type: 'ke-juml',
    question: '6 × 8 = 48. Penjumlahan berulangnya adalah…',
    options: [
      { letter:'A', text:'6 + 6 + 6 + 6 + 6 + 6 + 6 + 6 = 48' },
      { letter:'B', text:'8 + 8 + 8 + 8 + 8 + 8 = 48 ✓' },
      { letter:'C', text:'6 + 8 = 14' },
      { letter:'D', text:'8 × 8 = 64' },
    ],
    answer: 'B',
    explanation: '6 × 8: 8 diulang 6 kali → <em>8+8+8+8+8+8 = 48</em>.',
    wrongKeys: {
      'A': '6+6+6+6+6+6+6+6 (8 kali 6) adalah penjumlahan untuk 8×6.',
    }
  },

  {
    type: 'ke-juml',
    question: '2 × 9 = 18. Penjumlahan berulangnya…',
    options: [
      { letter:'A', text:'2 + 2 + 2 + 2 + 2 + 2 + 2 + 2 + 2 = 18' },
      { letter:'B', text:'2 + 9 = 11' },
      { letter:'C', text:'9 + 9 = 18 ✓' },
      { letter:'D', text:'9 + 2 = 11' },
    ],
    answer: 'C',
    explanation: '2 × 9: 9 diulang 2 kali → <em>9+9 = 18</em>.',
    wrongKeys: {
      'A': '2 diulang 9 kali adalah makna 9×2, bukan 2×9.',
    }
  },

  {
    type: 'ke-juml',
    question: '7 × 3 = 21. Penjumlahan berulang yang TEPAT untuk 7 × 3 adalah…',
    options: [
      { letter:'A', text:'7 + 7 + 7 = 21' },
      { letter:'B', text:'3 + 3 + 3 + 3 + 3 + 3 + 3 = 21 ✓' },
      { letter:'C', text:'3 + 7 = 10' },
      { letter:'D', text:'7 + 3 + 7 = 17' },
    ],
    answer: 'B',
    explanation: '7 × 3: 3 diulang 7 kali → <em>3+3+3+3+3+3+3 = 21</em>.',
    wrongKeys: {
      'A': '7+7+7 adalah penjumlahan untuk 3×7 (3 kali 7). Tapi di soal urutannya 7×3, berarti 3 diulang 7 kali.',
    }
  },

  {
    type: 'ke-juml',
    question: '8 × 4 = 32. Cara penjumlahannya…',
    options: [
      { letter:'A', text:'4 + 4 + 4 + 4 + 4 + 4 + 4 + 4 = 32 ✓' },
      { letter:'B', text:'8 + 8 + 8 + 8 = 32' },
      { letter:'C', text:'4 + 8 = 12' },
      { letter:'D', text:'32 + 0 = 32' },
    ],
    answer: 'A',
    explanation: '8 × 4: 4 diulang 8 kali → <em>4+4+4+4+4+4+4+4 = 32</em>.',
    wrongKeys: {
      'B': '8+8+8+8 adalah penjumlahan untuk 4×8.',
    }
  },

  {
    type: 'ke-juml',
    question: '9 × 5 = 45. Penjumlahan berulang yang benar…',
    options: [
      { letter:'A', text:'9 + 9 + 9 + 9 + 9 = 45' },
      { letter:'B', text:'5 + 9 = 14' },
      { letter:'C', text:'5 + 5 + 5 + 5 + 5 + 5 + 5 + 5 + 5 = 45 ✓' },
      { letter:'D', text:'9 + 5 + 9 = 23' },
    ],
    answer: 'C',
    explanation: '9 × 5: 5 diulang 9 kali → <em>5×9 = 5+5+5+5+5+5+5+5+5 = 45</em>.',
    wrongKeys: {
      'A': '9 diulang 5 kali adalah makna 5×9, bukan 9×5.',
    }
  },

  {
    type: 'ke-juml',
    question: '10 × 3 = 30. Penjumlahan berulangnya adalah…',
    options: [
      { letter:'A', text:'10 + 10 + 10 = 30' },
      { letter:'B', text:'3 + 3 + 3 + 3 + 3 + 3 + 3 + 3 + 3 + 3 = 30 ✓' },
      { letter:'C', text:'10 + 3 = 13' },
      { letter:'D', text:'3 × 3 × 3 = 27' },
    ],
    answer: 'B',
    explanation: '10 × 3: 3 diulang 10 kali → <em>3+3+3+3+3+3+3+3+3+3 = 30</em>.',
    wrongKeys: {
      'A': '10+10+10 adalah makna 3×10.',
    }
  },

  {
    type: 'ke-juml',
    question: '1 × 8 = 8. Penjumlahan berulang yang benar untuk 1 × 8…',
    options: [
      { letter:'A', text:'1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 = 8' },
      { letter:'B', text:'8 = 8 ✓' },
      { letter:'C', text:'8 + 8 = 16' },
      { letter:'D', text:'1 × 0 = 0' },
    ],
    answer: 'B',
    explanation: '1 × 8: 8 diulang <strong>1 kali</strong> = 8. Cukup ditulis 8 saja karena diulang hanya sekali.',
    wrongKeys: {
      'A': '1 diulang 8 kali adalah makna 8×1, bukan 1×8. 1×8 artinya 8 diulang 1 kali = 8.',
    }
  },

  {
    type: 'ke-juml',
    question: '4 × 0 = 0. Penjumlahan berulangnya…',
    options: [
      { letter:'A', text:'0 = 0' },
      { letter:'B', text:'0 + 0 + 0 + 0 = 0 ✓' },
      { letter:'C', text:'4 + 4 + 4 + 4 = 16' },
      { letter:'D', text:'0 + 4 = 4' },
    ],
    answer: 'B',
    explanation: '4 × 0: 0 diulang 4 kali → <em>0+0+0+0 = 0</em>. Apapun dikalikan 0, hasilnya selalu 0!',
  },

  {
    type: 'ke-juml',
    question: '3 × 12 = 36. Cara penjumlahan berulangnya…',
    options: [
      { letter:'A', text:'3 + 3 + 3 + ... (12 kali) = 36' },
      { letter:'B', text:'12 + 12 + 12 = 36 ✓' },
      { letter:'C', text:'12 + 3 = 15' },
      { letter:'D', text:'36 + 12 = 48' },
    ],
    answer: 'B',
    explanation: '3 × 12: 12 diulang 3 kali → <em>12+12+12 = 36</em>.',
    wrongKeys: {
      'A': '3 diulang 12 kali adalah makna 12×3.',
    }
  },

  // ═══ TIPE 4: SOAL LOGIKA DUNIA NYATA — 11 soal ═══

  {
    type: 'logika',
    visual: '💊💊💊',
    question: 'Dokter meresepkan obat: "Minum 3 kali sehari, 1 tablet tiap minum." Tablet yang diminum dalam 1 hari adalah…',
    hint: '💡 "3 kali sehari" = wadah (3), "1 tablet" = isi (1).',
    options: [
      { letter:'A', text:'1 + 1 = 2 tablet' },
      { letter:'B', text:'3 × 1 = 1+1+1 = 3 tablet ✓' },
      { letter:'C', text:'3 + 1 = 4 tablet' },
      { letter:'D', text:'1 × 1 = 1 tablet' },
    ],
    answer: 'B',
    explanation: '"3 kali sehari, 1 tablet" → 3 × 1 = <em>1+1+1 = 3 tablet</em>. Ini adalah makna "minum 3 kali" — bukan 3 tablet sekali minum!',
    wrongKeys: {
      'C': 'Menjumlahkan 3+1 tidak bermakna dalam konteks obat. Yang benar: 3 kali minum × 1 tablet = 3 tablet total.',
    }
  },

  {
    type: 'logika',
    visual: '💊💊💊💊💊💊',
    question: 'Obat diminum 2 kali sehari, 3 tablet setiap minum. Dalam 1 hari, berapa total tablet diminum?',
    hint: '💡 2 kali minum × 3 tablet = ?',
    options: [
      { letter:'A', text:'2 × 3 = 3+3 = 6 tablet ✓' },
      { letter:'B', text:'3 × 2 = 2+2+2 = 6 tablet (makna beda)' },
      { letter:'C', text:'2 + 3 = 5 tablet' },
      { letter:'D', text:'2 tablet saja' },
    ],
    answer: 'A',
    explanation: '"2 kali minum" adalah wadah, "3 tablet" adalah isi. Jadi 2 × 3 = <em>3+3 = 6 tablet</em>. Meski hasilnya sama dengan 3×2, urutan 2×3 lebih tepat menggambarkan situasi: 2 sesi minum, tiap sesi 3 tablet.',
    wrongKeys: {
      'B': '3×2 artinya "3 sesi minum, tiap sesi 2 tablet". Karena dokter bilang 2 kali sehari (bukan 3), maka 2×3 lebih tepat.',
    }
  },

  {
    type: 'logika',
    visual: '📅📅📅📅📅',
    question: 'Rani les piano 3 kali seminggu selama 4 minggu. Total sesi les yang diikuti Rani adalah…',
    options: [
      { letter:'A', text:'4 + 3 = 7 sesi' },
      { letter:'B', text:'3 × 3 = 9 sesi' },
      { letter:'C', text:'4 × 3 = 3+3+3+3 = 12 sesi ✓' },
      { letter:'D', text:'3 × 4 = 4+4+4 = 12 sesi (bisa juga benar)' },
    ],
    answer: 'C',
    explanation: '<strong>4 minggu</strong> (wadah) × <strong>3 sesi per minggu</strong> (isi) = <em>3+3+3+3 = 12 sesi</em>. Urutan 4×3 merepresentasikan "4 minggu, tiap minggu 3 kali".',
    wrongKeys: {
      'D': '3×4 hasilnya sama (12), tapi artinya "3 minggu, tiap minggu 4 kali". Karena soal menyebut 4 minggu dengan 3 sesi per minggu, 4×3 lebih akurat.',
    }
  },

  {
    type: 'logika',
    visual: '🚶🚶🚶🚶🚶',
    question: 'Setiap hari Budi berjalan kaki 5 km. Berapa km yang ditempuh dalam 7 hari?',
    options: [
      { letter:'A', text:'5 + 7 = 12 km' },
      { letter:'B', text:'5 × 7 = 5+5+5+5+5+5+5 = 35 km' },
      { letter:'C', text:'7 × 5 = 5+5+5+5+5+5+5 = 35 km ✓' },
      { letter:'D', text:'7 + 7 + 7 + 7 + 7 = 35 km' },
    ],
    answer: 'C',
    explanation: '<strong>7 hari</strong> × <strong>5 km per hari</strong> = <em>5+5+5+5+5+5+5 = 35 km</em>. Urutan 7×5: hari dulu (wadah), lalu jarak per hari (isi).',
    wrongKeys: {
      'B': '5×7 hasilnya sama, tapi maknanya "5 hari dengan 7 km per hari". Karena ada 7 hari dengan 5 km per hari, 7×5 lebih tepat.',
      'D': '7+7+7+7+7 adalah penjumlahan 5×7 (7 diulang 5 kali). Yang kita hitung adalah 5 km diulang 7 hari.',
    }
  },

  {
    type: 'logika',
    visual: '🪴🪴🪴',
    question: 'Pak Budi punya 3 pot bunga. Setiap pot disiram 2 kali sehari. Total berapa kali menyiram dalam 1 hari?',
    options: [
      { letter:'A', text:'3 + 2 = 5 kali' },
      { letter:'B', text:'2 × 2 × 3 = 12 kali' },
      { letter:'C', text:'3 × 2 = 2+2+2 = 6 kali ✓' },
      { letter:'D', text:'2 × 3 = 3+3 = 6 kali (makna beda)' },
    ],
    answer: 'C',
    explanation: '<strong>3 pot</strong> (wadah) × <strong>2 kali siram</strong> (isi per pot) = <em>2+2+2 = 6 kali</em>. Urutan 3×2 sesuai: pot dahulu, lalu frekuensi.',
  },

  {
    type: 'logika',
    visual: '🏃',
    question: 'Tim lari terdiri dari 5 orang. Setiap orang lari mengelilingi lapangan sebanyak 4 putaran. Total putaran seluruh tim adalah…',
    options: [
      { letter:'A', text:'5 + 4 = 9 putaran' },
      { letter:'B', text:'5 × 4 = 4+4+4+4+4 = 20 putaran ✓' },
      { letter:'C', text:'4 × 5 = 5+5+5+5 = 20 putaran (makna beda)' },
      { letter:'D', text:'5 × 5 = 25 putaran' },
    ],
    answer: 'B',
    explanation: '<strong>5 orang</strong> × <strong>4 putaran</strong> per orang = <em>4+4+4+4+4 = 20 putaran</em>. Urutan 5×4: orang dahulu (wadah), lalu putaran (isi).',
  },

  {
    type: 'logika',
    visual: '🖊️🖊️🖊️',
    question: 'Di toko ada 3 kotak pensil. Setiap kotak berisi 12 pensil. Berapa total pensil di toko?',
    options: [
      { letter:'A', text:'12 + 3 = 15 pensil' },
      { letter:'B', text:'3 × 12 = 12+12+12 = 36 pensil ✓' },
      { letter:'C', text:'3 + 3 + 3 = 9 pensil' },
      { letter:'D', text:'12 × 12 = 144 pensil' },
    ],
    answer: 'B',
    explanation: '<strong>3 kotak</strong> × <strong>12 pensil</strong> per kotak = <em>12+12+12 = 36 pensil</em>.',
  },

  {
    type: 'logika',
    visual: '🎵🎵🎵🎵',
    question: 'Bimo berlatih gitar 45 menit sehari, selama 4 hari. Total waktu latihan Bimo adalah…',
    options: [
      { letter:'A', text:'45 + 4 = 49 menit' },
      { letter:'B', text:'4 × 45 = 45+45+45+45 = 180 menit ✓' },
      { letter:'C', text:'45 × 45 = 2025 menit' },
      { letter:'D', text:'4 + 4 + 4 = 12 menit' },
    ],
    answer: 'B',
    explanation: '<strong>4 hari</strong> × <strong>45 menit per hari</strong> = <em>45+45+45+45 = 180 menit = 3 jam</em>.',
  },

  {
    type: 'logika',
    visual: '🌙🌙🌙🌙🌙🌙🌙',
    question: 'Seminggu ada 7 hari. Berapa hari dalam 4 minggu? Penjumlahan berulangnya…',
    options: [
      { letter:'A', text:'4 + 7 = 11 hari' },
      { letter:'B', text:'7 × 4 = 4+4+4+4+4+4+4 = 28 hari' },
      { letter:'C', text:'4 × 7 = 7+7+7+7 = 28 hari ✓' },
      { letter:'D', text:'7 × 7 = 49 hari' },
    ],
    answer: 'C',
    explanation: '<strong>4 minggu</strong> × <strong>7 hari</strong> per minggu = <em>7+7+7+7 = 28 hari</em>. Kita mulai dari satuan yang lebih besar (minggu), lalu isinya (hari per minggu).',
    wrongKeys: {
      'B': '7×4 artinya 4 diulang 7 kali. Di sini minggu ada 4, bukan 7. Jadi 4×7 lebih tepat.',
    }
  },

  {
    type: 'logika',
    visual: '💰💰💰💰💰',
    question: 'Ibu membeli 5 kantong beras. Tiap kantong harganya Rp8.000. Total yang dibayar ibu adalah…',
    options: [
      { letter:'A', text:'5 + 8.000 = Rp8.005' },
      { letter:'B', text:'5 × 8.000 = 8.000+8.000+8.000+8.000+8.000 = Rp40.000 ✓' },
      { letter:'C', text:'8.000 × 8.000 = Rp64.000.000' },
      { letter:'D', text:'5 × 5 = 25 (tidak relevan)' },
    ],
    answer: 'B',
    explanation: '<strong>5 kantong</strong> × <strong>Rp8.000</strong> per kantong = <em>8.000+8.000+8.000+8.000+8.000 = Rp40.000</em>.',
  },

  {
    type: 'logika',
    visual: '🏫',
    question: 'Sekolah punya 6 kelas. Setiap kelas memiliki 30 siswa. Berapa total siswa di sekolah itu?',
    options: [
      { letter:'A', text:'6 + 30 = 36 siswa' },
      { letter:'B', text:'30 × 6 = 6+6+6+... (30 kali) = 180 siswa' },
      { letter:'C', text:'6 × 30 = 30+30+30+30+30+30 = 180 siswa ✓' },
      { letter:'D', text:'6 × 6 = 36 siswa' },
    ],
    answer: 'C',
    explanation: '<strong>6 kelas</strong> × <strong>30 siswa</strong> per kelas = <em>30+30+30+30+30+30 = 180 siswa</em>.',
    wrongKeys: {
      'B': '30×6 artinya 6 diulang 30 kali — makna "30 kelas dengan 6 siswa tiap kelas". Di sini ada 6 kelas dengan 30 siswa, maka 6×30 lebih tepat.',
    }
  },

  // ═══ SOAL KONSEP PENTING (5 soal) ═══

  {
    type: 'logika',
    visual: '🤔',
    question: '"3 × 2" dan "2 × 3" sama-sama hasilnya 6. Manakah pernyataan yang BENAR tentang kedua perkalian ini?',
    options: [
      { letter:'A', text:'Keduanya identik: maknanya sama persis.' },
      { letter:'B', text:'3×2 = 2+2+2; sedangkan 2×3 = 3+3. Hasil sama, makna beda. ✓' },
      { letter:'C', text:'3×2 lebih besar dari 2×3.' },
      { letter:'D', text:'3×2 = 3+3; sedangkan 2×3 = 2+2+2.' },
    ],
    answer: 'B',
    explanation: '<em>3×2</em> = 2 diulang 3 kali = <strong>2+2+2 = 6</strong>. <em>2×3</em> = 3 diulang 2 kali = <strong>3+3 = 6</strong>. Hasilnya memang sama, tapi makna dan konteks penjumlahan berulangnya berbeda!',
    wrongKeys: {
      'D': '3×2 seharusnya 2+2+2 (2 diulang 3 kali), bukan 3+3. Kamu tertukar!',
    }
  },

  {
    type: 'logika',
    question: 'Mengapa 3 × 2 ≠ 2 × 3 dalam hal KONTEKS, meskipun hasilnya sama?',
    hint: '💡 Bayangkan 3 kantong isi 2, vs 2 kantong isi 3!',
    options: [
      { letter:'A', text:'Karena 3 lebih besar dari 2.' },
      { letter:'B', text:'Karena yang jadi "wadah" dan "isi" berbeda di setiap kasus. ✓' },
      { letter:'C', text:'Sebenarnya tidak ada bedanya sama sekali.' },
      { letter:'D', text:'Karena hasil perkaliannya pasti berbeda.' },
    ],
    answer: 'B',
    explanation: '3×2: ada <strong>3 kelompok</strong>, tiap kelompok berisi <strong>2</strong>. 2×3: ada <strong>2 kelompok</strong>, tiap kelompok berisi <strong>3</strong>. Dalam soal cerita nyata, ini bisa berarti sangat berbeda — misalnya 3 keranjang isi 2 apel ≠ 2 keranjang isi 3 apel!',
  },

  {
    type: 'logika',
    visual: '🔢',
    question: 'Perkalian adalah…',
    options: [
      { letter:'A', text:'Penjumlahan dua angka yang berbeda.' },
      { letter:'B', text:'Cara mengurangi angka besar.' },
      { letter:'C', text:'Penjumlahan yang diulang-ulang (berulang). ✓' },
      { letter:'D', text:'Cara membagi sesuatu menjadi sama rata.' },
    ],
    answer: 'C',
    explanation: 'Inti dari perkalian adalah <strong>penjumlahan berulang</strong>. <em>a × b</em> artinya menjumlahkan b sebanyak a kali. Itulah konsep dasar yang membuat perkalian masuk akal!',
  },

  {
    type: 'logika',
    question: 'Pada perkalian a × b, angka "a" berperan sebagai…',
    hint: '💡 Ingat rumus: a × b = b+b+b... (sebanyak a kali).',
    options: [
      { letter:'A', text:'Angka yang diulang (isi).' },
      { letter:'B', text:'Berapa kali pengulangan (jumlah pengulangan). ✓' },
      { letter:'C', text:'Hasil perkalian.' },
      { letter:'D', text:'Tidak ada peran khusus.' },
    ],
    answer: 'B',
    explanation: 'Dalam <em>a × b</em>: angka <strong>a</strong> = berapa kali b diulang (jumlah pengulangan / wadah). Angka <strong>b</strong> = yang diulang (isi). Contoh: 4×3 = 3+3+3+3 (3 diulang 4 kali).',
  },

  {
    type: 'ke-kali',
    question: 'Pernyataan mana yang BENAR tentang penjumlahan berulang?',
    options: [
      { letter:'A', text:'5 + 5 + 5 = 3 × 5, bukan 5 × 3 ✓' },
      { letter:'B', text:'5 + 5 + 5 = 5 × 3, bukan 3 × 5' },
      { letter:'C', text:'5 + 5 + 5 bisa ditulis 5 × 3 ATAU 3 × 5 (sama saja)' },
      { letter:'D', text:'5 + 5 + 5 = 5 + 3 = 8' },
    ],
    answer: 'A',
    explanation: '<em>5+5+5</em>: yang berulang adalah 5 (angka kedua), diulang 3 kali (angka pertama). Jadi perkalian yang paling tepat adalah <strong>3 × 5</strong>. Bukan 5 × 3, karena 5 × 3 artinya 3+3+3+3+3.',
    wrongKeys: {
      'C': 'Meski hasilnya sama, dalam konteks makna penjumlahan berulang, 5+5+5 hanya bisa disebut "3 × 5" (5 diulang 3 kali), bukan "5 × 3" (3 diulang 5 kali).',
    }
  },

]; // end QUESTION_BANK


/* ════════════════════════════════════════════════════════
   GAME STATE
════════════════════════════════════════════════════════ */
let sessionQuestions = [];  // soal yang dipilih untuk sesi ini
let currentIndex     = 0;
let score            = 0;
let answered         = false;

const TYPE_LABELS = {
  'cerita'  : '📖 Soal Cerita',
  'ke-kali' : '➡️ Ubah ke Perkalian',
  'ke-juml' : '➡️ Ubah ke Penjumlahan',
  'logika'  : '🌍 Logika Nyata',
};
const TYPE_BADGE_CLASSES = {
  'cerita'  : 'badge--cerita',
  'ke-kali' : 'badge--ke-kali',
  'ke-juml' : 'badge--ke-juml',
  'logika'  : 'badge--logika',
};

/* ── SHUFFLE ── */
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/* ════════════════════════════════════════════════════════
   MULAI GAME
════════════════════════════════════════════════════════ */
function startGame() {
  const count = parseInt(document.getElementById('qCount').value);
  const shuffled = shuffle(QUESTION_BANK);
  sessionQuestions = shuffled.slice(0, Math.min(count, shuffled.length));
  currentIndex = 0;
  score = 0;

  document.getElementById('screenStart').classList.remove('active');
  document.getElementById('screenGame').classList.add('active');

  loadQuestion();
}

/* ════════════════════════════════════════════════════════
   MUAT SOAL
════════════════════════════════════════════════════════ */
function loadQuestion() {
  answered = false;
  const total = sessionQuestions.length;
  const q     = sessionQuestions[currentIndex];

  // Progress bar
  const pct = (currentIndex / total) * 100;
  document.getElementById('progressFill').style.width = pct + '%';
  document.getElementById('progressLabel').textContent = `Soal ${currentIndex + 1} dari ${total}`;

  // Skor
  document.getElementById('scoreDisplay').textContent = score;

  // Animasi kartu
  const card = document.getElementById('questionCard');
  card.style.opacity = '0';
  card.style.transform = 'translateY(16px)';

  setTimeout(() => {
    // Badge tipe
    const badge = document.getElementById('qTypeBadge');
    badge.textContent = TYPE_LABELS[q.type] || '📝 Soal';
    badge.className = 'q-type-badge ' + (TYPE_BADGE_CLASSES[q.type] || '');

    // Visual emoji
    const visual = document.getElementById('qVisual');
    visual.textContent = q.visual || '';

    // Teks soal
    document.getElementById('qText').textContent = q.question;

    // Hint
    const hint = document.getElementById('qHint');
    hint.innerHTML = q.hint || '';

    // Pilihan
    buildChoices(q);

    // Sembunyikan tombol next
    document.getElementById('btnNext').style.display = 'none';

    // Fade in
    card.style.transition = 'opacity 0.3s ease, transform 0.3s cubic-bezier(0.34,1.56,0.64,1)';
    card.style.opacity = '1';
    card.style.transform = 'translateY(0)';
  }, 180);
}

function buildChoices(q) {
  const grid = document.getElementById('choicesGrid');
  grid.innerHTML = '';
  q.options.forEach(opt => {
    const btn = document.createElement('button');
    btn.className = 'choice-btn';
    btn.dataset.letter = opt.letter;
    btn.innerHTML = `<span class="choice-letter">${opt.letter}</span><span>${opt.text}</span>`;
    btn.addEventListener('click', () => handleAnswer(opt.letter));
    grid.appendChild(btn);
  });
}

/* ════════════════════════════════════════════════════════
   PROSES JAWABAN
════════════════════════════════════════════════════════ */
function handleAnswer(chosen) {
  if (answered) return;
  answered = true;

  const q    = sessionQuestions[currentIndex];
  const btns = document.querySelectorAll('.choice-btn');
  const correct = q.answer;
  const isRight = chosen === correct;

  // Warnai semua tombol
  btns.forEach(btn => {
    const letter = btn.dataset.letter;
    if (letter === correct) {
      btn.classList.add('is-correct');
    } else if (letter === chosen && !isRight) {
      btn.classList.add('is-wrong');
    } else {
      btn.classList.add('is-dimmed');
    }
    btn.disabled = true;
  });

  if (isRight) {
    score++;
    document.getElementById('scoreDisplay').textContent = score;
    // Mini confetti untuk benar
    spawnConfetti(20, true);
    // Tunda ke soal berikutnya (atau tampil feedback singkat)
    setTimeout(() => {
      document.getElementById('btnNext').style.display = 'block';
    }, 600);
  } else {
    // Tampilkan feedback modal penjelasan
    setTimeout(() => showFeedback(q, chosen), 500);
  }
}

/* ════════════════════════════════════════════════════════
   FEEDBACK MODAL
════════════════════════════════════════════════════════ */
function showFeedback(q, chosen) {
  const overlay = document.getElementById('feedbackOverlay');

  document.getElementById('feedbackIcon').textContent = '💡';
  document.getElementById('feedbackTitle').textContent = 'Hampir Benar!';

  // Cek apakah ada penjelasan khusus per pilihan
  let bodyText = q.explanation;
  if (q.wrongKeys && q.wrongKeys[chosen]) {
    bodyText = q.wrongKeys[chosen];
  }
  document.getElementById('feedbackBody').innerHTML = bodyText;

  // Tampilkan jawaban yang benar
  const correctOption = q.options.find(o => o.letter === q.answer);
  document.getElementById('feedbackCorrectAns').textContent = `${q.answer}. ${correctOption.text}`;

  overlay.classList.add('open');
}

window.closeFeedback = function() {
  document.getElementById('feedbackOverlay').classList.remove('open');
  document.getElementById('btnNext').style.display = 'block';
};

/* ════════════════════════════════════════════════════════
   SOAL BERIKUTNYA
════════════════════════════════════════════════════════ */
window.nextQuestion = function() {
  currentIndex++;
  if (currentIndex >= sessionQuestions.length) {
    showResult();
  } else {
    loadQuestion();
  }
};

/* ════════════════════════════════════════════════════════
   HASIL AKHIR
════════════════════════════════════════════════════════ */
function showResult() {
  const total  = sessionQuestions.length;
  const pct    = Math.round((score / total) * 100);
  const wrong  = total - score;

  document.getElementById('screenGame').classList.remove('active');
  document.getElementById('screenResult').classList.add('active');

  // Skor besar
  document.getElementById('resultScoreBig').textContent = `${score} / ${total}`;
  document.getElementById('statCorrect').textContent = score;
  document.getElementById('statWrong').textContent   = wrong;

  // Pesan & maskot
  let mascot, title, msg;
  if (pct === 100) {
    mascot = '🏆'; title = 'SEMPURNA!';
    msg = `Wah, kamu luar biasa! Semua ${total} soal benar! Kamu benar-benar memahami bahwa perkalian adalah penjumlahan berulang. Terus semangat belajar!`;
    document.getElementById('perfectBanner').style.display = 'block';
    spawnConfetti(120);
  } else if (pct >= 80) {
    mascot = '🥇'; title = 'Hebat Sekali!';
    msg = `Nilai kamu ${pct}%! Kamu sudah memahami konsep perkalian dengan baik. Coba lagi untuk hasil sempurna!`;
  } else if (pct >= 60) {
    mascot = '😊'; title = 'Bagus!';
    msg = `Nilai kamu ${pct}%. Terus berlatih! Ingat: perkalian a×b artinya b dijumlahkan sebanyak a kali.`;
  } else if (pct >= 40) {
    mascot = '💪'; title = 'Semangat!';
    msg = `Nilai kamu ${pct}%. Jangan menyerah! Coba ulangi dan ingat konsepnya: perkalian = penjumlahan berulang.`;
  } else {
    mascot = '🌱'; title = 'Ayo Belajar Lagi!';
    msg = `Nilai kamu ${pct}%. Tidak apa-apa! Konsep perkalian butuh latihan. Kamu pasti bisa jika terus berlatih!`;
  }

  document.getElementById('resultMascot').textContent = mascot;
  document.getElementById('resultTitle').textContent  = title;
  document.getElementById('resultMsg').textContent    = msg;
}

/* ════════════════════════════════════════════════════════
   RESTART & HOME
════════════════════════════════════════════════════════ */
window.restartGame = function() {
  document.getElementById('screenResult').classList.remove('active');
  document.getElementById('perfectBanner').style.display = 'none';
  startGame();
};

window.goHome = function() {
  document.getElementById('screenResult').classList.remove('active');
  document.getElementById('screenGame').classList.remove('active');
  document.getElementById('screenStart').classList.add('active');
  document.getElementById('perfectBanner').style.display = 'none';
};

/* ════════════════════════════════════════════════════════
   KONFETTI
════════════════════════════════════════════════════════ */
function spawnConfetti(count = 40, mini = false) {
  const wrap = document.getElementById('confettiWrap');
  const colors = ['#42A5F5','#66BB6A','#F9A825','#AB47BC','#EF5350','#4DD0E1','#FF8A65'];
  for (let i = 0; i < count; i++) {
    const el = document.createElement('div');
    el.className = 'conf';
    const size = mini ? (Math.random() * 6 + 4) : (Math.random() * 10 + 6);
    el.style.cssText = `
      left: ${Math.random() * 100}%;
      background: ${colors[Math.floor(Math.random() * colors.length)]};
      width: ${size}px;
      height: ${size}px;
      border-radius: ${Math.random() > 0.5 ? '50%' : '3px'};
      animation-duration: ${(Math.random() * 2.5 + 1.5).toFixed(2)}s;
      animation-delay: ${(Math.random() * 0.6).toFixed(2)}s;
      transform: rotate(${Math.floor(Math.random() * 360)}deg);
    `;
    wrap.appendChild(el);
    el.addEventListener('animationend', () => el.remove());
  }
}
