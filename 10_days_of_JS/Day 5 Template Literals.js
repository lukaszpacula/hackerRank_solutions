function sides(literals, ...expressions) {
    var [a, p] = expressions;
    var root = Math.sqrt((p*p)-(16*a))
    var s1 = (p + root)/4;
    var s2 = (p - root)/4;
    return ([s2, s1]);
}
