def nb_year(p0, percent, aug, p, count = 0):
    if (p0 >= p):
        return count
    else:
        count += 1
        pop = p0 + p0 * (percent/100) + aug
        return nb_year(pop, percent, aug, p, count)


print("First", nb_year(1500, 5, 100, 5000))
print("Second", nb_year(1500000, 2.5, 10000, 2000000))
print("Third", nb_year(1500000, 0.25, 1000, 2000000))
