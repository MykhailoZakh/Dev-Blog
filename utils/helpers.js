module.exports = {
    format_time: (date) => {
        // let formatedDate = new Date(date);
        // formatedDate.setFullYear(formatedDate.getFullYear());
        // console.log(formatedDate.toLocaleDateString());
        return date.toLocaleDateString();
    }
};