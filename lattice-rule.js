// lattice-rule.js

// Generate the points of a rank-1 lattice
// with generating vector z and number of points n.
function r1lr(z, n)
{
    return Array.from(new Array(n), (_, i) => z.map(zj => (i * zj) % n));
}

function divmap(a, n)
{
    return a.map(x => x/n);
}

// This is a CommonJS module, and therefore there is
// floating around `module.exports` already:
module.exports = { r1lr, divmap };
// Note that there is also an `exports` which references
// `module.exports` but if you assign to `exports` then
// you just reassign that variable and `module.exports`
// will still point to its original value...