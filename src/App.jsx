import { Container, Navbar, Nav, Row, Col, Card, Button } from 'react-bootstrap';
// Memanggil icon Bootstrap
import 'bootstrap-icons/font/bootstrap-icons.css';

// --- MEMANGGIL FOTO PROFIL KAMU ---
import fotoSaya from './assets/rizkika.jpeg'; 

// --- MEMANGGIL FOTO PROJEK ---
import fotoProjek1 from './assets/project 1.png';
import fotoProjek2 from './assets/project 2.png';
import fotoProjek3 from './assets/project 3.png';

function App() {
  return (
    <>
      {/* --- BAGIAN NAVIGASI --- */}
      <Navbar expand="lg" sticky="top" className="navbar-custom">
        <Container>
          <Navbar.Brand href="#home">
            <i className="bi bi-code-slash me-2"></i>Rizkika.Dev
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#tentang">Tentang Saya</Nav.Link>
              <Nav.Link href="#portofolio">Portofolio</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* --- BAGIAN TENTANG SAYA (HERO SECTION) --- */}
      <Container id="tentang" className="d-flex align-items-center" style={{ minHeight: '90vh' }}>
        <Row className="justify-content-center align-items-center text-center text-md-start w-100">
          
          {/* FOTO PROFIL */}
          <Col md={6} className="mb-5 mb-md-0 d-flex justify-content-center">
            <img 
              src={fotoSaya} 
              alt="Foto Rizkika Nabila" 
              className="rounded-circle p-1"
              style={{ 
                width: '250px', 
                height: '250px', 
                objectFit: 'cover', 
                objectPosition: 'center 15%', // Biar dahi nggak kepotong
                border: '4px solid var(--accent-color)' 
              }}
            />
          </Col>

          {/* TEKS PERKENALAN & SOSIAL MEDIA */}
          <Col md={6}>
            <h1 style={{ fontWeight: 700, fontSize: '3rem' }}>
              Halo, Saya <br/><span className="text-accent">Rizkika Nabila</span>
            </h1>
            <p className="lead mt-3" style={{ color: 'var(--text-secondary)' }}>
              Mahasiswi UIN Sultan Syarif Kasim Riau yang sedang mendalami <span className="text-accent">Web Development</span>. 
              Suka belajar hal baru dan membangun solusi kreatif melalui baris kode.
            </p>

            {/* IKON SOSIAL MEDIA ASLI RIZKIKA */}
            <div className="d-flex gap-3 mb-4 justify-content-center justify-content-md-start">
              <a href="https://github.com/Rizkika159" target="_blank" rel="noreferrer" className="text-accent fs-3">
                <i className="bi bi-github"></i>
              </a>
              <a href="https://linkedin.com/in/12450120354@students.uin-suska.ac.id" target="_blank" rel="noreferrer" className="text-accent fs-3">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="https://instagram.com/rizkikanabilaaa" target="_blank" rel="noreferrer" className="text-accent fs-3">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="mailto:12450120354@students.uin-suska.ac.id" className="text-accent fs-3">
                <i className="bi bi-envelope-fill"></i>
              </a>
            </div>

            <Button className="btn-accent" href="#portofolio">
              <i className="bi bi-rocket-takeoff me-2"></i>Lihat Projekku
            </Button>
          </Col>
        </Row>
      </Container>

      {/* --- BAGIAN PORTOFOLIO --- */}
      <Container id="portofolio" className="py-5">
        <div className="text-center">
          <h2 className="section-title">Portofolio Saya</h2>
        </div>
        <Row>
          
          {/* Projek 1 */}
          <Col lg={4} md={6} className="mb-4">
            <Card className="custom-card h-100">
              <Card.Img variant="top" src={fotoProjek1} style={{borderTopLeftRadius: '15px', borderTopRightRadius: '15px'}} />
              <Card.Body>
                <Card.Title><i className="bi bi-journal-richtext text-accent me-2"></i>Projek Pertama</Card.Title>
                <Card.Text>Aplikasi desktop pencatat keuangan yang dibangun menggunakan Java Swing. Projek ini dilengkapi fitur pencatatan pemasukan/pengeluaran, kalkulasi saldo otomatis, serta penerapan algoritma Selection Sort untuk mengurutkan riwayat transaksi.</Card.Text>
                {/* Link GitHub Projek 1 */}
                <Button className="btn-accent mt-2" href="https://github.com/Rizkika159/KelasPL" target="_blank" rel="noreferrer">
                  Lihat di GitHub <i className="bi bi-github ms-1"></i>
                </Button>
              </Card.Body>
            </Card>
          </Col>

          {/* Projek 2 */}
          <Col lg={4} md={6} className="mb-4">
            <Card className="custom-card h-100">
              <Card.Img variant="top" src={fotoProjek2} style={{borderTopLeftRadius: '15px', borderTopRightRadius: '15px'}} />
              <Card.Body>
                <Card.Title><i className="bi bi-palette text-accent me-2"></i>Projek Kedua</Card.Title>
                <Card.Text>Projek pengenalan dasar React JS. Berisi modifikasi kode bawaan untuk menampilkan teks 'Hello World' dan pembuatan fitur tombol interaktif sederhana yang angkanya bertambah saat diklik.</Card.Text>
                {/* Link GitHub Projek 2 */}
                <Button className="btn-accent mt-2" href="https://github.com/Rizkika159/Project-Web-Rizkika" target="_blank" rel="noreferrer">
                  Lihat di GitHub <i className="bi bi-github ms-1"></i>
                </Button>
              </Card.Body>
            </Card>
          </Col>

          {/* Projek 3 */}
          <Col lg={4} md={6} className="mb-4">
            <Card className="custom-card h-100">
              <Card.Img variant="top" src={fotoProjek3} style={{borderTopLeftRadius: '15px', borderTopRightRadius: '15px'}} />
              <Card.Body>
                <Card.Title><i className="bi bi-laptop text-accent me-2"></i>Projek Ketiga</Card.Title>
                <Card.Text>Aplikasi dashboard interaktif untuk memonitor dan mengelola data pendanaan/infaq secara pintar dengan visualisasi data yang informatif.</Card.Text>
                {/* Link GitHub Projek 3 */}
                <Button className="btn-accent mt-2" href="https://github.com/Rizkika159/Smart-Infaq-Dashboard" target="_blank" rel="noreferrer">
                  Lihat di GitHub <i className="bi bi-github ms-1"></i>
                </Button>
              </Card.Body>
            </Card>
          </Col>

        </Row>
      </Container>

      {/* --- BAGIAN FOOTER --- */}
      <footer className="text-center py-4 mt-5" style={{ borderTop: '1px solid #333', color: 'var(--text-secondary)' }}>
        <p>© 2026 Rizkika Nabila. Dibuat dengan React & Bootstrap.</p>
      </footer>
    </>
  );
}

export default App;