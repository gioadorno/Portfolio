export default (mapData = [], action) => {
    switch (action.type) {
        case 'UPDATE':
            return mapData.map((prop) => prop._id == action.payload._id ? action.payload : prop)
        case 'fetch':
            return action.payload;
        case 'create':
            return [...mapData, action.payload];
        default:
            return mapData;
    }
};

