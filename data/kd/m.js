const M1s = [
  {
    kd_skp: "Melakukan operan jaga setiap pergantian shift",
    kd_skp_desc:
      "Melakukan operan shift dan mengerjakan operan yang belum selesai dari shift sebelumnya",
    start_time: "20:30",
    end_time: "20:45",
  },
  {
    kd_skp: "Membuat laporan kegiatan",
    kd_skp_desc:
      "Memisahkan, menghitung, dan mengelompokkan resep rawat jalan berdasarkan poliklinik\nMemisahkan, menghitung, dan mengelompokkan resep rawat inap berdasarkan ruang rawat inap\nMenulis di buku laporan morpot",
    start_time: "20:45",
    end_time: "22:30",
  },
  {
    kd_skp: "Membuat laporan penggunaan barang pakai habis (ATK, Obat, Alkes)",
    kd_skp_desc: "Menyiapkan pemakaian obat dan alkes kamar operasi",
    start_time: "22:30",
    end_time: "23:59",
  },
  {
    kd_skp: "Menginput harga obat dan alkes (5)",
    kd_skp_desc:
      "Mengeprint harga, resep obat Ena dari ruang rawat inap dan menginput floorstock IGD berupa obat dan alkes",
    start_time: "00:00",
    end_time: "01:00",
  },
  {
    kd_skp: "Melaksanakan pelayanan resep non racikan (15)",
    kd_skp_desc:
      "Menyiapkan dan memberi etiket pada resep non racikan untuk pasien rawat inap",
    start_time: "01:00",
    end_time: "03:00",
  },
  {
    kd_skp: "Melaksanakan pelayanan resep racikan (45)",
    kd_skp_desc:
      "Melakukan pelayanan resep rawat inap mulai dari penerimaan resep meghitung berapa tablet yang digunakan, dan meracikannya menjadi satu sesuai dengan pemintaan dokter. Lalu, memberikan etiket dan aturan pakai",
    start_time: "03:00",
    end_time: "04:30",
  },
  {
    kd_skp: "Membersihkan dan memelihara lingkungan tempat kerja",
    kd_skp_desc:
      "Membersihkan dan merapikan meja racik, membersihkan alat-alat yang sudah selesai dipakai untuk meracik obat, merapikan meja kemas",
    start_time: "04:30",
    end_time: "06:00",
  },
  {
    kd_skp: "Distribusi obat dan alat kesehatan ke unit-unit",
    kd_skp_desc:
      "Mendistribusikan obat dan alat kesehatan ke seluruh ruangan rawat inap",
    start_time: "06:00",
    end_time: "06:30",
  },
  {
    kd_skp: "Membuat laporan kegiatan",
    kd_skp_desc:
      "Menghitung jumlah resep IGD dan rawat inap, memasukkan data jumlah resep per-unit ke laporan morpot",
    start_time: "06:30",
    end_time: "07:30",
  },
  {
    kd_skp: "Melakukan operan jaga setiap pergantian shift",
    kd_skp_desc:
      "Melakukan operan shift dengan petugas shift selanjutnya untuk TL tugas yang belum selesai dari shift sebelumnya'",
    start_time: "07:30",
    end_time: "07:45",
  },
];

const M2 = [];

const M1 = [
  {
    kd_skp: "Membuat laporan penggunaan barang pakai habis (ATK, Obat, Alkes)",
    kd_skp_desc: "Menyiapkan pemakaian obat dan alkes kamar operasi",
    start_time: "22:30",
    end_time: "23:59",
  },
  {
    kd_skp: "Menginput harga obat dan alkes (5)",
    kd_skp_desc:
      "Mengeprint harga, resep obat Ena dari ruang rawat inap dan menginput floorstock IGD berupa obat dan alkes",
    start_time: "00:00",
    end_time: "01:00",
  },
];

module.exports.M1 = M1;
module.exports.M2 = M2;
