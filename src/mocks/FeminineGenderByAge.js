const FaixasMock = [
    '5 a 15 anos',
    '16 a 22 anos',
    '23 a 27 anos',
    '28 a 39 anos',
    'acima de 34 anos'
];

const GenderDataMock = [
    {
        label: "Feminino",
        backgroundColor: [
            '#187900',
            '#a87900',
            '#f82000',
            '#f87990',
            '#f87900',
        ],
        data: [1, 13, 18, 26, 9] 
    },
];

const FeminineGenderByAge = {
    data: {
        labels: FaixasMock,
        backgroundColor: '#f87979',
        datasets: 
            GenderDataMock.map(gender => (
                {
                    data: gender.data,
                    label: gender.label,
                    backgroundColor: gender.backgroundColor
                }
            )
        )
    },
    options: {
        legend: {
            labels: {
                fontColor: '#f87979',
                fontFamily: 'Montserrat'
            }
        }   
    }
};

export default FeminineGenderByAge;