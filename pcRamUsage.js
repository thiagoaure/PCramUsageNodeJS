const os = require('os');

setInterval(() => {
    const { arch, platform, totalmem, freemem} = os;
    const tRam = totalmem()/1024/1024;
    const fRam = freemem()/1024/1024;
    const usage = fRam / tRam * 100;

    const stats = {
        OS: platform(),
        ARCH: arch(),
        TOTALRAM: `${parseInt(tRam)} MB`,
        FREERAM: `${parseInt(fRam)} MB`,
        USAGE: `${usage.toFixed(2)}%`
    }
    console.clear()
    console.table(stats);
    exports.stats = stats;

}, 1000)