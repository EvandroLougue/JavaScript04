function recursiva(max) {
    if (max >= 99) return;
    max++;
    console.log(max);
    recursiva(max);
};

recursiva(1);