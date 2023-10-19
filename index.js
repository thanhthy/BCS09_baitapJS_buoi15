// BÀI TẬP 1: QUẢN LÍ TUYỂN SINH
// xác nhận và lưu trữ thông tin người nhận
// xử lí thông tin người nhận bằng cách xác định khi vực và tính tổng điểm của sinh viên
// DOM tới nút button và khu vực thông báo hiện thị kết quả
// Bắt đầu làm:
// B1: lấy dữ liệu từ người dùng
// tách hàm để kiểm tra giá trị điêm cộng theo khu vực và đối tượng
// tách hàm để tính chia nhỏ logic tính toán theo khu vực
function diemCongTheoKV(khuVuc) {
  // sử dụng switch case để xác định điểm cộng theo từng khu vực
  switch (khuVuc) {
    case "X":
      return 0;
    case "A":
      return 2;
    case "B":
      return 1;
    case "C":
      return 0.5;
  }
}
// tách hàm để tính chia nhỏ logic tính toán theo đối tượng
function diemCongTheoDT(doiTuong) {
  // sử dụng switch case để xác định điểm cộng theo từng đối tượng
  switch (doiTuong) {
    case "0":
      return 0;
    case "1":
      return 2.5;
    case "2":
      return 1.5;
    case "3":
      return 1;
  }
}

// DOM tới nút button
document.getElementById("diemTong").onclick = function () {
  var khuVuc = document.getElementById("chonKhuVuc").value;
  var doiTuong = document.getElementById("chonDoiTuong").value;
  var diemToan = document.getElementById("txtDiemToan").value * 1;
  var diemVan = document.getElementById("txtDiemVan").value * 1;
  var diemAnh = document.getElementById("txtDiemAnh").value * 1;
  var diemKhuVuc = diemCongTheoKV(khuVuc) * 1;
  var diemDoiTuong = diemCongTheoDT(doiTuong) * 1;
  console.log(diemKhuVuc);
  console.log(diemDoiTuong);
  var tong = diemToan + diemVan + diemAnh + diemKhuVuc + diemDoiTuong;
  console.log(tong);
  document.getElementById(
    "diemCuoiCung"
  ).innerHTML = `Điểm của bạn là: ${tong}`;
  if (tong >= 22) {
    document.getElementById("txtKetQua").innerHTML = `Đỗ`;
  } else {
    document.getElementById("txtKetQua").innerHTML = `Trượt, còn non lắm`;
  }
};
//  BÀI TẬP 2: TÍNH SỐ TIỀN ĐIỆN MÀ NGƯỜI DÙNG TIÊU THỤ
// Cho người dùng nhập vào tên tuổi và số điện đã tiêu thụ sau đó lưu trữ dữ liệu đấy
// xử lí thông tin để lấy ra được giá tiền mà người dùng đã tiêu thụ điện theo bảng giá
//50kw đầu: 500d/kw
//50kw kế: 650d/kw
//100kw kế: 850d/kw
//150kw kế: 1100d/kw
//còn lại: 1300d/kw
// xử lí và DOM tới nút button
document.getElementById("tinhDienNang").onclick = function () {
  var soDienSuDung = document.getElementById("soDien").value * 1;
  var ten = document.getElementById("hoVaTen").value;
  var soTienTra = 0;
  if (soDienSuDung < 50) {
    alert("vui lòng nhập đúng số điện đã tiêu thụ");
  }
  if (soDienSuDung == 50) {
    soTienTra = soDienSuDung * 50;
  } else if (soDienSuDung > 50 && soDienSuDung < 100) {
    soTienTra = 50 * 50 + (soDienSuDung - 50) * 650;
  } else if (soDienSuDung >= 100 && soDienSuDung < 200) {
    soTienTra = 50 * 50 + 50 * 650 + (soDienSuDung - 100) * 850;
  } else if (soDienSuDung >= 200 && soDienSuDung < 350) {
    soTienTra = 50 * 50 + 50 * 650 + 100 * 850 + (soDienSuDung - 200) * 1100;
  } else {
    soTienTra =
      50 * 50 + 50 * 650 + 100 * 850 + 150 * 1100 + (soDienSuDung - 350) * 1300;
  }

  document.getElementById(
    "soTienDien"
  ).innerHTML = `Số tiền điện phải trả là: ${soTienTra.toLocaleString("it-IT", {
    style: "currency",
    currency: "VND",
  })}`;
};

//  BÀI TẬP 3: TÍNH THUÊ THU NHẬP CÁ NHÂN
// nhận là lưu trữ giá trị người dùng nhập
// các thông tin có:
// Thu nhập chịu thuế(triệu) :
// Đến 60 Thuế suất (%) là 5
// Trên 60 đến 120 Thuế suất (%) là 10
// Trên 120 đến 210 Thuế suất (%) là 15
// Trên 210 đến 384 Thuế suất (%) là 20
// Trên 384 đến 624 Thuế suất (%) là 25
// Trên 624 đến 960 Thuế suất (%) là 30
// Trên 960 Thuế suất (%) là 35
// cách xử lí:
// Thu nhập chịu thuế = Tổng thu nhập năm - 4tr- Số người phụ thuộc * 1.6tr
// sau đó muốn tính số thuế cần nộp lấy thu nhập chịu thuế nhân với % số thuế suất

document.getElementById("tinhThue").onclick = function () {
  var sothuNhap = document.getElementById("thuNhap").value * 1;
  var soNguoi = document.getElementById("soNguoi").value * 1;
  var thuNhapChiuThue = sothuNhap - 4000000 - soNguoi * 1600000;
  var xuatThue = 0;
  if (thuNhapChiuThue < 60000000) {
    alert("người dùng chưa cần đóng thuế vì quá nghèo");
  }
  if (thuNhapChiuThue == 60000000) {
    xuatThue = thuNhapChiuThue * 0.05;
  } else if (thuNhapChiuThue > 60000000 && thuNhapChiuThue <= 120000000) {
    xuatThue = thuNhapChiuThue * 0.1;
  } else if (thuNhapChiuThue > 120000000 && thuNhapChiuThue <= 210000000) {
    xuatThue = thuNhapChiuThue * 0.15;
  } else if (thuNhapChiuThue > 210000000 && thuNhapChiuThue <= 384000000) {
    xuatThue = thuNhapChiuThue * 0.2;
  } else if (thuNhapChiuThue > 384000000 && thuNhapChiuThue <= 624000000) {
    xuatThue = thuNhapChiuThue * 0.25;
  } else if (thuNhapChiuThue > 624000000 && thuNhapChiuThue <= 960000000) {
    xuatThue = thuNhapChiuThue * 0.3;
  } else {
    xuatThue = thuNhapChiuThue * 0.35;
  }
  document.getElementById(
    "tienThue"
  ).innerHTML = `Số thuế bạn cần đóng là: ${xuatThue.toLocaleString("it-IT", {
    style: "currency",
    currency: "VND",
  })}`;
};
// BÀI TẬP 4:
// var anKetNoi = document.getElementById('ketNoiHienThi');
// anKetNoi.style.display = 'none'
// document.getElementById('hienKetNoi').onclick = function(){
//     anKetNoi.style.display = 'block'
// }
function toggleConnectionInput() {
    var kiemTraloaiKH = document.getElementById("loaiKH").value;
    var kiemTraHienThi = document.getElementById("ketNoiHienThi");

    if (kiemTraloaiKH === "doanhNghiep") {
        kiemTraHienThi.style.display = "block";
    } else {
        kiemTraHienThi.style.display = "none";
    }
}
function tienDichVuDoanhNghiep(soKetNoi){
    var tienDichVu = 75;
    if(soKetNoi > 10){
       tienDichVu  = tienDichVu + (soKetNoi - 10)*5
       return tienDichVu;
    }else{
        tienDichVu = 75;
    }
    
    
    
}

document.getElementById('tinhTienCap').onclick = function(){
    var maKH = document.getElementById('maKH').value;
    var loaiKH = document.getElementById('loaiKH').value;
    var soKetNoi = document.getElementById('soKetNoi').value *1;
    var soKenh = document.getElementById('soKenh').value *1;
    var tongTien = 0;
  if(loaiKH === 'nhaDan'){
    var phiHoaDon = 4.5;
    var phiDichVu = 20.5;
    var phiThueKenh = 7.5 * soKenh;
  }else if (loaiKH === 'doanhNghiep'){
    var phiHoaDon = 15;
    var phiDichVu = tienDichVuDoanhNghiep(soKetNoi);
    var phiThueKenh = 50 * soKenh;
  }
  tongTien = phiHoaDon + phiDichVu + phiThueKenh;
// console.log(tongTien)
document.getElementById('tienCap').innerHTML = `Tiền cáp phải trả là: ${tongTien}$`
}
