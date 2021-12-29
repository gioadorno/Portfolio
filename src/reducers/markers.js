export default (marker = [], action) => {
    switch (action.type) {
        case 'UPDATEMARKERS':
            return marker.map((prop) => prop._id == action.payload._id ? action.payload : prop)
        case 'GETMARKERS':
            return action.payload;
        case 'CREATEMARKER':
            return [...marker, action.payload]
        default:
            return marker;
    }
};

