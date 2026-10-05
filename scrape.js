const https = require('https');
const fs = require('fs');

https.get('https://portfolio-flame-mu-94.vercel.app/', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    // Find the JS files
    const matches = [...data.matchAll(/src="(\/assets\/index-[^"]+\.js)"/g)];
    if (matches.length > 0) {
      const jsUrl = 'https://portfolio-flame-mu-94.vercel.app' + matches[0][1];
      https.get(jsUrl, (res2) => {
         let js = '';
         res2.on('data', chunk => js += chunk);
         res2.on('end', () => {
           // extract class names
           const classes = js.match(/className:"[^"]+"/g) || [];
           fs.writeFileSync('classes.txt', classes.join('\n'));
           console.log('Successfully saved classes.');
         });
      });
    } else {
      console.log('No JS bundle found.');
    }
  });
});
