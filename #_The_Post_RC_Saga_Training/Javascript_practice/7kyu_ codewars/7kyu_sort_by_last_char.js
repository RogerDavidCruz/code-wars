// 7 kyu - Sort by Last Char

const last = x => x.split(' ').sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1));
