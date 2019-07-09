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
        label: 'Masculino',
        backgroundColor: '#f87979',
        data: [10, 36, 24, 36, 19, 10] 
    },
    {
        label: 'Feminino',
        backgroundColor: '#f87900',
        data: [20, 40, 50, 10, 2, 3] 
    }
];

const ProductsByGender = {
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

export default ProductsByGender;