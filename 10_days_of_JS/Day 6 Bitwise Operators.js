function getMaxLessThanK(n, k) {
    var maximum = 0;
    var current = -1;
    var i,j;
    for (i = 1; i < n; i++) 
    {
        for (j = i + 1; j <= n; j++) 
        {
            current = i & j;
            if (current < k && current > maximum) 
            {
                maximum = current;
            }
        }
    }
    return maximum;
}
