import { createSelector } from 'reselect';

const getProducts = (state) => {
    return state.products.products;
};

const getFilters = (state) => {
    return state.products.filters;
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
        const prices = products.map((product) => {
            return product.price;
        });
        return prices.sort();
    }
);

export const orderProductsByPriceDesc = createSelector(
    [getProducts],
    (products) => {
        const prices = products.map((product) => {
            return product.price;
        });
        return prices.sort().reverse();
    }
);

export const getClothing = createSelector(
    [getProducts],
    (products) => {
        const clothing = products.map((product) => {
            return product.clothing;
        });
        return clothing.filter((item, index, array) => array.indexOf(item) == index);
    }
);

export const getColor = createSelector(
    [getProducts],
    (products) => {
        let colors = [];
        products.forEach((product) => {
            colors = colors.concat(product.colors);
        });
        console.log(colors);
        return colors.filter((item, index, array) => array.indexOf(item) == index);
    }
);

export const filteredProducts = createSelector(
    [getProducts, getFilters],
    (products, filters) => {
        if (filters.length === 0) {
            return products;
        } else {
            let filteredArray = products.filter((product) => {
                if(filters.includes(product.brandName)) {
                    return product;
                }
            });
            return filteredArray;
        }
    }
);