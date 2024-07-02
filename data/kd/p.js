const P1 = [
  {
    "kd_skp": "Melakukan operan jaga setiap pergantian shift",
    "kd_skp_desc": "Melakukan operan shift dan mengerjakan operan yang belum selesai dari shift sebelumnya",
    "start_time": "0730",
    "end_time": "0745"
  },
  {
    "kd_skp": "Distribusi obat dan alat kesehatan ke unit-unit",
    "kd_skp_desc": "Melakukan operan obat dan alkes ke unit kamar operasi untuk pemakaian hari sebelumnya",
    "start_time": "0745",
    "end_time": "0830"
  },
  {
    "kd_skp": "Menginput harga obat dan alkes (5)",
    "kd_skp_desc": "Menginput resep manual dari poliklinik \nMengeprint resep obat di Ena dari poliklinik, dan memberikan nomor antrian ke pasien\nMenginput floorstock IGD berupa obat dan alkes, dan mengeprint resep IGD\nMengeprint resep obat di Ena dari ruang rawat inap",
    "start_time": "0830",
    "end_time": "0930"
  },
  {
    "kd_skp": "Melaksanakan pelayanan resep non racikan (15)",
    "kd_skp_desc": "Menyiapkan obat dan memberi etiket pada resep non racikan untuk pasien rawat jalan, IGD dan rawat inap yang sudah diprint",
    "start_time": "0930",
    "end_time": "1100"
  },
  {
    "kd_skp": "Melaksanakan pelayanan resep racikan (45)",
    "kd_skp_desc": "Melakukan pelayanan resep rawat inap dan rawat jalan mulai dari penerimaan resep meghitung berapa tablet yang digunakan, dan meracikannya menjadi satu sesuai dengan pemintaan dokter. Lalu, memberikan etiket dan aturan pakai pada obat yang sudah diracik",
    "start_time": "1100",
    "end_time": "1230"
  },
  {
    "kd_skp": "Membersihkan dan memelihara lingkungan tempat kerja",
    "kd_skp_desc": "Membersihkan dan merapikan meja racik, membersihkan alat-alat yang sudah selesai dipakai untuk meracik obat",
    "start_time": "1230",
    "end_time": "1330"
  },
  {
    "kd_skp": "Membuat laporan penggunaan barang pakai habis (ATK, Obat, Alkes)",
    "kd_skp_desc": "Menghitung stok fisik obat narkotik & psikotropik dan menuliskan stok akhir di buku laporan pengeluaran narkotik & psikotropik Menghitung stok fisik vaksin dan menuliskan stok akhir di buku laporan pengeluaran vaksin",
    "start_time": "1330",
    "end_time": "1400"
  },
  {
    "kd_skp": "Melakukan operan jaga setiap pergantian shift",
    "kd_skp_desc": "Melakukan operan shift untuk shift selanjutnya untuk melakukan tugas yang belum selesai dari shift pertama",
    "start_time": "1400",
    "end_time": "1415"
  }
];

const P2 = [
  {
    "kd_skp": "Melakukan operan jaga setiap pergantian shift",
    "kd_skp_desc": "Melakukan operan shift dan mengerjakan operan yang belum selesai dari shift sebelumnya",
    "start_time": "0730",
    "end_time": "0745"
  },
  {
    "kd_skp": "Menginput harga obat dan alkes (5)",
    "kd_skp_desc": "Menginput floorstock IGD berupa obat dan alkes, dan mengeprint resep IGD Mengeprint resep obat di Ena dari ruang rawat inap",
    "start_time": "0745",
    "end_time": "0830"
  },
  {
    "kd_skp": "Melaksanakan pelayanan resep non racikan (15)",
    "kd_skp_desc": "Menyiapkan obat dan memberi etiket pada resep non racikan untuk pasien IGD dan rawat inap yang sudah diprint",
    "start_time": "0830",
    "end_time": "1030"
  },
  {
    "kd_skp": "Melaksanakan pelayanan resep racikan (45)",
    "kd_skp_desc": "Melakukan pelayanan resep rawat inap dan IGD, mulai dari penerimaan resep meghitung berapa tablet yang digunakan, dan meracikannya menjadi satu sesuai dengan pemintaan dokter. Lalu, memberikan etiket dan aturan pakai pada obat yang sudah diracik",
    "start_time": "1030",
    "end_time": "1230"
  },
  {
    "kd_skp": "Membersihkan dan memelihara lingkungan tempat kerja",
    "kd_skp_desc": "Membersihkan dan merapikan meja racik, membersihkan alat-alat yang sudah selesai dipakai untuk meracik obat",
    "start_time": "1230",
    "end_time": "1330"
  },
  {
    "kd_skp": "Membuat laporan penggunaan barang pakai habis (ATK, Obat, Alkes)",
    "kd_skp_desc": "Menghitung stok fisik obat narkotik & psikotropik dan menuliskan stok akhir di buku laporan pengeluaran narkotik & psikotropik Menghitung stok fisik vaksin dan menuliskan stok akhir di buku laporan pengeluaran vaksin",
    "start_time": "1330",
    "end_time": "1400"
  },
  {
    "kd_skp": "Melakukan operan jaga setiap pergantian shift",
    "kd_skp_desc": "Melakukan operan shift untuk shift selanjutnya untuk melakukan tugas yang belum selesai dari shift pertama",
    "start_time": "1400",
    "end_time": "1415"
  }
];

module.exports.P1 = P1;
module.exports.P2 = P2;
