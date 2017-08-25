import { SET_FILTER_DESIGNER } from '../actions/filtersActions';

const inititalState = {
    products: [
    {
        "id": 1,
        "imageUrl": "../../../assets/assets/img/ecommerce5.jpg",
        "brandName": "Gucci",
        "text": "Beautifully tailored from rich burgundy velvet, this impeccable piece has lustrous black satin lining and smart satin-covered buttons.",
        "price": 1299,
        "oldPrice": 1599,
        "clothing": "Suit",
        "colors": ["Black", "Burgundy"]
    },
    {
        "id": 2,
        "imageUrl": "../../../assets/assets/img/ecommerce6.jpg",
        "brandName": "Cannali",
        "text": "The structured shoulders and sleek detailing ensure a sharp silhouette. Team it with a silk pocket square and leather loafers.",
        "price": 1099,
        "oldPrice": 1199,
        "clothing": "Suit",
        "colors": ["Black", "Brown"]
    },
    {
        "id": 3,
        "imageUrl": "../../../assets/assets/img/ecommerce7.jpg",
        "brandName": "Cannali",
        "text": "The smooth woven-wool is water resistant to ensure you stay pristine after a long-haul flight. Cut in a trim yet comfortable regular fit.",
        "price": 1899,
        "oldPrice": 2199,
        "clothing": "Suit",
        "colors": ["Black", "Blue"]
    },
    {
        "id": 4,
        "imageUrl": "../../../assets/assets/img/ecommerce8.jpg",
        "brandName": "Lutwyche",
        "text": "Blue check wool and cashmere-blend blazer",
        "price": 799,
        "clothing": "Jacket",
        "colors": ["Blue"]
    },
    {
        "id": 5,
        "imageUrl": "../../../assets/assets/img/ecommerce9.jpg",
        "brandName": "Cannali",
        "text": "Blue water-resistant wool travel blazer",
        "price": 699,
        "oldPrice": 799,
        "clothing": "Jacket",
        "colors": ["Black", "Blue"]
    },
    {
        "id": 6,
        "imageUrl": "../../../assets/assets/img/product-page5.jpg",
        "brandName": "Lutwyche",
        "text": "Brown check wool and cashmere-blend blazer",
        "price": 399,
        "oldPrice": 499,
        "clothing": "Jacket",
        "colors": ["Brown"]
    }
    ],
    filters: []
};

export function productReducer(state = inititalState, action) {
    switch (action.type) {
        case SET_FILTER_DESIGNER:
            if (action.payload.checked) {
                return {
                    ...state,
                    filters:
                        [...state.filters, action.payload.value]
                }
            } else {
                const filtersArray = state.filters;
                const index = filtersArray.indexOf(action.payload.value);
                filtersArray.splice(index, 1);
                return {
                    ...state,
                    filters: filtersArray
                }
            }
    };
    return state;
}