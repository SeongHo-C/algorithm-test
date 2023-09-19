function solution(today, terms, privacies) {
    const answer = [];
    const objTerms = {};
    today = new Date(today);

    for (const term of terms) {
        const [kind, month] = term.split(' ');
        objTerms[kind] = Number(month);
    }

    privacies.forEach((privacy, idx) => {
        const [date, kind] = privacy.split(' ');
        const newDate = new Date(date);

        newDate.setMonth(newDate.getMonth() + objTerms[kind]);
        if (newDate <= today) answer.push(idx + 1);
    });

    return answer;
}

console.log(
    solution(
        '2022.05.19',
        ['A 6', 'B 12', 'C 3'],
        ['2021.05.02 A', '2021.07.01 B', '2022.02.19 C', '2022.02.20 C']
    )
);
