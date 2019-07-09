const ProductsMock = [  
    "Linguicinha de Pernil",
    "Coca Cola 200 ML Zero",
    "Refil de Refrigerante",
    "Hamburguer de Picanha",
    "Salada Light",
    "Tropeirão Veggie"
];

const faixas = [
    {
        label: '5 a 15 anos',
        backgroundColor: '#f87979',
        data: [10, 46, 24, 36, 19] 
    },
    {
        label: '16 a 22 anos',
        backgroundColor: '#f87900',
        data: [10, 16, 28, 6, 9] 
    },
    {
        label: '23 a 27 anos',
        backgroundColor: '#007129',
        data: [30, 26, 34, 16, 9] 
    },
    {
        label: '28 a 39 anos',
        backgroundColor: '#127979',
        data: [50, 46, 23, 12, 5, 3] 
    },
    {
        label: 'acima de 34 anos',
        backgroundColor: '#231979',
        data: [0, 0, 1, 2, 4, 0] 
    }
];

const ProductsByAge = {
    data: {
        labels: ProductsMock,
        backgroundColor: '#f87979',
        datasets: 
            faixas.map((faixa) => {
                return (
                    {
                        label: faixa.label,
                        backgroundColor: faixa.backgroundColor,
                        data: faixa.data
                    }
                );
            })
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

export default ProductsByAge;