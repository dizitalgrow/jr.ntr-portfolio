const fs = require('fs');
const path = require('path');
const https = require('https');

const outDir = path.join(__dirname, '..', 'public', 'images', 'ntr');
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const items = [
  {
    name: 'poster_devara.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/en/f/f0/Devara_Part_1.jpg'
  },
  {
    name: 'poster_simhadri.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/en/b/b4/Simhadri_2003_DVD_Cover_art.jpg'
  },
  {
    name: 'poster_yamadonga.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/en/3/39/Yamadonga.jpg'
  },
  {
    name: 'poster_aravinda.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/en/d/d7/Aravinda_Sametha_Veera_Raghava.jpg'
  },
  {
    name: 'ntr_devara_press.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/3/3f/Jr-NTR-snapped-promoting-Devara.jpg'
  },
  {
    name: 'ntr_war2_look.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/1/11/NTR.Jr_on_the_sets_of_War_2.jpg'
  }
];

function download(item) {
  return new Promise((resolve) => {
    const dest = path.join(outDir, item.name);
    const file = fs.createWriteStream(dest);
    const req = https.get(item.url, {
      headers: {
        'User-Agent': 'JrNTRFanArchivalBot/3.0 (education non-commercial; contact: collector@gmail.com)'
      }
    }, (res) => {
      if (res.statusCode === 200) {
        res.pipe(file);
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
        console.error(`[FAIL] ${item.name}: status ${res.statusCode}`);
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
  console.log('Downloading posters & press photos...');
  for (const item of items) {
    await download(item);
    await sleep(2500);
  }
  console.log('Done.');
}

run();
