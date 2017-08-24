import { createSelector } from 'reselect';

const getProducts = (state) => {
    return state.products;
};

export const getBrands = createSelector(
    [getProducts],
    (products) => {
        const brands = products.map((product) => {
            return product.brandName;
        });
        return brands.filter((item, index, array) => array.indexOf(item) == index);
    }
);

export const orderProductsByPriceAsc = createSelector(
    [getProducts],
    (products) => {
        return products.sort();
    }
);