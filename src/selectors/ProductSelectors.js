import { createSelector } from 'reselect';

const getProducts = (state) => {
    return state.products.products;
};

const getFilters = (state) => {
    return state.products.filters;
};

const getSortType = (state) => {
    return state.products.sorting;
}

export const getBrands = createSelector(
    [getProducts],
    (products) => {
        const brands = products.map((product) => {
            return product.brandName;
        });
        return brands.filter((item, index, array) => array.indexOf(item) == index);
    }
);

export const getPrice = createSelector(
    [getProducts],
    (products) => {
        const prices = products.map((product) => {
            return product.price;
        });
        return prices;
    }
);

export const sortedProducts = createSelector(
    [getProducts],
    (products, sortKey) => {
        let sortedProducts = sortProducts(products, sortKey);
        return sortedProducts;
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
        return colors.filter((item, index, array) => array.indexOf(item) == index);
    }
);

export const filteredProducts = createSelector(
    [getProducts, getFilters, getSortType],
    (products, filters, sortType) => {
        let filteredArray = [];
        if (filters.length === 0) {
            filteredArray = products;
        } else {
            filteredArray = products.filter((product) => {
                if(filters.includes(product.brandName)) {
                    return product;
                }
                if(filters.includes(product.clothing)) {
                    return product;
                }
                if(filters.some(r=> product.colors.includes(r))) {
                    return product;
                }
            });
        }
        const myArray = filteredArray.sort((a, b) => {
            if(sortType === "priceAsc") {
                return a.price > b.price ? 1 : a.price < b.price ? -1 : 0;
            } else {
                return a.price > b.price ? -1 : a.price < b.price ? 1 : 0;
            }
        });
        console.log(myArray);
        return myArray;
    }
);