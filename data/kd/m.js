const M1 = [
  {
    "kd_skp": "Melakukan operan jaga setiap pergantian shift",
    "kd_skp_desc": "Melakukan operan shift dan mengerjakan operan yang belum selesai dari shift sebelumnya",
    "start_time": "2030",
    "end_time": "2045"
  },
  {
    "kd_skp": "Membuat laporan kegiatan",
    "kd_skp_desc": "Memisahkan, menghitung, dan mengelompokkan resep rawat jalan berdasarkan poliklinik\nMemisahkan, menghitung, dan mengelompokkan resep rawat inap berdasarkan ruang rawat inap\nMenulis di buku laporan morpot",
    "start_time": "2045",
    "end_time": "2230"
  },
  {
    "kd_skp": "Membuat laporan penggunaan barang pakai habis (ATK, Obat, Alkes)",
    "kd_skp_desc": "Menyiapkan pemakaian obat dan alkes kamar operasi",
    "start_time": "2230",
    "end_time": "2359"
  },
  {
    "kd_skp": "Menginput harga obat dan alkes (5)",
    "kd_skp_desc": "Mengeprint resep obat di Ena dari ruang rawat inap dan menginput floorstock IGD berupa obat dan alkes",
    "start_time": "0000",
    "end_time": "0100"
  },
  {
    "kd_skp": "Melaksanakan pelayanan resep non racikan (15)",
    "kd_skp_desc": "Menyiapkan obat dan memberi etiket pada resep non racikan untuk pasien rawat inap / IGD",
    "start_time": "0100",
    "end_time": "0300"
  },
  {
    "kd_skp": "Melaksanakan pelayanan resep racikan (45)",
    "kd_skp_desc": "Melakukan pelayanan resep rawat inap mulai dari penerimaan resep meghitung berapa tablet yang digunakan, dan meracikannya menjadi satu sesuai dengan pemintaan dokter. Lalu, memberikan etiket dan aturan pakai",
    "start_time": "0300",
    "end_time": "0430"
  },
  {
    "kd_skp": "Membersihkan dan memelihara lingkungan tempat kerja",
    "kd_skp_desc": "Membersihkan dan merapikan meja racik, membersihkan alat-alat yang sudah selesai dipakai untuk meracik obat, merapikan meja kemas",
    "start_time": "0430",
    "end_time": "0600"
  },
  {
    "kd_skp": "Distribusi obat dan alat kesehatan ke unit-unit",
    "kd_skp_desc": "Mendistribusikan obat dan alat kesehatan yang sudah dikerjakan ke seluruh ruangan rawat inap",
    "start_time": "0600",
    "end_time": "0630"
  },
  {
    "kd_skp": "Membuat laporan kegiatan",
    "kd_skp_desc": "Menghitung jumlah resep IGD dan rawat inap, memasukkan data jumlah resep per-unit ke laporan morpot",
    "start_time": "0630",
    "end_time": "0730"
  },
  {
    "kd_skp": "Melakukan operan jaga setiap pergantian shift",
    "kd_skp_desc": "Melakukan operan shift dengan petugas shift selanjutnya untuk TL tugas yang belum selesai dari shift sebelumnya",
    "start_time": "0730",
    "end_time": "0745"
  }
];

const M2 = [
  {
    "kd_skp": "Melakukan operan jaga setiap pergantian shift",
    "kd_skp_desc": "Melakukan operan shift dan mengerjakan operan yang belum selesai dari shift sebelumnya",
    "start_time": "2030",
    "end_time": "2045"
  },
  {
    "kd_skp": "Membuat laporan kegiatan",
    "kd_skp_desc": "Memisahkan, menghitung, dan mengelompokkan resep IGD\nMemisahkan, menghitung, dan mengelompokkan resep rawat inap berdasarkan ruang rawat inap\nMenulis di buku laporan morpot",
    "start_time": "2045",
    "end_time": "2230"
  },
  {
    "kd_skp": "Menginput harga obat dan alkes (5)",
    "kd_skp_desc": "Mengeprint resep obat Ena dari ruang rawat inap dan menginput floorstock IGD berupa obat dan alkes",
    "start_time": "2230",
    "end_time": "2359"
  },
  {
    "kd_skp": "Melaksanakan pelayanan resep non racikan (15)",
    "kd_skp_desc": "Menyiapkan obat dan memberi etiket pada resep non racikan untuk pasien rawat inap / IGD",
    "start_time": "0000",
    "end_time": "0100"
  },
  {
    "kd_skp": "Menginput harga obat dan alkes (5)",
    "kd_skp_desc": "Menginput floorstock IGD berupa obat dan alkes dan mengeprint resep yang sudah di input",
    "start_time": "0100",
    "end_time": "0300"
  },
  {
    "kd_skp": "Melaksanakan pelayanan resep racikan (45)",
    "kd_skp_desc": "Melakukan pelayanan resep rawat inap mulai dari penerimaan resep meghitung berapa tablet yang digunakan, dan meracikannya menjadi satu sesuai dengan pemintaan dokter. Lalu, menuliskan aturan pakai dan menempelkan etket pada obat yang sudah diracik",
    "start_time": "0300",
    "end_time": "0430"
  },
  {
    "kd_skp": "Membersihkan dan memelihara lingkungan tempat kerja",
    "kd_skp_desc": "Membersihkan dan merapikan meja racik, membersihkan alat-alat yang sudah selesai dipakai untuk meracik obat, merapikan meja kemas",
    "start_time": "0430",
    "end_time": "0600"
  },
  {
    "kd_skp": "Distribusi obat dan alat kesehatan ke unit-unit",
    "kd_skp_desc": "Mendistribusikan obat dan alat kesehatan yang sudah dikerjakan ke seluruh ruangan rawat inap",
    "start_time": "0600",
    "end_time": "0630"
  },
  {
    "kd_skp": "Membuat laporan kegiatan",
    "kd_skp_desc": "Menghitung jumlah resep IGD dan rawat inap, memasukkan data jumlah resep per-unit ke laporan morpot",
    "start_time": "0630",
    "end_time": "0730"
  },
  {
    "kd_skp": "Melakukan operan jaga setiap pergantian shift",
    "kd_skp_desc": "Melakukan operan shift dengan petugas shift selanjutnya untuk TL tugas yang belum selesai dari shift sebelumnya",
    "start_time": "0730",
    "end_time": "0745"
  }
];

module.exports.M1 = M1;
module.exports.M2 = M2;
