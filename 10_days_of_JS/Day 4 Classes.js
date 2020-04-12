class Polygon {
    constructor(side_lengths) {
        var sum_perimeter = 0;
        var i;
        for (i in side_lengths) {
                sum_perimeter += side_lengths[i];
        }
        this.my_perimeter = sum_perimeter;
    }
        perimeter() {
        return this.my_perimeter;
        }
}
