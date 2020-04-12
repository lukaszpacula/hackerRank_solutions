function getCount(objects) {
    var count = 0;
    var i;
    for (i in objects) {
        if (objects[i].x == objects[i].y) {
            count++;
        }
    }
    return count;
}
