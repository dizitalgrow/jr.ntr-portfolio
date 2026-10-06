const fs = require('fs');
const path = require('path');
const https = require('https');

const outDir = path.join(__dirname, '..', 'public', 'images', 'ntr');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const imagesToDownload = [
  {
    name: 'ntr_interview_aravinda.png',
    url: 'https://upload.wikimedia.org/wikipedia/commons/7/7f/Jr._NTR_at_Interview_for_Aravinda_Sametha.png'
  },
  {
    name: 'ntr_mahanati.png',
    url: 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Jr._NTR_at_Mahanati_Audio_Launch.png'
  },
  {
    name: 'ntr_veera_raghava_event.png',
    url: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Jr._NTR_at_Aravinda_Sametha_Veera_Raghava_interview.png'
  },
  {
    name: 'ntr_with_father_harikrishna.png',
    url: 'https://upload.wikimedia.org/wikipedia/commons/0/0d/Jr_ntr_with_father_Hari_krishna_at_jai_lava_kusha_event.png'
  },
  {
    name: 'ntr_rrr_delhi_promotions.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/f/f0/Photos-Alia-Bhatt-Ram-Charan-Jr.-NTR-and-S.-S.-Rajamouli-snapped-during-their-upcoming-film-RRR-promotions-at-PVR-Plaza-in-New-Delhi-6.jpg'
  },
  {
    name: 'ntr_kapil_sharma_show.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/e/ed/Jr-NTRspotted-promoting-RRR-on-sets-of-The-Kapil-Sharma-Show.jpg'
  },
  {
    name: 'poster_student_no1.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/en/e/eb/Student_No.1.jpg'
  }
];

function download(item) {
  return new Promise((resolve) => {
    const dest = path.join(outDir, item.name);
    // If file exists and > 20KB, skip
    if (fs.existsSync(dest) && fs.statSync(dest).size > 20000) {
      console.log(`[EXISTS] ${item.name} (${(fs.statSync(dest).size / 1024).toFixed(1)} KB)`);
      return resolve();
    }

    const file = fs.createWriteStream(dest);
    const req = https.get(item.url, {
      headers: {
        'User-Agent': 'JrNTRFanArchivalBot/2.0 (education research non-commercial; contact: archivist@gmail.com)',
        'Accept': 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8'
      }
    }, (response) => {
      if (response.statusCode === 200) {
        response.pipe(file);
        file.on('finish', () => {
          file.close(() => {
            const size = fs.statSync(dest).size;
            console.log(`[OK] ${item.name} (${(size / 1024).toFixed(1)} KB)`);
            resolve();
          });
        });
      } else {
        file.close();
        if (fs.existsSync(dest)) fs.unlinkSync(dest);
        console.error(`[FAIL] ${item.name}: status ${response.statusCode}`);
        resolve();
      }
    });
    req.on('error', (err) => {
      if (fs.existsSync(dest)) fs.unlinkSync(dest);
      console.error(`[ERR] ${item.name}: ${err.message}`);
      resolve();
    });
  });
}

async function run() {
  console.log('Downloading high clarity images with rate-limiting...');
  for (const item of imagesToDownload) {
    await download(item);
    await sleep(2200); // 2.2s courteous interval
  }
  console.log('Finished polite downloads.');
}

run();
