function staircase(n) {
var i;
for (i = 1; i <= n; i++) {
    console.log(" ".repeat(n - i) + "#".repeat(i));
    }
}
